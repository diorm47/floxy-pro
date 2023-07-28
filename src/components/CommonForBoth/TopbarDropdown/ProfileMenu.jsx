import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"
import "./topbar.css"
//i18n
import { withTranslation } from "react-i18next"

import AccountStatus from "../../Common/account-status/accountStatus"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import withRouter from "../../Common/withRouter"

// users
import user1 from "../../../assets/images/users/avatar-1.jpg"

const ProfileMenu = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  const [username, setusername] = useState("Admin")

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.displayName)
      } else if (
        import.meta.env.VITE_APP_DEFAULTAUTH === "fake" ||
        import.meta.env.VITE_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.username)
      }
    }
  }, [props.success])

  return (
    <>
      <div
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <div
          className="btn header-item nav_bar_profile"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
          <a href="/profile">
            <span className="d-none d-xl-inline-block ms-2 me-1 ">
              {username}
            </span>
          </a>
          {/* <a href="/topup">
            <AccountStatus status="Pro" />
          </a> */}
        </div>
      </div>
    </>
  )
}

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)
