import React from "react"
import { Navigate } from "react-router-dom"

const Authmiddleware = props => {
  if (!localStorage.getItem("authUser")) {
    return (
      <Navigate
        to={{ pathname: "/login", state: { from: props.location } }}
      />
    )
  }
  return <>{props.children}</>
}

export default Authmiddleware
