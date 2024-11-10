
import './aftermenu.css'
import locationImg from './../../img/location_on.png'
import countriesImg from './../../img/language.png'
import currencyIMG from './../../img/monetization_on.png'


const Aftermenu = () => {
    return ( <section className="aftermenu">
        <div className="container">
            <div className="after_menu">
              <img src={locationImg} alt="" className='location_img' />
              <img src={countriesImg} alt="" className='countries_img' />
              <img src={currencyIMG} alt="" className='currency_img' />
             
        </div>
      

       

     </div>
    </section>);


    
     
}
 
export default Aftermenu;