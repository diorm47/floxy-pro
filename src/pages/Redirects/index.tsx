import { Floxy } from "floxy-web-api"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { Container } from "reactstrap"
import RedirectsItem from "./RedirectsItem"
import React from "react"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiI2M2QxNTI2YzIyOGI1NGRiZjY2NjAzMWIiLCJyaWQiOiI2M2QxNTJhMTIyOGI1NGRiZjY2NjAzMWYiLCJ0eXAiOiJtb250aCIsImlhdCI6MTY3NDY2MjU2MX0.o6MCpKoJVcYKBuwYvsZ28JJNIy6HceaN1vllh2ZIw9w"

const Redirects = () => {
  const [events, setEvents] = useState()
  React.useEffect(() => {
    document.title = `Редиректы | Floxy.pro`
  }, [])

  useEffect(() => {
    const makeRequest = async () => {
      globalThis.apis = await new Floxy(token)

      const eventsData = await apis.getEvents()
      const filteredEvents = eventsData.filter(event => {
        return event.event_name === "custom"
      })
      setEvents(filteredEvents)
    }

    makeRequest()
  }, [])

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <h2 className={"main-title me-2"}>
            редиректы ({events?.length})
          </h2>

          <div className={"groups-wrapper"}>
            {events?.map((event, index) => (
              <RedirectsItem key={index} event={event} />
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}
export default Redirects
