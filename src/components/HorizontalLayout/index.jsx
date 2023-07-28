import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import withRouter from "../Common/withRouter"

//actions
import {
  changeLayout,
  changeLayoutWidth,
  changeTopbarTheme,
  showRightSidebarAction,
} from "../../store/actions"

//redux
import { useDispatch, useSelector } from "react-redux"

//components
import { useLocation } from "react-router-dom"
import RightSidebar from "../CommonForBoth/RightSidebar"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"
const Layout = props => {
  const dispatch = useDispatch()

  const { topbarTheme, layoutWidth, isPreloader, showRightSidebar } =
    useSelector(state => ({
      topbarTheme: state.Layout.topbarTheme,
      layoutWidth: state.Layout.layoutWidth,
      isPreloader: state.Layout.isPreloader,
      showRightSidebar: state.Layout.showRightSidebar,
    }))

  /*
  document title
  */

  const pathName = useLocation()

  useEffect(() => {
    const title = pathName.pathname
    let currentage = title.charAt(1).toUpperCase() + title.slice(2)

    document.title =
      currentage + " | Skote - Vite React Admin & Dashboard Template"
  }, [pathName.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //hides right sidebar on body click
  const hideRightbar = event => {
    var rightbar = document.getElementById("right-bar")
    //if clicked in inside right bar, then do nothing
    if (rightbar && rightbar.contains(event.target)) {
      return
    } else {
      //if clicked in outside of rightbar then fire action for hide rightbar
      dispatch(showRightSidebarAction(false))
    }
  }

  /*
  layout settings
  */
  useEffect(() => {
    dispatch(changeLayout("horizontal"))
  }, [dispatch])

  useEffect(() => {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightbar, true)

    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 2500)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }
  }, [isPreloader])

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme))
    }
  }, [dispatch, topbarTheme])

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth))
    }
  }, [dispatch, layoutWidth])

  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  return (
    <>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header
          theme={topbarTheme}
          isMenuOpened={isMenuOpened}
          openLeftMenuCallBack={openMenu}
        />
        <Navbar menuOpen={isMenuOpened} />
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>

      {showRightSidebar ? <RightSidebar /> : null}
    </>
  )
}

Layout.propTypes = {
  changeLayout: PropTypes.func /*  */,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any,
}

export default withRouter(Layout)
