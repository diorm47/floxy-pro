import { map } from "lodash"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb"

//Import Card
import CardShop from "./CardShop"
import { getShops as onGetShops } from "/src/store/e-commerce/actions"

//redux
import { useDispatch, useSelector } from "react-redux"

const EcommerceShops = () => {
  //meta title
  document.title =
    "Shops | Skote - Vite React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { shops } = useSelector(state => ({
    shops: state.ecommerce.shops,
  }))

  useEffect(() => {
    dispatch(onGetShops())
  }, [dispatch])

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Shops" />
          <Row>
            {map(shops, (shop, key) => (
              <CardShop shop={shop} key={"_shop_" + key} />
            ))}
          </Row>
          <Row>
            <Col xs="12">
              <div className="text-center my-3">
                <Link to="#" className="text-success">
                  <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
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

EcommerceShops.propTypes = {
  shops: PropTypes.array,
  onGetShops: PropTypes.func,
}

export default EcommerceShops
