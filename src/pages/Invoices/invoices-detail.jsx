import { isEmpty, map } from "lodash"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
//redux
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap"

//Import Image
import logo from "../../assets/images/full-logo-dark.svg"
import logoLight from "../../assets/images/full-logo-light.svg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import withRouter from "../../components/Common/withRouter"
import { getInvoiceDetail as onGetInvoiceDetail } from "../../store/invoices/actions"

const InvoiceDetail = props => {
  //meta title
  document.title =
    "Invoice Detail | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { invoiceDetail } = useSelector(state => ({
    invoiceDetail: state.invoices.invoiceDetail,
  }))

  const params = props.router.params
  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetInvoiceDetail(params.id))
    } else {
      dispatch(onGetInvoiceDetail(1)) //remove this after full integration
    }
  }, [onGetInvoiceDetail])

  //Print the Invoice
  const printInvoice = () => {
    window.print()
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            title="Invoices"
            breadcrumbItem="Invoice Detail"
          />
          {!isEmpty(invoiceDetail) && (
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <div className="invoice-title">
                      <h4 className="float-end font-size-16">
                        Order # {invoiceDetail.orderId}
                      </h4>
                      <div className="mb-4">
                        <img
                          src={logo}
                          alt="logo-dark"
                          className="logo-dark-element"
                          height="20"
                        />
                        <img
                          src={logoLight}
                          alt="logo-light"
                          className="logo-light-element"
                          height="20"
                        />
                      </div>
                    </div>
                    <hr />
                    <Row>
                      <Col sm="6">
                        <address>
                          <strong>Billed To:</strong>
                          <br />
                          {map(
                            invoiceDetail.billingAddress.split(","),
                            (item, key) => (
                              <React.Fragment key={key}>
                                <span>{item}</span>
                                <br />
                              </React.Fragment>
                            )
                          )}
                        </address>
                      </Col>
                      <Col sm="6" className="text-sm-end">
                        <address>
                          <strong>Shipped To:</strong>
                          <br />
                          {map(
                            invoiceDetail.shippingAddress.split(","),
                            (item, key) => (
                              <React.Fragment key={key}>
                                <span>{item}</span>
                                <br />
                              </React.Fragment>
                            )
                          )}
                        </address>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6" className="mt-3">
                        <address>
                          <strong>Payment Method:</strong>
                          <br />
                          {invoiceDetail.card}
                          <br />
                          {invoiceDetail.email}
                        </address>
                      </Col>
                      <Col sm="6" className="mt-3 text-sm-end">
                        <address>
                          <strong>Order Date:</strong>
                          <br />
                          {invoiceDetail.orderDate}
                          <br />
                          <br />
                        </address>
                      </Col>
                    </Row>
                    <div className="py-2 mt-3">
                      <h3 className="font-size-15 fw-bold">
                        Order summary
                      </h3>
                    </div>
                    <div className="table-responsive">
                      <Table className="table-nowrap">
                        <thead>
                          <tr>
                            <th style={{ width: "70px" }}>No.</th>
                            <th>Item</th>
                            <th className="text-end">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {map(
                            invoiceDetail.orderSummary.items,
                            (item, key) => (
                              <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.item}</td>
                                <td className="text-end">
                                  {item.price}
                                </td>
                              </tr>
                            )
                          )}
                          <tr>
                            <td colSpan="2" className="text-end">
                              Sub Total
                            </td>
                            <td className="text-end">
                              {invoiceDetail.orderSummary.subTotal}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan="2"
                              className="border-0 text-end"
                            >
                              <strong>Shipping</strong>
                            </td>
                            <td className="border-0 text-end">
                              {invoiceDetail.orderSummary.shipping}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan="2"
                              className="border-0 text-end"
                            >
                              <strong>Total</strong>
                            </td>
                            <td className="border-0 text-end">
                              <h4 className="m-0">
                                {invoiceDetail.orderSummary.total}
                              </h4>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="d-print-none">
                      <div className="float-end">
                        <Link
                          to="#"
                          onClick={printInvoice}
                          className="btn btn-success  me-2"
                        >
                          <i className="fa fa-print" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-primary w-md "
                        >
                          Send
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  )
}

InvoiceDetail.propTypes = {
  match: PropTypes.any,
}

export default withRouter(InvoiceDetail)
