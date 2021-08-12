import React from "react";
import Link from "next/link";

const TeamCardTwo = ({ data }) => {
  const { image, title, url, tag, phone, poste } = data;
  return (
      <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img src={image} alt={title} />
      </div>
      <div className="lbi_details">
        <Link href={url}>
          <a className="lbid_date">{tag}</a>
        </Link>
        <h2>
            <a>{title}</a>
        </h2>
        <h6>
            <a>{phone}</a>
        </h6>
          <a className="learnM">{poste}</a>
      </div>
    </div>
  );
};

export default TeamCardTwo;
