import React, { useState } from "react";
import JokeForm from "./JokeForm";

const Jokes = ({ id, text }) => {
  return (
    <div>
      <div>{id}</div>
      <div>{text}</div>
    </div>
  );
};

export default Jokes;
