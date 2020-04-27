import React from 'react';
import Slider from '../../components/slider';

function Recommed() {
	// mock data
	const bannerList = [1, 2, 3, 4].map((item) => {
		return {
			imageUrl:
				'http://p1.music.126.net/9SLtTHB8Fz4txaNmMiThBA==/109951164941385278.jpg?imageView&quality=89',
		};
	});

	return <Slider bannerList={bannerList}></Slider>;
}

export default React.memo(Recommed);
