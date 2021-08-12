import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import PortfolioTwo from "@/components/portfolio-two";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
const PortfolioPage = () => {
  return (
    
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout>
          <HeaderOne />
          <PageBanner title="Galerie" />
          <PortfolioTwo />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;
