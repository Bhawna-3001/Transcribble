import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './database/db.js';
import cors from 'cors';
import axios from 'axios';
import multer from 'multer';
import fs from 'fs';
import pdf from 'pdf-parse-fork';

dotenv.config();
const app = express();
const port=process.env.PORT || 5000;
app.use(express.json())
app.use(cors());

//-------translation-------------------

// const lang_code_map = {
//   'ta': 'tam_Taml',
//   'en': 'eng_Latn',
//   'hi': 'hin_Deva',
//   'pr': 'pes_Arab',
//   'pa': 'pan_Guru',
//   'te': 'tel_Telu',
//   'mr': 'mar_Deva',
//   'bn': 'ben_Beng',
// };

//------------------******----------------------

app.get("/",(req,res)=>{
    res.send("server is running");
});


app.post('/translate', async (req, res) => {
  try {
    const { text } = req.body;
    const flaskResponse = await axios.post('http://localhost:5001/translate', { text });
    res.json(flaskResponse.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/generate_notes', async (req, res) => {
  try {
    const { youtubeLink } = req.body;

    // Forward the request to the Flask backend
    const flaskResponse = await axios.post('http://localhost:5002/generate_notes', {
      youtubeLink,
    });

    res.json(flaskResponse.data);
  } catch (error) {
    console.error("Error in transcription route:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post('/summary', async (req, res) => {
  try {
    const { youtubeLink } = req.body;

    // Forward the request to the Flask backend
    const flaskResponse = await axios.post('http://localhost:5004/summary', {
      youtubeLink,
    });
    // console.log("hiii: ",flaskResponse.data);
    res.json(flaskResponse.data);
  } catch (error) {
    console.error("Error in transcription route:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/generate-mcqs', upload.single('file'), async (req, res) => {
  try {
    console.log('Uploaded file path:', req.file.path);
    const filePath = req.file.path; // Path to the uploaded file
    const numQuestions = req.body.num_questions;

    // Check file existence before processing
    if (!fs.existsSync(filePath)) {
      throw new Error('Uploaded file does not exist.');
    }

    const fileContent = fs.readFileSync(filePath);
    const pdfText=await pdf(fileContent);

    console.log(fileContent)
    const flaskResponse = await axios.post('http://localhost:5003/generate-mcqs', {
      text: pdfText.text, // Use the file content as text
      num_questions: numQuestions,
    });

    res.json(flaskResponse.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post('/sign-language/translate', async (req, res) => {
  try {
    const { sentence } = req.body; // The text input for translation
    const djangoResponse = await axios.post('http://127.0.0.1:8000/animation/', {
      sen: sentence,
    });

    res.json(djangoResponse.data); // Forward Django's response to the frontend
  } catch (error) {
    console.error("Error in Sign Language translation:", error.message);
    res.status(500).json({ error: error.message });
  }
});

//importing routes
import userRoutes from './routes/user.js'
import courseRoutes from './routes/course.js'
import adminRoutes from "./routes/admin.js";

//using routes
app.use('/api', userRoutes);
app.use('/api', courseRoutes);
app.use('/api', adminRoutes);

app.listen(port,()=>{
    console.log("server is running");
    connectDb();
});


