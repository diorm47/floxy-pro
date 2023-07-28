import PropTypes from "prop-types"
import { useRef } from "react"
import "./layout.css"

import AccountStatus from "../Common/account-status/accountStatus"

//i18n
import { withTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"

// //Import Scrollbar
import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import SimpleBar from "simplebar-react"
import withRouter from "../Common/withRouter"

const SidebarContent = (props: any) => {
  const ref = useRef()
  const path = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [path])

  return (
    <>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Меню</li>
            <li
              className={
                path.pathname.startsWith("/dashboard")
                  ? "mm-active"
                  : ""
              }
            >
              <Link
                to="/#"
                className={
                  path.pathname.startsWith("/dashboard")
                    ? "active"
                    : ""
                }
              >
                <i className="bx bx-home-circle"></i>
                <span>Общая статистика</span>
              </Link>
            </li>

            <li
              className={
                path.pathname.startsWith("/topup") ? "mm-active" : ""
              }
            >
              <Link
                to="/topup"
                className={
                  path.pathname.startsWith("/topup") ? "active" : ""
                }
              >
                <i className="bx bx-receipt"></i>
                <span>Пополнение баланса</span>
              </Link>
            </li>

            <li className="menu-title">Настройки</li>

            <li
              className={
                path.pathname.startsWith("/chats") ? "mm-active" : ""
              }
            >
              <NavLink
                className={
                  path.pathname.startsWith("/chats") ? "active" : ""
                }
                to="/chats"
              >
                <i className="bx bx-chat"></i>
                <span>Чаты</span>
              </NavLink>
            </li>

            <li
              className={
                path.pathname.startsWith("/groups") ? "mm-active" : ""
              }
            >
              <Link
                to="/groups"
                className={
                  path.pathname.startsWith("/groups") ? "active" : ""
                }
              >
                <i className="bx bxs-user-detail"></i>
                <span>Группы</span>
              </Link>
            </li>

            <li
              className={
                path.pathname.startsWith("/redirects")
                  ? "mm-active"
                  : ""
              }
            >
              <Link
                to="/redirects"
                className={
                  path.pathname.startsWith("/redirects")
                    ? "active"
                    : ""
                }
              >
                <div className="status_need">
                  <div className="jc_sb">
                    <i className="bx bx-share-alt"></i>
                    <span>Редиректы</span>
                  </div>
                  <AccountStatus status="Pro" />
                </div>
              </Link>
            </li>

            <li
              className={
                path.pathname.startsWith("/custom-mailing")
                  ? "mm-active"
                  : ""
              }
            >
              <Link
                to="/custom-mailing"
                className={
                  path.pathname.startsWith("/custom-mailing")
                    ? "active"
                    : ""
                }
              >
                <div className="status_need">
                  <div className="jc_sb">
                    <i className="bx bx-tone"></i>
                    <span>Кастомы</span>
                  </div>
                  <AccountStatus status="Advanced" />
                </div>
              </Link>
            </li>

            <li
              className={
                path.pathname.startsWith("/bots") ? "mm-active" : ""
              }
            >
              <Link
                to="/bots"
                className={
                  path.pathname.startsWith("/bots") ? "active" : ""
                }
              >
                <i className="bx bx-layout"></i>
                <span>Боты</span>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="dropdown-item">
                <span className="side_bar_logout">
                  {props.t("Выйти")}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
