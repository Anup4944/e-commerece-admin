import React from "react";
import "./newUser.css";

export const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle"> Add new user</h1>
      <form className="newUserForm">
        <div className="newUserFormItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>

        <div className="newUserFormItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>

        <div className="newUserFormItem">
          <label>Email</label>
          <input type="email" placeholder="jh@gmail.com" />
        </div>

        <div className="newUserFormItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <div className="newUserFormItem">
          <label>Phone</label>
          <input type="number" placeholder="Phone number" />
        </div>

        <div className="newUserFormItem">
          <label>Address</label>
          <input type="text" placeholder="Address" />
        </div>

        <div className="newUserFormItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="others">Others</label>
          </div>
        </div>

        <div className="newUserFormItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="newUserButton">Create new user</button>
      </form>
    </div>
  );
};
