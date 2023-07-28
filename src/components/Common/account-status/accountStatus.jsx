import classNames from "classnames"
import React from "react"
import "./accountStatus.css"

function AccountStatus({ status }) {
  const status_ind = classNames({
    pro_color: status === "Pro",
    trial_color: status === "Trial",
    advanced_color: status === "Advanced",
    base_color: status === "Base",
  })

  return (
    <div className={status_ind} id="status_btn">
      <p>{status}</p>
    </div>
  )
}

export default AccountStatus
