import './productpagestyle.css';
import Arrow from '../../img/icons-arrow-left.png';
import IconsFour from '../../img/Frame 427319916.png';
import Business from '../../img/Frame 427319913.png';
import FirstSection from '../../img/left first section.png';
import FirstSectionRight from '../../img/right first section.png';
import SecondsectionLeft from '../../img/left second section .png';
import SecondsectionRight from '../../img/right second section.png';
import  ThirdSectionLeft  from '../../img/left  third section .png';
import ThirdSectionRight from '../../img/right third section.png'  ;
import FourthSection from '../../img/Group 1501.png';
import FifthSection from '../../img/Group 1502.png';


const ProductPage = () => {
    return (
        <div className="main-product-page">

            <div className='top-product-page'>
                <img src={Arrow} alt=''/>
                <div className=''> Home </div>
                <div> / </div>
                <div className=''> Category </div>
                <div> / </div>
                <div className=''> Section </div>
                <div> / </div>
                <div> Name product</div>
            </div>

            <div className='main-card-product'>
                <div className='main-card-product-top'>
                <img src={Arrow} alt=''/>
                <div> All about</div>
                <div> Technical characteristics</div>
                <div> Tables</div>
                <div> Reviews </div>
                <div> Related Products</div>
                </div>
            </div>

            <div className='business-account'>
                <div className='container-iconsfour'>
                <img src={IconsFour} alt="" className='paint-business'/>
                </div>
                <div className='text'> <img src={Business} alt=''/></div>
                <button className='btn-sign-up'><strong>SIGN UP</strong></button>
            </div>


            <div className='all-about'> All about</div>

            <div className='full-all-about'>
                
                <div className='first-section'>
                    <div className='first-section-right'>
                        <img src={FirstSection} alt='' className='picture1'/>
                    </div>
                    <div className='first-section-left'>
                        <img src={FirstSectionRight} alt='' className='picture2'/>
                    </div>
                </div>

                <div className='second-section'>
                    <div className='second-section-left'>
                    <img src={SecondsectionRight} alt='' className='picture3'/>
                    </div>
                    <div className='second-section-right'>
                    <img src={SecondsectionLeft} alt='' className='picture4'/>
                    </div>

                </div>

                <div className='third-section'>
                    <div className='third-section-left'>
                        <img src={ThirdSectionLeft} alt='' className='picture5'/>
                    </div>
                    <div className='third-section-right'>
                       <img src={ThirdSectionRight} alt='' className='picture6'/>
                    </div>

                </div>

                <div className='fourth-section'>
                    <img  src={FourthSection}  alt=''/>

                </div>
                
                <div className='fifth-section'>
                    <img  src={FifthSection}  alt=''/>

                </div>         
                 </div>


                 <div className='technical-characteristics'> Technical characteristics</div>



                 <div className='technical-characteristics-table'>

                 </div>
            
        </div>
    )
}


export default ProductPage;