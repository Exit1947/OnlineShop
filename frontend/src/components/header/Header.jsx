
import './header.css'
import logoImg from './../../img/Group 1474.png'
import logoImgs from './../../img/Frame 427319424.png'
import histImg from './../../img/Frame 427319439.png'
import loghartImg from './../../img/Frame 427319440.png'
import logologImg from './../../img/iconamoon_profile.png'
import vectorImg from './../../img/Vector 2629.png'
import logotextImg from './../../img/Hello, sign in.png'
import byelogImg from './../../img/shopping_cart.png'



function Header (){
    return (
      <header className="header">
        <div className="header_row">
        <div className="clickable-icon-container">
<div className="header_logo">
<img src={logoImg} alt="Logo" />
<img src={logoImgs} alt="" className='new_logo' />
<img src={histImg} alt="" className='hist_logo' />
<img src={loghartImg} alt="" className='logohart_logo' />
<img src={logologImg} alt="" className='logolog_logo' />
<img src={vectorImg} alt="" className='vector_logo' />
<img src={logotextImg} alt="" className='logotext_logo' />
<img src={vectorImg} alt="" className='vectors_logo' />
<img src={byelogImg} alt="" className="byelogo_logo" span="0000"/>
</div>







<div className="header_nav">

   <ul>
    <li>0$</li>
   </ul>


</div>
</div>
        </div>
        </header>  
      
     
    )
}
export default Header;