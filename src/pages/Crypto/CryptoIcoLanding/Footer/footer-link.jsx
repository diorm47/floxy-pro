import React from "react"
import { Col, Row } from "reactstrap"

//Import Images
import logolight from "../../../../assets/images/full-logo-light.svg"

const FooterLink = () => {
  return (
    <>
      <Row>
        <Col lg="6">
          <div className="mb-4">
            <img src={logolight} alt="" height="20" />
          </div>

          <p className="mb-2">
            {new Date().getFullYear()} © Skote. Design & Develop by
            Thаemesbrandа
          </p>
          <p>
            It will be as simple as occidental in fact, it will be to
            an english person, it will seem like simplified English,
            as a skeptical
          </p>
        </Col>
      </Row>
    </>
  )
}

export default FooterLink
