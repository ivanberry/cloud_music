// slider 组件
import React, { useState, useEffect } from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'swiper';

import { SliderContainer } from './style';

function Slider(props) {
	const [sliderSwiper, setSliderSwiper] = useState(null);
	const { bannerList } = props;

	useEffect(() => {
		if (bannerList.length && !sliderSwiper) {
			let newSliderSwiper = new Swiper('.slider-container', {
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				pagination: { el: '.swiper-pagintion' },
			});
			setSliderSwiper(newSliderSwiper);
		}
	}, [bannerList.length, sliderSwiper]);

	return (
		<SliderContainer>
			<div className="slider-container">
				<div className="swiper-wrapper">
					{bannerList.map((slider) => {
						return (
							<div className="swiper-slide" key={slider.imageUrl}>
								<div className="slider-nav">
									<img
										alt="推荐图"
										src={slider.imageUrl}
										width="100%"
										height="100%"
									/>
								</div>
							</div>
						);
					})}
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</SliderContainer>
	);
}

export default React.memo(Slider);
