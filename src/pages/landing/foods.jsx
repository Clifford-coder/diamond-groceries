import React from 'react';
import freshFruits from '../../assets/foods/fuits.png';
import freshVeges from '../../assets/foods/veges.jpg';
import freshFish from '../../assets/foods/meat-and-fish.jpg';

export const Foods = () => (
	<>
		<section className="food-area pb-70">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="food-item">
							<div className="food-image">
								<img src={freshFruits} alt="fresh-fruits" />
							</div>
							<div className="food-content">
								<h3>Fresh Fruits</h3>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="food-item">
							<div className="food-image">
								<img src={freshVeges} alt="fresh-vegetables" />
							</div>
							<div className="food-content">
								<h3>Fresh Vegetables</h3>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div className="food-item">
							<div className="food-image">
								<img src={freshFish} alt="fish-and-meat" />
							</div>
							<div className="food-content">
								<h3>Fish and Meat</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
);
