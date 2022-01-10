import React from "react";
import {useRouter} from 'next/router';
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceThree from "@/components/service-three";
import ServiceDetails from "@/components/service-details";
import ServiceDetails2 from "@/components/service-details2";
import ServiceDetails3 from "@/components/service-details3";
import ServiceDetails4 from "@/components/service-details4";
import ServiceOne from "@/components/service-one";
import VideoOne from "@/components/video-one";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

const ServiceDetailsPage = () => {
  const {locale} = useRouter();
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout>
          <HeaderOne />
          <PageBanner title={locale === 'en-US' ? "Our Services" : "Nos services"} />
          <ServiceThree />
          <ServiceDetails />
          <ServiceOne />
          <ServiceDetails2 />
          <CallToActionOne extraClassName="ready" />
          <ServiceDetails4 />
          <VideoOne />
          <ServiceDetails3 />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
