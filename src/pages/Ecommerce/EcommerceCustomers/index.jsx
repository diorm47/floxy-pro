import { useFormik } from "formik"
import { isEmpty } from "lodash"
import PropTypes from "prop-types"
import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
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
import * as Yup from "yup"

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb"

import DeleteModal from "../../../components/Common/DeleteModal"
import {
  addNewCustomer as onAddNewCustomer,
  deleteCustomer as onDeleteCustomer,
  getCustomers as onGetCustomers,
  updateCustomer as onUpdateCustomer,
} from "/src/store/e-commerce/actions"

//redux
import { useDispatch, useSelector } from "react-redux"
import TableContainer from "../../../components/Common/TableContainer"

// Column
import {
  Address,
  JoiningDate,
  PhoneEmail,
  Rating,
  UserName,
  WalletBalances,
} from "./EcommerceCustCol"

const EcommerceCustomers = props => {
  //meta title
  document.title =
    "Customers | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { customers } = useSelector(state => ({
    customers: state.ecommerce.customers,
  }))

  const [modal, setModal] = useState(false)
  const [customerList, setCustomerList] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [customer, setCustomer] = useState(null)

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: (customer && customer.username) || "",
      phone: (customer && customer.phone) || "",
      email: (customer && customer.email) || "",
      address: (customer && customer.address) || "",
      rating: (customer && customer.rating) || "",
      walletBalance: (customer && customer.walletBalance) || "",
      joiningDate: (customer && customer.joiningDate) || "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Name"),
      phone: Yup.string().required("Please Enter Your Phone"),
      email: Yup.string()
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please Enter Valid Email"
        )
        .required("Please Enter Your Email"),
      address: Yup.string().required("Please Enter Your Address"),
      rating: Yup.string()
        .matches(/\b([0-9]|10)\b/, "Please Enter Valid Rating")
        .required("Please Enter Your Rating"),
      walletBalance: Yup.string().required(
        "Please Enter Your Wallet Balance"
      ),
      joiningDate: Yup.string().required(
        "Please Enter Your Joining Date"
      ),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updateCustomer = {
          id: customer ? customer.id : 0,
          username: values.username,
          phone: values.phone,
          email: values.email,
          address: values.address,
          rating: values.rating,
          walletBalance: values.walletBalance,
          joiningDate: values.joiningDate,
        }
        // update customer
        dispatch(onUpdateCustomer(updateCustomer))
        validation.resetForm()
      } else {
        const newCustomer = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          username: values["username"],
          phone: values["phone"],
          email: values["email"],
          address: values["address"],
          rating: values["rating"],
          walletBalance: values["walletBalance"],
          joiningDate: values["joiningDate"],
        }
        // save new customer
        dispatch(onAddNewCustomer(newCustomer))
        validation.resetForm()
      }
      toggle()
    },
  })

  const handleCustomerClick = arg => {
    const customer = arg

    setCustomer({
      id: customer.id,
      username: customer.username,
      phone: customer.phone,
      email: customer.email,
      address: customer.address,
      rating: customer.rating,
      walletBalance: customer.walletBalance,
      joiningDate: customer.joiningDate,
    })

    setIsEdit(true)
    toggle()
  }

  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return (
            <input type="checkbox" className="form-check-input" />
          )
        },
      },
      {
        Header: "Username",
        accessor: "username",
        filterable: true,
        Cell: cellProps => {
          return <UserName {...cellProps} />
        },
      },
      {
        Header: "Phone / Email",
        accessor: "phone",
        filterable: true,
        Cell: cellProps => {
          return <PhoneEmail {...cellProps} />
        },
      },
      {
        Header: "Address",
        accessor: "address",
        filterable: true,
        Cell: cellProps => {
          return <Address {...cellProps} />
        },
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
        Cell: cellProps => {
          return <Rating {...cellProps} />
        },
      },
      {
        Header: "Wallet Balances",
        accessor: "walletBalance",
        filterable: true,
        Cell: cellProps => {
          return <WalletBalances {...cellProps} />
        },
      },
      {
        Header: "Joining Date",
        accessor: "joiningDate",
        Cell: cellProps => {
          return <JoiningDate {...cellProps} />
        },
      },
      {
        Header: "Action",
        Cell: cellProps => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-success"
                onClick={() => {
                  const customerData = cellProps.row.original
                  handleCustomerClick(customerData)
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
                  const customerData = cellProps.row.original
                  onClickDelete(customerData)
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

  const toggle = () => {
    if (modal) {
      setModal(false)
      setCustomer(null)
    } else {
      setModal(true)
    }
  }

  //delete customer
  const [deleteModal, setDeleteModal] = useState(false)

  const onClickDelete = customer => {
    setCustomer(customer)
    setDeleteModal(true)
  }

  const handleDeleteCustomer = () => {
    if (customer && customer.id) {
      dispatch(onDeleteCustomer(customer.id))
      setDeleteModal(false)
      setCustomer("")
    }
  }

  useEffect(() => {
    if (customers && !customers.length) {
      dispatch(onGetCustomers())
    }
  }, [dispatch, customers])

  useEffect(() => {
    setCustomerList(customers)
  }, [customers])

  useEffect(() => {
    if (!isEmpty(customers)) {
      setCustomerList(customers)
    }
  }, [customers])

  const handleCustomerClicks = () => {
    setCustomerList("")
    setIsEdit(false)
    toggle()
  }

  return (
    <>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteCustomer}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Customers" />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={customers}
                    isGlobalFilter={true}
                    isAddCustList={true}
                    handleCustomerClick={handleCustomerClicks}
                    customPageSize={10}
                    className="custom-header-css"
                  />

                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} tag="h4">
                      {!!isEdit ? "Edit Customer" : "Add Customer"}
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
                              <Label className="form-label">
                                UserName
                              </Label>
                              <Input
                                name="username"
                                type="text"
                                placeholder="Insert User Name"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={
                                  validation.values.username || ""
                                }
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
                                Phone No
                              </Label>
                              <Input
                                name="phone"
                                type="text"
                                placeholder="Insert Phone No"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.phone || ""}
                                invalid={
                                  validation.touched.phone &&
                                  validation.errors.phone
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.phone &&
                              validation.errors.phone ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.phone}
                                </FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">
                                Email Id
                              </Label>
                              <Input
                                name="email"
                                type="email"
                                placeholder="Insert Email Id"
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
                                Address
                              </Label>
                              <Input
                                name="address"
                                type="textarea"
                                placeholder="Insert Address"
                                rows="3"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={
                                  validation.values.address || ""
                                }
                                invalid={
                                  validation.touched.address &&
                                  validation.errors.address
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.address &&
                              validation.errors.address ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.address}
                                </FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">
                                Rating
                              </Label>
                              <Input
                                name="rating"
                                type="text"
                                placeholder="Insert Rating"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.rating || ""}
                                invalid={
                                  validation.touched.rating &&
                                  validation.errors.rating
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.rating &&
                              validation.errors.rating ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.rating}
                                </FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">
                                Wallet Balance
                              </Label>
                              <Input
                                name="walletBalance"
                                type="text"
                                placeholder="Insert Wallet Balance"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={
                                  validation.values.walletBalance ||
                                  ""
                                }
                                invalid={
                                  validation.touched.walletBalance &&
                                  validation.errors.walletBalance
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.walletBalance &&
                              validation.errors.walletBalance ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.walletBalance}
                                </FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <Label className="form-label">
                                Joining Date
                              </Label>
                              <Input
                                name="joiningDate"
                                type="date"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={
                                  validation.values.joiningDate || ""
                                }
                                invalid={
                                  validation.touched.joiningDate &&
                                  validation.errors.joiningDate
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.joiningDate &&
                              validation.errors.joiningDate ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.joiningDate}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="text-end">
                              <button
                                type="submit"
                                className="btn btn-success save-customer"
                              >
                                Save
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
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

EcommerceCustomers.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func,
  onAddNewCustomer: PropTypes.func,
  onDeleteCustomer: PropTypes.func,
  onUpdateCustomer: PropTypes.func,
}

export default EcommerceCustomers
