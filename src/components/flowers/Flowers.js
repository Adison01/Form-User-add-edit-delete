import React, { useState } from "react";
import "./Flowers.css";
const flowerList = [
  {
    id: 1,
    name: "Joe",
    phone: "87654321",
    city: "London",
  },
  {
    id: 2,
    name: "Duy",
    phone: "1234567",
    city: " New york",
  },
];
let id = flowerList.length + 1;
const Flowers = () => {
  const [flowerData, setFlowerData] = useState(flowerList);
  const [flowerName, setFlowerName] = useState("");
  const [flowerCity, setFlowerCity] = useState("");
  const [flowerPhone, setFlowerPhone] = useState("");
  const [updateFlowers, setUpdateFlowers] = useState("");

  const addFlowers = (e) => {
    e.preventDefault();
    const newFlower = {
      id: id++,
      name: flowerName,
      phone: flowerPhone,
      city: flowerCity,
    };
    setFlowerData([...flowerData, newFlower]);
    setFlowerName("");
    setFlowerCity("");
    setFlowerPhone("");
  };
  const editFlowers = (id) => {
    setUpdateFlowers(id);
    const editFlower = flowerData.find((f) => f.id === id);
    setFlowerName(editFlower.name);
    setFlowerCity(editFlower.city);
    setFlowerPhone(editFlower.phone);
  };
  const updateFlower = (id) => {
    id.preventDefault();
    const update = flowerData.findIndex((f) => f.id === updateFlowers);
    flowerData[update].name = flowerName;
    console.log(flowerName);
    flowerData[update].city = flowerCity;
    flowerData[update].phone = flowerPhone;
    setFlowerData([...flowerData]);
    // setEditUserId(null);
    setUpdateFlowers(null);
    setFlowerName("");
    setFlowerCity("");
    setFlowerPhone("");
  };
  const deleteItems = (input) => {
    let items = flowerData.filter((x) => x.id !== input);
    console.log(items);
    setFlowerData(items);
  };

  // const deleteItem = (id) => {
  //   let alert = window.confirm("are you sure you want to delete this");
  //   if (alert) {
  //     const deletUser = users.filter((x) => x.id !== id);
  //     setUsers(deletUser);
  //   }
  // };
  return (
    <div className="flowerMain">
      <div>
        <form action="">
          <div>
            <label htmlFor="">name</label>
            <input
              type="text"
              onChange={(e) => {
                setFlowerName(e.target.value);
              }}
              value={flowerName}
            />
          </div>
          <div>
            <label htmlFor="">city</label>
            <input
              type="text"
              onChange={(e) => {
                setFlowerCity(e.target.value);
              }}
              value={flowerCity}
            />
          </div>
          <div>
            <label htmlFor="">phone</label>
            <input
              type="text"
              onChange={(e) => {
                setFlowerPhone(e.target.value);
              }}
              value={flowerPhone}
            />
          </div>
          <button
            onClick={(e) => {
              addFlowers(e);
            }}
          >
            +Add Flowers
          </button>
          {updateFlowers && (
            <button
              type="submit"
              onClick={(e) => {
                updateFlower(e);
              }}
            >
              Update Flowers
            </button>
          )}
        </form>
      </div>
      <div className="flowerWrapper">
        <div className="flowerHeader">ID </div>
        <div className="flowerHeader">Name</div>
        <div className="flowerHeader">City</div>
        <div className="flowerHeader">Phone</div>
        <div className="flowerHeader">Update</div>
        <div className="flowerHeader">Delete</div>
      </div>

      {flowerData.map((flower) => (
        <div className="flowerData" key={flower.id}>
          <div className="flowerRowData">{flower.id}</div>
          <div className="flowerRowData">{flower.name}</div>
          <div className="flowerRowData">{flower.city}</div>
          <div className="flowerRowData">{flower.phone}</div>
          <button
            className="flowerRowData"
            onClick={(e) => {
              editFlowers(flower.id);
            }}
          >
            Edit
          </button>
          <button
            className="flowerRowData"
            onClick={() => deleteItems(flower.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Flowers;
