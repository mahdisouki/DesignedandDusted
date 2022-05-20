import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer6 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer">
					<div className="footer-top bg-gray-dark">
						<div className="container">
							<div className="row">
								<div className="col-5 col-lg-4 col-md-6 col-sm-6 footer-col-4">
									<div className="widget widget_services border-0">
										<h5 className="m-b30 text-white">Description</h5>
										<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt magna eu massa rhoncus dapibus. Ut luctus purus enim, at fringilla enim porta et. Integer luctus suscipit imperdiet. Donec elementum viverra magna, et faucibus nisl sollicitudin et. In vitae quam gravida, luctus leo at, rutrum enim. Nunc rutrum semper lorem, quis laoreet massa. In et est dignissim, porta quam ut, vulputate libero.

										</p>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
									<div className="widget widget_getintuch">
										<h5 className="m-b30 text-white">Contact us</h5>
										<ul>
											<li><i className="ti-location-pin"></i><strong>address</strong> 483 Green Lanes, London, England, GB </li>
											<li><i className="ti-mobile"></i><strong>phone</strong>+44 (0)208 798 2586</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        <h5 className="m-b30 text-white">Subscribe To Our Newsletter</h5>
                                        <p className="text-capitalize m-b20">If you have any questions, you can contact with us so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="list-inline m-a0">
                                            <li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><a href='https://www.linkedin.com/company/designed-and-dusted-ltd/' className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></a></li>
                                            <li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
							</div>
						</div>
					</div>
				</footer>
	
            </>
        );
    }
}

export default Footer6;