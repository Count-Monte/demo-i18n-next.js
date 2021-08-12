import React, { Fragment, useState } from "react";
import { VideoTwoData } from "@/data";
import ModalVideo from "react-modal-video";
import SectionTitle from "@/components/section-title";
import "react-modal-video/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";

const VideoTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const { sectionContent, video } = VideoTwoData;
  return (
    <Fragment>
      <section className="commonSection what_wedo pb-0 border-bottom-0">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <SectionTitle data={sectionContent} />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="videoWrap mb-0">
                <img src={video.image} alt="" />
                <div className="play_video">
                  <a
                    className="video_popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="#"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <h2>{video.title}</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={video.ID}
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};

export default VideoTwo;
