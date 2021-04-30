import React from 'react';
import fastDelivery from '../../assets/deliveryGuy.PNG';
import organicFood from '../../assets/foods/assortment2.jpg';
import easyPayment from '../../assets/payment.PNG';

export const WhyUs = () => (
	<>
		<section className="special-features-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<h2>Why You Should Choose Us</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua quis ipsum suspendisse
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-special-features">
							<div className="image">
								<img src={organicFood} alt="organic-foods" />
							</div>

							<div className="content">
								<h3>Fresh Healthy Frozen Provides</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
									incididunt
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-special-features">
							<div className="image">
								<img src={fastDelivery} alt="a-guy-on-motor" />
							</div>

							<div className="content">
								<h3>Fast & Easy Food Delivery</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
									incididunt
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div className="single-special-features">
							<div className="image">
								<img src={easyPayment} alt="payment" />
							</div>

							<div className="content">
								<h3>Very Easy Payment System</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
									incididunt
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
);
