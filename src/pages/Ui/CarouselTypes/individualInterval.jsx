import React from "react"
import { UncontrolledCarousel } from "reactstrap"

//import Images
import img01 from "../../../assets/images/small/img-1.jpg"
import img02 from "../../../assets/images/small/img-2.jpg"
import img03 from "../../../assets/images/small/img-3.jpg"

const IndividualInterval = () => {
  return (
    <>
      <UncontrolledCarousel
        interval={4000}
        indicators={false}
        items={[
          {
            altText: " ",
            caption: " ",
            key: 1,
            src: img02,
          },
          {
            altText: " ",
            caption: " ",
            key: 2,
            src: img01,
          },
          {
            altText: " ",
            caption: " ",
            key: 3,
            src: img03,
          },
        ]}
      />
    </>
  )
}

export default IndividualInterval
