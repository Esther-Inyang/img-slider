import React, { useState } from "react";
import "./index.css";
import peopleData from "./data";
import { FaCaretRight, FaCaretLeft, FaPeopleArrows } from "react-icons/fa";

function App() {
  const [people, setPeople] = useState(peopleData);
  const [index, setIndex] = useState(0);
  const { id, image, name, title, quote } = people[index];

  const checkNum = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const nextBtn = () => {
    setIndex((index) => checkNum(index + 1));
  };

  const prevBtn = () => {
    setIndex((index) => checkNum(index - 1));
  };

  return (
    <main className="main-container">
      <section className="slider-section">
        <h1 className="page-title"> La-veta Project </h1>
        <div className="slider-container">
          <article key={id}>
            <img src={image} alt={name} className="person-img" />
            <h1 className="name">{name}</h1>
            <p className="title">{title}</p>
            <p className="quote">{quote}</p>
            <FaPeopleArrows className="people-icon" />
            <p className="team">team-A</p>
          </article>
        </div>

        <div className="button-container">
          <button onClick={prevBtn} className="prev-btn">
            <FaCaretLeft className="prev-icon" />
          </button>
          <button onClick={nextBtn} className="next-btn">
            <FaCaretRight className="next-icon" />
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
