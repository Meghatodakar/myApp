import React, { useState } from "react";
// import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassWord = (e) => {
    setPassWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        password: password,
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch(console.error());
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <table style={{ display: "-webkit - inline - box", padding: "70px" }}>
          <tr>
            <td>UseName</td>
            <td>:</td>
            <td>
              <input
                type="text"
                onChange={handleUserName}
                value={userName}
                id="usename"
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>:</td>
            <td>
              <input
                type="password"
                id="password"
                onChange={handlePassWord}
                value={password}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="Submit" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Login;
