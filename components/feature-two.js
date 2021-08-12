import React from "react";
import { FeatureTwoData } from "@/data";
import SectionTitle from "./section-title";

const FeatureTwo = () => {
  const { sectionContent, posts, image } = FeatureTwoData;
  const zeroPad = (num, numZeros) => {
    var n = Math.abs(num);
    var zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
    var zeroString = Math.pow(10, zeros).toString().substr(1);
    if (num < 0) {
      zeroString = "-" + zeroString;
    }

    return zeroString + n;
  };
  return (
    <section className="commonSection featured">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12  col-md-5">
            <div className="features_content">
              <SectionTitle data={sectionContent} />
              {posts.map(({ title, text }, index) => {
                return (
                  <div className="singleFeature" key={index}>
                    <div className="f_count">{zeroPad(index + 1, 2)}</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 col-md-7 noPaddingRight">
            <div className="features_img">
              <img src={image.path} alt="" />
              <div className="img_details">
                <h4>{image.text}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
