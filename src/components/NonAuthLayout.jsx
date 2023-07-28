import PropTypes from "prop-types"
import React from "react"
import withRouter from "./Common/withRouter"

const NonAuthLayout = props => {
  return <>{props.children}</>
}

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default withRouter(NonAuthLayout)
