import React from 'react';
import someGuy from '../../assets/someGuy.jpg';

export const Testimonials = () => (
	<section className="client-area ptb-100">
		<div className="container">
			<div className="section-title">
				<h2>Our Client’s Feedback</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua quis ipsum suspendisse
				</p>
			</div>

			<div className="client-slider owl-carousel owl-theme">
				<div className="client-item">
					<div className="icon">
						<i className="flaticon-right-quotes-symbol" />
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
						maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the
						1500s, when an unknown printer took a galley
					</p>

					<div className="client-info">
						<img src={someGuy} alt="profile" />
						<h3>Jacinda Meri</h3>
						<span>Founder</span>
					</div>
				</div>

				<div className="client-item">
					<div className="icon">
						<i className="flaticon-right-quotes-symbol" />
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
						maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the
						1500s, when an unknown printer took a galley
					</p>

					<div className="client-info">
						<img src={someGuy} alt="profile" />
						<h3>Miraj Alex</h3>
						<span>Organic Farmer</span>
					</div>
				</div>

				<div className="client-item">
					<div className="icon">
						<i className="flaticon-right-quotes-symbol" />
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
						maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the
						1500s, when an unknown printer took a galley
					</p>

					<div className="client-info">
						<img src={someGuy} alt="profile" />
						<h3>Edward Bold</h3>
						<span>Agriculture Farmer</span>
					</div>
				</div>
			</div>
		</div>
	</section>
);
