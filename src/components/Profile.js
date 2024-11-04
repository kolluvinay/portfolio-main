import profile_photo from "./../assets/img/profile.png";
import "../styles/profile.css";

const Profile = () => {
    return (
        <div className="container-profile">

            <img src={profile_photo} alt="profile_photo" />

        </div>
    );
};

export default Profile;