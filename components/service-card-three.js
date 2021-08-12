import React from "react";

const ServiceCardThree = ({ data }) => {
  const { title, image, } = data;
  return (
    <div className="single_wedo navigator">
      <img src={image} alt={title} />
      <div className="overlay_wedo">
          <a>{title}</a>
      </div>
    </div>
  );
};

export default ServiceCardThree;
