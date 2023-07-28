import React, { useState } from "react"

import { GoogleApiWrapper, InfoWindow, Map } from "google-maps-react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap"

//Lightbox
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"

// import image
import img1 from "../../assets/images/small/img-1.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
import img6 from "../../assets/images/small/img-6.jpg"
import img7 from "../../assets/images/small/img-7.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const images = [img1, img2, img3, img4, img5, img6]
const imageZoom = [img3, img7]

const LoadingContainer = () => <div>Loading...</div>

const UiLightbox = props => {
  const selectedPlace = {}

  //meta title
  document.title =
    "Lightbox | Skote - Vite React Admin & Dashboard Template"

  const [photoIndex, setphotoIndex] = useState(0)
  const [isFits, setisFits] = useState(false)
  const [isEffects, setisEffects] = useState(false)
  const [isGallery, setisGallery] = useState(false)
  const [isGalleryZoom, setisGalleryZoom] = useState(false)
  const [isOpen, setisOpen] = useState(false)
  const [isOpen1, setisOpen1] = useState(false)
  const [modal, setmodal] = useState(false)
  const [map, setMap] = useState(false)
  function tog_map() {
    setMap(!map)
  }
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="UI Elements"
            breadcrumbItem="Lightbox"
          />

          {isFits ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              enableZoom={false}
              imageCaption={
                "Caption. Can be aligned it to any side and contain any HTML."
              }
              onCloseRequest={() => {
                setisFits(!isFits)
              }}
            />
          ) : null}

          {isEffects ? (
            <Lightbox
              mainSrc={images[2]}
              enableZoom={false}
              onCloseRequest={() => {
                setisEffects(!isEffects)
              }}
            />
          ) : null}

          {isGallery ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={
                images[
                  (photoIndex + images.length - 1) % images.length
                ]
              }
              enableZoom={true}
              onCloseRequest={() => {
                setisGallery(false)
              }}
              onMovePrevRequest={() => {
                setphotoIndex(
                  (photoIndex + images.length - 1) % images.length
                )
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % images.length)
              }}
              imageCaption={"Project " + parseFloat(photoIndex + 1)}
            />
          ) : null}

          {isGalleryZoom ? (
            <Lightbox
              mainSrc={imageZoom[photoIndex]}
              nextSrc={imageZoom[(photoIndex + 1) % imageZoom.length]}
              prevSrc={
                imageZoom[
                  (photoIndex + imageZoom.length - 1) %
                    imageZoom.length
                ]
              }
              onCloseRequest={() => {
                setisGalleryZoom(false)
              }}
              onMovePrevRequest={() => {
                setphotoIndex(
                  (photoIndex + imageZoom.length - 1) %
                    imageZoom.length
                )
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % imageZoom.length)
              }}
            />
          ) : null}

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Single image lightbox</CardTitle>
                  <p className="card-title-desc">
                    Three simple popups with different scaling
                    settings.
                  </p>
                  <Row>
                    <Col className="col-6">
                      <div>
                        <h5 className="mt-0 font-size-14">
                          Fits (Horz/Vert)
                        </h5>
                        <img
                          onClick={() => {
                            setisFits(true)
                          }}
                          className="img-fluid"
                          alt="Skote"
                          src={img2}
                          width="145"
                        />
                      </div>
                    </Col>
                    <Col className="col-6">
                      <div>
                        <h5 className="mt-0 font-size-14">Effects</h5>
                        <img
                          onClick={() => {
                            setisEffects(true)
                          }}
                          className="img-fluid"
                          alt=""
                          src={img3}
                          width="75"
                        />

                        <CardText className="mt-2 mb-0 text-muted">
                          No gaps, zoom animation, close icon in
                          top-right corner.
                        </CardText>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Lightbox gallery
                  </CardTitle>
                  <p className="card-title-desc">
                    In this example lazy-loading of images is enabled
                    for the next image based on move direction.{" "}
                  </p>
                  <div className="popup-gallery d-flex flex-wrap">
                    <div className="img-fluid float-left">
                      <img
                        src={img1}
                        onClick={() => {
                          setisGallery(true)
                          setphotoIndex(0)
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img2}
                        onClick={() => {
                          setisGallery(true)
                          setphotoIndex(1)
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img3}
                        onClick={() => {
                          setisGallery(true)
                          setphotoIndex(2)
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img4}
                        onClick={() => {
                          setisGallery(true)
                          setphotoIndex(3)
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img5}
                        onClick={() => {
                          setisGallery(true)
                          setphotoIndex(4)
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img6}
                        onClick={() => {
                          setisGallery(true)
                          setphotoIndex(5)
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Zoom Gallery</CardTitle>
                  <p className="card-title-desc">
                    Zoom effect works only with images.
                  </p>

                  <div className="zoom-gallery">
                    <img
                      src={img3}
                      className="float-left"
                      onClick={() => {
                        setisGalleryZoom(true)
                        setphotoIndex(0)
                      }}
                      alt=""
                      width="275"
                    />
                    <img
                      src={img7}
                      className="float-left"
                      onClick={() => {
                        setisGalleryZoom(true)
                        setphotoIndex(1)
                      }}
                      alt=""
                      width="275"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Popup with video or map
                  </CardTitle>
                  <p className="card-title-desc">
                    In this example lazy-loading of images is enabled
                    for the next image based on move direction.{" "}
                  </p>

                  <Row>
                    <Col>
                      <Button
                        className="btn btn-secondary me-1"
                        onClick={() => {
                          setisOpen(!isOpen)
                        }}
                      >
                        Open Youtube Video
                      </Button>{" "}
                      <Button
                        className="btn btn-secondary me-1"
                        onClick={() => {
                          setisOpen1(!isOpen1)
                        }}
                      >
                        Open Vimeo Video
                      </Button>{" "}
                      <Button
                        onClick={() => {
                          tog_map()
                        }}
                        className="popup-gmaps btn btn-secondary mo-mb-2"
                      >
                        Open Google Map
                      </Button>
                      <ModalVideo
                        videoId="L61p2uyiMSo"
                        channel="youtube"
                        isOpen={isOpen}
                        onClose={() => {
                          setisOpen(!isOpen)
                        }}
                      />
                      <ModalVideo
                        videoId="L61p2uyiMSo"
                        channel="youtube"
                        isOpen={isOpen1}
                        onClose={() => {
                          setisOpen1(false)
                        }}
                      />
                      <Modal
                        centered
                        isOpen={map}
                        size="lg"
                        toggle={() => {
                          tog_map()
                        }}
                      >
                        <ModalHeader toggle={tog_map}>
                          Google Map
                        </ModalHeader>
                        <ModalBody>
                          <div
                            id="gmaps-markers"
                            className="gmaps"
                            style={{ position: "relative" }}
                          >
                            <Map
                              google={props.google}
                              zoom={14}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              <InfoWindow>
                                <div>
                                  <h1>{selectedPlace.name}</h1>
                                </div>
                              </InfoWindow>
                            </Map>
                          </div>
                        </ModalBody>
                      </Modal>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">
                    Popup with form
                  </CardTitle>
                  <div>
                    <Link
                      onClick={() => {
                        setmodal(!modal)
                      }}
                      to="#"
                      className="popup-form btn btn-primary"
                    >
                      Popup form
                    </Link>
                  </div>

                  <Modal
                    size="xl"
                    isOpen={modal}
                    toggle={() => {
                      setmodal(!modal)
                    }}
                    centered
                  >
                    <ModalHeader
                      toggle={() => {
                        setmodal(!modal)
                      }}
                      className="h4"
                    >
                      Form
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <Row>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter Name"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="password">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <div className="mb-3">
                              <label htmlFor="subject">Subject</label>
                              <textarea
                                className="form-control"
                                id="subject"
                                rows="3"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <div className="text-end">
                              <button
                                type="submit"
                                className="btn btn-primary"
                              >
                                Submit
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </ModalBody>
                  </Modal>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(UiLightbox)
)
