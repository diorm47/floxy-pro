import React, { Component } from "react"

import DualListBox from "react-dual-listbox"
import "react-dual-listbox/lib/react-dual-listbox.css"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const options = [
  { value: "luna", label: "Moon" },
  { value: "phobos", label: "Phobos" },
  { value: "deimos", label: "Deimos" },
  { value: "io", label: "Io" },
  { value: "europa", label: "Europa" },
  { value: "ganymede", label: "Ganymede" },
  { value: "callisto", label: "Callisto" },
  { value: "mimas", label: "Mimas" },
  { value: "enceladus", label: "Enceladus" },
  { value: "tethys", label: "Tethys" },
  { value: "rhea", label: "Rhea" },
  { value: "titan", label: "Titan" },
]

const Optgroup = [
  {
    label: "Earth",
    options: [{ value: "luna", label: "Moon" }],
  },
  {
    label: "Mars",
    options: [
      { value: "phobos", label: "Phobos" },
      { value: "deimos", label: "Deimos" },
    ],
  },
  {
    label: "Jupiter",
    options: [
      { value: "io", label: "Io" },
      { value: "europa", label: "Europa" },
      { value: "ganymede", label: "Ganymede" },
      { value: "callisto", label: "Callisto" },
    ],
  },
]

const available = ["io", "europa", "ganymede", "callisto"]

class DualListbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ["phobos", "titan", "deimos"],
      selectedOptGroup: ["luna"],
      selectedFilter: ["luna"],
      selectedFilterAlign: ["luna"],
      selectedPreserve: ["luna"],
      selectedRestrict: ["luna"],
      selectedDuplicate: ["luna"],
    }
  }
  onChange = selected => {
    this.setState({ selected })
  }

  onOptGroupChange = selectedOptGroup => {
    this.setState({ selectedOptGroup })
  }

  onFilterChange = selectedFilter => {
    this.setState({ selectedFilter })
  }

  onFilterAlignChange = selectedFilterAlign => {
    this.setState({ selectedFilterAlign })
  }

  onPreserveChange = selectedPreserve => {
    this.setState({ selectedPreserve })
  }

  onRestrictChange = selectedRestrict => {
    this.setState({ selectedRestrict })
  }

  onDuplicateChange = selectedDuplicate => {
    this.setState({ selectedDuplicate })
  }

  render() {
    //meta title
    document.title =
      "Transfer List | Skote - Vite React Admin & Dashboard Template"

    const {
      selected,
      selectedOptGroup,
      selectedFilter,
      selectedFilterAlign,
      selectedPreserve,
      selectedDuplicate,
      selectedRestrict,
    } = this.state
    const available = ["io", "europa", "ganymede", "callisto"]
    return (
      <>
        <div className="page-content">
          <div className="container-fluid">
            <Breadcrumbs
              title="Forms"
              breadcrumbItem="Transfer List"
            />

            <Row>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Basic example
                    </CardTitle>
                    <DualListBox
                      options={options}
                      selected={selected}
                      onChange={this.onChange}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Optgroup Example
                    </CardTitle>
                    <DualListBox
                      options={Optgroup}
                      selected={selectedOptGroup}
                      onChange={this.onOptGroupChange}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Filter Example
                    </CardTitle>
                    <DualListBox
                      canFilter
                      filterCallback={(Optgroup, filterInput) => {
                        if (filterInput === "") {
                          return true
                        }

                        return new RegExp(filterInput, "i").test(
                          Optgroup.label
                        )
                      }}
                      filterPlaceholder="Search..."
                      options={Optgroup}
                      selected={selectedFilter}
                      onChange={this.onFilterChange}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Align Actions to Top Example
                    </CardTitle>
                    <DualListBox
                      canFilter
                      filterCallback={(Optgroup, filterInput) => {
                        if (filterInput === "") {
                          return true
                        }

                        return new RegExp(filterInput, "i").test(
                          Optgroup.label
                        )
                      }}
                      filterPlaceholder="Search..."
                      alignActions="top"
                      options={Optgroup}
                      selected={selectedFilterAlign}
                      onChange={this.onFilterAlignChange}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Disabled Example
                    </CardTitle>
                    <DualListBox
                      canFilter
                      filterCallback={(Optgroup, filterInput) => {
                        if (filterInput === "") {
                          return true
                        }

                        return new RegExp(filterInput, "i").test(
                          Optgroup.label
                        )
                      }}
                      filterPlaceholder="Search..."
                      disabled={true}
                      options={Optgroup}
                      selected={selectedFilter}
                      onChange={this.onFilterChange}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Preserve Select Order Example
                    </CardTitle>
                    <DualListBox
                      canFilter
                      filterCallback={(Optgroup, filterInput) => {
                        if (filterInput === "") {
                          return true
                        }

                        return new RegExp(filterInput, "i").test(
                          Optgroup.label
                        )
                      }}
                      filterPlaceholder="Search..."
                      options={Optgroup}
                      selected={selectedPreserve}
                      onChange={this.onPreserveChange}
                      preserveSelectOrder
                      showOrderButtons
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Allow Duplicates Example
                    </CardTitle>
                    <DualListBox
                      canFilter
                      filterCallback={(Optgroup, filterInput) => {
                        if (filterInput === "") {
                          return true
                        }

                        return new RegExp(filterInput, "i").test(
                          Optgroup.label
                        )
                      }}
                      filterPlaceholder="Search..."
                      allowDuplicates
                      preserveSelectOrder
                      options={Optgroup}
                      selected={selectedDuplicate}
                      onChange={this.onDuplicateChange}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">
                      Preserve Select Order Example
                    </CardTitle>
                    <DualListBox
                      options={Optgroup}
                      selected={selectedRestrict}
                      available={available}
                      onChange={this.onRestrictChange}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    )
  }
}

export default DualListbox
