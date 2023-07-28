import React from "react"

import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const IconBoxicons = () => {
  //meta title
  document.title =
    "Boxicons | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Icons" breadcrumbItem="Boxicons" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Examples</CardTitle>
                  <p className="card-subtitle mb-4">
                    Use class{" "}
                    <code>
                      &lt;i className="bx bx-**"&quot;&gt;&lt;/i&gt;
                    </code>
                  </p>

                  <h5>Regular</h5>
                  <Row className="icon-demo-content">
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sticker"></i> bx bx-sticker
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shield-quarter"></i> bx
                      bx-shield-quarter
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-upside-down"></i> bx
                      bx-upside-down
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-laugh"></i> bx bx-laugh
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-meh-blank"></i> bx
                      bx-meh-blank
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-happy-beaming"></i> bx
                      bx-happy-beaming
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shocked"></i> bx bx-shocked
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sleepy"></i> bx bx-sleepy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-confused"></i> bx
                      bx-confused
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-wink-smile"></i> bx
                      bx-wink-smile
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dizzy"></i> bx bx-dizzy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-happy-heart-eyes"></i> bx
                      bx-happy-heart-eyes
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-angry"></i> bx bx-angry
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-smile"></i> bx bx-smile
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-tired"></i> bx bx-tired
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cool"></i> bx bx-cool
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-happy-alt"></i> bx
                      bx-happy-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-wink-tongue"></i> bx
                      bx-wink-tongue
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-meh-alt"></i> bx bx-meh-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-food-menu"></i> bx
                      bx-food-menu
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-food-tag"></i> bx
                      bx-food-tag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-female-sign"></i> bx
                      bx-female-sign
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-male-sign"></i> bx
                      bx-male-sign
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-female"></i> bx bx-female
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-male"></i> bx bx-male
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-clinic"></i> bx bx-clinic
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-health"></i> bx bx-health
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shekel"></i> bx bx-shekel
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-yen"></i> bx bx-yen
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-won"></i> bx bx-won
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pound"></i> bx bx-pound
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-euro"></i> bx bx-euro
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rupee"></i> bx bx-rupee
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-ruble"></i> bx bx-ruble
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-lira"></i> bx bx-lira
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bitcoin"></i> bx bx-bitcoin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-tone"></i> bx bx-tone
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bolt-circle"></i> bx
                      bx-bolt-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cake"></i> bx bx-cake
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-spa"></i> bx bx-spa
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dish"></i> bx bx-dish
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-fridge"></i> bx bx-fridge
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-image-add"></i> bx
                      bx-image-add
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-image-alt"></i> bx
                      bx-image-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-space-bar"></i> bx
                      bx-space-bar
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx- alarm-add"></i> bx
                      bx-alarm-add
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-archive-out"></i> bx
                      bx-archive-out
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-archive-in"></i> bx
                      bx-archive-in
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-add-to-queue"></i> bx
                      bx-add-to-queue
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-border-radius"></i> bx
                      bx-border-radius
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-check-shield"></i> bx
                      bx-check-shield
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-label"></i> bx bx-label
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-file-find"></i> bx
                      bx-file-find
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-face"></i> bx bx-face
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-extension"></i> bx
                      bx-extension
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-exit"></i> bx bx-exit
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-conversation"></i> bx
                      bx-conversation
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sort-z-a"></i> bx
                      bx-sort-z-a
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sort-a-z"></i> bx
                      bx-sort-a-z
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-printer"></i> bx bx-printer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-radio"></i> bx bx-radio
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-customize"></i> bx
                      bx-customize
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-brush-alt"></i> bx
                      bx-brush-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-briefcase-alt-2"></i> bx
                      bx-briefcase-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-time-five"></i> bx
                      bx-time-five
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pie-chart-alt-2"></i> bx
                      bx-pie-chart-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-gas-pump"></i> bx
                      bx-gas-pump
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-mobile-vibration"></i> bx
                      bx-mobile-vibration
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-mobile-landscape"></i> bx
                      bx-mobile-landscape
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-border-all"></i> bx
                      bx-border-all
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-border-bottom"></i> bx
                      bx-border-bottom
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-border-top"></i> bx
                      bx-border-top
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-border-left"></i> bx
                      bx-border-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-border-right"></i> bx
                      bx-border-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dialpad-alt"></i> bx
                      bx-dialpad-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-filter-alt"></i> bx
                      bx-filter-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-brightness"></i> bx
                      bx-brightness
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-brightness-half"></i> bx
                      bx-brightness-half
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-wifi-off"></i> bx
                      bx-wifi-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-credit-card-alt"></i> bx
                      bx-credit-card-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-band-aid"></i> bx
                      bx-band-aid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-hive"></i> bx bx-hive
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-map-pin"></i> bx bx-map-pin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-line-chart"></i> bx
                      bx-line-chart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-receipt"></i> bx bx-receipt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-purchase-tag-alt"></i> bx
                      bx-purchase-tag-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-basket"></i> bx bx-basket
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-palette"></i> bx bx-palette
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-no-entry"></i> bx
                      bx-no-entry
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-message-alt-dots"></i> bx
                      bx-message-alt-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-message-alt"></i> bx
                      bx-message-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-check-square"></i> bx
                      bx-check-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-log-out-circle"></i> bx
                      bx-log-out-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-log-in-circle"></i> bx
                      bx-log-in-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-doughnut-chart"></i> bx
                      bx-doughnut-chart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-building-house"></i> bx
                      bx-building-house
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-accessibility"></i> bx
                      bx-accessibility
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-user-voice"></i> bx
                      bx-user-voice
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cuboid"></i> bx bx-cuboid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cube-alt"></i> bx
                      bx-cube-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-polygon"></i> bx bx-polygon
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-square-rounded"></i> bx
                      bx-square-rounded
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-square"></i> bx bx-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-error-alt"></i> bx
                      bx-error-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shield-alt-2"></i> bx
                      bx-shield-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-paint-roll"></i> bx
                      bx-paint-roll
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-droplet"></i> bx bx-droplet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-street-view"></i> bx
                      bx-street-view
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-plus-medical"></i> bx
                      bx-plus-medical
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-search-alt-2"></i> bx
                      bx-search-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bowling-ball"></i> bx
                      bx-bowling-ball
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dna"></i> bx bx-dna
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cycling"></i> bx bx-cycling
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shape-circle"></i> bx
                      bx-shape-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-down-arrow-alt"></i> bx
                      bx-down-arrow-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-up-arrow-alt"></i> bx
                      bx-up-arrow-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-right-arrow-alt"></i> bx
                      bx-right-arrow-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-left-arrow-alt"></i> bx
                      bx-left-arrow-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-lock-open-alt"></i> bx
                      bx-lock-open-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-lock-alt"></i> bx
                      bx-lock-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cylinder"></i> bx
                      bx-cylinder
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pyramid"></i> bx bx-pyramid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-comment-dots"></i> bx
                      bx-comment-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-comment"></i> bx bx-comment
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-landscape"></i> bx
                      bx-landscape
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-book-open"></i> bx
                      bx-book-open
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-transfer-alt"></i> bx
                      bx-transfer-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-copy-alt"></i> bx
                      bx-copy-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-run"></i> bx bx-run
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-user-pin"></i> bx
                      bx-user-pin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-grid"></i> bx bx-grid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-code-alt"></i> bx
                      bx-code-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-mail-send"></i> bx
                      bx-mail-send
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-ghost"></i> bx bx-ghost
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shape-triangle"></i> bx
                      bx-shape-triangle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shape-square"></i> bx
                      bx-shape-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-video-recording"></i> bx
                      bx-video-recording
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-notepad"></i> bx bx-notepad
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bug-alt"></i> bx bx-bug-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-mouse-alt"></i> bx
                      bx-mouse-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-edit-alt"></i> bx
                      bx-edit-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chat"></i> bx bx-chat
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-book-content"></i> bx
                      bx-book-content
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-message-square-dots"></i> bx
                      bx-message-square-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-message-square"></i> bx
                      bx-message-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-slideshow"></i> bx
                      bx-slideshow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-wallet-alt"></i> bx
                      bx-wallet-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-memory-card"></i> bx
                      bx-memory-card
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-message-rounded-dots"></i>{" "}
                      bx bx-message-rounded-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-message-dots"></i> bx
                      bx-message-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bar-chart-alt-2"></i> bx
                      bx-bar-chart-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-store-alt"></i> bx
                      bx-store-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-buildings"></i> bx
                      bx-buildings
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-home-circle"></i> bx
                      bx-home-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-money"></i> bx bx-money
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-walk"></i> bx bx-walk
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-repeat"></i> bx bx-repeat
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-font-family"></i> bx
                      bx-font-family
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-joystick-button"></i> bx
                      bx-joystick-button
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-paint"></i> bx bx-paint
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-unlink"></i> bx bx-unlink
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-brush"></i> bx bx-brush
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rotate-left"></i> bx
                      bx-rotate-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-badge-check"></i> bx
                      bx-badge-check
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-show-alt"></i> bx
                      bx-show-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-caret-down"></i> bx
                      bx-caret-down
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-caret-right"></i> bx
                      bx-caret-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-caret-up"></i> bx
                      bx-caret-up
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-caret-left"></i> bx
                      bx-caret-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-calendar-event"></i> bx
                      bx-calendar-event
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-magnet"></i> bx bx-magnet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rewind-circle"></i> bx
                      bx-rewind-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-card"></i> bx bx-card
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-help-circle"></i> bx
                      bx-help-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-test-tube"></i> bx
                      bx-test-tube
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-note"></i> bx bx-note
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sort-down"></i> bx
                      bx-sort-down
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sort-up"></i> bx bx-sort-up
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-id-card"></i> bx bx-id-card
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-badge"></i> bx bx-badge
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-grid-small"></i> bx
                      bx-grid-small
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-grid-vertical"></i> bx
                      bx-grid-vertical
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-grid-horizontal"></i> bx
                      bx-grid-horizontal
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-move-vertical"></i> bx
                      bx-move-vertical
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-move-horizontal"></i> bx
                      bx-move-horizontal
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-stats"></i> bx bx-stats
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-equalizer"></i> bx
                      bx-equalizer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-disc"></i> bx bx-disc
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-analyse"></i> bx bx-analyse
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-search-alt"></i> bx
                      bx-search-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dollar-circle"></i> bx
                      bx-dollar-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-football"></i> bx
                      bx-football
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-ball"></i> bx bx-ball
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-circle"></i> bx bx-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-transfer"></i> bx
                      bx-transfer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-fingerprint"></i> bx
                      bx-fingerprint
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-font-color"></i> bx
                      bx-font-color
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-highlight"></i> bx
                      bx-highlight
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-file-blank"></i> bx
                      bx-file-blank
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-strikethrough"></i> bx
                      bx-strikethrough
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-photo-album"></i> bx
                      bx-photo-album
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-code-block"></i> bx
                      bx-code-block
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-font-size"></i> bx
                      bx-font-size
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-handicap"></i> bx
                      bx-handicap
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dialpad"></i> bx bx-dialpad
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-wind"></i> bx bx-wind
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-water"></i> bx bx-water
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-swim"></i> bx bx-swim
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-restaurant"></i> bx
                      bx-restaurant
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-box"></i> bx bx-box
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-menu-alt-right"></i> bx
                      bx-menu-alt-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-menu-alt-left"></i> bx
                      bx-menu-alt-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-video-plus"></i> bx
                      bx-video-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-list-ol"></i> bx bx-list-ol
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-planet"></i> bx bx-planet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-hotel"></i> bx bx-hotel
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-movie"></i> bx bx-movie
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-taxi"></i> bx bx-taxi
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-train"></i> bx bx-train
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bath"></i> bx bx-bath
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bed"></i> bx bx-bed
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-area"></i> bx bx-area
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bot"></i> bx bx-bot
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dumbbell"></i> bx
                      bx-dumbbell
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-check-double"></i> bx
                      bx-check-double
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bus"></i> bx bx-bus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-check-circle"></i> bx
                      bx-check-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rocket"></i> bx bx-rocket
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-certification"></i> bx
                      bx-certification
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-slider-alt"></i> bx
                      bx-slider-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sad"></i> bx bx-sad
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-meh"></i> bx bx-meh
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-happy"></i> bx bx-happy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cart-alt"></i> bx
                      bx-cart-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-car"></i> bx bx-car
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-loader-alt"></i> bx
                      bx-loader-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-loader-circle"></i> bx
                      bx-loader-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-wrench"></i> bx bx-wrench
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-alarm-off"></i> bx
                      bx-alarm-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-layout"></i> bx bx-layout
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dock-left"></i> bx
                      bx-dock-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dock-top"></i> bx
                      bx-dock-top
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dock-right"></i> bx
                      bx-dock-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dock-bottom"></i> bx
                      bx-dock-bottom
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dock-bottom"></i> bx
                      bx-dock-bottom
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-world"></i> bx bx-world
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-selection"></i> bx
                      bx-selection
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-paper-plane"></i> bx
                      bx-paper-plane
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-slider"></i> bx bx-slider
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-loader"></i> bx bx-loader
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chalkboard"></i> bx
                      bx-chalkboard
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-trash-alt"></i> bx
                      bx-trash-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-grid-alt"></i> bx
                      bx-grid-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-command"></i> bx bx-command
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-window-close"></i> bx
                      bx-window-close
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-notification-off"></i> bx
                      bx-notification-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-plug"></i> bx bx-plug
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-infinite"></i> bx
                      bx-infinite
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-carousel"></i> bx
                      bx-carousel
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-hourglass"></i> bx
                      bx-hourglass
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-briefcase-alt"></i> bx
                      bx-briefcase-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-wallet"></i> bx bx-wallet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-station"></i> bx bx-station
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-collection"></i> bx
                      bx-collection
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-tv"></i> bx bx-tv
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-closet"></i> bx bx-closet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-paperclip"></i> bx
                      bx-paperclip
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-expand"></i> bx bx-expand
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pen"></i> bx bx-pen
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-purchase-tag"></i> bx
                      bx-purchase-tag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-images"></i> bx bx-images
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pie-chart-alt"></i> bx
                      bx-pie-chart-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-news"></i> bx bx-news
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-downvote"></i> bx
                      bx-downvote
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-upvote"></i> bx bx-upvote
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-globe-alt"></i> bx
                      bx-globe-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-store"></i> bx bx-store
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-hdd"></i> bx bx-hdd
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-skip-previous-circle"></i>{" "}
                      bx bx-skip-previous-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-skip-next-circle"></i> bx
                      bx-skip-next-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chip"></i> bx bx-chip
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cast"></i> bx bx-cast
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-body"></i> bx bx-body
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-phone-outgoing"></i> bx
                      bx-phone-outgoing
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-phone-incoming"></i> bx
                      bx-phone-incoming
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-collapse"></i> bx
                      bx-collapse
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rename"></i> bx bx-rename
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rotate-right"></i> bx
                      bx-rotate-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-horizontal-center"></i> bx
                      bx-horizontal-center
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-ruler"></i> bx bx-ruler
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-import"></i> bx bx-import
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-calendar-alt"></i> bx
                      bx-calendar-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-battery"></i> bx bx-battery
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-server"></i> bx bx-server
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-task"></i> bx bx-task
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-folder-open"></i> bx
                      bx-folder-open
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-film"></i> bx bx-film
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-aperture"></i> bx
                      bx-aperture
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-phone-call"></i> bx
                      bx-phone-call
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-up-arrow"></i> bx
                      bx-up-arrow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-undo"></i> bx bx-undo
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-timer"></i> bx bx-timer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-support"></i> bx bx-support
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-subdirectory-right"></i> bx
                      bx-subdirectory-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-right-arrow"></i> bx bx-
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-"></i> bx bx-right-arrow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-revision"></i> bx
                      bx-revision
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-repost"></i> bx bx-repost
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-reply"></i> bx bx-reply
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-reply-all"></i> bx
                      bx-reply-all
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-redo"></i> bx bx-redo
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-radar"></i> bx bx-radar
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-poll"></i> bx bx-poll
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-list-check"></i> bx
                      bx-list-check
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-like"></i> bx bx-like
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-left-arrow"></i> bx
                      bx-left-arrow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-joystick-alt"></i> bx
                      bx-joystick-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-history"></i> bx bx-history
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-flag"></i> bx bx-flag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-first-aid"></i> bx
                      bx-first-aid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-export"></i> bx bx-export
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-down-arrow"></i> bx
                      bx-down-arrow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dislike"></i> bx bx-dislike
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-crown"></i> bx bx-crown
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-barcode"></i> bx bx-barcode
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-user"></i> bx bx-user
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-user-x"></i> bx bx-user-x
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-user-plus"></i> bx
                      bx-user-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-user-minus"></i> bx
                      bx-user-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-user-circle"></i> bx
                      bx-user-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-user-check"></i> bx
                      bx-user-check
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-underline"></i> bx
                      bx-underline
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-trophy"></i> bx bx-trophy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-trash"></i> bx bx-trash
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-text"></i> bx bx-text
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sun"></i> bx bx-sun
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-star"></i> bx bx-star
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sort"></i> bx bx-sort
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shuffle"></i> bx bx-shuffle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shopping-bag"></i> bx
                      bx-shopping-bag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shield"></i> bx bx-shield
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-shield-alt"></i> bx
                      bx-shield-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-share"></i> bx bx-share
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-share-alt"></i> bx
                      bx-share-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-select-multiple"></i> bx
                      bx-select-multiple
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-screenshot"></i> bx
                      bx-screenshot
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-save"></i> bx bx-save
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pulse"></i> bx bx-pulse
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-power-off"></i> bx
                      bx-power-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-plus"></i> bx bx-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pin"></i> bx bx-pin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pencil"></i> bx bx-pencil
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pin"></i> bx bx-pin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pencil"></i> bx bx-pencil
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-paste"></i> bx bx-paste
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-paragraph"></i> bx
                      bx-paragraph
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-package"></i> bx bx-package
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-notification"></i> bx
                      bx-notification
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-music"></i> bx bx-music
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-move"></i> bx bx-move
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-mouse"></i> bx bx-mouse
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-minus"></i> bx bx-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-microphone-off"></i> bx
                      bx-microphone-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-log-out"></i> bx bx-log-out
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-log-in"></i> bx bx-log-in
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-link-external"></i> bx
                      bx-link-external
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-joystick"></i> bx
                      bx-joystick
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-italic"></i> bx bx-italic
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-home-alt"></i> bx
                      bx-home-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-heading"></i> bx bx-heading
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-hash"></i> bx bx-hash
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-group"></i> bx bx-group
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-git-repo-forked"></i> bx
                      bx-git-repo-forked
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-git-pull-request"></i> bx
                      bx-git-pull-request
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-git-merge"></i> bx
                      bx-git-merge
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-git-compare"></i> bx
                      bx-git-compare
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-git-commit"></i> bx
                      bx-git-commit
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-git-branch"></i> bx
                      bx-git-branch
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-font"></i> bx bx-font
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-filter"></i> bx bx-filter
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-file"></i> bx bx-file
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-edit"></i> bx bx-edit
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-diamond"></i> bx bx-diamond
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-detail"></i> bx bx-detail
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cut"></i> bx bx-cut
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cube"></i> bx bx-cube
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-crop"></i> bx bx-crop
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-credit-card"></i> bx
                      bx-credit-card
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-columns"></i> bx bx-columns
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cog"></i> bx bx-cog
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cloud-snow"></i> bx
                      bx-cloud-snow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cloud-rain"></i> bx
                      bx-cloud-rain
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cloud-lightning"></i> bx
                      bx-cloud-lightning
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cloud-light-rain"></i> bx
                      bx-cloud-light-rain
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cloud-drizzle"></i> bx
                      bx-cloud-drizzle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-check"></i> bx bx-check
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cart"></i> bx bx-cart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-calculator"></i> bx
                      bx-calculator
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bold"></i> bx bx-bold
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-award"></i> bx bx-award
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-anchor"></i> bx bx-anchor
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-album"></i> bx bx-album
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-adjust"></i> bx bx-adjust
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-x"></i> bx bx-x
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-table"></i> bx bx-table
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-duplicate"></i> bx
                      bx-duplicate
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-windows"></i> bx bx-windows
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-window"></i> bx bx-window
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-window-open"></i> bx
                      bx-window-open
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-wifi"></i> bx bx-wifi
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-voicemail"></i> bx
                      bx-voicemail
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-video-off"></i> bx
                      bx-video-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-usb"></i> bx bx-usb
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-upload"></i> bx bx-upload
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-alarm"></i> bx bx-alarm
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-tennis-ball"></i> bx
                      bx-tennis-ball
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-target-lock"></i> bx
                      bx-target-lock
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-tag"></i> bx bx-tag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-tab"></i> bx bx-tab
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-spreadsheet"></i> bx
                      bx-spreadsheet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sitemap"></i> bx bx-sitemap
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sidebar"></i> bx bx-sidebar
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-send"></i> bx bx-send
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pie-chart"></i> bx
                      bx-pie-chart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-phone"></i> bx bx-phone
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-navigation"></i> bx
                      bx-navigation
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-mobile"></i> bx bx-mobile
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-mobile-alt"></i> bx
                      bx-mobile-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-message"></i> bx bx-message
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-message-rounded"></i> bx
                      bx-message-rounded
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-map"></i> bx bx-map
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-map-alt"></i> bx bx-map-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-lock"></i> bx bx-lock
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-lock-open"></i> bx
                      bx-lock-open
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-list-minus"></i> bx
                      bx-list-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-list-ul"></i> bx bx-list-ul
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-list-plus"></i> bx
                      bx-list-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-link"></i> bx bx-link
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-link-alt"></i> bx
                      bx-link-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-layer"></i> bx bx-layer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-laptop"></i> bx bx-laptop
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-home"></i> bx bx-home
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-heart"></i> bx bx-heart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-headphone"></i> bx
                      bx-headphone
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-devices"></i> bx bx-devices
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-globe"></i> bx bx-globe
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-gift"></i> bx bx-gift
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-envelope"></i> bx
                      bx-envelope
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-download"></i> bx
                      bx-download
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dots-vertical"></i> bx
                      bx-dots-vertical
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dots-vertical-rounded"></i>{" "}
                      bx bx-dots-vertical-rounded
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dots-horizontal"></i> bx
                      bx-dots-horizontal
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dots-horizontal-rounded"></i>{" "}
                      bx bx-dots-horizontal-rounded
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-dollar"></i> bx bx-dollar
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-directions"></i> bx
                      bx-directions
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-desktop"></i> bx bx-desktop
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-data"></i> bx bx-data
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-compass"></i> bx bx-compass
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-crosshair"></i> bx
                      bx-crosshair
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-terminal"></i> bx
                      bx-terminal
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cloud"></i> bx bx-cloud
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cloud-upload"></i> bx
                      bx-cloud-upload
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-cloud-download"></i> bx
                      bx-cloud-download
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chart"></i> bx bx-chart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-calendar"></i> bx
                      bx-calendar
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-calendar-x"></i> bx
                      bx-calendar-x
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-calendar-minus"></i> bx
                      bx-calendar-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-calendar-check"></i> bx
                      bx-calendar-check
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-calendar-plus"></i> bx
                      bx-calendar-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-buoy"></i> bx bx-buoy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bulb"></i> bx bx-bulb
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bluetooth"></i> bx
                      bx-bluetooth
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bug"></i> bx bx-bug
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-building"></i> bx
                      bx-building
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-broadcast"></i> bx
                      bx-broadcast
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-briefcase"></i> bx
                      bx-briefcase
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bookmark-plus"></i> bx
                      bx-bookmark-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bookmark-minus"></i> bx
                      bx-bookmark-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-"></i> bx bx-
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-book"></i> bx bx-book
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-book-bookmark"></i> bx
                      bx-book-bookmark
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-block"></i> bx bx-block
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-basketball"></i> bx
                      bx-basketball
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bar-chart"></i> bx
                      bx-bar-chart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bar-chart-square"></i> bx
                      bx-bar-chart-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bar-chart-alt"></i> bx
                      bx-bar-chart-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-at"></i> bx bx-at
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-archive"></i> bx bx-archive
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-zoom-out"></i> bx
                      bx-zoom-out
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-zoom-in"></i> bx bx-zoom-in
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-x-circle"></i> bx
                      bx-x-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-volume"></i> bx bx-volume
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-volume-mute"></i> bx
                      bx-volume-mute
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-volume-low"></i> bx
                      bx-volume-low
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-volume-full"></i> bx
                      bx-volume-full
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-video"></i> bx bx-video
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-vertical-center"></i> bx
                      bx-vertical-center
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-up-arrow-circle"></i> bx
                      bx-up-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-trending-up"></i> bx
                      bx-trending-up
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-trending-down"></i> bx
                      bx-trending-down
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-toggle-right"></i> bx
                      bx-toggle-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-toggle-left"></i> bx
                      bx-toggle-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-time"></i> bx bx-time
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-sync"></i> bx bx-sync
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-stopwatch"></i> bx
                      bx-stopwatch
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-stop"></i> bx bx-stop
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-stop-circle"></i> bx
                      bx-stop-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-skip-previous"></i> bx
                      bx-skip-previous
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-skip-next"></i> bx
                      bx-skip-next
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-show"></i> bx bx-show
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-search"></i> bx bx-search
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rss"></i> bx bx-rss
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-right-top-arrow-circle"></i>{" "}
                      bx bx-right-top-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-right-indent"></i> bx
                      bx-right-indent
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-right-down-arrow-circle"></i>{" "}
                      bx bx-right-down-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-right-arrow-circle"></i> bx
                      bx-right-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-reset"></i> bx bx-reset
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rewind"></i> bx bx-rewind
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-rectangle"></i> bx
                      bx-rectangle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-radio-circle"></i> bx
                      bx-radio-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-radio-circle-marked"></i> bx
                      bx-radio-circle-marked
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-question-mark"></i> bx
                      bx-question-mark
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-plus-circle"></i> bx
                      bx-plus-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-play"></i> bx bx-play
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-play-circle"></i> bx
                      bx-play-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pause"></i> bx bx-pause
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-pause-circle"></i> bx
                      bx-pause-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-moon"></i> bx bx-moon
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-minus-circle"></i> bx
                      bx-minus-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-microphone"></i> bx
                      bx-microphone
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-menu"></i> bx bx-menu
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-left-top-arrow-circle"></i>{" "}
                      bx bx-left-top-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-left-indent"></i> bx
                      bx-left-indent
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-left-down-arrow-circle"></i>{" "}
                      bx bx-left-down-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-left-arrow-circle"></i> bx
                      bx-left-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-last-page"></i> bx
                      bx-last-page
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-key"></i> bx bx-key
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-align-justify"></i> bx
                      bx-align-justify
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-info-circle"></i> bx
                      bx-info-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-image"></i> bx bx-image
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-hide"></i> bx bx-hide
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-fullscreen"></i> bx
                      bx-fullscreen
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-folder"></i> bx bx-folder
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-folder-plus"></i> bx
                      bx-folder-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-folder-minus"></i> bx
                      bx-folder-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-first-page"></i> bx
                      bx-first-page
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-fast-forward"></i> bx
                      bx-fast-forward
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-fast-forward-circle"></i> bx
                      bx-fast-forward-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-exit-fullscreen"></i> bx
                      bx-exit-fullscreen
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-error"></i> bx bx-error
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-error-circle"></i> bx
                      bx-error-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-down-arrow-circle"></i> bx
                      bx-down-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-copyright"></i> bx
                      bx-copyright
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-copy"></i> bx bx-copy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-coffee"></i> bx bx-coffee
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-code"></i> bx bx-code
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-code-curly"></i> bx
                      bx-code-curly
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-clipboard"></i> bx
                      bx-clipboard
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chevrons-left"></i> bx
                      bx-chevrons-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chevrons-right"></i> bx
                      bx-chevrons-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chevrons-up"></i> bx
                      bx-chevrons-up
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chevrons-down"></i> bx
                      bx-chevrons-down
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chevron-right"></i> bx
                      bx-chevron-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chevron-left"></i> bx
                      bx-chevron-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chevron-up"></i> bx
                      bx-chevron-up
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-chevron-down"></i> bx
                      bx-chevron-down
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-checkbox-square"></i> bx
                      bx-checkbox-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-checkbox"></i> bx
                      bx-checkbox
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-checkbox-checked"></i> bx
                      bx-checkbox-checked
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-captions"></i> bx
                      bx-captions
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-camera"></i> bx bx-camera
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-camera-off"></i> bx
                      bx-camera-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bullseye"></i> bx
                      bx-bullseye
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bookmarks"></i> bx
                      bx-bookmarks
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bookmark"></i> bx
                      bx-bookmark
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bell"></i> bx bx-bell
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bell-plus"></i> bx
                      bx-bell-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bell-off"></i> bx
                      bx-bell-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-bell-minus"></i> bx
                      bx-bell-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-arrow-back"></i> bx
                      bx-arrow-back
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-align-right"></i> bx
                      bx-align-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-align-middle"></i> bx
                      bx-align-middle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bx-align-left"></i> bx
                      bx-align-left
                    </Col>
                  </Row>

                  <h5 className="mt-5">Solid Icons</h5>
                  <Row className="icon-demo-content">
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-wink-tongue"></i> bx
                      bxs-wink-tongue
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-upside-down"></i> bx
                      bxs-upside-down
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-happy-alt"></i> bx
                      bxs-happy-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-laugh"></i> bx bxs-laugh
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-meh-blank"></i> bx
                      bxs-meh-blank
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cool"></i> bx bxs-cool
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-tired"></i> bx bxs-tired
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-happy-beaming"></i> bx
                      bxs-happy-beaming
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-shocked"></i> bx
                      bxs-shocked
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-happy"></i> bx bxs-happy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-sad"></i> bx bxs-sad
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-sleepy"></i> bx bxs-sleepy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-confused"></i> bx
                      bxs-confused
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-meh-alt"></i> bx
                      bxs-meh-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-meh"></i> bx bxs-meh
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-smile"></i> bx bxs-smile
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-wink-smile"></i> bx
                      bxs-wink-smile
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dizzy"></i> bx bxs-dizzy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-happy-heart-eyes"></i> bx
                      bxs-happy-heart-eyes
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-angry"></i> bx bxs-angry
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-business"></i> bx
                      bxs-business
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-camera-plus"></i> bx
                      bxs-camera-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-food-menu"></i> bx
                      bxs-food-menu
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-offer"></i> bx bxs-offer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-clinic"></i> bx bxs-clinic
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hand-left"></i> bx
                      bxs-hand-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hand-down"></i> bx
                      bxs-hand-down
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hand-right"></i> bx
                      bxs-hand-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hand-up"></i> bx
                      bxs-hand-up
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-baby-carriage"></i> bx
                      bxs-baby-carriage
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-caret-left-circle"></i> bx
                      bxs-caret-left-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-caret-right-circle"></i> bx
                      bxs-caret-right-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-caret-down-circle"></i> bx
                      bxs-caret-down-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-caret-up-circle"></i> bx
                      bxs-caret-up-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-tone"></i> bx bxs-tone
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bolt-circle"></i> bx
                      bxs-bolt-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-city"></i> bx bxs-city
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cake"></i> bx bxs-cake
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-spa"></i> bx bxs-spa
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dish"></i> bx bxs-dish
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-fridge"></i> bx bxs-fridge
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-image-add"></i> bx
                      bxs-image-add
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-alarm-add"></i> bx
                      bxs-alarm-add
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-archive-out"></i> bx
                      bxs-archive-out
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-archive-in"></i> bx
                      bxs-archive-in
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-add-to-queue"></i> bx
                      bxs-add-to-queue
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-check-shield"></i> bx
                      bxs-check-shield
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-label"></i> bx bxs-label
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-face"></i> bx bxs-face
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-find"></i> bx
                      bxs-file-find
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-extension"></i> bx
                      bxs-extension
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-exit"></i> bx bxs-exit
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-brush-alt"></i> bx
                      bxs-brush-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-layout"></i> bx bxs-layout
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-quote-alt-right"></i> bx
                      bxs-quote-alt-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-quote-alt-left"></i> bx
                      bxs-quote-alt-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-mobile-vibration"></i> bx
                      bxs-mobile-vibration
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-fast-forward-circle"></i>{" "}
                      bx bxs-fast-forward-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-rewind-circle"></i> bx
                      bxs-rewind-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-carousel"></i> bx
                      bxs-carousel
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-customize"></i> bx
                      bxs-customize
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-calendar-event"></i> bx
                      bxs-calendar-event
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-calendar-check"></i> bx
                      bxs-calendar-check
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-calendar-x"></i> bx
                      bxs-calendar-x
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-calendar-minus"></i> bx
                      bxs-calendar-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-calendar-plus"></i> bx
                      bxs-calendar-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-calendar-alt"></i> bx
                      bxs-calendar-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-calendar"></i> bx
                      bxs-calendar
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-briefcase-alt-2"></i> bx
                      bxs-briefcase-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bookmark-minus"></i> bx
                      bxs-bookmark-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bookmarks"></i> bx
                      bxs-bookmarks
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-time-five"></i> bx
                      bxs-time-five
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-pie-chart-alt-2"></i> bx
                      bxs-pie-chart-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-time"></i> bx bxs-time
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-timer"></i> bx bxs-timer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-stopwatch"></i> bx
                      bxs-stopwatch
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-compass"></i> bx
                      bxs-compass
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-check"></i> bx
                      bxs-user-check
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-x"></i> bx bxs-user-x
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-grid"></i> bx bxs-grid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-zoom-out"></i> bx
                      bxs-zoom-out
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-zoom-in"></i> bx
                      bxs-zoom-in
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-search"></i> bx bxs-search
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bell-minus"></i> bx
                      bxs-bell-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bell-plus"></i> bx
                      bxs-bell-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-folder-minus"></i> bx
                      bxs-folder-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-mobile"></i> bx bxs-mobile
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-data"></i> bx bxs-data
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-skip-next-circle"></i> bx
                      bxs-skip-next-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-skip-previous-circle"></i>{" "}
                      bx bxs-skip-previous-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-chalkboard"></i> bx
                      bxs-chalkboard
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-school"></i> bx bxs-school
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-institution"></i> bx
                      bxs-institution
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-left-down-arrow-circle"></i>{" "}
                      bx bxs-left-down-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-left-top-arrow-circle"></i>{" "}
                      bx bxs-left-top-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-right-down-arrow-circle"></i>{" "}
                      bx bxs-right-down-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-right-top-arrow-circle"></i>{" "}
                      bx bxs-right-top-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-down-arrow"></i> bx
                      bxs-down-arrow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-up-arrow"></i> bx
                      bxs-up-arrow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-left-arrow"></i> bx
                      bxs-left-arrow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-right-arrow"></i> bx
                      bxs-right-arrow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-rectangle"></i> bx
                      bxs-rectangle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-brightness"></i> bx
                      bxs-brightness
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-brightness-half"></i> bx
                      bxs-brightness-half
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-paint"></i> bx bxs-paint
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-credit-card"></i> bx
                      bxs-credit-card
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-credit-card-alt"></i> bx
                      bxs-credit-card-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-band-aid"></i> bx
                      bxs-band-aid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-map-pin"></i> bx
                      bxs-map-pin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-receipt"></i> bx
                      bxs-receipt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-purchase-tag-alt"></i> bx
                      bxs-purchase-tag-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-basket"></i> bx bxs-basket
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-palette"></i> bx
                      bxs-palette
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-plane-alt"></i> bx
                      bxs-plane-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-component"></i> bx
                      bxs-component
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-traffic-barrier"></i> bx
                      bxs-traffic-barrier
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-no-entry"></i> bx
                      bxs-no-entry
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-message-alt-dots"></i> bx
                      bxs-message-alt-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-message-alt"></i> bx
                      bxs-message-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-check-square"></i> bx
                      bxs-check-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-notification-off"></i> bx
                      bxs-notification-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-notification"></i> bx
                      bxs-notification
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-log-out"></i> bx
                      bxs-log-out
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-log-in"></i> bx bxs-log-in
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-log-out-circle"></i> bx
                      bxs-log-out-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-log-in-circle"></i> bx
                      bxs-log-in-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-circle"></i> bx bxs-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-doughnut-chart"></i> bx
                      bxs-doughnut-chart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-building-house"></i> bx
                      bxs-building-house
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-comment-error"></i> bx
                      bxs-comment-error
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-voice"></i> bx
                      bxs-user-voice
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cuboid"></i> bx bxs-cuboid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cube-alt"></i> bx
                      bxs-cube-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-polygon"></i> bx
                      bxs-polygon
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-square-rounded"></i> bx
                      bxs-square-rounded
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-square"></i> bx bxs-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-error-alt"></i> bx
                      bxs-error-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-shield-alt-2"></i> bx
                      bxs-shield-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-paint-roll"></i> bx
                      bxs-paint-roll
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-comment-add"></i> bx
                      bxs-comment-add
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-droplet-half"></i> bx
                      bxs-droplet-half
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-search-alt-2"></i> bx
                      bxs-search-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bowling-ball"></i> bx
                      bxs-bowling-ball
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hourglass-bottom"></i> bx
                      bxs-hourglass-bottom
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hourglass-top"></i> bx
                      bxs-hourglass-top
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-lock-open-alt"></i> bx
                      bxs-lock-open-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-lock-alt"></i> bx
                      bxs-lock-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-graduation"></i> bx
                      bxs-graduation
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-vial"></i> bx bxs-vial
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cylinder"></i> bx
                      bxs-cylinder
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-pyramid"></i> bx
                      bxs-pyramid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-wine"></i> bx bxs-wine
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-comment-detail"></i> bx
                      bxs-comment-detail
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-comment-dots"></i> bx
                      bxs-comment-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-comment"></i> bx
                      bxs-comment
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-traffic"></i> bx
                      bxs-traffic
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-landscape"></i> bx
                      bxs-landscape
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-adjust-alt"></i> bx
                      bxs-adjust-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-id-card"></i> bx
                      bxs-id-card
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-parking"></i> bx
                      bxs-parking
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-plane-land"></i> bx
                      bxs-plane-land
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-plane-take-off"></i> bx
                      bxs-plane-take-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-analyse"></i> bx
                      bxs-analyse
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-gif"></i> bx
                      bxs-file-gif
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-jpg"></i> bx
                      bxs-file-jpg
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-png"></i> bx
                      bxs-file-png
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-txt"></i> bx
                      bxs-file-txt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-md"></i> bx
                      bxs-file-md
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-json"></i> bx
                      bxs-file-json
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-js"></i> bx
                      bxs-file-js
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-css"></i> bx
                      bxs-file-css
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-html"></i> bx
                      bxs-file-html
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-copy-alt"></i> bx
                      bxs-copy-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-doc"></i> bx
                      bxs-file-doc
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-pin"></i> bx
                      bxs-user-pin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-quote-single-right"></i> bx
                      bxs-quote-single-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-quote-single-left"></i> bx
                      bxs-quote-single-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-ghost"></i> bx bxs-ghost
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-direction-left"></i> bx
                      bxs-direction-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-video-recording"></i> bx
                      bxs-video-recording
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-notepad"></i> bx
                      bxs-notepad
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bug-alt"></i> bx
                      bxs-bug-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-mouse-alt"></i> bx
                      bxs-mouse-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-edit-alt"></i> bx
                      bxs-edit-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-chat"></i> bx bxs-chat
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-book-content"></i> bx
                      bxs-book-content
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-message-square-dots"></i>{" "}
                      bx bxs-message-square-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-message-square"></i> bx
                      bxs-message-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-slideshow"></i> bx
                      bxs-slideshow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bank"></i> bx bxs-bank
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-wallet-alt"></i> bx
                      bxs-wallet-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-memory-card"></i> bx
                      bxs-memory-card
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-devices"></i> bx
                      bxs-devices
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-message-rounded-dots"></i>{" "}
                      bx bxs-message-rounded-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-message-dots"></i> bx
                      bxs-message-dots
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bar-chart-alt-2"></i> bx
                      bxs-bar-chart-alt-2
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-store-alt"></i> bx
                      bxs-store-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-buildings"></i> bx
                      bxs-buildings
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-home-circle"></i> bx
                      bxs-home-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-pdf"></i> bx
                      bxs-file-pdf
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-yin-yang"></i> bx
                      bxs-yin-yang
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-ship"></i> bx bxs-ship
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-factory"></i> bx
                      bxs-factory
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-tree"></i> bx bxs-tree
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-plane"></i> bx bxs-plane
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-rectangle"></i> bx
                      bxs-user-rectangle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-eyedropper"></i> bx
                      bxs-eyedroppers
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cloud-lightning"></i> bx
                      bxs-cloud-lightning
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cloud-rain"></i> bx
                      bxs-cloud-rain
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-eraser"></i> bx bxs-eraser
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-magic-wand"></i> bx
                      bxs-magic-wand
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hotel"></i> bx bxs-hotel
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-color-fill"></i> bx
                      bxs-color-fill
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-capsule"></i> bx
                      bxs-capsule
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-flask"></i> bx bxs-flask
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-joystick-button"></i> bx
                      bxs-joystick-button
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-direction-right"></i> bx
                      bxs-direction-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-directions"></i> bx
                      bxs-directions
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-megaphone"></i> bx
                      bxs-megaphone
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-keyboard"></i> bx
                      bxs-keyboard
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-brush"></i> bx bxs-brush
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-coffee-alt"></i> bx
                      bxs-coffee-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-badge-check"></i> bx
                      bxs-badge-check
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-landmark"></i> bx
                      bxs-landmark
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-gas-pump"></i> bx
                      bxs-gas-pump
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-badge"></i> bx
                      bxs-user-badge
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-right-arrow-square"></i> bx
                      bxs-right-arrow-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-down-arrow-square"></i> bx
                      bxs-down-arrow-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-up-arrow-square"></i> bx
                      bxs-up-arrow-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-left-arrow-square"></i> bx
                      bxs-left-arrow-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-ambulance"></i> bx
                      bxs-ambulance
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-magnet"></i> bx bxs-magnet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-card"></i> bx bxs-card
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-help-circle"></i> bx
                      bxs-help-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-note"></i> bx bxs-note
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-badge"></i> bx bxs-badge
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-flame"></i> bx bxs-flame
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-disc"></i> bx bxs-disc
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-minus-square"></i> bx
                      bxs-minus-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-plus-square"></i> bx
                      bxs-plus-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-x-square"></i> bx
                      bxs-x-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs- microphone-alt"></i> bx
                      bxs-microphone-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-image-alt"></i> bx
                      bxs-image-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-skull"></i> bx bxs-skull
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dollar-circle"></i> bx
                      bxs-dollar-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-film"></i> bx bxs-film
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-ball"></i> bx bxs-ball
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-edit"></i> bx bxs-edit
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-blank"></i> bx
                      bxs-file-blank
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bell-ring"></i> bx
                      bxs-bell-ring
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-photo-album"></i> bx
                      bxs-photo-album
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-key"></i> bx bxs-key
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-video-plus"></i> bx
                      bxs-video-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-box"></i> bx bxs-box
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-planet"></i> bx bxs-planet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-movie"></i> bx bxs-movie
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-taxi"></i> bx bxs-taxi
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-train"></i> bx bxs-train
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bath"></i> bx bxs-bath
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bed"></i> bx bxs-bed
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-area"></i> bx bxs-area
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bot"></i> bx bxs-bot
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bus"></i> bx bxs-bus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-star-half"></i> bx
                      bxs-star-half
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-checkbox-checked"></i> bx
                      bxs-checkbox-checked
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-checkbox"></i> bx
                      bxs-checkbox
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-check-circle"></i> bx
                      bxs-check-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-rocket"></i> bx bxs-rocket
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-certification"></i> bx
                      bxs-certification
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-plus"></i> bx
                      bxs-file-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dashboard"></i> bx
                      bxs-dashboard
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-conversation"></i> bx
                      bxs-conversation
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-battery-low"></i> bx
                      bxs-battery-low
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-folder-open"></i> bx
                      bxs-folder-open
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-zap"></i> bx bxs-zap
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-x-circle"></i> bx
                      bxs-x-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-wrench"></i> bx bxs-wrench
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-widget"></i> bx bxs-widget
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-watch"></i> bx bxs-watch
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-watch-alt"></i> bx
                      bxs-watch-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-wallet"></i> bx bxs-wallet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-volume"></i> bx bxs-volume
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-volume-mute"></i> bx
                      bxs-volume-mute
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-volume-low"></i> bx
                      bxs-volume-low
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-volume-full"></i> bx
                      bxs-volume-full
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-videos"></i> bx bxs-videos
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-video"></i> bx bxs-video
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-video-off"></i> bx
                      bxs-video-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user"></i> bx bxs-user
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-plus"></i> bx
                      bxs-user-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-minus"></i> bx
                      bxs-user-minus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-detail"></i> bx
                      bxs-user-detail
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-user-circle"></i> bx
                      bxs-user-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-upvote"></i> bx bxs-upvote
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-up-arrow-circle"></i> bx
                      bxs-up-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-truck"></i> bx bxs-truck
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-trophy"></i> bx bxs-trophy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-trash"></i> bx bxs-trash
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-trash-alt"></i> bx
                      bxs-trash-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-torch"></i> bx bxs-torch
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-toggle-right"></i> bx
                      bxs-toggle-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-to-top"></i> bx bxs-to-top
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-terminal"></i> bx
                      bxs-terminal
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-tennis-ball"></i> bx
                      bxs-tennis-ball
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-tag"></i> bx bxs-tag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-tag-x"></i> bx bxs-tag-x
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-t-shirt"></i> bx
                      bxs-t-shirt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-sun"></i> bx bxs-sun
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-store"></i> bx bxs-store
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-star"></i> bx bxs-star
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-spreadsheet"></i> bx
                      bxs-spreadsheet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-show"></i> bx bxs-show
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-shopping-bag"></i> bx
                      bxs-shopping-bag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-shopping-bag-alt"></i> bx
                      bxs-shopping-bag-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-shield"></i> bx bxs-shield
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-share"></i> bx bxs-share
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-share-alt"></i> bx
                      bxs-share-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-server"></i> bx bxs-server
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-send"></i> bx bxs-send
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-select-multiple"></i> bx
                      bxs-select-multiple
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-sort-alt"></i> bx
                      bxs-sort-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-save"></i> bx bxs-save
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-ruler"></i> bx bxs-ruler
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-right-arrow-circle"></i> bx
                      bxs-right-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-report"></i> bx bxs-report
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-rename"></i> bx bxs-rename
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-radio"></i> bx bxs-radio
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-quote-right"></i> bx
                      bxs-quote-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-quote-left"></i> bx
                      bxs-quote-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-purchase-tag"></i> bx
                      bxs-purchase-tag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-printer"></i> bx
                      bxs-printer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-plus-circle"></i> bx
                      bxs-plus-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-plug"></i> bx bxs-plug
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-playlist"></i> bx
                      bxs-playlist
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-pin"></i> bx bxs-pin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-pie-chart"></i> bx
                      bxs-pie-chart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-pie-chart-alt"></i> bx
                      bxs-pie-chart-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-phone"></i> bx bxs-phone
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-phone-outgoing"></i> bx
                      bxs-phone-outgoing
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-phone-incoming"></i> bx
                      bxs-phone-incoming
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-phone-call"></i> bx
                      bxs-phone-call
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-pencil"></i> bx bxs-pencil
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-pen"></i> bx bxs-pen
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-paste"></i> bx bxs-paste
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-paper-plane"></i> bx
                      bxs-paper-plane
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-package"></i> bx
                      bxs-package
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-news"></i> bx bxs-news
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-navigation"></i> bx
                      bxs-navigation
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-music"></i> bx bxs-music
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-mouse"></i> bx bxs-mouse
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-moon"></i> bx bxs-moon
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-minus-circle"></i> bx
                      bxs-minus-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-microphone"></i> bx
                      bxs-microphone
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-microphone-off"></i> bx
                      bxs-microphone-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-message"></i> bx
                      bxs-message
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-message-rounded"></i> bx
                      bxs-message-rounded
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-map"></i> bx bxs-map
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-map-alt"></i> bx
                      bxs-map-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-lock"></i> bx bxs-lock
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-lock-open"></i> bx
                      bxs-lock-open
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-like"></i> bx bxs-like
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-left-arrow-circle"></i> bx
                      bxs-left-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-layer"></i> bx bxs-layer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-joystick"></i> bx
                      bxs-joystick
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-joystick-alt"></i> bx
                      bxs-joystick-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-info-circle"></i> bx
                      bxs-info-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-inbox"></i> bx bxs-inbox
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-image"></i> bx bxs-image
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hourglass"></i> bx
                      bxs-hourglass
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hot"></i> bx bxs-hot
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-home"></i> bx bxs-home
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hide"></i> bx bxs-hide
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-heart"></i> bx bxs-heart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-hdd"></i> bx bxs-hdd
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-group"></i> bx bxs-group
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-grid-alt"></i> bx
                      bxs-grid-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-gift"></i> bx bxs-gift
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-flag"></i> bx bxs-flag
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-flag-alt"></i> bx
                      bxs-flag-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-first-aid"></i> bx
                      bxs-first-aid
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-filter-alt"></i> bx
                      bxs-filter-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file"></i> bx bxs-file
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file"></i> bx bxs-file
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-file-image"></i> bx
                      bxs-file-image
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-error"></i> bx bxs-error
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-error-circle"></i> bx
                      bxs-error-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-envelope"></i> bx
                      bxs-envelope
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-eject"></i> bx bxs-eject
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-duplicate"></i> bx
                      bxs-duplicate
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-droplet"></i> bx
                      bxs-droplet
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-drink"></i> bx bxs-drink
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-downvote"></i> bx
                      bxs-downvote
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-download"></i> bx
                      bxs-download
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-down-arrow-circle"></i> bx
                      bxs-down-arrow-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dock-top"></i> bx
                      bxs-dock-top
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dock-right"></i> bx
                      bxs-dock-right
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dock-left"></i> bx
                      bxs-dock-left
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dock-bottom"></i> bx
                      bxs-dock-bottom
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-dislike"></i> bx
                      bxs-dislike
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-discount"></i> bx
                      bxs-discount
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-detail"></i> bx bxs-detail
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cube"></i> bx bxs-cube
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-crown"></i> bx bxs-crown
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-coupon"></i> bx bxs-coupon
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-copy"></i> bx bxs-copy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-contact"></i> bx
                      bxs-contact
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-collection"></i> bx
                      bxs-collection
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cog"></i> bx bxs-cog
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-coffee"></i> bx bxs-coffee
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cloud"></i> bx bxs-cloud
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cloud-upload"></i> bx
                      bxs-cloud-upload
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cloud-download"></i> bx
                      bxs-cloud-download
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-chip"></i> bx bxs-chip
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-chart"></i> bx bxs-chart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cart"></i> bx bxs-cart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-cart-alt"></i> bx
                      bxs-cart-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-car"></i> bx bxs-car
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-captions"></i> bx
                      bxs-captions
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-calculator"></i> bx
                      bxs-calculator
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-buoy"></i> bx bxs-buoy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bulb"></i> bx bxs-bulb
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-building"></i> bx
                      bxs-building
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bug"></i> bx bxs-bug
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-briefcase-alt"></i> bx
                      bxs-briefcase-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-briefcase"></i> bx
                      bxs-briefcase
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bookmark-star"></i> bx
                      bxs-bookmark-star
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-book-open"></i> bx
                      bxs-book-open
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bookmark-plus"></i> bx
                      bxs-bookmark-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bookmark"></i> bx
                      bxs-bookmark
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-book"></i> bx bxs-book
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bolt"></i> bx bxs-bolt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bell-off"></i> bx
                      bxs-bell-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bell"></i> bx bxs-bell
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-battery-full"></i> bx
                      bxs-battery-full
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-battery-charging"></i> bx
                      bxs-battery-charging
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-battery"></i> bx
                      bxs-battery
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-barcode"></i> bx
                      bxs-barcode
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-bar-chart-square"></i> bx
                      bxs-bar-chart-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-award"></i> bx bxs-award
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-folder-plus"></i> bx
                      bxs-folder-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-folder"></i> bx bxs-folder
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-camera-off"></i> bx
                      bxs-camera-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-camera"></i> bx bxs-camera
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-archive"></i> bx
                      bxs-archive
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-album"></i> bx bxs-album
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-alarm-off"></i> bx
                      bxs-alarm-off
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-alarm"></i> bx bxs-alarm
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxs-adjust"></i> bx bxs-adjust
                    </Col>
                  </Row>

                  <h4 className="mt-5">Logos</h4>
                  <Row className="icon-demo-content">
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-redbubble"></i> bx
                      bxl-redbubble
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-patreon"></i> bx
                      bxl-patreon
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-gitlab"></i> bx bxl-gitlab
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-etsy"></i> bx bxl-etsy
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-figma"></i> bx bxl-figma
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-audible"></i> bx
                      bxl-audible
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-algolia"></i> bx
                      bxl-algolia
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-adobe"></i> bx bxl-adobe
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-pinterest-alt"></i> bx
                      bxl-pinterest-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-imdb"></i> bx bxl-imdb
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-jquery"></i> bx bxl-jquery
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-facebook-circle"></i> bx
                      bxl-facebook-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-instagram-alt"></i> bx
                      bxl-instagram-alt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-flickr-square"></i> bx
                      bxl-flickr-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-whatsapp-square"></i> bx
                      bxl-whatsapp-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-squarespace"></i> bx
                      bxl-squarespace
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-medium-old"></i> bx
                      bxl-medium-old
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-mailchimp"></i> bx
                      bxl-mailchimp
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-wix"></i> bx bxl-wix
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-trello"></i> bx bxl-trello
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-spotify"></i> bx
                      bxl-spotify
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-soundcloud"></i> bx
                      bxl-soundcloud
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-snapchat"></i> bx
                      bxl-snapchat
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-less"></i> bx bxl-less
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-flickr"></i> bx bxl-flickr
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-shopify"></i> bx
                      bxl-shopify
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-jsfiddle"></i> bx
                      bxl-jsfiddle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-css3"></i> bx bxl-css3
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-microsoft"></i> bx
                      bxl-microsoft
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-yahoo"></i> bx bxl-yahoo
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-bootstrap"></i> bx
                      bxl-bootstrap
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-redux"></i> bx bxl-redux
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-mastercard"></i> bx
                      bxl-mastercard
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-visa"></i> bx bxl-visa
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-baidu"></i> bx bxl-baidu
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-chrome"></i> bx bxl-chrome
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-dailymotion"></i> bx
                      bxl-dailymotion
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-joomla"></i> bx bxl-joomla
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-internet-explorer"></i> bx
                      bxl-internet-explorer
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-paypal"></i> bx bxl-paypal
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-edge"></i> bx bxl-edge
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-stripe"></i> bx bxl-stripe
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-telegram"></i> bx
                      bxl-telegram
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-wordpress"></i> bx
                      bxl-wordpress
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-periscope"></i> bx
                      bxl-periscope
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-react"></i> bx bxl-react
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-bing"></i> bx bxl-bing
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-vuejs"></i> bx bxl-vuejs
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-kickstarter"></i> bx
                      bxl-kickstarter
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-nodejs"></i> bx bxl-nodejs
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-javascript"></i> bx
                      bxl-javascript
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-firefox"></i> bx
                      bxl-firefox
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-stack-overflow"></i> bx
                      bxl-stack-overflow
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-magento"></i> bx
                      bxl-magento
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-product-hunt"></i> bx
                      bxl-product-hunt
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-html5"></i> bx bxl-html5
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-git"></i> bx bxl-git
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-quora"></i> bx bxl-quora
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-yelp"></i> bx bxl-yelp
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-airbnb"></i> bx bxl-airbnb
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-opera"></i> bx bxl-opera
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-invision"></i> bx
                      bxl-invision
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-foursquare"></i> bx
                      bxl-foursquare
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-sass"></i> bx bxl-sass
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-wikipedia"></i> bx
                      bxl-wikipedia
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-unsplash"></i> bx
                      bxl-unsplash
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-digg"></i> bx bxl-digg
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-amazon"></i> bx bxl-amazon
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-ebay"></i> bx bxl-ebay
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-drupal"></i> bx bxl-drupal
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-dropbox"></i> bx
                      bxl-dropbox
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-discourse"></i> bx
                      bxl-discourse
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-deviantart"></i> bx
                      bxl-deviantart
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-digitalocean"></i> bx
                      bxl-digitalocean
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-creative-commons"></i> bx
                      bxl-creative-commons
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-codepen"></i> bx
                      bxl-codepen
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-angular"></i> bx
                      bxl-angular
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-messenger"></i> bx
                      bxl-messenger
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-pocket"></i> bx bxl-pocket
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-vk"></i> bx bxl-vk
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-windows"></i> bx
                      bxl-windows
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-play-store"></i> bx
                      bxl-play-store
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-android"></i> bx
                      bxl-android
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-apple"></i> bx bxl-apple
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-blogger"></i> bx
                      bxl-blogger
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-pinterest"></i> bx
                      bxl-pinterest
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-reddit"></i> bx bxl-reddit
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-discord"></i> bx
                      bxl-discord
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-twitch"></i> bx bxl-twitch
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-slack"></i> bx bxl-slack
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-slack-old"></i> bx
                      bxl-slack-old
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-skype"></i> bx bxl-skype
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-medium-square"></i> bx
                      bxl-medium-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-medium"></i> bx bxl-medium
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-linkedin-square"></i> bx
                      bxl-linkedin-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-google-plus-circle"></i> bx
                      bxl-google-plus-circle
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-google-plus"></i> bx
                      bxl-google-plus
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-facebook-square"></i> bx
                      bxl-facebook-square
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-bitcoin"></i> bx
                      bxl-bitcoin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-linkedin"></i> bx
                      bxl-linkedin
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-vimeo"></i> bx bxl-vimeo
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-dribbble"></i> bx
                      bxl-dribbble
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-behance"></i> bx
                      bxl-behance
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-tumblr"></i> bx bxl-tumblr
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-whatsapp"></i> bx
                      bxl-whatsapp
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-youtube"></i> bx
                      bxl-youtube
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-twitter"></i> bx
                      bxl-twitter
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-instagram"></i> bx
                      bxl-instagram
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-google"></i> bx bxl-google
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-github"></i> bx bxl-github
                    </Col>
                    <Col xl={3} lg={4} sm={6}>
                      <i className="bx bxl-facebook"></i> bx
                      bxl-facebook
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default IconBoxicons
