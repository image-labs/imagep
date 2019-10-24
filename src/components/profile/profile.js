import React from "react";
import { useAuth0 } from "../../commons/utils/auth0";

const Profile = () => {
  const { loading, user, logout } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return ( // TODO: Move returnTo into auth0.js
    <img src={user.picture+"&s=40"} alt="Profile" onClick={() => logout({
      returnTo: window.location.origin
    })}/>
  );
};

export default Profile;