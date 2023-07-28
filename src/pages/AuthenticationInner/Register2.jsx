import { useFormik } from "formik"
import React from "react"
import { Link } from "react-router-dom"
import {
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from "reactstrap"

// Formik Validation
import * as Yup from "yup"

// import images
import logodark from "../../assets/images/full-logo-dark.svg"
import logolight from "../../assets/images/full-logo-light.svg"
import CarouselPage from "./CarouselPage"

const Register2 = () => {
  //meta title
  document.title =
    "Register 2 | Skote - Vite React Admin & Dashboard Template"

  //form validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: values => {
      // console.log(values);
    },
  })
  return (
    <>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0">
            <CarouselPage />

            <Col xl={3}>
              <div className="auth-full-page-content p-md-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5">
                      <Link
                        to="dashboard"
                        className="d-block auth-logo"
                      >
                        <img
                          src={logodark}
                          alt=""
                          height="18"
                          className="logo-dark-element"
                        />
                        <img
                          src={logolight}
                          alt=""
                          height="18"
                          className="logo-light-element"
                        />
                      </Link>
                    </div>
                    <div className="my-auto">
                      <div>
                        <h5 className="text-primary">
                          Register account
                        </h5>
                        <p className="text-muted">
                          Get your free Skote account now.
                        </p>
                      </div>

                      <div className="mt-4">
                        <Form
                          className="form-horizontal"
                          onSubmit={e => {
                            e.preventDefault()
                            validation.handleSubmit()
                            return false
                          }}
                        >
                          <div className="mb-3">
                            <Label className="form-label">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={
                                validation.touched.email &&
                                validation.errors.email
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </div>

                          <div className="mb-3">
                            <Label className="form-label">
                              Username
                            </Label>
                            <Input
                              name="username"
                              type="text"
                              placeholder="Enter username"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.username || ""}
                              invalid={
                                validation.touched.username &&
                                validation.errors.username
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.username &&
                            validation.errors.username ? (
                              <FormFeedback type="invalid">
                                {validation.errors.username}
                              </FormFeedback>
                            ) : null}
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">
                              Password
                            </Label>
                            <Input
                              name="password"
                              type="password"
                              placeholder="Enter password"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.password || ""}
                              invalid={
                                validation.touched.password &&
                                validation.errors.password
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.password &&
                            validation.errors.password ? (
                              <FormFeedback type="invalid">
                                {validation.errors.password}
                              </FormFeedback>
                            ) : null}
                          </div>

                          <div>
                            <p className="mb-0">
                              By registering you agree to the Skote{" "}
                              <a href="#" className="text-primary">
                                Terms of Use
                              </a>
                            </p>
                          </div>

                          <div className="mt-4 d-grid">
                            <button
                              className="btn btn-primary waves-effect waves-light "
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                        </Form>

                        <Form action="dashboard">
                          <div className="mt-4 text-center">
                            <h5 className="font-size-14 mb-3">
                              Sign up using
                            </h5>

                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  className="social-list-item bg-primary text-white border-primary me-1"
                                >
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  className="social-list-item bg-info text-white border-info me-1"
                                >
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  className="social-list-item bg-danger text-white border-danger"
                                >
                                  <i className="mdi mdi-google"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </Form>

                        <div className="mt-5 text-center">
                          <p>
                            Already have an account ?{" "}
                            <Link
                              to="pages-login-2"
                              className="fw-medium text-primary"
                            >
                              {" "}
                              Login
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()}
                        Skote. Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i>{" "}
                        by Themesbrand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Register2
