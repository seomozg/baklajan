import React, { useEffect, useState } from "react";
import './Admin.scss';

export default function Admin() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/content")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (index, field, value) => {
    const updatedJobs = [...jobs];
    updatedJobs[index][field] = value;
    setJobs(updatedJobs);
  };

  const handleArrayChange = (index, field, subIndex, value) => {
    const updatedJobs = [...jobs];
     if (value.trim() === "") {
      // если поле пустое — удаляем его
      updatedJobs[index][field].splice(subIndex, 1);
    } else {
      updatedJobs[index][field][subIndex] = value;
    }
    setJobs(updatedJobs);
  };

  const addArrayItem = (index, field) => {
    const updatedJobs = [...jobs];
    updatedJobs[index][field].push("");
    setJobs(updatedJobs);
  };

  const save = () => {
    const cleanedJobs = jobs.map(job => ({
      ...job,
      responsibilities: job.responsibilities.filter(item => item.trim() !== ""),
      requirements: job.requirements.filter(item => item.trim() !== ""),
      offer: job.offer.filter(item => item.trim() !== "")
    }));

    fetch("http://localhost:4000/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanedJobs, null, 2),
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

    setJobs([...jobs, newJob]);
  };

  const removeJob = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    setJobs(updatedJobs);
  };


  if (loading) return <p>Загрузка...</p>;

  return (
    <section className="admin">
				<div className="container">
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">Админка вакансий</h1>

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
