import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

//import images
import wechat from "../../../assets/images/companies/wechat.svg"

const DetailsSection = () => {
  return (
    <>
      <Col xl={9}>
        <Card>
          <CardBody className="border-bottom">
            <div className="d-flex">
              <img src={wechat} alt="" height="50" />
              <div className="flex-grow-1 ms-3">
                <h5 className="fw-semibold">Magento Developer</h5>
                <ul className="list-unstyled hstack gap-2 mb-0">
                  <li>
                    <i className="bx bx-building-house"></i>{" "}
                    <span className="text-muted">Themesbrand</span>
                  </li>
                  <li>
                    <i className="bx bx-map"></i>{" "}
                    <span className="text-muted">California</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
          <CardBody>
            <h5 className="fw-semibold mb-3">Description</h5>
            <p className="text-muted">
              We are looking to hire a skilled Magento developer to
              build and maintain eCommerce websites for our clients.
              As a Magento developer, you will be responsible for
              liaising with the design team, setting up Magento 1x and
              2x sites, building modules and customizing extensions,
              testing the performance of each site, and maintaining
              security and feature updates after the installation is
              complete.
            </p>

            <h5 className="fw-semibold mb-3">Responsibilities:</h5>
            <ul className="vstack gap-3">
              <li>
                Meeting with the design team to discuss the needs of
                the company.
              </li>
              <li>
                Building and configuring Magento 1x and 2x eCommerce
                websites.
              </li>
              <li>Coding of the Magento templates.</li>
              <li>
                Developing Magento modules in PHP using best
                practices.
              </li>
              <li>Designing themes and interfaces.</li>
              <li>Setting performance tasks and goals.</li>
              <li>Updating website features and security patches.</li>
            </ul>

            <h5 className="fw-semibold mb-3">Requirements:</h5>
            <ul className="vstack gap-3">
              <li>
                Bachelor’s degree in computer science or related
                field.
              </li>
              <li>
                Advanced knowledge of Magento, JavaScript, HTML, PHP,
                CSS, and MySQL.
              </li>
              <li>
                Experience with complete eCommerce lifecycle
                development.
              </li>
              <li>Understanding of modern UI/UX trends.</li>
              <li>
                Knowledge of Google Tag Manager, SEO, Google
                Analytics, PPC, and A/B Testing.
              </li>
              <li>
                Good working knowledge of Adobe Photoshop and Adobe
                Illustrator.
              </li>
              <li>Strong attention to detail.</li>
              <li>
                Ability to project-manage and work to strict
                deadlines.
              </li>
              <li>Ability to work in a team environment.</li>
            </ul>

            <h5 className="fw-semibold mb-3">Qualification:</h5>
            <ul className="vstack gap-3">
              <li>
                B.C.A / M.C.A under National University course
                complete.
              </li>
              <li>
                3 or more years of professional design experience
              </li>
              <li>
                Advanced degree or equivalent experience in graphic
                and web design
              </li>
            </ul>

            <h5 className="fw-semibold mb-3">Skill & Experience:</h5>
            <ul className="vstack gap-3 mb-0">
              <li>Understanding of key Design Principal</li>
              <li>Proficiency With HTML, CSS, Bootstrap</li>
              <li>WordPress: 1 year (Required)</li>
              <li>
                Experience designing and developing responsive design
                websites
              </li>
              <li>web designing: 1 year (Preferred)</li>
            </ul>

            <div className="mt-4">
              <span className="badge badge-soft-warning me-1">
                PHP
              </span>
              <span className="badge badge-soft-warning me-1">
                Magento
              </span>
              <span className="badge badge-soft-warning me-1">
                Marketing
              </span>
              <span className="badge badge-soft-warning me-1">
                WordPress
              </span>
              <span className="badge badge-soft-warning">
                Bootstrap
              </span>
            </div>

            <div className="mt-4">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mt-1">
                  Share this job:
                </li>
                <li className="list-inline-item mt-1">
                  <Link
                    to="#"
                    className="btn btn-outline-primary btn-hover"
                  >
                    <i className="uil uil-facebook-f"></i> Facebook
                  </Link>
                </li>
                <li className="list-inline-item mt-1">
                  <Link
                    to="#"
                    className="btn btn-outline-danger btn-hover"
                  >
                    <i className="uil uil-google"></i> Google+
                  </Link>
                </li>
                <li className="list-inline-item mt-1">
                  <Link
                    to="#"
                    className="btn btn-outline-success btn-hover"
                  >
                    <i className="uil uil-linkedin-alt"></i> linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default DetailsSection
