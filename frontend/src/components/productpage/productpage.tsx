import './productpagestyle.css';
import Arrow from '../../img/icons-arrow-left.png';
import IconsFour from '../../img/Frame 427319916.png';
import Business from '../../img/Frame 427319913.png';



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
            
        </div>
    )
}


export default ProductPage;