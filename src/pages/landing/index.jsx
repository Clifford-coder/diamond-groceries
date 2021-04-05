import React from 'react';
import { Hero } from './hero';
import { Foods } from './foods';
import { OurServices } from './ourServices';
import { TrendingProducts } from './trendingProducts';
import { DealsOfTheWeek } from './dealOfTheWeek';
import { WhyUs } from './whyUs';
// import { Testimonials } from './Testimonials';

const Landing = () => (
	<>
		<Hero />
		<Foods />
		<OurServices />
		<TrendingProducts />
		<DealsOfTheWeek />
		<WhyUs />
		{/* <Testimonials /> */}
	</>
);

export default Landing;
