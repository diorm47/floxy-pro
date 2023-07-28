import React from "react"

import { Card, Col, Row } from "reactstrap"
import profileImg from "../../assets/images/profile-img.png"

const WelcomeComp = () => {
  return (
    <>
      <Card className="overflow-hidden">
        <div className="bg-primary bg-soft welcome_blog">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">С возвращением !</h5>
                <p className={"main-content-welcome"}>
                  Тут вы можете посмотреть статистику работ по:
                </p>
                <ul>
                  <li className={"mb-1"}>Вашим чатам в ВК</li>
                  <li>Вашим группам в ВК</li>
                </ul>
              </div>
            </Col>
            <Col xs="5" className="align-self-end">
              <img src={profileImg} alt="" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </Card>
    </>
  )
}
export default WelcomeComp
