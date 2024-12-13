import { Outlet } from "react-router";
import Aftermenu from "../components/aftermenu/Aftermenu.tsx";
import React from "react";
import Banner from "../components/banner/Banner.tsx";
import Dropdown from "../components/dropmenu/Dropdown.tsx";
import CurrencyDropdown from "../components/currencydropdown/CurrencyDropdown.tsx";
import CustomPoster from "../components/customposter/CustomPoster.tsx";
import Footer from "../components/footer/Footer.tsx";
import Header from "../components/header/Header.tsx";
import LanguageDropdown from "../components/languagedrop/LanguageDropdown.tsx";
import ProductList from "../components/productlist/ProductList.tsx";
import SingleRowProductList from "../components/singlerowproductlist/SingleRowProductList.tsx";
import Subscriptions from "../components/subscriptions/Subscriptions.tsx";
import Carousel from "../components/сarousel/Carousel.tsx";
import PosterSlider from "../components/posterslider/PosterSlider.tsx";


const HomePage = () => {
    return (
        <>
         
            <Header/>
            <Aftermenu/>
            <Dropdown/>
            <LanguageDropdown/>
            <CurrencyDropdown/>
            <PosterSlider/>
            <Carousel/>
            <CustomPoster/>
            <ProductList/>
            <Banner/>
            <SingleRowProductList/>
            <Subscriptions/>
            <Footer/>
            
        </>
    );
}

export default HomePage;