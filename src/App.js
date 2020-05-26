import React from "react";
import { BoardView } from "./components/derived-components";
import { myData } from "./constants";

function App() {
  return <BoardView data={myData} />;
}

export default App;
