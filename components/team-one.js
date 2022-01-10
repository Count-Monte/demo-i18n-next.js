import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";
import TeamCardTwo from "@/components/team-cardtwo";

const TeamOne = () => {
  const { locale } = useRouter();
  const { TeamData } = getDataWithLocale(data, locale);
  return (
      <section className="commonSection blogPage">
        <h2 className="sec_title text-center">
        {locale === 'en-US' ? "Our administration team" : "Notre équipe d'administration"}
        </h2>
      <Container>
        <Row>
          {TeamData.map((post, index) => (
            <Col lg={3} sm={12} md={6} key={index}>
              <TeamCardTwo data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamOne;
