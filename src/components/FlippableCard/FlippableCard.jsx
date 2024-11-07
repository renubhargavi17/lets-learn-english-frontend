import { useEffect, useState } from "react";
import "./FlippableCard.scss";

export default function FlippableCard({ frontText, backText }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    return () => {
      setIsFlipped(false);
    };
  }, [frontText, backText]);

  return (
    <div
      className="flippable-card"
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
    >
      {!isFlipped ? <div>{frontText}</div> : <div>{backText}</div>}
    </div>
  );
}
