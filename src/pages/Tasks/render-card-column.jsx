import React from "react"
import { Link } from "react-router-dom"

const RenderCardColumn = () => {
  return (
    <>
      <div className="text-center">
        <Link to="#" className="btn btn-primary btn-block mt-1 ">
          <i className="mdi mdi-plus ms-1" />
        </Link>
      </div>
    </>
  )
}

export default RenderCardColumn
