import React, { useState } from "react"

//Import Breadcrumb
import {
  Badge,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Rating Plugin
import Rating from "react-rating"
import RatingTooltip from "react-rating-tooltip"

const UiRating = () => {
  //meta title
  document.title =
    "Rating | Skote - Vite React Admin & Dashboard Template"

  const [def, setdef] = useState("")
  const [rate, setRate] = useState("")
  const [rating, setRating] = useState("")
  const [secondrate, setSecondRate] = useState("")
  const [startrate, setStartrate] = useState("")
  const [customize, setcustomize] = useState("")
  const starStyle = {}

  const tooltipContent = [
    "Rate 1",
    "Rate 2",
    "Rate 3",
    "Rate 4",
    "Rate 5",
  ]
  const tooltipContentMore = ["1", "2", "3", "4", "5", "6", "7", "8"]
  const tooltipContentMiddle = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ]
  const tooltipContentStep = ["2", "4", "6", "8", "10"]

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Rating" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Row>
                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-size-15">
                          Default rating
                        </h5>
                        <div className="d-flex justify-content-center align-items-center">
                          <Rating
                            max={5}
                            initialRating
                            emptySymbol="mdi mdi-star-outline text-muted"
                            fullSymbol="mdi mdi-star text-primary"
                            className="rating-symbol-background"
                          />
                        </div>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-size-15">Half rating</h5>
                        <div className="d-flex justify-content-center align-items-center">
                          <Rating
                            max={5}
                            initialRating={1.5}
                            fractions={2}
                            emptySymbol="mdi mdi-star-outline text-primary "
                            fullSymbol="mdi mdi-star text-primary "
                            className="rating-symbol-background"
                          />
                        </div>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-size-15">
                          Disabled rating
                        </h5>
                        <Rating
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary rating-symbol-background"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                          readonly={true}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-size-15">
                          Readonly rating with a value
                        </h5>
                        <Rating
                          stop={5}
                          emptySymbol="mdi mdi-star-outline text-primary "
                          fullSymbol="mdi mdi-star text-primary "
                          className="rating-symbol-background"
                          initialRating={2.5}
                          readonly
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Customized heart rating
                        </h5>
                        <div className="d-flex justify-content-center align-items-center">
                          <Rating
                            max={5}
                            onChange={def => {
                              setdef(def)
                            }}
                            emptySymbol="mdi mdi-heart-outline text-danger "
                            fullSymbol="mdi mdi-heart text-danger "
                            className="rating-symbol-background"
                          />
                          <Badge color="info" className="ms-2">
                            {def}
                          </Badge>
                        </div>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Handle events
                        </h5>
                        <Rating
                          onChange={rate => alert("Rating : " + rate)}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Customize tooltips
                        </h5>
                        <Rating
                          max={5}
                          clearRating={false}
                          onChange={rate => {
                            setdef(rate)
                          }}
                          tooltipContent={tooltipContent}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Default rating
                        </h5>
                        <Rating
                          max={8}
                          clearRating={false}
                          tooltipContent={tooltipContentMore}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start rate to 5 [6..10]
                        </h5>
                        <Rating
                          max={5}
                          onChange={() => {
                            setStartrate(!startrate)
                          }}
                          emptySymbol="mdi mdi-star-outline text-primary "
                          fullSymbol="mdi mdi-star text-primary "
                          className="rating-symbol-background"
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start and stop rate [2..10]
                        </h5>
                        <Rating
                          max={11}
                          onChange={() => {
                            setSecondRate(!secondrate)
                          }}
                          clearRating={false}
                          tooltipContent={tooltipContentMiddle}
                          defaultRating={4}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          On Hover Event
                        </h5>
                        <div className="d-flex justify-content-center align-items-center">
                          <Rating
                            stop={5}
                            emptySymbol="mdi mdi-star-outline text-primary "
                            fullSymbol="mdi mdi-star text-primary "
                            onChange={customize =>
                              setcustomize(customize)
                            }
                            className="rating-symbol-background"
                          />
                          <Badge
                            color="info"
                            className="ratingnum align-middle ms-2"
                          >
                            {customize}
                          </Badge>
                        </div>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Custom icons
                        </h5>
                        <Rating
                          stop={5}
                          emptySymbol="mdi mdi-battery-outline fa-2x text-muted"
                          fullSymbol={[
                            "mdi mdi-battery-20 fa-2x text-primary",
                            "mdi mdi-battery-50 fa-2x text-primary",
                            "mdi mdi-battery-70 fa-2x text-primary",
                            "mdi mdi-battery-90 fa-2x text-primary",
                          ]}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Fractional rating
                        </h5>
                        <Rating
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={starStyle}
                            />
                          }
                          fractions={6}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Custom CSS icons
                        </h5>
                        <Rating
                          onChange={rating => {
                            setRating(rating)
                          }}
                          fractions={2}
                        />
                      </div>
                    </Col>
                  </Row>{" "}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default UiRating
