import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const filePathEn = "./src/data/jobs.json";
const filePathRu = "./src/data/jobs-ru.json";

// Получить вакансии по языку
app.get("/api/content/:lang?", (req, res) => {
  const lang = req.params.lang || 'en';
  const filePath = lang === 'ru' ? filePathRu : filePathEn;
  
  try {
    const data = fs.readFileSync(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Ошибка чтения файла' });
  }
});

// Получить все языки одновременно
app.get("/api/content-all", (req, res) => {
  try {
    const dataEn = fs.readFileSync(filePathEn, "utf8");
    const dataRu = fs.readFileSync(filePathRu, "utf8");
    res.json({
      en: JSON.parse(dataEn),
      ru: JSON.parse(dataRu)
    });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка чтения файлов' });
  }
});

// Сохранить вакансии для определённого языка
app.post("/api/content/:lang", (req, res) => {
  const lang = req.params.lang;
  const filePath = lang === 'ru' ? filePathRu : filePathEn;
  
  try {
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.json({ success: true, message: `Вакансии для ${lang} сохранены` });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сохранения файла' });
  }
});

// Сохранить все языки одновременно
app.post("/api/content-all", (req, res) => {
  try {
    const { en, ru } = req.body;
    if (en) {
      fs.writeFileSync(filePathEn, JSON.stringify(en, null, 2));
    }
    if (ru) {
      fs.writeFileSync(filePathRu, JSON.stringify(ru, null, 2));
    }
    res.json({ success: true, message: 'Все языки сохранены' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сохранения файлов' });
  }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
