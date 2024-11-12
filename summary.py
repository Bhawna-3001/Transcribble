from flask import Flask, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai
from youtube_transcript_api import YouTubeTranscriptApi
import os
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  #  CORS for React integration
load_dotenv()

# Configure GenAI API
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

prompt = "You are a YouTube video summarizer. Provide the transcript text in 2000 words: "

def generate_gemini_content(transcript_text, prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt + transcript_text)
    return response.text

def extract_transcript_details(youtube_video_url):
    try:
        # Extract video ID from the URL
        video_id = youtube_video_url.split("=")[1]
        transcript_text = YouTubeTranscriptApi.get_transcript(video_id)
        transcript = " ".join([item["text"] for item in transcript_text])
        return transcript
    except Exception as e:
        raise e

@app.route('/summary', methods=['POST'])
def summary():
    try:
        data = request.json
        youtube_link = data.get('youtubeLink')
        
        if not youtube_link:
            return jsonify({'error': 'YouTube link is required'}), 400

        # Extract transcript details
        try:
            transcript_text = extract_transcript_details(youtube_link)
            if not transcript_text:
                return jsonify({'error': 'No transcript available for this video'}), 404
        except Exception as e:
            return jsonify({'error': f'Failed to fetch transcript: {str(e)}'}), 500
        
        # Generate detailed notes using Gemini AI
        try:
            detailed_notes = generate_gemini_content(transcript_text, prompt)
        except Exception as e:
            return jsonify({'error': f'Failed to generate detailed notes: {str(e)}'}), 500

        return jsonify({
            'transcript': transcript_text,
            'detailedNotes': detailed_notes
        }), 200

    except Exception as e:
        return jsonify({'error': f'Unexpected error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5004)
