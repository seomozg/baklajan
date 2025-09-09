import React, { useEffect, useState } from "react";
import './Admin.scss';

export default function Admin() {
  const [allJobs, setAllJobs] = useState({ en: [], ru: [] });
  const [currentLang, setCurrentLang] = useState('ru');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/content-all")
      .then(res => res.json())
      .then(data => {
        setAllJobs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка загрузки:', error);
        setLoading(false);
      });
  }, []);

  const jobs = allJobs[currentLang] || [];

  const updateCurrentJobs = (updatedJobs) => {
    setAllJobs(prev => ({
      ...prev,
      [currentLang]: updatedJobs
    }));
  };

  const handleChange = (index, field, value) => {
    const updatedJobs = [...jobs];
    updatedJobs[index][field] = value;
    updateCurrentJobs(updatedJobs);
  };

  const handleArrayChange = (index, field, subIndex, value) => {
    const updatedJobs = [...jobs];
     if (value.trim() === "") {
      // если поле пустое — удаляем его
      updatedJobs[index][field].splice(subIndex, 1);
    } else {
      updatedJobs[index][field][subIndex] = value;
    }
    updateCurrentJobs(updatedJobs);
  };

  const addArrayItem = (index, field) => {
    const updatedJobs = [...jobs];
    updatedJobs[index][field].push("");
    updateCurrentJobs(updatedJobs);
  };

  const save = () => {
    // Очищаем текущие вакансии от пустых строк
    const cleanedCurrentJobs = jobs.map(job => ({
      ...job,
      responsibilities: job.responsibilities.filter(item => item.trim() !== ""),
      requirements: job.requirements.filter(item => item.trim() !== ""),
      offer: job.offer.filter(item => item.trim() !== "")
    }));

    // Обновляем состояние с очищенными данными
    const dataToSave = {
      ...allJobs,
      [currentLang]: cleanedCurrentJobs
    };

    fetch("/api/content-all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSave, null, 2),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert(`✅ Вакансии сохранены успешно! (${data.message})`);
        setAllJobs(dataToSave); // Обновляем локальное состояние
      }
    })
    .catch(error => {
      alert('❌ Ошибка при сохранении: ' + error.message);
    });
  };

  const addJob = () => {
    const newJob = {
      id: Date.now(), // уникальный id (можно заменить на uuid)
      title: "",
      description: "",
      responsibilities: [""],
      requirements: [""],
      offer: [""],
      additionalText: ""
    };

    updateCurrentJobs([...jobs, newJob]);
  };

  const removeJob = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    updateCurrentJobs(updatedJobs);
  };


  if (loading) return <p>Загрузка...</p>;

  return (
    <section className="admin">
			<div className="container">
    <div>
      <div className="admin-header">
        <h1 className="text-xl font-bold">Админка вакансий</h1>
        
        <div className="language-switcher">
          <button 
            className={`lang-btn ${currentLang === 'ru' ? 'active' : ''}`}
            onClick={() => setCurrentLang('ru')}
          >
            🇷🇺 Русский ({allJobs.ru?.length || 0})
          </button>
          <button 
            className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
            onClick={() => setCurrentLang('en')}
          >
            🇺🇸 English ({allJobs.en?.length || 0})
          </button>
        </div>
      </div>

      {jobs.map((job, index) => (
        <div key={job.id} className="form-group">
          <input
            className="input"
            value={job.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            placeholder="Название"
          />
          <textarea
            className="textarea"
            value={job.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            placeholder="Описание"
          />

          {["responsibilities", "requirements", "offer"].map((field) => (
            <div key={field}>
              <h3 className="font-semibold">{field}</h3>
              {job[field].map((item, subIndex) => (
                <input
                  key={subIndex}
                  className="input"
                  value={item}
                  onChange={(e) =>
                    handleArrayChange(index, field, subIndex, e.target.value)
                  }
                />
              ))}
              <button
                className="submit-button"
                onClick={() => addArrayItem(index, field)}
              >
                + Добавить
              </button>
            </div>
          ))}

          <textarea
            className="textarea"
            value={job.additionalText}
            onChange={(e) =>
              handleChange(index, "additionalText", e.target.value)
            }
            placeholder="Доп. текст"
          />
          <button
  className="submit-button"
  onClick={() => removeJob(index)}
>
  ❌ Удалить вакансию
</button>
        </div>
      ))}
      <div>
        <button
  className="submit-button"
  onClick={addJob}
>
  ➕ Добавить вакансию
</button>
      </div>

  <button
        className="submit-button"
        onClick={save}
      >
        💾 Сохранить
      </button>
    </div>
    </div></section>
  );
}
