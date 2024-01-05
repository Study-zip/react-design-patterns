import SplitScreen from "./components/SplitScreen";
import "./App.css";

interface SideCompProps {
  title: string;
}

const LeftSideComp = ({ title }: SideCompProps) => {
  return <h2 style={{ backgroundColor: "crimson" }}>I am {title}</h2>;
};

const RightSideComp = ({ title }: SideCompProps) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>I am {title}</h2>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title={"Left"} />
      <RightSideComp title={"Right"} />
    </SplitScreen>
  );
}

export default App;
