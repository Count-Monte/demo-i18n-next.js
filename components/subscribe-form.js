import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeFormData } from "@/data";

const SubscribeForm = () => {
  const { sectionContent } = SubscribeFormData;
  return (
    <section className="commonSection subscribe">
      <Container>
        <Row>
          <Col lg={4}>
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title">{sectionContent.title}</h2>
          </Col>
          <Col lg={8}>
            <form action="" method="post" className="subscribefrom">
              <input type="email" placeholder="Entrez votre courriel" name="email" />
              <button className="common_btn red_bg" type="submit" name="submit">
                <span>Inscrivez-vous</span>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeForm;
