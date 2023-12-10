import React, { useState } from "react";
import "./Products.css";
//import userData from "../../../public/resources/data/data.json";
import userData from "../../resources/data/data.json";

let id = 3;
const Products = () => {
  const { users } = userData;
  const [formUserName, setFormUserName] = useState("");
  const [formCityName, setFormCityName] = useState("");
  const [formPhone, setFormPhone] = useState();
  const [showUserData, setShowUserData] = useState(users);
  const [showUpdateUserButton, setShowUpdateUserButton] = useState("");
  const [errorWithName, setErrorWithName] = useState("");
  const [errorWithCity, setErrorCity] = useState("");
  const [errorWithPhone, setErrorPhone] = useState("");

  const showErrorMsgName = (input) => {
    setFormUserName(input);
    if (!formUserName.length) {
      setErrorWithName("please");
    } else {
      setErrorWithName("");
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!formUserName.length) {
      setErrorWithName("please provide name");
    } else {
      setErrorWithName("");
    }
    if (formUserName && formCityName && formPhone) {
      const newUser = {
        id: id++,
        name: formUserName,
        city: formCityName,
        phone: formPhone,
      };
      setShowUserData([...showUserData, newUser]);
      setFormUserName("");
      setFormCityName("");
      setFormPhone("");
    }
  };
  const updateUser = (abc) => {
    setShowUpdateUserButton(abc);
    const updateItem = showUserData.find((x) => x.id === abc);
    console.log(updateItem);
    setFormUserName(updateItem.name);
    setFormCityName(updateItem.city);
    setFormPhone(updateItem.phone);
  };
  const updateUserButton = (input) => {
    input.preventDefault();
    const updateUserButton = showUserData.findIndex(
      (k) => k.id === showUpdateUserButton
    );
    showUserData[updateUserButton].name = formUserName;
    showUserData[updateUserButton].city = formCityName;
    showUserData[updateUserButton].phone = formPhone;
    setShowUserData([...showUserData]);
    setShowUpdateUserButton(null);
    setFormUserName("");
    setFormCityName("");
    setFormPhone("");
  };
  const deleteUser = (id) => {
    const deleteUser = showUserData.filter((d) => d.id !== id);
    setShowUserData(deleteUser);
  };

  return (
    <div>
      <div className="main">
        <div>
          <form action="">
            <div className="formUser">
              <label htmlFor="">Name: </label>
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  showErrorMsgName(e.target.value);
                }}
                value={formUserName}
              />
              <div className="error">{errorWithName}</div>
            </div>
            <div className="formUser">
              <label htmlFor="">city: </label>
              <input
                type="text"
                id="city"
                onChange={(e) => {
                  setFormCityName(e.target.value);
                }}
                value={formCityName}
              />
            </div>
            <div className="formUser">
              <label htmlFor="">phone: </label>
              <input
                type="text"
                id="phone"
                onChange={(e) => {
                  setFormPhone(e.target.value);
                }}
                value={formPhone}
              />
            </div>
            {showUpdateUserButton && (
              <button type="submit" onClick={(e) => updateUserButton(e)}>
                Update user
              </button>
            )}

            <button type="submit" onClick={(e) => addUser(e)}>
              +Add User
            </button>
          </form>
        </div>
        <div className="wrapper">
          <div className="row">Id</div>
          <div className="row">Name</div>
          <div className="row">City</div>
          <div className="row">Phone</div>
          <div className="row">Update</div>
          <div className="row">Delete</div>
        </div>
        {showUserData.map((user) => (
          <div key={user.id} className="userWrapper">
            <div className="userRow">{user.id}</div>
            <div className="userRow">{user.name}</div>
            <div className="userRow">{user.city}</div>
            <div className="userRow">{user.phone}</div>
            <button
              className="userRow"
              onClick={(e) => {
                updateUser(user.id);
              }}
            >
              Update
            </button>
            <button
              className="userRow"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
