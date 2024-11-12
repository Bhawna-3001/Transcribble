from flask import Flask, request, jsonify
from transformers import pipeline, AutoTokenizer, AutoModelForSeq2SeqLM
from langdetect import detect
import torch
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

device = 0 if torch.cuda.is_available() else -1

model = AutoModelForSeq2SeqLM.from_pretrained("facebook/nllb-200-distilled-600M")
tokenizer = AutoTokenizer.from_pretrained("facebook/nllb-200-distilled-600M")

lang_code_map = {
    'ta': 'tam_Taml',  # Tamil
    'en': 'eng_Latn',  # English
    'hi': 'hin_Deva',  # Hindi
    'pr': 'pes_Arab',  # Western Persian
    'pa': 'pan_Guru',  # Punjabi
    'te': 'tel_Telu',  # Telugu
    'mr': 'mar_Deva',  # Marathi
    'bn': 'ben_Beng',  # Bengali
}

# Initialize the translation pipeline
translator_pipeline = pipeline(
    'translation', 
    model=model, 
    tokenizer=tokenizer, 
    max_length=400, 
    device=device, 
    clean_up_tokenization_spaces=True
)

@app.route('/translate', methods=['POST'])
def translate_text():
    try:
        # Get input text from the request
        data = request.json
        text = data.get('text', '')

        if not text:
            return jsonify({'error': 'No text provided for translation'}), 400

        # Detect the source language
        detected_lang = detect(text)
        src_lang_code = lang_code_map.get(detected_lang, 'eng_Latn')  

        # Translate the text
        target_lang_code = 'eng_Latn' 
        translated = translator_pipeline(text, src_lang=src_lang_code, tgt_lang=target_lang_code)
        translated_text = translated[0]['translation_text']

        return jsonify({'translatedText': translated_text}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)

