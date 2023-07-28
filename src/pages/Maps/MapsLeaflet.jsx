import React from "react"

import { Card, CardBody, Col, Container, Row } from "reactstrap"

//Import maps
import LayerGroup from "./LeafletMap/LayerGroup"
import MapLayerControl from "./LeafletMap/MapLayerControl"
import MapMarkerCustomIcons from "./LeafletMap/MapMarkerCustomIcons"
import MapVectorLayers from "./LeafletMap/MapVectorLayers"
import MapWithPopup from "./LeafletMap/MapWithPopup"
import SimpleMap from "./LeafletMap/SimpleMap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const MapsLeaflet = () => {
  //meta title
  document.title =
    "Leaflet Maps | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Maps" breadcrumbItem="Leaflet Maps" />
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Example</h4>
                  <div id="leaflet-map" className="leaflet-map">
                    <SimpleMap />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">
                    Markers, circles and polygons
                  </h4>
                  <div
                    id="leaflet-map-marker"
                    className="leaflet-map"
                  >
                    <MapVectorLayers />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">
                    Working with popups
                  </h4>
                  <div id="leaflet-map-popup" className="leaflet-map">
                    <MapWithPopup />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">
                    Markers with Custom Icons
                  </h4>
                  <div
                    id="leaflet-map-custom-icons"
                    className="leaflet-map"
                  >
                    <MapMarkerCustomIcons />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">
                    Layer Group & Feature Group
                  </h4>

                  <div
                    id="leaflet-map-interactive-map"
                    className="leaflet-map"
                  >
                    <LayerGroup />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">
                    Layer Groups and Layers Control
                  </h4>
                  <div
                    id="leaflet-map-group-control"
                    className="leaflet-map"
                  >
                    <MapLayerControl />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MapsLeaflet
