import { Col, Container, Row } from "reactstrap"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Floxy.pro</Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
