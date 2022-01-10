import React from "react";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";

const AboutOne = () => {
  const { locale } = useRouter();
  const { AboutOneData1, AboutOneData2, AboutOneData3 } = getDataWithLocale(data, locale);
  const { sectionContent1, gallery1 } = AboutOneData1;
  const { sectionContent2, gallery2 } = AboutOneData2;
  const { sectionContent3, gallery3 } = AboutOneData3;
  return (
    <section className="commonSection">
      <div className="container price">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <p className="pricing preece">{sectionContent1.text}</p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="agency_img1">
              <img src={gallery1[0]} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container price">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="agency_img1">
              <img src={gallery2[0]} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <p className="preece">{sectionContent2.text}</p>
          </div>
        </div>
      </div>
      <div className="container price">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <p className="pricing preece">{sectionContent3.text}</p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="agency_img1">
              <img src={gallery3[0]} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
