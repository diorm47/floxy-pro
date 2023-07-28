import PropTypes from "prop-types"
import React, { useState } from "react"

//i18n
import { withTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"
import SimpleBar from "simplebar-react"

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  return (
    <>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon position-relative"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="bx bx-bell bx-tada" />
          <span className="badge bg-danger rounded-pill">1</span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
          <div className="p-3">
            <h6 className="m-0"> Уведомления </h6>
          </div>

          <SimpleBar style={{ height: "306px" }}>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-cart" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">
                    Бот Иван Иванов заблокирован
                  </h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Вашего бота заблокировал ВК
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" /> 3 минуты
                      назад
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SimpleBar>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default withTranslation()(NotificationDropdown)

NotificationDropdown.propTypes = {
  t: PropTypes.any,
}
