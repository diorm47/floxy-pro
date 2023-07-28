import PropTypes from "prop-types"
import { connect, useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { call } from "redux-saga/effects"
import logoLightSvg from "../../assets/images/logo-light.svg"
import logoLightSvgMob from "../../assets/images/full-logo-light.svg"
import logo from "../../assets/images/logo.svg"
// Redux Store
import { layoutModeTypes } from "../../constants/layout"
import {
  // changeLayoutMode,
  changeSidebarType,
  showRightSidebarAction,
  toggleLeftmenu,
} from "../../store/actions"

// changeLayoutMode
import { useEffect } from "react"
import { changeLayoutMode } from "../../store/actions"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

const Header = props => {
  const dispatch = useDispatch()

  function tToggle() {
    var body = document.body
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable")
    } else {
      body.classList.toggle("vertical-collpsed")
      body.classList.toggle("sidebar-enable")
    }
  }

  useEffect(() => {
    const dlb = () => {
      document.body.classList.toggle("sidebar-enable")
    }

    const black_background = document.querySelector(".black_back")

    if (black_background) {
      black_background.addEventListener("click", dlb)
    }
    if (document.body.classList.contains("sidebar-enable")) {
      black_background.style.display = "block"
    }
    return () => {
      if (black_background) {
        black_background.removeEventListener("click", dlb)
      }
    }
  }, [])
  useEffect(() => {
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      const savedLayoutMode = localStorage.getItem("layout_mode")
      if (savedLayoutMode == `"light"`) {
        dispatch(changeLayoutMode("light"))
      } else {
        dispatch(changeLayoutMode("dark"))
      }
    }, 100)
  }, [])

  const layoutToggle = () => {
    if (props.layoutModeType === layoutModeTypes.LIGHT) {
      dispatch(changeLayoutMode(layoutModeTypes.DARK))
      localStorage.setItem(
        "layout_mode",
        JSON.stringify(layoutModeTypes.DARK)
      )
    } else {
      dispatch(changeLayoutMode(layoutModeTypes.LIGHT))
      localStorage.setItem(
        "layout_mode",
        JSON.stringify(layoutModeTypes.LIGHT)
      )
    }
  }

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box d-lg-none d-md-block">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoLightSvgMob} alt="logo" height={"42"} />
                </span>
              </Link>

              {/* <Link to="/" className="logo logo-light"> */}
              <span className="logo-sm" onClick={() => tToggle()}>
                <img src={logoLightSvgMob} alt="logo" height="22" />
              </span>
              {/* </Link> */}
            </div>
          </div>
          <div className="d-flex align-items-center">
            <NotificationDropdown />

            <ProfileMenu />

            <div
              className="header-them toggle_layout"
              onClick={layoutToggle}
            >
              <i className="bx bx-moon" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  layoutType: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
  layoutModeType: PropTypes.any,
  changeLayoutMode: PropTypes.func,
}

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
    changeLayoutMode,
    layoutModeType,
  } = state.Layout
  return {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
    changeLayoutMode,
    layoutModeType,
  }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeLayoutMode,
  changeSidebarType,
})(Header)
