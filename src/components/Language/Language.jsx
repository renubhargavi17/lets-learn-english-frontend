import React from "react";
import { useNavigate } from "react-router-dom";
import arabic from "../../assets/logo/arabic.svg";
import french from '../../assets/logo/french.svg';
import spanish from "../../assets/logo/spanish.svg";
import mandarin from "../../assets/logo/mandarin.svg";
import "../Language/Language.scss";

function Language({ setLanguage }) {
    const navigate = useNavigate();
    return (
        <section className="languageTitlePage">
            <h2 className="heading">WHAT LANGUAGE DO YOU SPEAK?</h2>
            <div className="languages">
                <div
                    className="languageCard french"
                    onClick={() => {
                        setLanguage("french");
                        navigate("/difficulty");
                    }}
                >
                    <div className="languageCard__image">
                        <img src={french} alt="French greetings" />
                    </div>
                    <div className="languageCard__body">
                        <h3>French</h3>
                    </div>
                </div>

                <div
                    className="languageCard spanish"
                    onClick={() => {
                        setLanguage("spanish");
                        navigate("/difficulty");
                    }}
                >
                    <div className="languageCard__image">
                        <img src={spanish} alt="Spanish greetings" />
                    </div>
                    <div className="languageCard__body">
                        <h3>Spanish</h3>
                    </div>
                </div>

                <div
                    className="languageCard arabic"
                    onClick={() => {
                        setLanguage("arabic");
                        navigate("/difficulty");
                    }}
                >
                    <div className="languageCard__image">
                        <img src={arabic} alt="Arabic greetings" />
                    </div>
                    <div className="languageCard__body">
                        <h3>Arabic</h3>
                    </div>
                </div>

                <div
                    className="languageCard mandarin"
                    onClick={() => {
                        setLanguage("mandarin");
                        navigate("/difficulty");
                    }}
                >
                    <div className="languageCard__image">
                        <img src={mandarin} alt="Mandarin greetings" />
                    </div>
                    <div className="languageCard__body">
                        <h3>Mandarin</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Language;
