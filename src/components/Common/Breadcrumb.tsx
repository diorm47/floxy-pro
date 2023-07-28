import PropTypes from "prop-types"
import React from "react"

const Breadcrumb = (props: { title: string }) => {
  return (
    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
      <h4 className="mb-0">{props.title}</h4>
    </div>
  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
}

export default Breadcrumb
