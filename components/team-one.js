import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TeamData } from "@/data";
import TeamCardTwo from "@/components/team-cardtwo";

const TeamOne = () => {
  return (
      <section className="commonSection blogPage">
        <h2 className="sec_title text-center">
        Notre équipe d'administration
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
