import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOne from "@/components/service-card-one";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";

const ServiceOne = () => {
  const { locale } = useRouter();
  const { ServicePostData } = getDataWithLocale(data, locale);
  return (
    <section className="service_section_2 commonSection">
      <Container>
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

export default ServiceOne;
