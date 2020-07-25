import React, { useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
// import Group from "react-bootstrap/Group"
// import Control from "react-bootstrap/Control"
// import Label from "react-bootstrap/Label"

const App = () => {
  const [editorText, setEditorText] = useState("");

  return (
    <div style={{ backgroundColor: "green" }}>
      <Container>
        <h1 className="text-center py-3 display-4">Markdown Previewer</h1>
        <Row>
          <Col className="border py-3" sm={6}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Editor </Form.Label>
              <Form.Control
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                rows="15"
                as="textarea"
                // style={{ height: "50vh", backgroundColor: "green" }}
              />
            </Form.Group>
          </Col>
          <Col className="border py-3" sm={6}>
            <Form.Label>Viewer</Form.Label>

            <p>
              <ReactMarkdown
                source={editorText}
                escapeHtml={false}
              ></ReactMarkdown>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
