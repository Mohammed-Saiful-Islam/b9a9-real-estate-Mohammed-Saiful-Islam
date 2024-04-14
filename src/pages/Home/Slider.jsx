import React from 'react';
import logo from '../../assets/logo1.svg';

const Slider = () => {
    return (
        <div>
       
            <div className="carousel w-full h-96">
           
  <div id="item1" className="carousel-item w-full">
  
    <img src="https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264452.jpg?t=st=1712990362~exp=1712993962~hmac=5057715c136bd5f7ed99f6daba18523458540c4e154767e40d799baa7688d3be&w=1060" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/blonde-charming-woman-silk-black-jumpsuit-stylish-eyeglasses-sits-brown-big-soft-sofa-ho_197531-33650.jpg?t=st=1712990544~exp=1712994144~hmac=bd2a89bfb540a4ca4d656d71785d63b1d0cc24bed8e06de65e2fa0cc512b7e6d&w=740" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/summer-from-rural-landscape_1398-1205.jpg?t=st=1712991144~exp=1712994744~hmac=c9a7e7a5c467552bdeb3a14a6639161ee6fb16c05676f3acb0e64e61ff7669cc&w=740" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/cheerful-family-playing-with-blindfold-laughing-home_23-2148208033.jpg?t=st=1712991074~exp=1712994674~hmac=916ffafc2a9a16406db1e42b16ff5ea6f3b305061adddb6501d63d62dec8b3cd&w=996" className="w-full" />
  </div>
</div> 
<img src={logo} alt=""  className='w-full'/>
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Slider;