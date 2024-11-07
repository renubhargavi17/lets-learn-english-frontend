import './Cards.scss';

// The 'language' prop is expected to be an object or array passed to this component.
// export default function Cards({ language }) {
export default function Cards() {
    return (
        <div className="card-wrapper">
            <div className="card-img">
                <img src="https://media-public.canva.com/Xo580/MAFG0UXo580/1/t.png"/>
                {/* <img src={language.image} alt={language.name} /> */}
            </div>
            <div className="card-body">
                <h3>English</h3>
                {/*<h3>{language.name}</h3>*/}
            </div>
        </div>
    );
}
