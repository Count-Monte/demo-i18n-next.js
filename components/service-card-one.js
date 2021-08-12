import React from "react";

const ServiceCardOne = ({ data }) => {
  const { title, text, iconName, url } = data;
  return (
    <div className="icon_box_2 text-center">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>
    </div>
  );
};

export default ServiceCardOne;
