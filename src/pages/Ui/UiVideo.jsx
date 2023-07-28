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

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiVideo = () => {
  //meta title
  document.title =
    "Video | Skote - Vite React Admin & Dashboard Template"
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Video" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Responsive embed video 16:9</CardTitle>
                  <CardSubtitle className="mb-3">
                    Aspect ratios can be customized with modifier
                    className.
                  </CardSubtitle>

                  <div className="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
                    <iframe
                      title="test"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Responsive embed video 21:9</CardTitle>
                  <CardSubtitle className="mb-3">
                    Aspect ratios can be customized with modifier
                    className.
                  </CardSubtitle>

                  <div className="embed-responsive embed-responsive-21by9 ratio ratio-21x9">
                    <iframe
                      title="test1"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Responsive embed video 4:3</CardTitle>
                  <CardSubtitle className="mb-3">
                    Aspect ratios can be customized with modifier
                    className.
                  </CardSubtitle>

                  <div className="embed-responsive embed-responsive-4by3 ratio ratio ratio-4x3">
                    <iframe
                      title="tes2"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Responsive embed video 1:1</CardTitle>
                  <CardSubtitle className="mb-3">
                    Aspect ratios can be customized with modifier
                    className.
                  </CardSubtitle>

                  <div className="embed-responsive embed-responsive-1by1 ratio ratio-1x1">
                    <iframe
                      title="test3"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                    />
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

export default UiVideo
