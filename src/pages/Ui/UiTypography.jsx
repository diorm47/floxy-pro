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

const UiTypography = () => {
  //meta title
  document.title =
    "Typography | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="UI Elements"
            breadcrumbItem="Typography"
          />
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3 me-4">
                      <h1 className="display-4 mb-0">A</h1>
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <p className="text-muted mb-2">Font Family</p>
                      <h5 className="mb-0">
                        &quot;Poppins&quot;, sans-serif
                      </h5>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Headings</CardTitle>
                  <p className="card-title-desc">
                    All HTML headings, <code>&lt;h1&gt;</code> through{" "}
                    <code>&lt;h6&gt;</code>, are available.
                  </p>

                  <h1 className="mb-3">
                    h1. Bootstrap heading{" "}
                    <small className="text-muted">
                      2.03125rem (32.5px)
                    </small>
                  </h1>
                  <h2 className="mb-3">
                    h2. Bootstrap heading{" "}
                    <small className="text-muted">
                      1.625rem (26px)
                    </small>
                  </h2>
                  <h3 className="mb-3">
                    h3. Bootstrap heading{" "}
                    <small className="text-muted">
                      1.42188rem (22.75px)
                    </small>
                  </h3>
                  <h4 className="mb-3">
                    h4. Bootstrap heading{" "}
                    <small className="text-muted">
                      1.21875rem (19.5px)
                    </small>
                  </h4>
                  <h5 className="mb-3">
                    h5. Bootstrap heading{" "}
                    <small className="text-muted">
                      1.01563rem (16.25)
                    </small>
                  </h5>
                  <h6>
                    h6. Bootstrap heading{" "}
                    <small className="text-muted">
                      0.8125rem (13px)
                    </small>
                  </h6>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Row>
                    <Col sm="6">
                      <div className="d-flex align-items-center">
                        <div className="me-4">
                          <h1 className="fw-medium display-4 mb-0">
                            Aa
                          </h1>
                        </div>
                        <div className="flex-grow-1">
                          <p className="text-muted mb-2">
                            Font Weight
                          </p>
                          <h4 className="mb-0">500</h4>
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="d-flex align-items-center mt-4 mt-sm-0">
                        <div className="flex-shrink-0 me-4">
                          <h1 className="fw-semibold display-4 mb-0">
                            Aa
                          </h1>
                        </div>
                        <div className="flex-grow-1">
                          <p className="text-muted mb-2">
                            Font Weight
                          </p>
                          <h4 className="mb-0">600</h4>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Display headings
                  </CardTitle>
                  <p className="card-title-desc">
                    Traditional heading elements are designed to work
                    best in the meat of your page content.{" "}
                  </p>

                  <h1 className="display-1">Display 1</h1>
                  <h1 className="display-2">Display 2</h1>
                  <h1 className="display-3">Display 3</h1>
                  <h1 className="display-4">Display 4</h1>
                  <h1 className="display-5">Display 5</h1>
                  <h1 className="display-6 mb-0">Display 6</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Inline text elements
                  </CardTitle>
                  <p className="card-title-desc">
                    Styling for common inline HTML5 elements.
                  </p>

                  <p className="lead">
                    Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus dolor auctor.
                  </p>
                  <p>
                    You can use the mark tag to <mark>highlight</mark>{" "}
                    text.
                  </p>
                  <p>
                    <del>
                      This line of text is meant to be treated as
                      deleted text.
                    </del>
                  </p>
                  <p>
                    <s>
                      This line of text is meant to be treated as no
                      longer accurate.
                    </s>
                  </p>
                  <p>
                    <ins>
                      This line of text is meant to be treated as an
                      addition to the document.
                    </ins>
                  </p>
                  <p>
                    <u>This line of text will render as underlined</u>
                  </p>
                  <p>
                    <small>
                      This line of text is meant to be treated as fine
                      print.
                    </small>
                  </p>
                  <p>
                    <strong>This line rendered as bold text.</strong>
                  </p>
                  <p className="mb-0">
                    <em>This line rendered as italicized text.</em>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Unstyled List</CardTitle>
                  <p className="card-title-desc">
                    Remove the default{" "}
                    <code className="highlighter-rouge">
                      list-style
                    </code>{" "}
                    and left margin on list items (immediate children
                    only).{" "}
                    <strong>
                      This only applies to immediate children list
                      items
                    </strong>
                    , meaning you will need to add the className for
                    any nested lists as well.
                  </p>

                  <ul className="list-unstyled mb-0">
                    <li>Integer molestie lorem at massa</li>
                    <li>
                      Nulla volutpat aliquam velit
                      <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                      </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                  </ul>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Inline List</CardTitle>
                  <p className="card-title-desc">
                    Remove a list’s bullets and apply some light{" "}
                    <code className="highlighter-rouge">margin</code>{" "}
                    with a combination of two classes,{" "}
                    <code className="highlighter-rouge">
                      .list-inline
                    </code>{" "}
                    and
                    <code className="highlighter-rouge">
                      .list-inline-item
                    </code>
                    .
                  </p>

                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">Lorem ipsum</li>
                    <li className="list-inline-item">
                      Phasellus iaculis
                    </li>
                    <li className="list-inline-item">
                      Nulla volutpat
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Blockquotes</CardTitle>
                  <p className="card-title-desc">
                    For quoting blocks of content from another source
                    within your document. Wrap{" "}
                    <code className="highlighter-rouge">
                      &lt;blockquote
                      className=&quot;blockquote&quot;&gt;
                    </code>{" "}
                    around any{" "}
                    <abbr title="HyperText Markup Language">
                      HTML
                    </abbr>{" "}
                    as the quote.
                  </p>
                  <Row>
                    <Col xs="6">
                      <div>
                        <blockquote className="blockquote font-size-16 mb-0">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Integer posuere erat a
                            ante.
                          </p>
                          <footer className="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">
                              Source Title
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    </Col>
                    <Col xs="6">
                      <blockquote className="blockquote  blockquote-reverse font-size-16 mb-0">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Integer posuere erat a
                          ante.
                        </p>
                        <footer className="blockquote-footer">
                          Someone famous in{" "}
                          <cite title="Source Title">
                            Source Title
                          </cite>
                        </footer>
                      </blockquote>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Description list alignment
                  </CardTitle>
                  <p className="card-title-desc">
                    Align terms and descriptions horizontally by using
                    our grid system’s predefined classNamees (or
                    semantic mixins). For longer terms, you can
                    optionally add a{" "}
                    <code className="highlighter-rouge">
                      .text-truncate
                    </code>{" "}
                    className to truncate the text with an ellipsis.
                  </p>

                  <dl className="row mb-0">
                    <dt className="col-sm-3">Description lists</dt>
                    <dd className="col-sm-9">
                      A description list is perfect for defining
                      terms.
                    </dd>

                    <dt className="col-sm-3">Euismod</dt>
                    <dd className="col-sm-9">
                      Vestibulum id ligula porta felis euismod semper
                      eget lacinia odio sem nec elit.
                    </dd>
                    <dd className="col-sm-9 offset-sm-3">
                      Donec id elit non mi porta gravida at eget
                      metus.
                    </dd>

                    <dt className="col-sm-3">Malesuada porta</dt>
                    <dd className="col-sm-9">
                      Etiam porta sem malesuada magna mollis euismod.
                    </dd>

                    <dt className="col-sm-3 text-truncate">
                      Truncated term is truncated
                    </dt>
                    <dd className="col-sm-9">
                      Fusce dapibus, tellus ac cursus commodo, tortor
                      mauris condimentum nibh, ut fermentum massa
                      justo sit amet risus.
                    </dd>

                    <dt className="col-sm-3">Nesting</dt>
                    <dd className="col-sm-9 mb-0">
                      <dl className="row mb-0">
                        <dt className="col-sm-4">
                          Nested definition list
                        </dt>
                        <dd className="col-sm-8">
                          Aenean posuere, tortor sed cursus feugiat,
                          nunc augue blandit nunc.
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Text transform</CardTitle>
                  <p className="card-title-desc">
                    Use <code>.text-lowercase</code>,{" "}
                    <code>.text-uppercase</code>, or{" "}
                    <code>.text-capitalize</code> to transform the
                    text..
                  </p>
                  <div>
                    <p className="text-lowercase">Lowercased text.</p>
                    <p className="text-uppercase">Uppercased text.</p>
                    <p className="text-capitalize mb-0">
                      CapiTaliZed text.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Text decoration
                  </CardTitle>
                  <p className="card-title-desc">
                    Decorate text in components with text decoration
                    classes.
                  </p>
                  <div>
                    <p className="text-decoration-underline">
                      This text has a line underneath it.
                    </p>
                    <p className="text-decoration-line-through">
                      This text has a line going through it.
                    </p>
                    <a href="#" className="text-decoration-none">
                      This link has its text decoration removed
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Font size</CardTitle>
                  <p className="card-title-desc">
                    Quickly change the font-size of text.
                  </p>
                  <div>
                    <p className="fs-1">.fs-1 text</p>
                    <p className="fs-2">.fs-2 text</p>
                    <p className="fs-3">.fs-3 text</p>
                    <p className="fs-4">.fs-4 text</p>
                    <p className="fs-5">.fs-5 text</p>
                    <p className="fs-6 mb-0">.fs-6 text</p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Text wrapping and overflow
                  </CardTitle>
                  <p className="card-title-desc">
                    Wrap text with a <code>.text-wrap</code> class.
                  </p>

                  <div className="mb-3">
                    <div
                      className="badge bg-primary text-wrap"
                      style={{ width: "6rem" }}
                    >
                      This text should wrap.
                    </div>
                  </div>

                  <p className="card-title-desc">
                    Prevent text from wrapping with a{" "}
                    <code>.text-nowrap</code> class.
                  </p>

                  <div>
                    <div
                      className="text-nowrap bg-light border"
                      style={{ width: "8rem" }}
                    >
                      This text should overflow the parent.
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="h4">Word break</CardTitle>
                  <p className="card-title-desc">
                    Use <code>text-break</code> class to prevent long
                    strings of text from breaking your components'
                    layout.
                  </p>

                  <div>
                    <p className="text-break mb-0">
                      mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Font weight and italics
                  </CardTitle>
                  <p className="card-title-desc">
                    <code>font-style</code> utilities are abbreviated
                    as <code>.fst-*</code> and{" "}
                    <code>font-weight</code> utilities are abbreviated
                    as <code>.fw-*</code>.
                  </p>

                  <div>
                    <p className="fw-bold">Bold text.</p>
                    <p className="fw-bolder">
                      Bolder weight text (relative to the parent
                      element).
                    </p>
                    <p className="fw-semibold">
                      Semibold weight text.
                    </p>
                    <p className="fw-normal">Normal weight text.</p>
                    <p className="fw-light">Light weight text.</p>
                    <p className="fw-lighter">
                      Lighter weight text (relative to the parent
                      element).
                    </p>
                    <p className="fst-italic">Italic text.</p>
                    <p className="fst-normal mb-0">
                      Text with normal font style
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Line height</h4>
                  <p className="card-title-desc">
                    Wrap text with a <code>.text-wrap</code> class.
                  </p>

                  <div>
                    <p className="lh-1">
                      This is a long paragraph written to show how the
                      line-height of an element is affected by our
                      utilities. Classes are applied to the element
                      itself or sometimes the parent element. These
                      classes can be customized as needed with our
                      utility API.
                    </p>
                    <p className="lh-sm">
                      This is a long paragraph written to show how the
                      line-height of an element is affected by our
                      utilities. Classes are applied to the element
                      itself or sometimes the parent element. These
                      classes can be customized as needed with our
                      utility API.
                    </p>
                    <p className="lh-base">
                      This is a long paragraph written to show how the
                      line-height of an element is affected by our
                      utilities. Classes are applied to the element
                      itself or sometimes the parent element. These
                      classes can be customized as needed with our
                      utility API.
                    </p>
                    <p className="lh-lg mb-0">
                      This is a long paragraph written to show how the
                      line-height of an element is affected by our
                      utilities. Classes are applied to the element
                      itself or sometimes the parent element. These
                      classes can be customized as needed with our
                      utility API.
                    </p>
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
export default UiTypography
