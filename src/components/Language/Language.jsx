import React from "react";
// import arabic from "../../assets/arabic.jpeg"
// import bonjour from '../../assets/bonjour.jpeg'
// import hola from "../../assets/hola.png"
// import mandarin from "../../assets/mandarin.jpeg"
import "../Language/Language.scss";

function Language() {
  return (
    <section className="languageTitlePage">
      <h2 className="heading">WHAT LANGUAGE DO YOU SPEAK?</h2>
      <div className="languages">
        <div className="french">
          {/* <img  src={bonjour} alt="Bonjour greetings" /> */}
          <h3 className="frenchTitle">French</h3>
        </div>
        <div className="spanish">
          {/* <img  src={hola} alt="Spanish greetings" /> */}
          <h3 className="spanishTitle">Spanish</h3>
        </div>
        <div className="arabic">
          {/* <img  src={arabic}  alt="Arabic greetings" /> */}
          <h3 className="arabicTitle">Arabic</h3>
        </div>
        <div className="mandarin">
          {/* <img  src={mandarin} alt="Mandarin greetings" /> */}
          <h3 className="mandarinTitle">Mandarin</h3>
        </div>
      </div>
    </section>
  );
}

export default Language;
