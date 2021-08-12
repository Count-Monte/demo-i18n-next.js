import React, { Fragment } from "react";

const SectionTitle = ({ data }) => {
  const { title, subTitle, text } = data;
  return (
    <Fragment>
      <h2 className="sec_title">{title}</h2>
      <h4 className="sub_title pic_asso">{subTitle}</h4>
      <p className="sec_desc picasso">{text}</p>
    </Fragment>
  );
};

export default SectionTitle;
