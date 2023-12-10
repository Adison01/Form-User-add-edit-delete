import React from "react";

const AddUser = () => {
  return (
    <div>
      <div>
        <div>
          <input type="number">#</input>
        </div>
        <div>
          <input type="text">User Name</input>
        </div>
        <div>
          <input type="text">City</input>
        </div>
        <div>
          <input type="number">Phone</input>
        </div>
      </div>
      <div>Edit</div>
      <div>Delete</div>
    </div>
  );
};

export default AddUser;
