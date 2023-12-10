import React, { useEffect, useState } from "react";

const FilterName = () => {
  const [user, setUser] = useState([]);
  const [showName, setShowName] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  let getNames = user.map((x) => x.name);
  console.log("getname:::: ", getNames);

  return (
    <div>
      <div>
        <label>Search Name</label>
        <br />
      </div>
      <ul>
        {getNames.forEach((x) => {
          return x;
        })}
      </ul>
    </div>
  );
};

export default FilterName;

// <ul>
// <li>{getName}</li>
// </ul>

//   <ul>
//     {filteredUser.array.forEach((element) => {
//       <h1>{element}</h1>;
//     })}
//     ;
//   </ul>

//      // console.log("24..", element);
