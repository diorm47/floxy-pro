import PropTypes from "prop-types"
import React from "react"
import { Card, CardBody, Col } from "reactstrap"

const CardMaintenance = props => {
  return (
    <>
      <Col md="4">
        <Card className="mt-4 maintenance-box">
          <CardBody>{props.children}</CardBody>
        </Card>
      </Col>
    </>
  )
}

CardMaintenance.propTypes = {
  children: PropTypes.any,
}

export default CardMaintenance
