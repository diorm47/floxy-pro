import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Alert,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledAlert,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiAlert = () => {
  //meta title
  document.title =
    "Alert | Skote - Vite React Admin & Dashboard Template"

  const [show, setShow] = useState(false)

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Alerts" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Default Alerts </CardTitle>
                  <p className="card-title-desc">
                    Alerts are available for any length of text, as
                    well as an optional dismiss button. For proper
                    styling, use one of the four{" "}
                    <strong>required</strong> contextual classes
                    (e.g., <code>.alert-success</code>). For inline
                    dismissal, use the alerts jQuery plugin.
                  </p>

                  <div>
                    <Alert color="primary">
                      A simple primary alert—check it out!
                    </Alert>
                    <Alert color="secondary" role="alert">
                      A simple secondary alert—check it out!
                    </Alert>
                    <Alert color="success" role="alert">
                      A simple success alert—check it out!
                    </Alert>
                    <Alert color="danger" role="alert">
                      A simple danger alert—check it out!
                    </Alert>
                    <Alert color="warning" role="alert">
                      A simple warning alert—check it out!
                    </Alert>
                    <Alert color="info" className="mb-0" role="alert">
                      A simple info alert—check it out!
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-2">Link color </CardTitle>
                  <p className="card-title-desc">
                    Use the{" "}
                    <code className="highlighter-rouge">
                      .alert-link
                    </code>{" "}
                    utility className quickly provide matching colored
                    links within any alert.
                  </p>

                  <div>
                    <Alert color="primary">
                      A simple primary alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="secondary">
                      A simple secondary alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="success">
                      A simple success alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="danger">
                      A simple danger alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="warning">
                      A simple warning alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="info" className="mb-0">
                      A simple info alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-2">Dismissing </CardTitle>
                  <p className="card-title-desc">
                    Add a dismiss button and the{" "}
                    <code>.alert-dismissible</code> class, which adds
                    extra padding to the right of the alert and
                    positions the <code>.btn-close</code> button.
                  </p>

                  <div>
                    <UncontrolledAlert color="primary">
                      A simple primary alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="secondary" role="alert">
                      A simple secondary alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="success" role="alert">
                      A simple success alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="danger" role="alert">
                      A simple danger alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="warning" role="alert">
                      A simple warning alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="info"
                      className="mb-0"
                      role="alert"
                    >
                      A simple info alert—check it out!
                    </UncontrolledAlert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">With Icon </CardTitle>
                  <div>
                    <UncontrolledAlert
                      color="primary"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="mdi mdi-bullseye-arrow me-2"></i>A
                      simple primary alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="secondary"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="mdi mdi-grease-pencil me-2"></i>A
                      simple secondary alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="success"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="mdi mdi-check-all me-2"></i>A
                      simple success alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="danger"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="mdi mdi-block-helper me-2"></i>A
                      simple danger alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="warning"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="mdi mdi-alert-outline me-2"></i>A
                      simple warning alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="info"
                      className="alert-dismissible fade show mb-0"
                      role="alert"
                    >
                      <i className="mdi mdi-alert-circle-outline me-2"></i>
                      A simple info alert—check it out!
                    </UncontrolledAlert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Live Example</h4>
                  <p className="card-title-desc">
                    Click the button below to show an alert (hidden
                    with inline styles to start), then dismiss (and
                    destroy) it with the built-in close button.
                  </p>
                  <div className="">
                    <div id="liveAlertPlaceholder">
                      <Alert
                        isOpen={show}
                        toggle={() => {
                          setShow(false)
                        }}
                      >
                        Nice, you triggered this alert message!
                      </Alert>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setShow(true)}
                      id="liveAlertBtn"
                    >
                      Show live alert
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="card-title">
                    Additional content
                  </CardTitle>
                  <p className="card-title-desc">
                    Alerts can also contain additional HTML elements
                    like headings, paragraphs and dividers.
                  </p>

                  <div>
                    <Alert className="alert-success" role="alert">
                      <h4 className="alert-heading">Well done!</h4>
                      <p>
                        Aww yeah, you successfully read this important
                        alert message. This example text is going to
                        run a bit longer so that you can see how
                        spacing within an alert works with this kind
                        of content.
                      </p>
                      <hr />
                      <p className="mb-0">
                        Whenever you need to, be sure to use margin
                        utilities to keep things nice and tidy.
                      </p>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default UiAlert
