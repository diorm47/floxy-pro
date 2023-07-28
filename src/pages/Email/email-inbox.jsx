import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Card,
  Col,
  Container,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap"
import withRouter from "../../components/Common/withRouter"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import classnames from "classnames"

import { map } from "lodash"

// Import Editor
// import { Editor } from "react-draft-wysiwyg";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"

import {
  getMailsLists as onGetMailsLists,
  getSelectedMails as onGetSelectedMails,
  updateMail as onUpdateMail,
} from "/src/store/mails/actions"

//Import Email Topbar
import EmailToolbar from "./email-toolbar"

//Import images
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"

//redux
import { useDispatch, useSelector } from "react-redux"

const EmailInbox = props => {
  //meta title
  document.title =
    "Inbox | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { mailslists, selectedmails } = useSelector(state => ({
    mailslists: state.mails.mailslists,
    selectedmails: state.mails.selectedmails,
  }))

  const [activeTab, setactiveTab] = useState(0)
  const [modal, setmodal] = useState(false)

  useEffect(() => {
    dispatch(onGetMailsLists(0))
  }, [dispatch])

  const handleSelect = selectedItems => {
    dispatch(onGetSelectedMails(selectedItems))
  }

  const hasStarred = mail => {
    const updateTodo = {
      id: mail.id,
      starred: !mail.starred,
    }
    dispatch(onUpdateMail(updateTodo))
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Email" breadcrumbItem="Inbox" />

          <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <Card className="email-leftbar">
                <Button
                  type="button"
                  color="danger"
                  onClick={() => {
                    setmodal(!modal)
                  }}
                  block
                >
                  Compose
                </Button>
                <div className="mail-list mt-4">
                  <Nav
                    tabs
                    className="nav-tabs-custom"
                    vertical
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 0,
                        })}
                        onClick={() => {
                          setactiveTab(0)
                          dispatch(onGetMailsLists(0))
                        }}
                      >
                        <i className="mdi mdi-email-outline me-2"></i>{" "}
                        Inbox{" "}
                        <span className="ml-1 float-end">(18)</span>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 6,
                        })}
                        onClick={() => {
                          setactiveTab(6)
                          dispatch(onGetMailsLists(6))
                        }}
                      >
                        <i className="mdi mdi-star-outline me-2"></i>
                        Starred
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 1,
                        })}
                        onClick={() => {
                          setactiveTab(1)
                          dispatch(onGetMailsLists(1))
                        }}
                      >
                        <i className="mdi mdi-diamond-stone me-2"></i>
                        Important
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 2,
                        })}
                        onClick={() => {
                          setactiveTab(2)
                          dispatch(onGetMailsLists(2))
                        }}
                      >
                        <i className="mdi mdi-file-outline me-2"></i>
                        Draft
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 3,
                        })}
                        onClick={() => {
                          setactiveTab(3)
                          dispatch(onGetMailsLists(3))
                        }}
                      >
                        <i className="mdi mdi-email-check-outline me-2"></i>
                        Sent Mail
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 4,
                        })}
                        onClick={() => {
                          setactiveTab(4)
                          dispatch(onGetMailsLists(4))
                        }}
                      >
                        <i className="mdi mdi-trash-can-outline me-2"></i>
                        Trash
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>

                <h6 className="mt-4">Labels</h6>

                <div className="mail-list mt-1">
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-info float-end"></span>
                    Theme Support
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-warning float-end"></span>
                    Freelance
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-primary float-end"></span>
                    Social
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-danger float-end"></span>
                    Friends
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-success float-end"></span>
                    Family
                  </Link>
                </div>

                <h6 className="mt-4">Chat</h6>

                <div className="mt-2">
                  <Link to="#" className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src={avatar2}
                        alt="skote"
                        height="36"
                      />
                    </div>
                    <div className="flex-grow-1 chat-user-box">
                      <p className="user-title m-0">Scott Median</p>
                      <p className="text-muted">Hello</p>
                    </div>
                  </Link>

                  <Link to="#" className="d-flex">
                    <img
                      className="d-flex me-3 rounded-circle"
                      src={avatar3}
                      alt="skote"
                      height="36"
                    />
                    <div className="flex-grow-1 chat-user-box">
                      <p className="user-title m-0">Julian Rosa</p>
                      <p className="text-muted">
                        What about our next..
                      </p>
                    </div>
                  </Link>

                  <Link to="#" className="d-flex">
                    <img
                      className="d-flex me-3 rounded-circle"
                      src={avatar4}
                      alt="skote"
                      height="36"
                    />
                    <div className="flex-grow-1 chat-user-box">
                      <p className="user-title m-0">David Medina</p>
                      <p className="text-muted">
                        Yeah everything is fine
                      </p>
                    </div>
                  </Link>

                  <Link to="#" className="d-flex">
                    <img
                      className="d-flex me-3 rounded-circle"
                      src={avatar6}
                      alt="skote"
                      height="36"
                    />
                    <div className="flex-grow-1 chat-user-box">
                      <p className="user-title m-0">Jay Baker</p>
                      <p className="text-muted">
                        Wow that&apos;s great
                      </p>
                    </div>
                  </Link>
                </div>
              </Card>

              <Modal
                isOpen={modal}
                role="dialog"
                autoFocus={true}
                centered={true}
                className="exampleModal"
                tabIndex="-1"
                toggle={() => {
                  setmodal(!modal)
                }}
              >
                <div className="modal-content">
                  <ModalHeader
                    toggle={() => {
                      setmodal(!modal)
                    }}
                  >
                    New Message
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="mb-3">
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="To"
                        />
                      </div>

                      <div className="mb-3">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      {/* <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                      /> */}
                      <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={editor => {
                          // You can store the "editor" and use when it is needed.
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData()
                        }}
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      type="button"
                      color="secondary"
                      onClick={() => {
                        setmodal(!modal)
                      }}
                    >
                      Close
                    </Button>
                    <Button type="button" color="primary">
                      Send{" "}
                      <i className="fab fa-telegram-plane ms-1"></i>
                    </Button>
                  </ModalFooter>
                </div>
              </Modal>
              <div className="email-rightbar mb-3">
                <Card>
                  {mailslists.length > 0 ? (
                    <>
                      {/* Render Email Top Tool Bar */}
                      <EmailToolbar
                        selectedmails={selectedmails}
                        activeTab={activeTab}
                      />
                      <ul className="message-list">
                        {map(mailslists, (mail, key) => (
                          <li
                            key={key}
                            className={mail.read ? "" : "unread"}
                          >
                            <div className="col-mail col-mail-1">
                              <div className="checkbox-wrapper-mail">
                                <Input
                                  type="checkbox"
                                  value={mail.id}
                                  id={mail.id}
                                  name="emailcheckbox"
                                  onChange={e =>
                                    console.log(e.target.value)
                                  }
                                  onClick={e =>
                                    handleSelect(e.target.value)
                                  }
                                  checked={selectedmails.includes(
                                    mail.id
                                  )}
                                />
                                <Label
                                  htmlFor={mail.id}
                                  className="toggle"
                                />
                              </div>
                              <Link to="#" className="title">
                                {mail.name}
                              </Link>
                              {mail.starred ? (
                                <span
                                  className="star-toggle fas fa-star text-warning"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => hasStarred(mail)}
                                />
                              ) : (
                                <span
                                  className="star-toggle far fa-star"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => hasStarred(mail)}
                                />
                              )}
                            </div>
                            <div className="col-mail col-mail-2">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: mail.description,
                                }}
                              ></div>
                              <div className="date">{mail.date}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div className="align-items-center text-center p-4">
                      {" "}
                      <i className="mdi mdi-email-outline me-2 display-5"></i>{" "}
                      <h4> No Recored Found </h4>
                    </div>
                  )}
                </Card>
                {mailslists.length > 0 && (
                  <Row>
                    <Col xs="7">Showing 1 - 20 of 1,524</Col>
                    <Col xs="5">
                      <div className="btn-group float-end">
                        <Button
                          type="button"
                          color="success"
                          size="sm"
                        >
                          <i className="fa fa-chevron-left" />
                        </Button>
                        <Button
                          type="button"
                          color="success"
                          size="sm"
                        >
                          <i className="fa fa-chevron-right" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default withRouter(EmailInbox)
