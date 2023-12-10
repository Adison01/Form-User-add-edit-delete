import React from "react";
import "./Forms.css";

const Forms = () => {
  return (
    <div>
      <form className="formUserName">
        <div className="rowForm">
          <label className="labelForm">User Name</label>
          <input className="inputForm" />
        </div>
      </form>
      <div>
        <form className="form1">
          <div>
            <label htmlFor="">name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">name</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
