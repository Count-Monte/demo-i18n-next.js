import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ServicePostThreeData } from "@/data";
import ServiceCardThree from "@/components/service-card-three";

const ServiceThree = () => {
  const { sectionContent, posts } = ServicePostThreeData;
  const { title, subTitle, text } = sectionContent;
  return (
    <section className="commonSection what_wedo_2">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title ">{subTitle}</h4>
            <h2 className="sec_title ">{title}</h2>
            <p className="sec_desc ">{text}</p>
          </Col>
        </Row>
        <Row>
          {posts.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardThree data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceThree;
