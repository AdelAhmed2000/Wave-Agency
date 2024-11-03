import React from "react";
// import jsForIcon from "./jsForIcon";
import "../../style/IconContact/iconContact.css";
export const IconContact = () => {
  return (
    <>
      <div className="contain">
        <div className="icons">
          <button id="add">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="person">
          <div className="card-image">
            <img src="team1.jpg" alt="" />
          </div>
        </div>
      </div>

      <select
        className="form-select"
        id="website"
        aria-label="Default select example"
      >
        <option value="0" selected>
          Select App
        </option>
        <option value="facebook-f">facebook</option>
        <option value="instagram">instagram</option>
        <option value="twitter">twitter</option>
        <option value="youtube">youtube</option>
        <option value="whatsapp">whatsapp</option>
        <option value="telegram">telegram</option>
        <option value="linkedin-in">linkedin</option>
        <option value="yahoo">yahoo</option>
        <option value="snapchat">snapchat</option>
        <option value="google">google</option>
        <option value="pinterest">pinterest</option>
      </select>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </>
  );
};
