import React from "react";
import { CallToActionTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const CallToActionTwo = () => {
  return (
    <section className="noPadding">
      <Container fluid>
        <Row>
          {CallToActionTwoData.map(({ label, url }, index) => {
            return (
              <Col lg={6} md={6} className="noPadding" key={index}>
                <div
                  className={`btn_link ${0 === index % 2 ? "bg_black" : " "}`}
                >
                  <Link href={url}>
                    <a>{label}</a>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionTwo;
