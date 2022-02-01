import React from "react";
import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";
import './App.css';

export default function App() {

  const [phrase, setPhrase] = React.useState([]);

  const generateWord = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  function renderPhrase() {
    const firstAdjective = generateWord(adjectivesArr);
    const secondAdjective = generateWord(adjectivesArr);
    const randomNouns = generateWord(nounsArr);
    const randomPhrase = `${firstAdjective} ${secondAdjective} ${randomNouns}`;
    setPhrase([randomPhrase, ...phrase]);
  }

  function clearPhrase() {
    setPhrase([]);
  }

  return (
    <div id="app">
      <div className="wrapper">
        <div className="list">
          {phrase.length > 0 ? (
            phrase.map((value, index) => (
              <Phrase key={index} text={phrase[index]} />
            ))
          ) : (
            <EmptyBlock />
          )}
        </div>
        <button className="btn btn_generate" onClick={renderPhrase}>Сгенерировать</button>
        <button className="btn btn_clear" onClick={clearPhrase}>Очистить</button>
      </div>
    </div>
  );
}

const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый"
];

const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак"
];