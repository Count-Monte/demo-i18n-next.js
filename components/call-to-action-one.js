import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router';

const CallToActionOne = ({ extraClassName, buttonClass }) => {
  const {locale} = useRouter();
  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-9">
            <h2 className="sec_title white">{locale === 'en-US' ? "Your sound standard, to another level." : "Votre standard sonore, à un autre niveau."}</h2>
          </div>
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
            <Link href="/contact">
              <a className={`common_btn ${buttonClass}`}>
                <span>{locale === 'en-US' ? "Contact US" : "Contactez-nous"}</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
