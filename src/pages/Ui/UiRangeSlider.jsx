import React, { useState } from "react"
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

import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"

const UiRangeSlider = () => {
  //meta title
  document.title =
    "Range Slider | Skote - Vite React Admin & Dashboard Template"

  const formatkg = value => "$ " + value
  const formatdollar = value => value + " kg"
  const extra_age = value => value + " Age"

  const [def, setdef] = useState(15)
  const [min_max, setmin_max] = useState(70)
  const [step, setstep] = useState(25)
  const [prefix, setprefix] = useState(50)
  const [postfix, setpostfix] = useState(85)
  const [custom_val, setcustom_val] = useState(5)
  const [float_val, setfloat_val] = useState(55.5)
  const [extra, setextra] = useState(52)
  const [hide, sethide] = useState(5)

  const labels = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  }

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="UI Elements"
            breadcrumbItem="Range Slider"
          />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle>React Rangeslider</CardTitle>
                  <Row>
                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Default
                        </h5>
                        <span className="float-left mt-4">0</span>{" "}
                        <span className="float-right  mt-4">100</span>
                        <Slider
                          value={def}
                          orientation="horizontal"
                          onChange={value => {
                            setdef(value)
                          }}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Min-Max
                        </h5>
                        <span className="float-left mt-4">30</span>{" "}
                        <span className="float-right  mt-4">90</span>
                        <Slider
                          value={min_max}
                          min={30}
                          max={90}
                          orientation="horizontal"
                          onChange={value => {
                            setmin_max(value)
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Prefix
                        </h5>
                        <span className="float-left mt-4">0</span>{" "}
                        <span className="float-right  mt-4">100</span>
                        <Slider
                          min={0}
                          max={100}
                          format={formatkg}
                          value={prefix}
                          onChange={value => {
                            setprefix(value)
                          }}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Postfixes
                        </h5>
                        <span className="float-left mt-4">0</span>{" "}
                        <span className="float-right  mt-4">100</span>
                        <Slider
                          min={0}
                          max={100}
                          format={formatdollar}
                          value={postfix}
                          onChange={value => {
                            setpostfix(value)
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Step
                        </h5>
                        <span className="float-left mt-4">0</span>{" "}
                        <span className="float-right  mt-4">100</span>
                        <Slider
                          value={step}
                          step={10}
                          orientation="horizontal"
                          onChange={value => {
                            setstep(value)
                          }}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Custom Values
                        </h5>
                        <Slider
                          value={custom_val}
                          min={1}
                          max={12}
                          labels={labels}
                          orientation="horizontal"
                          onChange={value => {
                            setcustom_val(value)
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Reverse
                        </h5>
                        <span className="float-left mt-4">100</span>{" "}
                        <span className="float-right  mt-4">0</span>
                        <Slider
                          min={0}
                          max={100}
                          value={hide}
                          reverse={true}
                          onChange={value => {
                            sethide(value)
                          }}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Extra Example
                        </h5>
                        <span className="float-left mt-4">0</span>{" "}
                        <span className="float-right  mt-4">100</span>
                        <Slider
                          min={0}
                          max={100}
                          format={extra_age}
                          value={extra}
                          onChange={value => {
                            setextra(value)
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="p-3">
                        <h5 className="font-size-14 mb-3 mt-0">
                          Prettify Numbers
                        </h5>
                        <span className="float-left mt-4">1</span>{" "}
                        <span className="float-right  mt-4">100</span>
                        <Slider
                          value={float_val}
                          step={0.5}
                          orientation="horizontal"
                          onChange={value => {
                            setfloat_val(value)
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default UiRangeSlider
