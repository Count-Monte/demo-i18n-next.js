import React from "react";
import { AboutTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";

const AboutTwo = () => {
  const { locale } = useRouter();
  const { AboutTwoData } = getDataWithLocale(data, locale);
  const { sectionContent, button, gallery } = AboutTwoData;
  return (
    <section className="commonSection ab_agency">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79">
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title MB_45">{sectionContent.title}</h2>
            <p className="sec_desc">{sectionContent.text}</p>
          </Col>
          <Col lg={6} md={6} sm={12}>
            {gallery.map((item, index) => (
              <div className={`ab_img${index + 1}`} key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
