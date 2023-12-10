import React, { useState } from "react";
import JokeForm from "./JokeForm";
import Jokes from "./Jokes";

const ShowJoke = () => {
  const [jokes, setJokes] = useState([
    {
      id: 1,
      text: "abc",
    },
    {
      id: 2,
      text: "abcd",
    },
  ]);

  const handleAddJoke = (text) => {
    const joke = {
      text,
      id: Math.floor(Math.random() * 1000),
    };
    // jokes.push(joke);
    setJokes([joke, ...jokes]);
  };
  return (
    <div>
      <JokeForm onAddJoke={handleAddJoke} />
      {jokes.map((joke) => (
        <Jokes key={joke.id} id={joke.id} text={joke.text} />
      ))}
    </div>
  );
};
export default ShowJoke;
