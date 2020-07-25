import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import Col from "react-bootstrap/Col";
import Heading from "./Heading";

const Viewer = ({ text }) => {
  return (
    <Col className=" border py-3" sm={6} style={{ minHeight: "100vh" }}>
      <h4>
        <Heading heading="Viewer" />
      </h4>
      <hr />

      <ReactMarkdown source={text}></ReactMarkdown>
    </Col>
  );
};

export default Viewer;
