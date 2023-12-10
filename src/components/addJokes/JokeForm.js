import React, { useState } from "react";

const JokeForm = ({ onAddJoke }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddJoke(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">New jokes</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">+Add Joke</button>
    </form>
  );
};

export default JokeForm;
