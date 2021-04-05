import React from 'react';
import dealImage1 from '../../assets/deal/deal-1.png';
import dealImageShape1 from '../../assets/deal/deal-shape-1.png';
import dealImageShape2 from '../../assets/deal/deal-shape-2.png';
import dealImageShape3 from '../../assets/deal/deal-shape-3.png';
import dealImageShape4 from '../../assets/deal/deal-shape-4.png';

export const DealsOfTheWeek = () => (
	<>
		<section className="deal-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="deal-title">
							<h2>Deals Of The Weeks</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua quis ipsum suspendisse
							</p>
						</div>

						<div className="deal-content">
							<div id="timer" className="flex-wrap d-flex justify-content-center">
								<div
									id="days"
									className="align-items-center flex-column d-flex justify-content-center"
								/>
								<div
									id="hours"
									className="align-items-center flex-column d-flex justify-content-center"
								/>
								<div
									id="minutes"
									className="align-items-center flex-column d-flex justify-content-center"
								/>
								<div
									id="seconds"
									className="align-items-center flex-column d-flex justify-content-center"
								/>
							</div>

							<div className="deal-btn">
								<a href="cart.html" className="default-btn">
									Shop now
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="deal-image">
							<img src={dealImage1} alt="offer" />

							<div className="offer">
								<h4>50%</h4>
								<span>Off</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="deal-shape">
				<div className="shape-1">
					<img src={dealImageShape1} alt="deal" />
				</div>
				<div className="shape-2">
					<img src={dealImageShape2} alt="deal" />
				</div>
				<div className="shape-3">
					<img src={dealImageShape3} alt="deal" />
				</div>
				<div className="shape-4">
					<img src={dealImageShape4} alt="deal" />
				</div>
			</div>
		</section>
	</>
);
