import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/AuthContext";
import { useCardContext } from "../../hooks/Context";

const Account = () => {
  const { setTasks, tasks } = useCardContext();
  const { user, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
      setTasks([]);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col justify-center w-6/12 max-w-lg  mx-auto">
      <header>
        <h1 className="mt-[75px] text-4xl py-5 mb-5 text-center">
          Account: {user.displayName && user.displayName}
        </h1>
      </header>

      <p className="mb-5">User Email: {user && user.email}</p>
      <p className="mb-5">Total number of tasks open: {user && tasks.length}</p>

      <button
        onClick={handleLogout}
        className="bg-gray-600 border border-gray-600 hover:bg-opacity-50 rounded-md w-full py-3 text-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
