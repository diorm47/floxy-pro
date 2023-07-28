import React from "react"
import { Card, CardBody, Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import Component
import FileLeftBar from "./FileLeftBar"
import FileList from "./FileList"
import RecentFile from "./RecentFile"
import Storage from "./Storage"

const Index = () => {
  //meta title
  document.title =
    "File Manager | Skote - Vite React Admin & Dashboard Template"
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Apps" breadcrumbItem="File Manager" />
          <div className="d-xl-flex">
            <div className="w-100">
              <div className="d-md-flex">
                {/* FileRightBar  */}
                <FileLeftBar />
                <div className="w-100">
                  <Card>
                    <CardBody>
                      <FileList />
                      <RecentFile />
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
            <Storage dataColors='["--bs-primary"]' />
          </div>
        </Container>
      </div>
    </>
  )
}
export default Index
