import PropTypes from "prop-types"
import React, { useState } from "react"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"

import { Link } from "react-router-dom"
// reactstrap
// import images
import {
  default as logoDark,
  default as logoLight,
} from "../../assets/images/full-logo-dark.svg"
import logoLightSvg from "../../assets/images/logo-light.svg"
import logo from "../../assets/images/logo.svg" // Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
} from "../../store/actions" // Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

const Header = props => {
  const [menu, setMenu] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }
  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="hhhhhhhhh" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="hhhhhhhhh" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="42" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="" height="42" />
                </span>
              </Link>
            </div>
          </div>

          <div className="d-flex">
            <NotificationDropdown />

            <ProfileMenu />
            {/*<div className="dropdown d-inline-block">*/}
            {/*  <button*/}
            {/*    onClick={() => {*/}
            {/*      props.showRightSidebarAction(*/}
            {/*        !props.showRightSidebar*/}
            {/*      )*/}
            {/*    }}*/}
            {/*    type="button"*/}
            {/*    className="btn header-item noti-icon right-bar-toggle "*/}
            {/*  >*/}
            {/*    <i className="bx bx-cog bx-spin" />*/}
            {/*  </button>*/}
            {/*</div>*/}
            <div className="header-theme">
              <i className="bx bx-moon" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout
  return { layoutType, showRightSidebar, leftMenu }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header))
