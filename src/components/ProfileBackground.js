import image from "../image-victor.jpg";
import "./ProfileBackground.css";

function ProfileBackground() {
  return (
    <div className="profile-background">
      <div className="wrapper">
        <img className="img" src={image}></img>
      </div>
    </div>
  );
}

export default ProfileBackground;
