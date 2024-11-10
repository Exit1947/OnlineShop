import Aftermenu from "./components/aftermenu/Aftermenu.jsx";
import Header from "./components/header/Header.jsx";
import Dropdown from "./components/dropmenu/Dropdown.jsx";
import LanguageDropdown from './components/languagedrop/LanguageDropdown.jsx'
import CurrencyDropdown from './components/currencydropdown/CurrencyDropdown.jsx'
import PosterSlider from "./components/posterslider/PosterSlider.jsx";
import Carousel from "./components/сarousel/Carousel.jsx";
import CustomPoster from "./components/customposter/CustomPoster.jsx";
import ProductList from "./components/productlist/ProductList.jsx";
import Banner from "./components/banner/Banner.jsx";
import SingleRowProductList from './components/singlerowproductlist/SingleRowProductList.jsx'
import Subscriptions from './components/subscriptions/Subscriptions.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  const project = '';
  
  return (
    <div className="App">
     <h1>{project}</h1>
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

    
    </div>
  );
  
}

export default App;
