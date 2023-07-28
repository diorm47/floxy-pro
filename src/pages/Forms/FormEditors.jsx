import React from "react"

import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap"

// Form Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormEditors = () => {
  //meta title
  document.title =
    "Form Editors | Skote - Vite React Admin & Dashboard Template"

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Editors" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    react-draft-wysiwyg
                  </CardTitle>
                  <p className="card-title-desc">
                    Bootstrap-wysihtml5 is a javascript plugin that
                    makes it easy to create simple, beautiful wysiwyg
                    editors with the help of wysihtml5 and Twitter
                    Bootstrap.
                  </p>

                  <Form method="post">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">CK Editor</CardTitle>
                  <p className="card-title-desc">
                    Super simple wysiwyg editor on Bootstrap
                  </p>

                  <Form method="post">
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from CKEditor 5!</p>"
                      onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData()
                      }}
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default FormEditors
