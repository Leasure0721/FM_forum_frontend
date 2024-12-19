import React from "react";
import styles from './App.less'
import MenuBar from "./components/menu/menubar";
import { BrowserRouter as Router } from "react-router-dom";
import routers from "./routers";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";


function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <div className={styles.app}>
            <Router>
              <MenuBar />
              <div className={styles.pagestyle}>
                {routers}
              </div>
            </Router>
          </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
