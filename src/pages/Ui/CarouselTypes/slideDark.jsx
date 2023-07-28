import React, { Component } from "react"
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap"

// Carousel images
import img4 from "../../../assets/images/small/img-4.jpg"
import img5 from "../../../assets/images/small/img-5.jpg"
import img6 from "../../../assets/images/small/img-6.jpg"

const items = [
  {
    src: img6,
    altText:
      "Some representative placeholder content for the first slide.",
    caption: "First slide label",
  },
  {
    src: img5,
    altText:
      "Some representative placeholder content for the first slide.",
    caption: "Second slide label",
  },
  {
    src: img4,
    altText:
      "Some representative placeholder content for the first slide.",
    caption: "Third slide label",
  },
]

class SlideDark extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.altText}
            captionHeader={item.caption}
            className="carousel-caption d-none d-md-block"
          />
        </CarouselItem>
      )
    })

    return (
      <>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          dark={true}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </>
    )
  }
}

export default SlideDark
