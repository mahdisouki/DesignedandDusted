import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import Slider5 from './../../images/main-slider/slide5.jpg';
import Slider4 from './../../images/main-slider/slide4.jpg';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next flaticon-right-arrow"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev flaticon-left-arrow" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

class Index7Slider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: false,
            slidesToShow: 1,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
					
				  }
				}
			]
        };
		return(
			
			<Slider className="owl-slider owl-carousel owl-theme" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider5} className="w-100" alt=""/></div>
					<div className="slide-content overlay-black-dark">
						<div className="slide-content-box container">
							<div className="max-w600 text-white ">
								<h2 className="dz-title">Designed and Dusted <br/></h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
								<div className="slide-btns"> 
									<Link to={"#"} className="site-button  m-r10 radius-xl primary button-lg">About Us</Link>
									<Link to={"#"} className="site-button  radius-xl white  button-lg">Read More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider4} className="w-100" alt=""/></div>
					<div className="slide-content overlay-black-dark">
						<div className="slide-content-box container">
							<div className="max-w600 text-white justify-content-center">
								<h2 className="dz-title">Creative Studio<br/></h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
								<div className="slide-btns"> 
									<Link to={"#"} className="site-button  m-r10 radius-xl primary button-lg">About Us</Link>
									<Link to={"#"} className="site-button  radius-xl white  button-lg">Read More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider5} className="w-100" alt=""/></div>
					<div className="slide-content overlay-black-dark">
						<div className="slide-content-box container">
							<div className="max-w600 text-white ">
								<h2 className="dz-title">Web developpement <br/></h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
								<div className="slide-btns"> 
									<Link to={"#"} className="site-button  m-r10 radius-xl primary button-lg">About Us</Link>
									<Link to={"#"} className="site-button  radius-xl white  button-lg">Read More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default Index7Slider;