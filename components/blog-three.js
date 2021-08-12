import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar";
import Paginations from "@/components/paginations";
import { BlogData } from "@/data";
import BlogCard from "@/components/blog-card";

const BlogThree = () => {
  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          <Col lg={8} sm={8}>
            <Row>
              {BlogData.map((post, index) => (
                <Col lg={6} sm={12} md={6} key={index}>
                  <BlogCard data={post} />
                </Col>
              ))}
            </Row>
            <Paginations />
          </Col>
          <Col lg={4} sm={4} className="sidebar">
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogThree;
