import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOne from "@/components/service-card-one";
import { ServicePostData, ServiceHomeTwoData } from "@/data";
import SectionTitle from "./section-title";

const ServiceHomeTwo = () => {
  return (
    <section className="service_section_2 commonSection">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <SectionTitle data={ServiceHomeTwoData} />
          </Col>
        </Row>
        <Row>
          {ServicePostData.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardOne data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceHomeTwo;
