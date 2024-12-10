import React from "react";
import styles from './App.less'
import MenuBar from "./components/menu/menubar";
import { BrowserRouter as Router} from "react-router-dom";
import routers from "./routers";

function App() {

  return (
    <div className={styles.app}>
      <Router>
        <MenuBar />
        <div className={styles.pagestyle}>
          {routers}
        </div>
      </Router>
    </div>
  );
}

export default App;
