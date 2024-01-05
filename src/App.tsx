import SplitScreen from "./components/SplitScreen";
import "./App.css";

const LeftSideComp = () => {
  return <h2 style={{ backgroundColor: "crimson" }}>I am Left</h2>;
};

const RightSideComp = () => {
  return <h2 style={{ backgroundColor: "burlywood" }}>I am Right</h2>;
};

function App() {
  return (
    <SplitScreen
      Left={LeftSideComp}
      Right={RightSideComp}
      leftWidth={1}
      rightWidth={1}
    />
  );
}

export default App;
