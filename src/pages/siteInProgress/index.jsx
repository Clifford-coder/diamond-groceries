/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import inProgress from '../../assets/in-progress-animate.svg';

import './styles.css';

const index = () => (
	<div className="container">
		<img className="in-progress-svg" src={inProgress} alt="in-progress-svg" />
		<div className="writeup">
			<h1>Coming Out Soon!!!</h1>
			<p>
				We are working very hard to make this website available as soon as posible. Until then, you can find our
				products on our social media hanldes @
			</p>
			<div className="social-media">
				<a
					href="https://www.instagram.com/diamondfrozenfoodsgh"
					target="_blank"
					rel="noreferrer"
					className="social-media_btn"
					style={{ backgroundColor: '#e4405f', borderRadius: '3px' }}
				>
					<i className="fab fa-instagram" />
					<span>instagram</span>
				</a>
				<a
					href="https://twitter.com/diamondfoodsgh"
					target="_blank"
					rel="noreferrer"
					className="social-media_btn"
					style={{ backgroundColor: '#55acee', borderRadius: '3px' }}
				>
					<i className="fab fa-twitter" />
					<span>twitter</span>
				</a>
				<a
					href="https://web.facebook.com/diamondfrozenfoodsgh"
					target="_blank"
					rel="noreferrer"
					style={{
						backgroundColor: '#3b5999',
						borderRadius: '3px',
					}}
					className="social-media_btn"
				>
					<i className="fab fa-facebook" />
					<span>facebook</span>
				</a>
			</div>
		</div>
	</div>
);

export default index;
