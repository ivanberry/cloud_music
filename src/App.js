import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import { GlobalStyle } from './style';
import { IconStyle } from './asserts/iconfont/iconfont';
import routes from './routes';
import store from './store/index';

function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<GlobalStyle></GlobalStyle>
				<IconStyle></IconStyle>
				{renderRoutes(routes)}
			</HashRouter>
		</Provider>
	);
}

export default App;
