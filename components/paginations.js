import React from "react";

const Paginations = () => {
  return (
    <div className="meipaly_paginations text-center">
      <a className="prev" href="#">
        <i className="fa fa-angle-left"></i>
      </a>
      <span className="current">01</span>
      <a href="#">02</a>
      <a href="#">5</a>
      <a className="next" href="#">
        <i className="fa fa-angle-right"></i>
      </a>
    </div>
  );
};

export default Paginations;
