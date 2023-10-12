import "./App.css";
import ProfileBackground from "./components/ProfileBackground";
import MainInfo from "./components/MainInfo";
import SubInfo from "./components/SubInfo";

function App() {
  return (
    <div className="profile">
      <ProfileBackground></ProfileBackground>
      <div className="profile__info">
        <MainInfo></MainInfo>
        <SubInfo></SubInfo>
      </div>
    </div>
  );
}

export default App;
