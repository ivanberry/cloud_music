import React from 'react';

import { GlobalStyle } from './style';
import { IconStyle } from './asserts/iconfont/iconfont';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { HashRouter } from 'react-router-dom';

function App() {
	return (
		<HashRouter>
			<GlobalStyle></GlobalStyle>
			<IconStyle></IconStyle>
			{renderRoutes(routes)}
		</HashRouter>
	);
}

export default App;
