import React from "react"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import img3 from "../../assets/images/small/img-3.jpg"
import avtar2 from "../../assets/images/users/avatar-2.jpg"
import avtar5 from "../../assets/images/users/avatar-5.jpg"

const UiUtilites = () => {
  document.title =
    "Utilities | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="UI Elements"
            breadcrumbItem="Utilites"
          />

          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Borders</h4>
                  <p className="card-title-desc">
                    Use border utilities to add or remove an element’s
                    borders. Choose from all borders or one at a time.
                  </p>

                  <div>
                    <h6 className="mb-3">Border Width</h6>

                    <div className="hstack gap-3">
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border text-center">
                          <code>.border</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-1 text-center">
                          <code>.border-1</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-2 text-center">
                          <code>.border-2</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-3 text-center">
                          <code>.border-3</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-4 text-center">
                          <code>.border-4</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-5 text-center">
                          <code>.border-5</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Row className="mt-4">
                    <Col xl={6}>
                      <div>
                        <h6 className="mb-3">Additive</h6>

                        <div className="hstack gap-3">
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border text-center">
                              <code>.border</code>
                            </div>
                          </div>
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border-top text-center">
                              <code>.border-top</code>
                            </div>
                          </div>
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border-end text-center">
                              <code>.border-end</code>
                            </div>
                          </div>
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border-bottom text-center">
                              <code>.border-bottom</code>
                            </div>
                          </div>
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border-start text-center">
                              <code>.border-start</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xl={6}>
                      <div>
                        <h6 className="mb-3">Subtractive</h6>

                        <div className="hstack gap-3">
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border-0 text-center">
                              <code>.border-0</code>
                            </div>
                          </div>
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border border-top-0 text-center">
                              <code>.border-top-0</code>
                            </div>
                          </div>
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border border-end-0 text-center">
                              <code>.border-end-0</code>
                            </div>
                          </div>
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border border-bottom-0 text-center">
                              <code>.border-bottom-0</code>
                            </div>
                          </div>
                          <div className="avatar-md">
                            <div className="avatar-title bg-light border-primary border border-start-0 text-center">
                              <code>.border-start-0</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <h6 className="mb-3">Border Color</h6>

                    <div className="hstack gap-3">
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-primary text-center">
                          <code>.border-primary</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-secondary text-center">
                          <code>.border-secondary</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-success text-center">
                          <code>.border-success</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-danger text-center">
                          <code>.border-danger</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-info text-center">
                          <code>.border-info</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-warning text-center">
                          <code>.border-warning</code>
                        </div>
                      </div>
                      <div className="avatar-md">
                        <div className="avatar-title bg-transparent border border-dark text-center">
                          <code>.border-dark</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h6 className="mb-3">Border Opacity</h6>

                    <div className="hstack gap-4">
                      <div className="text-center">
                        <div className="avatar-md mx-auto mb-1">
                          <div className="avatar-title bg-transparent border border-primary text-center"></div>
                        </div>
                        <code>default</code>
                      </div>
                      <div className="text-center">
                        <div className="avatar-md mx-auto mb-1">
                          <div className="avatar-title bg-transparent border border-primary border-opacity-75 text-center"></div>
                        </div>
                        <code>.border-opacity-75</code>
                      </div>
                      <div className="text-center">
                        <div className="avatar-md mx-auto mb-1">
                          <div className="avatar-title bg-transparent border border-primary border-opacity-50 text-center"></div>
                        </div>
                        <code>.border-opacity-50</code>
                      </div>
                      <div className="text-center">
                        <div className="avatar-md mx-auto mb-1">
                          <div className="avatar-title bg-transparent border border-primary border-opacity-25 text-center"></div>
                        </div>
                        <code>.border-opacity-25</code>
                      </div>
                      <div className="text-center">
                        <div className="avatar-md mx-auto mb-1">
                          <div className="avatar-title bg-transparent border border-primary border-opacity-10 text-center"></div>
                        </div>
                        <code>.border-opacity-10</code>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h6 className="mb-3">Border Radius</h6>

                    <div className="hstack gap-4">
                      <div className="text-center">
                        <img
                          src={avtar5}
                          alt=""
                          className="avatar-md rounded d-block mx-auto"
                        />
                        <code>.rounded</code>
                      </div>
                      <div className="text-center">
                        <img
                          src={avtar5}
                          alt=""
                          className="avatar-md rounded-top d-block mx-auto"
                        />
                        <code>.rounded-top</code>
                      </div>
                      <div className="text-center">
                        <img
                          src={avtar5}
                          alt=""
                          className="avatar-md rounded-end d-block mx-auto"
                        />
                        <code>.rounded-end</code>
                      </div>
                      <div className="text-center">
                        <img
                          src={avtar5}
                          alt=""
                          className="avatar-md rounded-bottom d-block mx-auto"
                        />
                        <code>.rounded-bottom</code>
                      </div>
                      <div className="text-center">
                        <img
                          src={avtar5}
                          alt=""
                          className="avatar-md rounded-start d-block mx-auto"
                        />
                        <code>.rounded-start</code>
                      </div>
                      <div className="text-center">
                        <img
                          src={avtar5}
                          alt=""
                          className="avatar-md rounded-circle d-block mx-auto"
                        />
                        <code>.rounded-circle</code>
                      </div>
                      <div className="text-center">
                        <img
                          src={img3}
                          alt=""
                          height="72"
                          className="rounded-pill d-block mx-auto"
                        />
                        <code>.rounded-pill</code>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h6 className="mb-3">Border Radius Sizes</h6>
                      <div className="hstack gap-4">
                        <div className="text-center">
                          <img
                            src={avtar2}
                            alt=""
                            className="avatar-md rounded-0 d-block mx-auto"
                          />
                          <code>.rounded-0</code>
                        </div>
                        <div className="text-center">
                          <img
                            src={avtar2}
                            alt=""
                            className="avatar-md rounded-1 d-block mx-auto"
                          />
                          <code>.rounded-1</code>
                        </div>
                        <div className="text-center">
                          <img
                            src={avtar2}
                            alt=""
                            className="avatar-md rounded-2 d-block mx-auto"
                          />
                          <code>.rounded-2</code>
                        </div>
                        <div className="text-center">
                          <img
                            src={avtar2}
                            alt=""
                            className="avatar-md rounded-3 d-block mx-auto"
                          />
                          <code>.rounded-3</code>
                        </div>
                        <div className="text-center">
                          <img
                            src={avtar2}
                            alt=""
                            className="avatar-md rounded-4 d-block mx-auto"
                          />
                          <code>.rounded-4</code>
                        </div>
                        <div className="text-center">
                          <img
                            src={avtar2}
                            alt=""
                            className="avatar-md rounded-5 d-block mx-auto"
                          />
                          <code>.rounded-5</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Stacks - Vertical</h4>
                  <p className="card-title-desc">
                    Use <code>.vstack</code> to create vertical
                    layouts. Stacked items are full-width by default.
                    Use <code>.gap-*</code> utilities to add space
                    between items.
                  </p>

                  <div className="vstack gap-3 mb-4">
                    <div className="bg-light border">First item</div>
                    <div className="bg-light border">Second item</div>
                    <div className="bg-light border">Third item</div>
                  </div>

                  <h6 className="mb-3">Vertical Stacks Example</h6>
                  <div className="vstack gap-2 col-md-5 mx-auto">
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      Cancel
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Stacks - Horizontal</h4>
                  <p className="card-title-desc">
                    Use <code>.vstack</code> to create vertical
                    layouts. Stacked items are full-width by default.
                    Use <code>.gap-*</code> utilities to add space
                    between items.
                  </p>

                  <div className="hstack gap-3 mb-4">
                    <div className="bg-light border">First item</div>
                    <div className="bg-light border">Second item</div>
                    <div className="bg-light border">Third item</div>
                  </div>

                  <p className="card-title-desc">
                    Using horizontal margin utilities like ms-auto as
                    spacers:
                  </p>
                  <div className="hstack gap-3 mb-4">
                    <div className="bg-light border">First item</div>
                    <div className="bg-light border ms-auto">
                      Second item
                    </div>
                    <div className="vr"></div>
                    <div className="bg-light border">Third item</div>
                  </div>

                  <h6 className="mb-3">Horizontal Stacks Examples</h6>
                  <div className="hstack gap-3">
                    <input
                      className="form-control me-auto"
                      type="text"
                      placeholder="Add your item here..."
                      aria-label="Add your item here..."
                    />
                    <button
                      type="button"
                      className="btn btn-secondary"
                    >
                      Submit
                    </button>
                    <div className="vr"></div>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      Reset
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Shadows</h4>
                  <p className="card-title-desc">
                    While shadows on components are disabled by
                    default in Bootstrap and can be enabled via{" "}
                    <code>$enable-shadows</code>, you can also quickly
                    add or remove a shadow with our{" "}
                    <code>box-shadow</code> utility classes. Includes
                    support for <code>.shadow-none</code> and three
                    default sizes (which have associated variables to
                    match).
                  </p>

                  <div className="vstack gap-5">
                    <div className="shadow-none p-3 bg-light rounded">
                      No shadow <code>.shadow-none</code>
                    </div>
                    <div className="shadow-sm p-3 bg-body rounded">
                      Small shadow <code>shadow-sm</code>
                    </div>
                    <div className="shadow p-3 bg-white rounded">
                      Regular shadow <code>shadow</code>
                    </div>
                    <div className="shadow-lg p-3 bg-body rounded">
                      Larger shadow <code>shadow-lg</code>
                    </div>
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
export default UiUtilites
