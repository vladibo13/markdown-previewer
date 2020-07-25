import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Heading from "./Heading";

const Editor = ({ text, setText }) => {
  return (
    <Col className="border py-3" sm={6} style={{ minHeight: "100vh" }}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <h4>
          <Heading heading="Editor" />
        </h4>
        <hr />
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          as="textarea"
          style={{ minHeight: "70vh" }}
        />
      </Form.Group>
    </Col>
  );
};

export default Editor;
