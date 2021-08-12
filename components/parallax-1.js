import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ParallaxOneData } from "@/data";

const ParallaxOne = () => {
  const { iconName, title, specialText, text } = ParallaxOneData;
  return (
    <section className="commonSection testimonial">
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }} sm={12} className="text-center">
            <div className="testimonial_content">
              <div className="testi_icon">
                <i className={iconName}></i>
              </div>
              <h2>
                {title}
                <span>{specialText}</span>
              </h2>
              <p>{text}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ParallaxOne;
