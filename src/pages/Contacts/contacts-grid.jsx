import { map } from "lodash"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import withRouter from "../../components/Common/withRouter"

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb"

//Import Card
import CardContact from "./card-contact"

//redux
import { useDispatch, useSelector } from "react-redux"

import { getUsers as onGetUsers } from "/src/store/contacts/actions"

const ContactsGrid = () => {
  //meta title
  document.title =
    "User Grid | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { users } = useSelector(state => ({
    users: state.contacts.users,
  }))

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers())
    }
  }, [dispatch, users])

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="User Grid" />

          <Row>
            {map(users, (user, key) => (
              <CardContact user={user} key={"_user_" + key} />
            ))}
          </Row>

          <Row>
            <Col xs="12">
              <div className="text-center my-3">
                <Link to="#" className="text-success">
                  <i className="bx bx-hourglass bx-spin me-2" />
                  Load more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default withRouter(ContactsGrid)
