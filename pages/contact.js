import React from "react";
import {useRouter} from 'next/router';
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import ContactInfos from "@/components/contact-infos";
import GoogleMap from "@/components/google-map";
import PageBanner from "@/components/page-banner";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
import TeamOne from "@/components/team-one";

const ContactPage = () => {
  const {locale} = useRouter();
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout>
          <HeaderOne />
          <PageBanner title={locale === 'en-US' ? "Contact US" : "Contactez-nous"} />
          <ContactInfos />
          <TeamOne />
          <GoogleMap extraClass="contact-page" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ContactPage;
