import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portfolio-card";

const PortfolioOne = () => {
  return (
    <section className="commonSection porfolioPage">
      <Container>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {PortfolioData.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
        <Row>
          <Col lg={12} className="text-center">
            <a className="common_btn red_bg" href="#">
              <span>Load More</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioOne;
