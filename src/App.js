import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import PickoftheWeek from "./components/PickoftheWeek";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu/>
      <PickoftheWeek/>
      <Comments/>
      <div className="text-center my-3 text-primary small">Copyright 2022-2023</div>
    </>
  );
}

export default App;
