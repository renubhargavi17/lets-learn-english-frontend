import React from "react";
// import arabic from "../../assets/arabic.jpeg"
// import bonjour from '../../assets/bonjour.jpeg'
// import hola from "../../assets/hola.png"
// import mandarin from "../../assets/mandarin.jpeg"
import "../Language/Language.scss";
import { useNavigate } from "react-router-dom";

import arabic from "../../assets/logo/arabic.svg"
import french from '../../assets/logo/french.svg'
import spanish from "../../assets/logo/spanish.svg"
import mandarin from "../../assets/logo/mandarin.svg"
import "../Language/Language.scss"


function Language({ setLanguage }) {
  const navigate = useNavigate();
  return (
    <section className="languageTitlePage">
      <h2 className="heading">WHAT LANGUAGE DO YOU SPEAK?</h2>
      <div className="languages">
        <div
          className="french"
          onClick={() => {
            setLanguage("french");
            navigate("/difficulty");
          }}
        >
          {/* <img  src={bonjour} alt="Bonjour greetings" /> */}
          <h3 className="frenchTitle">French</h3>
        </div>
        <div
          className="spanish"
          onClick={() => {
            setLanguage("spanish");
            navigate("/difficulty");
          }}
        >
          {/* <img  src={hola} alt="Spanish greetings" /> */}
          <h3 className="spanishTitle">Spanish</h3>
        </div>
        <div
          className="arabic"
          onClick={() => {
            setLanguage("arabic");
            navigate("/difficulty");
          }}
        >
          {/* <img  src={arabic}  alt="Arabic greetings" /> */}
          <h3 className="arabicTitle">Arabic</h3>
        </div>
        <div
          className="mandarin"
          onClick={() => {
            setLanguage("mandarin");
            navigate("/difficulty");
          }}
        >
          {/* <img  src={mandarin} alt="Mandarin greetings" /> */}
          <h3 className="mandarinTitle">Mandarin</h3>
        </div>
      </div>
    </section>
  );
}

export default Language;
