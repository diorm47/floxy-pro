import "bootstrap/dist/css/bootstrap.min.css"
import { useFormik } from "formik"
import { isEmpty } from "lodash"
import PropTypes from "prop-types"
import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import TableContainer from "../../../components/Common/TableContainer"

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import DeleteModal from "../../../components/Common/DeleteModal"

import {
  addNewOrder as onAddNewOrder,
  deleteOrder as onDeleteOrder,
  getOrders as onGetOrders,
  updateOrder as onUpdateOrder,
} from "/src/store/actions"

import {
  BillingName,
  Date,
  OrderId,
  PaymentMethod,
  PaymentStatus,
  Total,
} from "./EcommerceOrderCol"

//redux
import { useDispatch, useSelector } from "react-redux"
import EcommerceOrdersModal from "./EcommerceOrdersModal"

import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  UncontrolledTooltip,
} from "reactstrap"

function EcommerceOrder() {
  //meta title
  document.title =
    "Orders | Skote - Vite React Admin & Dashboard Template"

  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const [orderList, setOrderList] = useState([])
  const [order, setOrder] = useState(null)

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      orderId: (order && order.orderId) || "",
      billingName: (order && order.billingName) || "",
      orderdate: (order && order.orderdate) || "",
      total: (order && order.total) || "",
      paymentStatus: (order && order.paymentStatus) || "Paid",
      badgeclass: (order && order.badgeclass) || "success",
      paymentMethod: (order && order.paymentMethod) || "Mastercard",
    },
    validationSchema: Yup.object({
      orderId: Yup.string()
        .matches(/[0-9\.\-\s+\/()]+/, "Please Enter Valid Order Id")
        .required("Please Enter Your Order Id"),
      billingName: Yup.string().required(
        "Please Enter Your Billing Name"
      ),
      orderdate: Yup.string().required(
        "Please Enter Your Order Date"
      ),
      total: Yup.string()
        .matches(/[0-9\.\-\s+\/()]+/, "Please Enter Valid Amount")
        .required("Total Amount"),
      paymentStatus: Yup.string().required(
        "Please Enter Your Payment Status"
      ),
      badgeclass: Yup.string().required(
        "Please Enter Your Badge Class"
      ),
      paymentMethod: Yup.string().required(
        "Please Enter Your Payment Method"
      ),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updateOrder = {
          id: order ? order.id : 0,
          orderId: values.orderId,
          billingName: values.billingName,
          orderdate: values.orderdate,
          total: values.total,
          paymentStatus: values.paymentStatus,
          paymentMethod: values.paymentMethod,
          badgeclass: values.badgeclass,
        }
        // update order
        dispatch(onUpdateOrder(updateOrder))
        validation.resetForm()
      } else {
        const newOrder = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          orderId: values["orderId"],
          billingName: values["billingName"],
          orderdate: values["orderdate"],
          total: values["total"],
          paymentStatus: values["paymentStatus"],
          paymentMethod: values["paymentMethod"],
          badgeclass: values["badgeclass"],
        }
        // save new order
        dispatch(onAddNewOrder(newOrder))
        validation.resetForm()
      }
      toggle()
    },
  })

  const toggleViewModal = () => setModal1(!modal1)

  const dispatch = useDispatch()
  const { orders } = useSelector(state => ({
    orders: state.ecommerce.orders,
  }))

  useEffect(() => {
    if (orders && !orders.length) {
      dispatch(onGetOrders())
    }
  }, [dispatch, orders])

  useEffect(() => {
    setOrderList(orders)
  }, [orders])

  useEffect(() => {
    if (!isEmpty(orders) && !!isEdit) {
      setOrderList(orders)
      setIsEdit(false)
    }
  }, [orders])

  const toggle = () => {
    if (modal) {
      setModal(false)
      setOrder(null)
    } else {
      setModal(true)
    }
  }

  const handleOrderClick = arg => {
    const order = arg
    setOrder({
      id: order.id,
      orderId: order.orderId,
      billingName: order.billingName,
      orderdate: order.orderdate,
      total: order.total,
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      badgeclass: order.badgeclass,
    })

    setIsEdit(true)

    toggle()
  }

  //delete order
  const [deleteModal, setDeleteModal] = useState(false)

  const onClickDelete = order => {
    setOrder(order)
    setDeleteModal(true)
  }

  const handleDeleteOrder = () => {
    if (order && order.id) {
      dispatch(onDeleteOrder(order.id))
      setDeleteModal(false)
      setOrder("")
    }
  }
  const handleOrderClicks = () => {
    setOrderList("")
    setIsEdit(false)
    toggle()
  }

  const columns = useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "orderId",
        width: "150px",
        style: {
          textAlign: "center",
          width: "10%",
          background: "#0000",
        },
        filterable: true,
        Cell: cellProps => {
          return <OrderId {...cellProps} />
        },
      },
      {
        Header: "Billing Name",
        accessor: "billingName",
        filterable: true,
        Cell: cellProps => {
          return <BillingName {...cellProps} />
        },
      },
      {
        Header: "Date",
        accessor: "orderdate",
        filterable: true,
        Cell: cellProps => {
          return <Date {...cellProps} />
        },
      },
      {
        Header: "Total",
        accessor: "total",
        filterable: true,
        Cell: cellProps => {
          return <Total {...cellProps} />
        },
      },
      {
        Header: "Payment Status",
        accessor: "paymentStatus",
        filterable: true,
        Cell: cellProps => {
          return <PaymentStatus {...cellProps} />
        },
      },
      {
        Header: "Payment Method",
        accessor: "paymentMethod",
        Cell: cellProps => {
          return <PaymentMethod {...cellProps} />
        },
      },
      {
        Header: "View Details",
        accessor: "view",
        disableFilters: true,
        Cell: () => {
          return (
            <Button
              type="button"
              color="primary"
              className="btn-sm btn-rounded"
              onClick={toggleViewModal}
            >
              View Details
            </Button>
          )
        },
      },
      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: cellProps => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-success"
                onClick={() => {
                  const orderData = cellProps.row.original
                  handleOrderClick(orderData)
                }}
              >
                <i
                  className="mdi mdi-pencil font-size-18"
                  id="edittooltip"
                />
                <UncontrolledTooltip
                  placement="top"
                  target="edittooltip"
                >
                  Edit
                </UncontrolledTooltip>
              </Link>
              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const orderData = cellProps.row.original
                  onClickDelete(orderData)
                }}
              >
                <i
                  className="mdi mdi-delete font-size-18"
                  id="deletetooltip"
                />
                <UncontrolledTooltip
                  placement="top"
                  target="deletetooltip"
                >
                  Delete
                </UncontrolledTooltip>
              </Link>
            </div>
          )
        },
      },
    ],
    []
  )

  return (
    <>
      <EcommerceOrdersModal
        isOpen={modal1}
        toggle={toggleViewModal}
      />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Orders" />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={orders}
                    isGlobalFilter={true}
                    isAddOptions={true}
                    handleOrderClicks={handleOrderClicks}
                    customPageSize={10}
                    className="custom-header-css"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? "Edit Order" : "Add Order"}
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={e => {
                  e.preventDefault()
                  validation.handleSubmit()
                  return false
                }}
              >
                <Row>
                  <Col className="col-12">
                    <div className="mb-3">
                      <Label className="form-label">Order Id</Label>
                      <Input
                        name="orderId"
                        type="text"
                        placeholder="Insert Order Id"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderId || ""}
                        invalid={
                          validation.touched.orderId &&
                          validation.errors.orderId
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderId &&
                      validation.errors.orderId ? (
                        <FormFeedback type="invalid">
                          {validation.errors.orderId}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        Billing Name
                      </Label>
                      <Input
                        name="billingName"
                        type="text"
                        placeholder="Insert Billing Name"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.billingName || ""}
                        invalid={
                          validation.touched.billingName &&
                          validation.errors.billingName
                            ? true
                            : false
                        }
                      />
                      {validation.touched.billingName &&
                      validation.errors.billingName ? (
                        <FormFeedback type="invalid">
                          {validation.errors.billingName}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Order Date</Label>
                      <Input
                        name="orderdate"
                        type="date"
                        // value={orderList.orderdate || ""}
                        placeholder="Insert Order Date"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderdate || ""}
                        invalid={
                          validation.touched.orderdate &&
                          validation.errors.orderdate
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderdate &&
                      validation.errors.orderdate ? (
                        <FormFeedback type="invalid">
                          {validation.errors.orderdate}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Total</Label>
                      <Input
                        name="total"
                        placeholder="Insert Total Amount"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.total || ""}
                        invalid={
                          validation.touched.total &&
                          validation.errors.total
                            ? true
                            : false
                        }
                      />
                      {validation.touched.total &&
                      validation.errors.total ? (
                        <FormFeedback type="invalid">
                          {validation.errors.total}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        Payment Status
                      </Label>
                      <Input
                        name="paymentStatus"
                        type="select"
                        placeholder="Insert Payment Status"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentStatus || ""}
                      >
                        <option>Paid</option>
                        <option>Chargeback</option>
                        <option>Refund</option>
                      </Input>
                      {validation.touched.paymentStatus &&
                      validation.errors.paymentStatus ? (
                        <FormFeedback type="invalid">
                          {validation.errors.paymentStatus}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        Payment Method
                      </Label>
                      <Input
                        name="paymentMethod"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentMethod || ""}
                      >
                        <option>Mastercard</option>
                        <option>Visa</option>
                        <option>Paypal</option>
                        <option>COD</option>
                      </Input>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-success save-user"
                      >
                        Save
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </>
  )
}
EcommerceOrder.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default EcommerceOrder
