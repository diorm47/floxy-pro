import classname from "classnames"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Col, Collapse, Row } from "reactstrap"
import withRouter from "../Common/withRouter"

const Navbar = props => {
  const [dashboard, setdashboard] = useState(false)
  const [ui, setui] = useState(false)
  const [app, setapp] = useState(false)
  const [email, setemail] = useState(false)
  const [ecommerce, setecommerce] = useState(false)
  const [crypto, setcrypto] = useState(false)
  const [project, setproject] = useState(false)
  const [task, settask] = useState(false)
  const [contact, setcontact] = useState(false)
  const [blog, setBlog] = useState(false)
  const [job, setJob] = useState(false)
  const [candidate, setCandidate] = useState(false)
  const [component, setcomponent] = useState(false)
  const [form, setform] = useState(false)
  const [table, settable] = useState(false)
  const [chart, setchart] = useState(false)
  const [icon, seticon] = useState(false)
  const [map, setmap] = useState(false)
  const [extra, setextra] = useState(false)
  const [invoice, setinvoice] = useState(false)
  const [auth, setauth] = useState(false)
  const [utility, setutility] = useState(false)

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    removeActivation(items)
    for (var i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i]
      const parent = items[i].parentElement
      if (item && item.classList.contains("active")) {
        item.classList.remove("active")
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active")
        }
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link
                    className="nav-link  arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setdashboard(!dashboard)
                    }}
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    Общая статистика
           
                  </Link>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)
