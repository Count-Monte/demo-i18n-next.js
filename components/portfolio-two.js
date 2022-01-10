import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";
import PortfolioCard from "@/components/portfolio-card";

const PortfolioTwo = () => {
  const { locale } = useRouter();
  const { PortfolioData2 } = getDataWithLocale(data, locale);
  return (
    <section className="commonSection porfolioPage">
      <Container>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {PortfolioData2.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioTwo;
