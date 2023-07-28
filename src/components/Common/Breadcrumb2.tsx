import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { BreadcrumbItem, Col, Row } from "reactstrap"

interface breadcrumbsProps {
  title: string
  breadcrumbItems: any
}

const Breadcrumb = (props: breadcrumbsProps) => {
  const { title, breadcrumbItems } = props
  const itemLength = breadcrumbItems.length

  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-flex align-items-center justify-content-between">
          <h4 className="mb-0 font-size-18">{title}</h4>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              {breadcrumbItems.map((item: any, key: number) => (
                <BreadcrumbItem
                  key={key}
                  active={key + 1 === itemLength}
                >
                  <Link to="#">{item.title}</Link>
                </BreadcrumbItem>
              ))}
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Breadcrumb.propTypes = {
  breadcrumbItems: PropTypes.array,
  title: PropTypes.string,
}

export default Breadcrumb
