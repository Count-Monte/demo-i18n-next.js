import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";
SwiperCore.use([EffectFade]);
const SliderTwo = () => {
  const { locale } = useRouter();
  const { SliderTwoData } = getDataWithLocale(data, locale);
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade"
  };
  return (
    <section className="main-slider main-slider__two">
      <Swiper {...mainSlideOptions}>
        {SliderTwoData.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <Container>
              <Row>
                <Col lg={12} className="text-left">
                  <p className="main-slider__subtext">{subTitle}</p>
                  <h3 className="main-slider__title">{title}</h3>
                  <Link href={button.url}>
                    <a className={`common_btn red_bg`}>
                      <span>{button.label}</span>
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderTwo;
