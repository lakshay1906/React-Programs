import React, { useState } from "react";

function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<null | string>("lakshay");
  //   In the above line we have defined the typescript that the userName variable can be a null or a string. We can do this when there are chances that the type of value will be changes to another known type.

  // let myName: string = "Lakshay";

  let myName;
  myName = "lakshay";
  myName = 10;

  function handleLogIn() {
    setIsLoggedIn(true);
  }
  function handleLogOut() {
    setUserName(null);
    setIsLoggedIn(false);
  }
  return (
    <>
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={userName ? userName : ""}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="button-group">
            <button type="submit" className="btn" onClick={handleLogIn}>
              Log In
            </button>
            <button type="button" className="btn" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        </form>
      </div>
      {isLoggedIn && <h1>Welcome {userName}....😊</h1>}
    </>
  );
}

export default User;
