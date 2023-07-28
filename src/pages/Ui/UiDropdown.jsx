import React, { useState } from "react"
import {
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Label,
  Row,
  UncontrolledDropdown,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiDropdown = () => {
  //meta title
  document.title =
    "Dropdowns | Skote - Vite React Admin & Dashboard Template"

  const [singlebtn, setSinglebtn] = useState(false)
  const [singlebtn1, setSinglebtn1] = useState(false)
  const [btnprimary1, setBtnprimary1] = useState(false)
  const [btnsecondary1, setBtnsecondary1] = useState(false)
  const [btnsuccess1, setBtnsuccess1] = useState(false)
  const [btnInfo1, setBtnInfo1] = useState(false)
  const [btnWarning1, setBtnWarning1] = useState(false)
  const [btnDanger1, setBtnDanger1] = useState(false)
  const [drp_primary1, setDrp_primary1] = useState(false)
  const [drp_secondary1, setDrp_secondary1] = useState(false)
  const [drp_success1, setDrp_success1] = useState(false)
  const [drp_info1, setDrp_info1] = useState(false)
  const [drp_warning1, setDrp_warning1] = useState(false)
  const [drp_danger1, setDrp_danger1] = useState(false)
  const [drp_secondary, setDrp_secondary] = useState(false)
  const [drp_secondary_lg, setDrp_secondary_lg] = useState(false)
  const [drp_secondary_sm, setDrp_secondary_sm] = useState(false)
  const [drp_secondary_sm1, setDrp_secondary_sm1] = useState(false)
  const [dropup1, setDropup1] = useState(false)
  const [drp_up11, setDrp_up11] = useState(false)
  const [drop_align, setDrop_align] = useState(false)
  const [info_dropup1, setInfo_dropup1] = useState(false)
  const [infodrp_up11, setInfodrp_up11] = useState(false)
  const [info_dropup111, setInfo_dropup111] = useState(false)
  const [infodrp_up1111, setInfodrp_up1111] = useState(false)

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="UI Elements"
            breadcrumbItem="Dropdowns"
          />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Single button dropdowns</CardTitle>
                  <p className="card-title-desc">
                    Any single{" "}
                    <code className="highlighter-rouge">.btn</code>{" "}
                    can be turned into a dropdown toggle with some
                    markup changes. Here’s how you can put them to
                    work with either{" "}
                    <code className="highlighter-rouge">
                      &lt;button&gt;
                    </code>{" "}
                    elements:
                  </p>
                  <Row>
                    <Col sm={6}>
                      <Dropdown
                        isOpen={singlebtn}
                        toggle={() => setSinglebtn(!singlebtn)}
                      >
                        <DropdownToggle
                          className="btn btn-secondary"
                          caret
                        >
                          Dropdown button{" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col sm={6}>
                      <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                        className="mt-4 mt-sm-0"
                      >
                        <DropdownToggle
                          className="btn btn-secondary"
                          caret
                        >
                          Dropdown Link{" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Variant</CardTitle>
                  <CardSubtitle className="mb-4">
                    The best part is you can do this with any button
                    variant, too:
                  </CardSubtitle>

                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      isOpen={btnprimary1}
                      toggle={() => setBtnprimary1(!btnprimary1)}
                    >
                      <DropdownToggle
                        tag="button"
                        className="btn btn-primary"
                      >
                        Primary <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <Dropdown
                      isOpen={btnsecondary1}
                      toggle={() => setBtnsecondary1(!btnsecondary1)}
                    >
                      <DropdownToggle
                        tag="button"
                        className="btn btn-secondary"
                      >
                        Secondary{" "}
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <Dropdown
                      isOpen={btnsuccess1}
                      toggle={() => setBtnsuccess1(!btnsuccess1)}
                    >
                      <DropdownToggle
                        tag="button"
                        className="btn btn-success"
                      >
                        Success <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <Dropdown
                      isOpen={btnInfo1}
                      toggle={() => setBtnInfo1(!btnInfo1)}
                    >
                      <DropdownToggle
                        tag="button"
                        className="btn btn-info"
                      >
                        Info <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <Dropdown
                      isOpen={btnWarning1}
                      toggle={() => setBtnWarning1(!btnWarning1)}
                    >
                      <DropdownToggle
                        tag="button"
                        className="btn btn-warning"
                      >
                        Warning <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <Dropdown
                      isOpen={btnDanger1}
                      toggle={() => setBtnDanger1(!btnDanger1)}
                    >
                      <DropdownToggle
                        tag="button"
                        className="btn btn-danger"
                      >
                        Danger <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Split button dropdowns</CardTitle>
                  <CardSubtitle className="mb-3">
                    The best part is you can do this with any button
                    variant, too:
                  </CardSubtitle>
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_primary1}
                        toggle={() => setDrp_primary1(!drp_primary1)}
                      >
                        <Button id="caret" color="primary">
                          Primary
                        </Button>
                        <DropdownToggle caret color="primary">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>
                            Something else here
                          </DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem href="#">
                            Separated link
                          </DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_secondary1}
                        toggle={() =>
                          setDrp_secondary1(!drp_secondary1)
                        }
                      >
                        <Button id="caret" color="secondary">
                          Secondary
                        </Button>
                        <DropdownToggle caret color="secondary">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>
                            Something else here
                          </DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem href="#">
                            Separated link
                          </DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_success1}
                        toggle={() => setDrp_success1(!drp_success1)}
                      >
                        <Button id="caret" color="success">
                          Success
                        </Button>
                        <DropdownToggle caret color="success">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>
                            Something else here
                          </DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem href="#">
                            Separated link
                          </DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_info1}
                        toggle={() => setDrp_info1(!drp_info1)}
                      >
                        <Button id="caret" color="info">
                          Info
                        </Button>
                        <DropdownToggle caret color="info">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>
                            Something else here
                          </DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem href="#">
                            Separated link
                          </DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_warning1}
                        toggle={() => setDrp_warning1(!drp_warning1)}
                      >
                        <Button id="caret" color="warning">
                          Warning
                        </Button>
                        <DropdownToggle caret color="warning">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>
                            Something else here
                          </DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem href="#">
                            Separated link
                          </DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_danger1}
                        toggle={() => setDrp_danger1(!drp_danger1)}
                      >
                        <Button id="caret" color="danger">
                          Danger
                        </Button>
                        <DropdownToggle caret color="danger">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>
                            Something else here
                          </DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem href="#">
                            Separated link
                          </DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Sizing</CardTitle>
                  <CardSubtitle className="mb-3">
                    {" "}
                    Button dropdowns work with buttons of all sizes,
                    including default and split dropdown buttons.
                  </CardSubtitle>
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={drp_secondary}
                      toggle={() => setDrp_secondary(!drp_secondary)}
                    >
                      <DropdownToggle
                        caret
                        color="primary"
                        className="btn btn-primary btn-lg"
                      >
                        Large button &nbsp;{" "}
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={drp_secondary_lg}
                      toggle={() =>
                        setDrp_secondary_lg(!drp_secondary_lg)
                      }
                    >
                      <Button className="btn btn-secondary">
                        {" "}
                        Large button &nbsp;
                      </Button>
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary btn-lg"
                      >
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={drp_secondary_sm}
                      toggle={() =>
                        setDrp_secondary_sm(!drp_secondary_sm)
                      }
                    >
                      <DropdownToggle
                        caret
                        color="info"
                        className="btn btn-info btn-sm"
                      >
                        Small button &nbsp;{" "}
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={drp_secondary_sm1}
                      toggle={() =>
                        setDrp_secondary_sm1(!drp_secondary_sm1)
                      }
                    >
                      <Button className="btn btn-secondary btn-sm">
                        {" "}
                        Small button &nbsp;
                      </Button>
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="card-title">
                    Menu Content
                  </CardTitle>
                  <p className="card-title-desc">
                    Example of dropdown menu Headers, Text, Forms
                    content
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <UncontrolledDropdown>
                      <DropdownToggle color="primary" type="button">
                        Header{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <div className="dropdown-header noti-title">
                          <h5 className="font-size-13 text-muted text-truncate mn-0">
                            Welcome Jessie!
                          </h5>
                        </div>
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">
                          Another action
                        </DropdownItem>
                        <DropdownItem href="#">
                          Something else here
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                      <DropdownToggle
                        type="button"
                        className="btn btn-success"
                      >
                        Text <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-md p-3">
                        <p>
                          Some example text that's free-flowing within
                          the dropdown menu.
                        </p>
                        <p className="mb-0">
                          And this is more example text.
                        </p>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                      <DropdownToggle
                        type="button"
                        className="btn btn-light"
                      >
                        Forms <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-md p-4">
                        <Form>
                          <div className="mb-2">
                            <Label
                              className="form-label"
                              htmlFor="exampleDropdownFormEmail"
                            >
                              Email address
                            </Label>
                            <Input
                              type="email"
                              className="form-control"
                              id="exampleDropdownFormEmail"
                              placeholder="email@example.com"
                            />
                          </div>
                          <div className="mb-2">
                            <Label
                              className="form-label"
                              htmlFor="exampleDropdownFormPassword"
                            >
                              Password
                            </Label>
                            <Input
                              type="password"
                              className="form-control"
                              id="exampleDropdownFormPassword"
                              placeholder="Password"
                            />
                          </div>
                          <div className="mb-2">
                            <div className="form-check custom-checkbox">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberdropdownCheck"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="rememberdropdownCheck"
                              >
                                Remember me
                              </Label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary"
                          >
                            Sign in
                          </button>
                        </Form>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Dropdown Menu Dark</CardTitle>
                  <p className="card-title-desc">
                    Opt into darker dropdowns to match a dark navbar
                    or custom style by adding{" "}
                    <code>.dropdown-menu-dark</code> onto an existing{" "}
                    <code>.dropdown-menu</code>. No changes are
                    required to the dropdown items.
                  </p>

                  <UncontrolledDropdown>
                    <DropdownToggle
                      type="button"
                      className="btn btn-secondary"
                    >
                      Menu is right-aligned{" "}
                      <i className="mdi mdi-chevron-down"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-dark">
                      <DropdownItem href="#">Action</DropdownItem>
                      <DropdownItem href="#">
                        Another action
                      </DropdownItem>
                      <DropdownItem href="#">
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Menu Alignment</CardTitle>
                  <p className="card-title-desc">
                    Add{" "}
                    <code className="highlighter-rouge">
                      .dropdown-menu-end
                    </code>{" "}
                    to a{" "}
                    <code className="highlighter-rouge">
                      .dropdown-menu
                    </code>{" "}
                    to right align the dropdown menu.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        type="button"
                        className="btn btn-secondary"
                      >
                        Right-aligned menu example{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">
                          Another action
                        </DropdownItem>
                        <DropdownItem href="#">
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                      <DropdownToggle
                        type="button"
                        className="btn btn-secondary"
                      >
                        Left-aligned but right aligned when large
                        screen{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-lg-end">
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">
                          Another action
                        </DropdownItem>
                        <DropdownItem href="#">
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                      <DropdownToggle
                        type="button"
                        className="btn btn-secondary"
                      >
                        Right-aligned but left aligned when large
                        screen{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-lg-start">
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">
                          Another action
                        </DropdownItem>
                        <DropdownItem href="#">
                          Something else Header
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="card-title">
                    Auto Close Behavior
                  </CardTitle>
                  <p className="card-title-desc">
                    By default, the dropdown menu is closed when
                    clicking inside or outside the dropdown menu. You
                    can use the <code>autoClose</code> option to
                    change this behavior of the dropdown.
                  </p>

                  <div className="d-flex gap-2 flex-wrap">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn btn-secondary"
                        type="button"
                        id="defaultDropdown"
                      >
                        Default dropdown{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn btn-secondary"
                        type="button"
                        id="dropdownMenuClickableOutside"
                      >
                        Clickable outside{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn btn-secondary"
                        type="button"
                        id="dropdownMenuClickableInside"
                      >
                        Clickable inside{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn btn-secondary"
                        type="button"
                        id="dropdownMenuClickable"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="false"
                        aria-expanded="false"
                      >
                        Manual close{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                        <DropdownItem href="#">
                          Menu item
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Dropup variation</CardTitle>
                  <CardSubtitle className="mb-3">
                    Trigger dropdown menus above elements by adding{" "}
                    <code className="highlighter-rouge">.dropup</code>{" "}
                    to the parent element.
                  </CardSubtitle>
                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      className="dropup"
                      isOpen={dropup1}
                      direction="up"
                      toggle={() => setDropup1(!dropup1)}
                    >
                      <DropdownToggle className="btn btn-info">
                        Dropup <i className="mdi mdi-chevron-up" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <ButtonDropdown
                      direction="up"
                      isOpen={drp_up11}
                      toggle={() => setDrp_up11(!drp_up11)}
                    >
                      <Button id="caret" color="info">
                        Split dropup
                      </Button>
                      <DropdownToggle caret color="info">
                        <i className="mdi mdi-chevron-up" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Action action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Dropleft variation</CardTitle>
                  <CardSubtitle className="mb-3">
                    Trigger dropdown menus at the right of the
                    elements by adding <code>.dropleft</code> to the
                    parent element.
                  </CardSubtitle>

                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      isOpen={info_dropup111}
                      direction="left"
                      className="btn-group dropstart"
                      toggle={() =>
                        setInfo_dropup111(!info_dropup111)
                      }
                    >
                      <DropdownToggle className="btn btn-info">
                        <i className="mdi mdi-chevron-left" />{" "}
                        Dropleft
                      </DropdownToggle>
                      <DropdownMenu data-popper-placement="left-start">
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <UncontrolledDropdown>
                      <div className="btn-group dropstart">
                        <DropdownToggle
                          type="button"
                          className="btn btn-info waves-effect waves-light dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-left"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">
                            Another action
                          </DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </div>

                      <button
                        type="button"
                        className="btn btn-info waves-effect waves-light"
                      >
                        Split dropstart
                      </button>
                    </UncontrolledDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Dropright variation</CardTitle>
                  <CardSubtitle className="mb-3">
                    Trigger dropdown menus at the right of the
                    elements by adding <code>.dropright</code> to the
                    parent element.
                  </CardSubtitle>

                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      isOpen={info_dropup1}
                      direction="right"
                      className="btn-group dropend"
                      toggle={() => setInfo_dropup1(!info_dropup1)}
                    >
                      <DropdownToggle className="btn btn-info" caret>
                        Dropright{" "}
                        <i className="mdi mdi-chevron-right" />
                      </DropdownToggle>
                      <DropdownMenu data-popper-placement="right-start">
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <ButtonDropdown
                      direction="right"
                      isOpen={infodrp_up11}
                      className="btn-group dropend"
                      toggle={() => setInfodrp_up11(!infodrp_up11)}
                    >
                      <Button id="caret" color="info">
                        Split dropright
                      </Button>
                      <DropdownToggle
                        caret
                        color="info"
                        className="dropdown-toggle-split"
                      >
                        <i className="mdi mdi-chevron-right" />
                      </DropdownToggle>
                      <DropdownMenu data-popper-placement="right-start">
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
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

export default UiDropdown
