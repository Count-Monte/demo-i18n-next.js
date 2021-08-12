import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ClientCarouselData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination]);

const ClientCarouselOne = () => {
  const { sectionContent, items } = ClientCarouselData;
  const { title, subTitle, text } = sectionContent;

  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#client-carousel-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  };

  return (
    <section className="commonSection client">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{text}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Swiper className="client_slider" {...carouselOptions}>
              {items.map(({ url, image }, index) => (
                <SwiperSlide key={index}>
                  <div className="singleClient">
                    <Link href={url}>
                      <a>
                        <img src={image} alt="" />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
              <div
                className="swiper-pagination"
                id="client-carousel-pagination"
              ></div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientCarouselOne;
