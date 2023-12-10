import React, { useState } from "react";
import "./Pets.css";
const petsData = [
  {
    id: 1,
    name: "Dog",
    city: "dhk",
  },
  {
    id: 2,
    name: "Cow",
    city: "khl",
  },
];
let idUnique = 3;
const Pets = () => {
  const [petName, setPetName] = useState("");
  const [cityName, setCityName] = useState("");
  const [pets, setPets] = useState(petsData);
  const [editExistingItem, setEditExistingItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      id: idUnique++,
      name: petName,
      city: cityName,
    };
    setPets([...pets, newPet]);
    setPetName("");
    setCityName("");
  };
  const deleteExistingPets = (id) => {
    const alert = window.confirm("want to delete ?");
    if (alert) {
      const deleteItem = pets.filter((x) => x.id !== id);
      setPets(deleteItem);
    }
  };
  const EditExistingPets = (id) => {
    setEditExistingItem(id);
    const editItem = pets.find((z) => z.id === id);
    setPetName(editItem.name);
    setCityName(editItem.city);
  };
  const updateExistingPets = (e) => {
    e.preventDefault();
    const updateItem = pets.findIndex((k) => k.id === editExistingItem);
    pets[updateItem].name = petName;
    pets[updateItem].city = cityName;
    setPets([...pets]);
    setEditExistingItem(null);
    setPetName("");
    setCityName("");
  };
  return (
    <div>
      <div className="top-wrapper">
        <form type="submit" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Pet Name</label>
            <input
              type="text"
              value={petName}
              onChange={(e) => {
                setPetName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </div>

          {editExistingItem ? (
            <button
              type="submit"
              onClick={(e) => {
                updateExistingPets(e);
              }}
            >
              Update Pet
            </button>
          ) : (
            <button type="submit"> + Add</button>
          )}
        </form>

        <div className="pets-header">
          <div className="pets-header-cell">ID</div>
          <div className="pets-header-cell">Name</div>
          <div className="pets-header-cell">City</div>
          <div className="pets-header-cell">Update</div>
          <div className="pets-header-cell">Delete</div>
        </div>
        <div>
          {pets.map((pet) => (
            <div key={pet.id} className="row">
              <div className="pets-row-cell">{pet.id}</div>
              <div className="pets-row-cell">{pet.name}</div>
              <div className="pets-row-cell">{pet.city}</div>
              <div className="pets-row-cell">
                <button
                  onClick={(id) => {
                    EditExistingPets(pet.id);
                  }}
                  className=""
                >
                  Edit
                </button>
              </div>
              <div className="pets-row-cell">
                <button onClick={() => deleteExistingPets(pet.id)} className="">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pets;
