import React from 'react';
import freshChicken from '../../assets/foods/assortment2.jpg';
import freshSalmon from '../../assets/foods/flat-lay-assortment-seafood-with-copy-space_23-2148643611.jpg';
import freshFish from '../../assets/foods/meat-and-fish.jpg';

export const Foods = () => (
	<>
		<section className="food-area pb-70">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="food-item">
							<div className="food-image">
								<img src={freshChicken} alt="fresh-Chicken" />
							</div>
							<div className="food-content">
								<h3>Assorted Chicken</h3>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="food-item">
							<div className="food-image">
								<img src={freshSalmon} alt="fresh-fish" />
							</div>
							<div className="food-content">
								<h3>Fresh Fish</h3>
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
