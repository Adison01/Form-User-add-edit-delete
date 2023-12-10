import React, { useState } from "react";
import "./OurCSS.css";

const OurCSS = () => {
  const [query, setQuery] = useState("");
  const [addNewData, setAddNewData] = useState(false);
  const users = [
    {
      id: 1,
      name: "Joe doe ",
      phone: "  88564564556006495",
      city: " New york",
    },
    {
      id: 21,
      name: "Joe Duy ",
      phone: "  88564564556006495",
      city: " New york",
    },
  ];
  const filterData = (query, users) => {
    if (!query) {
      return users;
    }
    return users.filter((x) => x.name.includes(query));
  };
  const queryData = filterData(query, users);
  const addUser = () => {
    return (
      <form type="submit">
        <input type="text" id="idName">
          ID
        </input>
        <input type="text" id="Name">
          Name
        </input>
        <input type="text" id="Phone">
          Phone
        </input>
        <input type="text" id="City">
          City
        </input>
        <div id="Edit">Edit</div>
      </form>
    );
  };

  return (
    <>
      <div className="wrapper">
        <input type="text" name="" /> Search
        <div className="table">
          <div className="heading"> ID </div>
          <div className="heading"> Name </div>
          <div className="heading"> Phone </div>
          <div className="heading"> City </div>
          <div className="heading"> Edit </div>
        </div>
        {users.map((user, index) => (
          <div className="row" key={index}>
            <div className="cell"> {user.id} </div>
            <div className="cell"> {user.name} </div>
            <div className="cell"> {user.phone} </div>
            <div className="cell"> {user.city} </div>
            <div className="cell"> Edit </div>
          </div>
        ))}
      </div>

      <div>
        <button> + ADD</button>
      </div>

      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <ul>
        {queryData.map((z) => (
          <h1 key={z.id}>{z.name}</h1>
        ))}
      </ul>
    </>
  );
};

export default OurCSS;
