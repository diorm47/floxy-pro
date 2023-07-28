import { isEmpty } from "lodash"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Col, Container, Row } from "reactstrap"
import withRouter from "../../../components/Common/withRouter"

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb"

import AttachedFiles from "./attachedFiles"
import Comments from "./comments"
import OverviewChart from "./overviewChart"
import ProjectDetail from "./projectDetail"
import TeamMembers from "./teamMembers"
import { getProjectDetail as onGetProjectDetail } from "/src/store/projects/actions"

//redux
import { useDispatch, useSelector } from "react-redux"

const ProjectsOverview = props => {
  //meta title
  document.title =
    "Project Overview | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { projectDetail } = useSelector(state => ({
    projectDetail: state.projects.projectDetail,
  }))

  const params = props.router.params

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetProjectDetail(params.id))
    } else {
      dispatch(onGetProjectDetail(1)) //remove this after full integration
    }
  }, [onGetProjectDetail])

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            title="Projects"
            breadcrumbItem="Project Overview"
          />

          {!isEmpty(projectDetail) && (
            <>
              <Row>
                <Col lg="8">
                  <ProjectDetail project={projectDetail} />
                </Col>

                <Col lg="4">
                  <TeamMembers team={projectDetail.team} />
                </Col>
              </Row>

              <Row>
                <Col lg="4">
                  <OverviewChart dataColors='["--bs-primary"]' />
                </Col>

                <Col lg="4">
                  <AttachedFiles files={projectDetail.files} />
                </Col>

                <Col lg="4">
                  <Comments comments={projectDetail.comments} />
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </>
  )
}

ProjectsOverview.propTypes = {
  match: PropTypes.object,
}

export default withRouter(ProjectsOverview)
