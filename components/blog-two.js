import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BlogTwoData } from "@/data";
import BlogCard from "@/components/blog-card";
import Paginations from "@/components/paginations";

const BlogTwo = () => {
  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          {BlogTwoData.map((post, index) => {
            return 0 === index || 0 === index % 5 ? (
              <Col lg={8} md={6} sm={12} key={index}>
                <BlogCard data={post} />
              </Col>
            ) : (
              <Col lg={4} md={6} sm={12} key={index}>
                <BlogCard data={post} />
              </Col>
            );
          })}
        </Row>
        <Paginations />
      </Container>
    </section>
  );
};

export default BlogTwo;
