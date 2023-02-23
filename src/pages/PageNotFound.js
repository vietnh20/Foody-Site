import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OtherHeader from "../components/OtherHeader";

const PageNotFound = () => {
  return (
    <>
      <OtherHeader label="404 Error" />
      <div className="container py-6">
        <Container className="text-center">
          <Row className=" justify-content-center">
            <Col lg={6}>
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <Link
                className="btn btn-primary rounded-pill py-3 px-5"
                onClick={() => window.scrollTo(0, 0)}
                to="/HomePage"
              >
                Go Back To Home
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PageNotFound;
