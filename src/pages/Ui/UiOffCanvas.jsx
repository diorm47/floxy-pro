import React, { useState } from "react"
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  UncontrolledDropdown,
} from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiDrawer = () => {
  //meta title
  document.title =
    "OffCanvas | Skote - Vite React Admin & Dashboard Template"

  const [open, setOpen] = useState(false)
  const [isTop, setIsTop] = useState(false)
  const [isRight, setIsRight] = useState(false)
  const [isBottom, setIsBottom] = useState(false)
  const [isEnableScroll, setIsEnableScroll] = useState(false)
  const [isBackdrop, setIsBackdrop] = useState(false)
  const [isScrollBackDrop, setIsScrollBackDrop] = useState(false)

  const toggleLeftCanvas = () => {
    setOpen(!open)
  }

  const toggleTopCanvas = () => {
    setIsTop(!isTop)
  }
  const toggleRightCanvas = () => {
    setIsRight(!isRight)
  }
  const toggleBottomCanvas = () => {
    setIsBottom(!isBottom)
  }

  const toggleEnableScroll = () => {
    setIsEnableScroll(!isEnableScroll)
  }
  const toggleBackdrop = () => {
    setIsBackdrop(!isBackdrop)
  }
  const toggleScrollBackDrop = () => {
    setIsScrollBackDrop(!isScrollBackDrop)
  }
  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs
            title="Ui Elements"
            breadcrumbItem="Offcanvas"
          />
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Demo</CardTitle>
                  <p className="card-title-desc">
                    Use the buttons below to show and hide an
                    offcanvas element via JavaScript that toggles the{" "}
                    <code>.show</code>
                    class on an element with the{" "}
                    <code>.offcanvas</code> class.
                  </p>
                  <div>
                    <Button
                      color="primary"
                      onClick={toggleLeftCanvas}
                      className="me-2"
                    >
                      Link with href
                    </Button>
                    <Button
                      color="primary"
                      type="button"
                      onClick={toggleLeftCanvas}
                    >
                      Button with data-bs-target
                    </Button>
                    <Offcanvas
                      isOpen={open}
                      toggle={toggleLeftCanvas}
                    >
                      <OffcanvasHeader toggle={toggleLeftCanvas}>
                        Offcanvas
                      </OffcanvasHeader>
                      <OffcanvasBody>
                        <div>
                          Some text as placeholder. In real life you
                          can have the elements you have chosen. Like,
                          text, images, lists, etc.
                        </div>
                        <UncontrolledDropdown className="mt-3">
                          <DropdownToggle
                            color="primary"
                            type="button"
                            id="dropdownMenuButton"
                          >
                            Dropdown button{" "}
                            <i className="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <li>
                              <DropdownItem>Action</DropdownItem>
                            </li>
                            <li>
                              <DropdownItem>
                                Another action
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem>
                                Something else here
                              </DropdownItem>
                            </li>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </OffcanvasBody>
                    </Offcanvas>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Placement</CardTitle>
                  <p className="card-title-desc">
                    Offcanvas Diffrent Placement Example: Top, End &
                    Bottom
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button color="primary" onClick={toggleTopCanvas}>
                      Toggle top offcanvas
                    </Button>
                    <Button
                      color="primary"
                      onClick={toggleRightCanvas}
                    >
                      Toggle right offcanvas
                    </Button>
                    <Button
                      color="primary"
                      onClick={toggleBottomCanvas}
                    >
                      Toggle bottom offcanvas
                    </Button>
                  </div>
                  {/* Top offcanvas */}
                  <Offcanvas
                    isOpen={isTop}
                    direction="top"
                    toggle={toggleTopCanvas}
                  >
                    <OffcanvasHeader toggle={toggleTopCanvas}>
                      Offcanvas Top
                    </OffcanvasHeader>
                    <OffcanvasBody>...</OffcanvasBody>
                  </Offcanvas>
                  {/* Right offcanvas */}
                  <Offcanvas
                    isOpen={isRight}
                    direction="end"
                    toggle={toggleRightCanvas}
                  >
                    <OffcanvasHeader toggle={toggleRightCanvas}>
                      Offcanvas Right
                    </OffcanvasHeader>
                    <OffcanvasBody>...</OffcanvasBody>
                  </Offcanvas>
                  {/* Bottom offcanvas */}
                  <Offcanvas
                    isOpen={isBottom}
                    direction="bottom"
                    toggle={toggleBottomCanvas}
                  >
                    <OffcanvasHeader toggle={toggleBottomCanvas}>
                      Offcanvas Bottom
                    </OffcanvasHeader>
                    <OffcanvasBody>...</OffcanvasBody>
                  </Offcanvas>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h5">Responsive</CardTitle>
                  <p className="card-title-desc">
                    Responsive offcanvas classes are available across
                    for each breakpoint.
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <button
                      className="btn btn-primary d-lg-none"
                      type="button"
                    >
                      Toggle offcanvas
                    </button>
                  </div>
                  <div className="alert alert-info d-none d-lg-block">
                    Resize your browser to show the responsive
                    offcanvas toggle.
                  </div>

                  <div
                    className="offcanvas-lg offcanvas-end"
                    id="offcanvasResponsive"
                  >
                    <div className="offcanvas-header">
                      <h5
                        className="offcanvas-title"
                        id="offcanvasResponsiveLabel"
                      >
                        Responsive offcanvas
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <p className="mb-0">
                        This is content within an{" "}
                        <code>.offcanvas-lg</code>.
                      </p>
                    </div>
                  </div>

                  <p className="card-title-desc mt-3 mb-2">
                    Responsive offcanvas classes are available across
                    for each breakpoint.
                  </p>
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item">
                      <code>.offcanvas</code>,
                    </li>{" "}
                    <li className="list-inline-item">
                      <code>.offcanvas-sm</code>,
                    </li>{" "}
                    <li className="list-inline-item">
                      <code>.offcanvas-md</code>,
                    </li>{" "}
                    <li className="list-inline-item">
                      <code>.offcanvas-lg</code>,
                    </li>{" "}
                    <li className="list-inline-item">
                      <code>.offcanvas-xl</code>,
                    </li>{" "}
                    <li className="list-inline-item">
                      <code>.offcanvas-xxl</code>
                    </li>{" "}
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Backdrop</CardTitle>
                  <p className="card-title-desc">
                    Scrolling the <code>&lt;body&gt;</code> element is
                    disabled when an offcanvas and its backdrop are
                    visible. Use the <code>data-bs-scroll</code>{" "}
                    attribute to toggle <code>&lt;body&gt;</code>{" "}
                    scrolling and <code>backdrop</code> to toggle the
                    backdrop.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      onClick={toggleEnableScroll}
                    >
                      Enable body scrolling
                    </Button>
                    <Button color="primary" onClick={toggleBackdrop}>
                      Enable backdrop (default)
                    </Button>
                    <Button
                      color="primary"
                      onClick={toggleScrollBackDrop}
                    >
                      Enable both scrolling & backdrop
                    </Button>
                  </div>
                  <Offcanvas
                    isOpen={isEnableScroll}
                    scrollable
                    backdrop={false}
                    toggle={toggleEnableScroll}
                  >
                    <OffcanvasHeader toggle={toggleEnableScroll}>
                      Colored with scrolling
                    </OffcanvasHeader>
                    <OffcanvasBody>
                      <p>
                        Try scrolling the rest of the page to see this
                        option in action.
                      </p>
                    </OffcanvasBody>
                  </Offcanvas>

                  <Offcanvas
                    isOpen={isBackdrop}
                    toggle={toggleBackdrop}
                  >
                    <OffcanvasHeader toggle={toggleBackdrop}>
                      Offcanvas with backdrop
                    </OffcanvasHeader>
                    <OffcanvasBody>
                      <p>.....</p>
                    </OffcanvasBody>
                  </Offcanvas>

                  <Offcanvas
                    isOpen={isScrollBackDrop}
                    scrollable
                    toggle={toggleScrollBackDrop}
                  >
                    <OffcanvasHeader toggle={toggleScrollBackDrop}>
                      Backdroped with scrolling
                    </OffcanvasHeader>
                    <OffcanvasBody>
                      <p>
                        Try scrolling the rest of the page to see this
                        option in action.
                      </p>
                    </OffcanvasBody>
                  </Offcanvas>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default UiDrawer
