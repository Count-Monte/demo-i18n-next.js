import React from "react";
import { useRouter } from 'next/router';
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import PortfolioTwo from "@/components/portfolio-two";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
const PortfolioPage = () => {
  const {locale} = useRouter();
  return (
    
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout>
          <HeaderOne />
          <PageBanner title={locale === 'en-US' ? "Gallery" : "Galerie"} />
          <PortfolioTwo />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;
