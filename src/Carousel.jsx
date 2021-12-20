import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import Adidas from './assets/adidas.png' 
import Amazon from './assets/amazon.png'
import Boat from './assets/boat.webp'  
import Wow from './assets/wow.png' 
import Myntra from './assets/myntra.png' 

function Carousel() {
    return (
        <div className="carousel">
            <OwlCarousel loop  autoplayTimeout={2000} className='owl-theme '  margin={10} autoplay nav>
    <div class='item'>
        <img src={Adidas} alt="adidas"/>
    </div>
    <div class='item'>
        <img src={Amazon} alt="adidas"/>
    </div>
    <div class='item'>
        <img  src={Boat} alt="adidas"/>
    </div>
    <div class='item'>
        <img src={Wow} alt="adidas"/>
    </div>
    <div class='item'>
        <img src={Myntra} alt="adidas"/>
    </div>
  
     
</OwlCarousel>
        </div>
    )
}

export default Carousel
