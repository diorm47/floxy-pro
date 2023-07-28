import React from "react"
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"

// Carousel
import IndividualInterval from "./CarouselTypes/individualInterval"
import Slide from "./CarouselTypes/slide"
import SlideDark from "./CarouselTypes/slideDark"
import Slidewithcaption from "./CarouselTypes/slidewithcaption"
import Slidewithcontrol from "./CarouselTypes/slidewithcontrol"
import Slidewithfade from "./CarouselTypes/slidewithfade"
import Slidewithindicator from "./CarouselTypes/slidewithindicator"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiCarousel = () => {
  //meta title
  document.title =
    "Carousel | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="UI Elements"
            breadcrumbItem="Carousel"
          />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle> Slides Only</CardTitle>
                  <CardSubtitle className="mb-3">
                    Here’s a carousel with slides only. Note the
                    presence of the <code>.d-block</code> and{" "}
                    <code>.img-fluid</code> on carousel images to
                    prevent browser default image alignment.
                  </CardSubtitle>
                  <Slide />
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>With controls</CardTitle>
                  <CardSubtitle className="mb-3">
                    Adding in the previous and next controls:
                  </CardSubtitle>
                  <Slidewithcontrol />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>With indicators</CardTitle>
                  <CardSubtitle className="mb-3">
                    You can also add the indicators to the carousel,
                    alongside the controls, too.
                  </CardSubtitle>
                  <Slidewithindicator />
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>With captions</CardTitle>
                  <CardSubtitle className="mb-3">
                    Add captions to your slides easily with the{" "}
                    <code>.carousel-caption</code> element within any{" "}
                    <code>.carousel-item</code>.
                  </CardSubtitle>
                  <Slidewithcaption />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle>Crossfade</CardTitle>
                  <CardSubtitle className="mb-3">
                    Add <code>.carousel-fade</code> to your carousel
                    to animate slides with a fade transition instead
                    of a slide.
                  </CardSubtitle>
                  <Slidewithfade />
                </CardBody>
              </Card>
            </Col>

            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>
                    Individual <code>.carousel-item</code> interval
                  </CardTitle>
                  <p className="card-title-desc">
                    Add <code>data-bs-interval=""</code> to a{" "}
                    <code>.carousel-item</code>
                    to change the amount of time to delay between
                    automatically cycling to the next item.
                  </p>
                  <IndividualInterval />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Dark variant</CardTitle>
                  <p className="card-title-desc">
                    Add <code>.carousel-dark</code> to the{" "}
                    <code>.carousel </code>
                    for darker controls, indicators, and captions.
                    Controls have been inverted from their default
                    white fill with the
                    <code> filter </code> CSS property. Captions and
                    controls have additional Sass variables that
                    customize the
                    <code> color </code> and{" "}
                    <code>background-color</code>.
                  </p>
                  <SlideDark />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default UiCarousel
