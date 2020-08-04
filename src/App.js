import React from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import { GlobalStyle } from "./style";
import { IconStyle } from "./asserts/iconfont/iconfont";
import routes from "./routes";
import store from "./store/index";
import { Data } from "./application/Singers/data";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <IconStyle />
        <Data>{renderRoutes(routes)}</Data>
      </HashRouter>
    </Provider>
  );
}

export default App;
