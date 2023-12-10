import React, { useEffect, useState } from "react";
import "./User.css";
import AddUser from "./AddUser";

const getFilteredItems = (query, item) => {
  if (!query) {
    return item;
  } else {
    return item.filter((x) => x.name.includes(query));
  }
};

let idUnique = 3;
const User = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Joe doe ",
      phone: "  88564564556006495",
      city: " New york",
    },
    {
      id: 2,
      name: "Joe Duy ",
      phone: "  88564564556006495",
      city: " New york",
    },
  ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [editUserId, setEditUserId] = useState("");
  const [query, setQuery] = useState(" ");
  const [nameError, setNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.length) {
      setNameError("Please type a name !");
    } else {
      setNameError("");
    }
    if (!city.length) {
      setCityError("Please enter city Name");
    } else {
      setCityError("");
    }
    if (!phone.length) {
      setPhoneError("Please enter Phone number");
    } else {
      setPhoneError("");
    }

    if (name && phone && city) {
      const newUser = {
        id: idUnique++,
        name: name,
        phone: phone,
        city: city,
      };
      setUsers([...users, newUser]);
      setName("");
      setPhone("");
      setCity("");
    }
  };

  const deleteItem = (id) => {
    let alert = window.confirm("are you sure you want to delete this");
    if (alert) {
      const deletUser = users.filter((x) => x.id !== id);
      setUsers(deletUser);
    }
  };

  const editItem = (id) => {
    setEditUserId(id);
    // const items = users.filter((x) => x.id === id);
    const editItem = users.find((x) => x.id === id);
    setName(editItem.name);
    setPhone(editItem.phone);
    setCity(editItem.city);
    console.log(editItem);
  };

  const updateUser = (e) => {
    e.preventDefault();
    const updateItem = users.findIndex((x) => x.id === editUserId);
    console.log(users[editItem]);
    users[updateItem].name = name;
    users[updateItem].phone = phone;
    users[updateItem].city = city;
    setUsers([...users]);
    setEditUserId(null);
    setName("");
    setPhone("");
    setCity("");
  };

  const setNameHandle = (input) => {
    setName(input);
    if (input) {
      setNameError("");
    } else {
      setNameError("Please enter a user name");
    }
  };
  const setPhoneHandle = (input) => {
    const re = /^[A-Z\b]+$/;

    // if value is not blank, then test the regex

    if (re.test(input)) {
      setPhone(input);
    }

    if (input) {
      setPhoneError("");
    } else {
      setPhoneError("Please enter phone number");
    }
  };

  const setCityHandle = (input) => {
    setCity(input);
    if (input) {
      setCityError("");
    } else {
      setCityError("Please enter city name");
    }
  };
  // let items = users;
  // const searchUser = (query, items) => {
  //   if (!query) {
  //     return items;
  //   } else {
  //     return items.filter((x) => x.name.include(query));
  //   }
  // };

  // users = searchUser(query, items);
  // setUsers(searchUser(query, items));
  // const searchFilteredUser = searchUser(query, users);
  //let users = searchUser(query, users);
  //questions: how can we put the search with existing variable users or can we make another map function with new variable ?

  const item = users;
  const filteredItem = getFilteredItems(query, item);
  return (
    <div>
      <div className="wrapper">
        <div className="userForm">
          <div className="inputRow">
            <div className="inputLabel"> User Name </div>
            <div className="userInput">
              <input
                type="text"
                onChange={(e) => {
                  setNameHandle(e.target.value);
                }}
                value={name}
              />
              <div className="error">{nameError}</div>
            </div>
          </div>
          <div className="inputRow">
            <div className="inputLabel"> Phone </div>
            <div className="userInput">
              <input
                type="text"
                // onChange={(e) => setPhone(e.target.value)}
                onChange={(e) => setPhoneHandle(e.target.value)}
                value={phone}
              />
              <div className="error">{phoneError}</div>
            </div>
          </div>
          <div className="inputRow">
            <div className="inputLabel"> City </div>
            <div className="userInput">
              <input
                type="text"
                // onChange={(e) => setCity(e.target.value)}
                onChange={(e) => setCityHandle(e.target.value)}
                value={city}
              />
              <div className="error">{cityError}</div>
            </div>
          </div>

          <div className="inputRow">
            <div className="inputLabel"> </div>
            <div className="userInput">
              {editUserId ? (
                <button type="submit" onClick={(e) => updateUser(e)}>
                  update User...
                </button>
              ) : (
                <button
                  className="addButton"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  +Add User...
                </button>
              )}
            </div>
          </div>
        </div>
        <button
          className="addButton"
          type="submit"
          onClick={(e) => setEditUserId(null)}
        >
          +Add new form ...
        </button>
        <h1>User Data</h1>
        <div className="header">
          <div className="header-cell">#</div>
          <div className="header-cell">User Name</div>
          <div className="header-cell">City</div>
          <div className="header-cell">Phone</div>
          <div className="header-cell">Edit</div>
          <div className="header-cell">Delete</div>
        </div>
        <div className="">
          {users.map((x) => (
            <div key={x.id} className="row">
              <div className="row-cell">{x.id}</div>
              <div className="row-cell">{x.name}</div>
              <div className="row-cell">{x.city}</div>
              <div className="row-cell">{x.phone}</div>
              <div className="row-cell">
                <button onClick={() => editItem(x.id)}> Edit </button>
              </div>
              <div className="row-cell">
                <button onClick={() => deleteItem(x.id)}> Delete </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
