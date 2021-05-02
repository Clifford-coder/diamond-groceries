/* eslint-disable no-unused-vars */
import React from 'react';
import { StickyPagebanner } from '../../components';
import ContactCard from './card';

const index = () => {
	const hi = 'gs';
	return (
		<>
			<StickyPagebanner title="Talk to Us" className2="item-bg2" />
			<section className="contact-area ptb-100">
				<div className="container">
					<div className="row">
						<ContactCard iconName="fas fa-envelope-open-text" title="Email Here">
							<p>
								<a href="mailto:hello@orgo.com">hello@orgo.com</a>
							</p>
							<p>
								<a href="mailto:support@orgo.com">support@orgo.com</a>
							</p>
						</ContactCard>
						<ContactCard iconName="fas fa-map-marker-alt" title="Locate Us">
							<p>2750 Kwame Atta Street Amoawi Road, Offinso, Ghana</p>
						</ContactCard>
						<ContactCard iconName="fas fa-phone" title="Call Here">
							<p>
								<a href="tel:1234567890">+123 456 7890</a>
							</p>
							<p>
								<a href="tel:2414524526">+241 452 4526</a>
							</p>
						</ContactCard>
					</div>
				</div>
			</section>
		</>
	);
};

export default index;
