import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import FilterName from "./components/filterName/FilterName";
import TodoTable from "./components/todoList/TodoTable";
import OurCSS from "./components/ForCSS/OurCSS";
import User from "./components/AddUser/User";
import Jokes from "./components/addJokes/Jokes";
import ShowJoke from "./components/addJokes/ShowJoke";
import Pets from "./components/pets/Pets";
import Forms from "./components/forms/Forms";
import Products from "./components/products/Products";
import Flowers from "./components/flowers/Flowers";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Flowers />
    </div>
  );
}

export default App;
