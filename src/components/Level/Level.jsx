import "../Level/Level.scss";
import { Link } from "react-router-dom";

function Level({ language }) {
  return (
    <section className="languageLevel">
      <h2 className="heading">YOU SPEAK: {language}</h2>
      <div className="levelType">
        <div className="easyLevel">
          <h3 className="easy">
            {" "}
            <Link to={`/quiz/${language}/easy`}>easy</Link>
          </h3>
        </div>
        <div className="mediumLevel">
          <h3 className="medium">
            {" "}
            <Link to={`/quiz/${language}/medium`}>medium</Link>
          </h3>
        </div>
        <div className="advancedLevel">
          <h3 className="advanced">
            {" "}
            <Link to={`/quiz/${language}/hard`}>advanced</Link>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Level;
