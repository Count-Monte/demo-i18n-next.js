import React from "react";
const PortfolioCard = ({ data }) => {
  const { image, title, categories, subTitle } = data;

  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <h3>
          {subTitle}
        </h3>
        <a className="cate">
          {categories.map((cat) => cat + ", ")}
        </a>
        <h4>
          {title}
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
