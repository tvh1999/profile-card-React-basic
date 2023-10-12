import "./SubInfo.css";

const SubInfo = function () {
  return (
    <div className="stats-wrapper">
      <div className="followers-stat">
        <h5>80K</h5>
        <p>Followers</p>
      </div>
      <div className="likes-stat">
        <h5>803K</h5>
        <p>Likes</p>
      </div>
      <div className="photos-stat">
        <h5>1.4K</h5>
        <p>Photos</p>
      </div>
    </div>
  );
};

export default SubInfo;
