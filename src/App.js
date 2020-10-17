import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchableListStateLift from "./StateLiftDown/SearchableList";
import SearchableListHOC from "./HighOrderComponent/SearchableList";
import UseMemoTutorial from './useMemoTutorial/useMemo';
import ReactReduxTutorial from './ReactReduxTutorial/ReactRedux';
import FacebookUIClone from './FacebookUIClone/FacebookUIClone';

function App() {
  const LIST = [
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" },
    { id: 3, name: "Name 3" },
    { id: 4, name: "Name 4" },
  ];

  return (
    <div className="App">
      {/* <SearchableListStateLift list={LIST} /> */}
      {/* <SearchableListHOC list={LIST} /> */}
      {/* <UseMemoTutorial/> */}
      {/* <ReactReduxTutorial/> */}
      <FacebookUIClone/>
    </div>
  );
}

export default App;
