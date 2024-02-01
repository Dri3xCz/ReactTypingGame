import { useEffect, useState } from "react";

export function TypingField() {
  const [inputtedText, setInputtedText] = useState("");

  function handleKeydown(event: KeyboardEvent) {
    const key = event.key;

    if(key === "Backspace") {
      setInputtedText((text) => text.slice(0, text.length - 1))
    }
    if (key.length > 1) return;

    setInputtedText((text) => text + key);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const typingTestContent =
    "problem think you as it is car battery simple provide care";

  return (
    <div>
      <div>
        {typingTestContent}, {inputtedText}
      </div>
    </div>
  );
}
