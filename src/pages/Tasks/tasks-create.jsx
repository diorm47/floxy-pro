import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap"

// Import Editor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb"

const TasksCreate = () => {

  //meta title
  document.title = "Create Task | Skote - Vite React Admin & Dashboard Template";

  const inpRow = [{ name: "", file: "" }]
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const [inputFields, setinputFields] = useState(inpRow)

  const startDateChange = date => {
    setstartDate(date)
  }

  const endDateChange = date => {
    setendDate(date)
  }

  // Function for Create Input Fields
  function handleAddFields() {
    const item1 = { name: "", file: "" }
    setinputFields([...inputFields, item1])
  }

  // Function for Remove Input Fields
  function handleRemoveFields(idx) {
    document.getElementById("nested" + idx).style.display = "none"
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Create Task" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Create New Task</CardTitle>
                  <form className="outer-repeater">
                    <div data-repeater-list="outer-group" className="outer">
                      <div data-repeater-item className="outer">
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            Task Name
                          </Label>
                          <Col lg="10">
                            <Input
                              id="taskname"
                              name="taskname"
                              type="text"
                              className="form-control"
                              placeholder="Enter Task Name..."
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label className="col-form-label col-lg-2">
                            Task Description
                          </Label>
                          <Col lg="10">                           
                            <CKEditor
                              editor={ClassicEditor}
                              data="<p>Hello from CKEditor 5!</p>"
                              onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log('Editor is ready to use!', editor);
                              }}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                              }}
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="mb-4" row>
                          <Label className="col-form-label col-lg-2">
                            Task Date
                          </Label>
                          <Col lg="10">
                            <Row>
                              <Col md={6} className="pr-0">
                                <DatePicker
                                  className="form-control"
                                  selected={startDate}
                                  onChange={startDateChange}
                                />
                              </Col>
                              <Col md={6} className="pl-0">
                                <DatePicker
                                  className="form-control"
                                  selected={endDate}
                                  onChange={endDateChange}
                                />
                              </Col>
                            </Row>
                          </Col>
                        </FormGroup>

                        <div className="inner-repeater mb-4">
                          <div className="inner form-group mb-0 row">
                            <Label className="col-form-label col-lg-2">
                              Add Team Member
                            </Label>
                            <div
                              className="inner col-lg-10 ml-md-auto"
                              id="repeater"
                            >
                              {inputFields.map((field, key) => (
                                <div
                                  key={key}
                                  id={"nested" + key}
                                  className="mb-3 row align-items-center"
                                >
                                  <Col md="6">
                                    <input
                                      type="text"
                                      className="inner form-control"
                                      defaultValue={field.name}
                                      placeholder="Enter Name..."
                                    />
                                  </Col>
                                  <Col md="4">
                                    <div className="mt-4 mt-md-0">
                                      <Input
                                        type="file"
                                        className="form-control"
                                        defaultValue={field.file}
                                      />
                                    </div>
                                  </Col>
                                  <Col md="2">
                                    <div className="mt-2 mt-md-0 d-grid">
                                      <Button
                                        color="primary"
                                        className="inner"
                                        onClick={() => {
                                          handleRemoveFields(key)
                                        }}
                                        block
                                      >
                                        Delete
                                      </Button>
                                    </div>
                                  </Col>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Row className="justify-content-end">
                            <Col lg="10">
                              <Button
                                color="success"
                                className="inner"
                                onClick={() => {
                                  handleAddFields()
                                }}
                              >
                                Add Number
                              </Button>
                            </Col>
                          </Row>
                        </div>
                        <FormGroup className="mb-4" row>
                          <label
                            htmlFor="taskbudget"
                            className="col-form-label col-lg-2"
                          >
                            Budget
                          </label>
                          <div className="col-lg-10">
                            <Input
                              id="taskbudget"
                              name="taskbudget"
                              type="text"
                              placeholder="Enter Task Budget..."
                              className="form-control"
                            />
                          </div>
                        </FormGroup>
                      </div>
                    </div>
                  </form>
                  <Row className="justify-content-end">
                    <Col lg="10">
                      <Button type="submit" color="primary">
                        Create Task
                      </Button>
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

export default TasksCreate
