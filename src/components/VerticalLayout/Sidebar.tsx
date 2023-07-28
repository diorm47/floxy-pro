import PropTypes from "prop-types"
import React from "react"

//i18n
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"

import { Link } from "react-router-dom"
import logoDark from "../../assets/images/full-logo-dark.svg"
import logoLightPng from "../../assets/images/full-logo-light.svg"
import logoLightSvg from "../../assets/images/logo-light.svg"

import logo from "../../assets/images/logo.svg"
import withRouter from "../Common/withRouter"
import SidebarContent from "./SidebarContent"

const Sidebar = props => {
  return (
    <>
    <div className="black_back"></div>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" height="17" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoLightSvg} alt="" height="42" />
            </span>
            <span className="logo-lg">
              <img src={logoLightPng} alt="" height="42" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? (
            <SidebarContent />
          ) : (
            <SidebarContent />
          )}
        </div>

        <div className="sidebar-background"></div>
      </div>
    </>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  }
}
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)))
