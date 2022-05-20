import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component{
	render(){
		return(
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link to={'./index-7'}>Home </Link>	
					</li>
					<li><Link to={'./about-1'}>About Us</Link>
					</li>
					<li><Link to={'./service'}>Our Service</Link>
						
					</li>
					
					<li><Link to={'./portfolio-full-width'}>Our Portfolio </Link>	
					</li>
					<li><Link to={'#'}>Contact</Link>
						
					</li>
					
				</ul>
			</>
		)
	}
}
export default HeaderMenu;