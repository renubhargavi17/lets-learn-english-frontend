import React from "react";

import arabic from "../../assets/logo/arabic.svg"
import french from '../../assets/logo/french.svg'
import spanish from "../../assets/logo/spanish.svg"
import mandarin from "../../assets/logo/mandarin.svg"
import "../Language/Language.scss"


function Language() {
  return (
    <section className="languageTitlePage">
      <h2 className="heading">WHAT LANGUAGE DO YOU SPEAK?</h2>
      <div className="languages">
        <div className="french">

        <img  src={french} alt="Bonjour greetings"  className="logo"/>
            <h3 className="frenchTitle">French</h3>
        </div>
        <div className="spanish">
        <img  src={spanish} alt="Spanish greetings" className="logo" />
            <h3 className="spanishTitle">Spanish</h3>
        </div>
        <div className="arabic">
        <img  src={arabic}  alt="Arabic greetings" className="logo" />
            <h3 className="arabicTitle">Arabic</h3>
        </div>
        <div className="mandarin">
        <img  src={mandarin} alt="Mandarin greetings"className="logo" />
            <h3 className="mandarinTitle">Mandarin</h3>

        </div>
      </div>
    </section>
  );
}

export default Language;
