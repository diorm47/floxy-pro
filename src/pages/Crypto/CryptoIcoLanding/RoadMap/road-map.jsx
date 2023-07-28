import React, { useState } from "react"
import { Col, Container, Row } from "reactstrap"

//swiper
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "../../../../../node_modules/swiper/swiper.scss"

const RoadMap = () => {
  return (
    <>
      <section className="section bg-white" id="roadmap">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">Timeline</div>
                <h4>Our Roadmap</h4>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg="12">
              <div className="hori-timeline">
                <Swiper
                  slidesPerView={1}
                  // spaceBetween={10}
                  navigation
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    678: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  className="owl-carousel owl-theme events navs-carousel"
                  id="timeline-carousel"
                >
                  <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">
                          December, 2019
                        </div>
                        <h5 className="mb-4">ICO Platform Idea</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">
                          It will be as simple as occidental in fact
                          it will be Cambridge
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">
                          January, 2020
                        </div>
                        <h5 className="mb-4">Research on project</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">
                          To an English person, it will seem like
                          simplified English existence.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list active">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">
                          February, 2020
                        </div>
                        <h5 className="mb-4">ICO & Token Design</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">
                          For science, music, sport, etc, Europe uses
                          the same vocabulary.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">
                          March, 2020
                        </div>
                        <h5 className="mb-4">ICO Launch Platform</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">
                          New common language will be more simple than
                          existing.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">
                          April, 2020
                        </div>
                        <h5 className="mb-4">Token sale round 1</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">
                          It will be as simple as occidental in fact
                          it will be Cambridge
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="item event-list">
                    <div>
                      <div className="event-date">
                        <div className="text-primary mb-1">
                          May, 2020
                        </div>
                        <h5 className="mb-4">Token sale round 2</h5>
                      </div>
                      <div className="event-down-icon">
                        <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">
                          To an English person, it will seem like
                          simplified English existence.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default RoadMap
