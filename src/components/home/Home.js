import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  let [query, setquery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  //   let items = users.map((user) => user.name);
  //   console.log(items);

  const getFilterItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter((x) => x.name.includes(query));
  };

  const filterItems = getFilterItems(query, items);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search name"
          onChange={(e) => {
            setquery(e.target.value);
          }}
        ></input>
      </div>
      <ul>
        {filterItems.map((value) => (
          <h1 key={value.id}>{value.name}</h1>
        ))}
      </ul>
    </div>
  );
};

export default Home;
