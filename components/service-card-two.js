import React from "react";

const ServiceCardTwo = ({ data }) => {
  const { iconName, title } = data;
  return (
      <a className="icon_box_1 text-center">
        <div className="flipper">
          <div className="front">
            <i className={iconName}></i>
            <h3>{title}</h3>
          </div>
          <div className="back">
            <i className={iconName}></i>
            <h3>{title}</h3>
          </div>
        </div>
      </a>
  );
};

export default ServiceCardTwo;
