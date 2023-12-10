import React, { useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">User name </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button onClick={(e) => userLogin(e)}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
