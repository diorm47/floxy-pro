import React from "react"
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"
import { ReceivedTimeCharts } from "./JobCharts"

const ReceivedTime = () => {
  return (
    <>
      <Col lg={4}>
        <Card>
          <CardBody>
            <div className="d-flex">
              <h4 className="card-title">
                Applications Received Time
              </h4>
              <UncontrolledDropdown className="ms-auto">
                <DropdownToggle
                  tag="a"
                  className="text-muted font-size-16"
                  role="button"
                >
                  <i className="mdi mdi-dots-horizontal"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another action</DropdownItem>
                  <DropdownItem href="#">
                    Something else here
                  </DropdownItem>
                  <div className="dropdown-divider"></div>
                  <DropdownItem href="#">Separated link</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            {/* <div data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]' dir="ltr" id="application-received-time"></div> */}
            <ReceivedTimeCharts dataColors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]' />
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default ReceivedTime
