import React from "react"
import { Link } from "react-router-dom"

const HeaderSelected = ({ title, img }) => {
  return (
    <div className={"header-selected d-flex"}>
      <div className={"redirects-menu"}>
        <img
          src={`${
            img ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBQOfQVh7lLiP3FxzfvEBJCrUbhKtdYN7sGT1Sjb6R4Ep4FGGyYtGN2rMAcZPRTeCw5c&usqp=CAU"
          }`}
          alt="avatar"
        />
        <p>{title || "Не указано"}</p>
        <i className="bx bxs-user-detail"></i>
      </div>
      <Link to="/groups">
        <button
          className={"btn btn-outline-primary redirects-menu-btn"}
        >
          <i className="bx bxs-user-detail"></i>
        </button>
      </Link>
      <Link to="/redirects">
        <button
          className={"btn btn-outline-primary redirects-menu-btn"}
        >
          <i className="bx bx-share-alt"></i>
        </button>
      </Link>
      <Link to="/chats">
        <button
          className={"btn btn-outline-primary redirects-menu-btn"}
        >
          <i className="bx bx-chat"></i>
        </button>
      </Link>
    </div>
  )
}
export default HeaderSelected
