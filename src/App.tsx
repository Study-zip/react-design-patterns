import CurrentUserLoader from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";
import "./App.css";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
