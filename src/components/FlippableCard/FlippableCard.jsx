import { useState } from "react";

export default function FlippableCard({ frontText, backText }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flippable-card"
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
    >
      {isFlipped ? <div>{frontText}</div> : <div>{backText}</div>}
    </div>
  );
}
