import os
from flask import Flask, render_template, request, send_file
import pdfplumber
from docx import Document
from werkzeug.utils import secure_filename
import google.generativeai as genai
from fpdf import FPDF  
from flask_cors import CORS

os.environ["GOOGLE_API_KEY"] = "AIzaSyDZ-pslB-G9Sf3xTXw18j38yEH2ea52_JY"
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel("models/gemini-1.5-pro")

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['ALLOWED_EXTENSIONS'] = {'pdf', 'txt', 'docx'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def extract_text_from_file(file_path):
    ext = file_path.rsplit('.', 1)[1].lower()
    if ext == 'pdf':
        with pdfplumber.open(file_path) as pdf:
            text = ''.join([page.extract_text() for page in pdf.pages])
        return text
    elif ext == 'docx':
        doc = Document(file_path)
        text = ' '.join([para.text for para in doc.paragraphs])
        return text
    elif ext == 'txt':
        with open(file_path, 'r') as file:
            return file.read()
    return None

def Question_mcqs_generator(input_text, num_questions):
    prompt = f"""
    You are an AI assistant helping the user generate multiple-choice questions (MCQs) based on the following text:
    '{input_text}'
    Please generate {num_questions} MCQs from the text. Each question should have:
    - A clear question
    - Four answer options (labeled A, B, C, D)
    - The correct answer clearly indicated
    Format:
    ## MCQ
    Question: [question]
    A) [option A]
    B) [option B]
    C) [option C]
    D) [option D]
    Correct Answer: [correct option]
    """
    response = model.generate_content(prompt).text.strip()
    print(response)
    return response

@app.route('/generate-mcqs', methods=['POST'])
def generate_mcqs():
    print("entered starting")
    data = request.get_json()
    text = data.get('text')
    num_questions = int(data.get('num_questions'))
    mcqs = Question_mcqs_generator(text, num_questions)
    return {"mcqs": mcqs}

if __name__ == "__main__":
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])
    app.run(debug=True, port=5003)