import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import getDataWithLocale from '@/utils/getDataWithLocale';
import data from "@/data";

const TrustedClient = ({ extraClassName }) => {
  const { locale } = useRouter();
  const { TrustClientData } = getDataWithLocale(data, locale);
  const { image, title, text, url } = TrustClientData;
  return (
    <section className={`commonSection trustClient ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="CL_content">
              <img src={image} alt="" />
              <div className="abc_inner">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 col-md-5"></div>
                  <div className="col-lg-7 col-sm-12 col-md-7">
                    <div className="abci_content">
                      <h2>{title}</h2>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClient;
