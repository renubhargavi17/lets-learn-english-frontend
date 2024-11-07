import "../Level/Level.scss"

function Level(){
    return(
        <section className="languageLevel">
       
        <h2 className="heading">YOU SPEAK: languagetype</h2>
        <div className="levelType">
            <div className="easyLevel">
                <h3 className="easy"> easy</h3>
            </div>
            <div className="mediumLevel">
                <h3 className="medium"> medium</h3>
            </div>
            <div className="advancedLevel">
                <h3 className="advanced"> advanced</h3>
            </div>
           
        </div>
        </section>
    )
}

export default Level