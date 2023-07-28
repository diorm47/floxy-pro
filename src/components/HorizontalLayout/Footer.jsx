import React from "react"
import { Col, Container, Row } from "reactstrap"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Skote.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by Themesbranаd
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
