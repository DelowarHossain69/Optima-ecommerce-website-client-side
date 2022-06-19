import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./../../../firebase.init";
import { signOut } from "firebase/auth";
import { cardInfo } from "../../../Utilities/localStorage";
import Loading from "../Loading/Loading";

const Navbar = ({getCardInfo}) => {
  const [user, loading] = useAuthState(auth);

  const defaultProfileImage = "https://i.ibb.co/Z6Sh6Vj/admin-user-icon-24.png";
  const profileImg = user?.photoURL || defaultProfileImage;
  const [currentInfo, setCurrentInfo] = useState({});

  useEffect(()=>{
    // get localStore data for card;
    const info = cardInfo();
    setCurrentInfo(info);

  }, [getCardInfo]);


  if(loading){
    return <Loading />
  }
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/stored">All stores</Link>
      </li>
      {!user && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co/cJnq2QN/optimasupermarket-responsive-prestashop-theme-logo-1571902912.png"
            alt=""
          />
        </Link>
      </div>

      <div class="navbar-end">
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navItem}</ul>
        </div>
        <div>
          <div class="flex">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="badge badge-sm indicator-item">{currentInfo.quantity || 0}</span>
                </div>
              </label>
              <div
                tabindex="0"
                class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div class="card-body">
                  <span class="font-bold text-lg">{currentInfo.quantity || 0} Items</span>
                  <span class="text-info">Subtotal: ${currentInfo.price || 0}</span>
                  <div class="card-actions">
                    <Link to="/addToCard" className="w-full">
                      <button class="btn btn-primary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {user && (
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img src={profileImg} alt="profile" />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <img
                    src={profileImg}
                    className="w-28 h-28 rounded-full mx-auto"
                    alt=""
                  />
                  <h2 className="my-2 text-center font-bold text-sm">
                    {user?.displayName}
                  </h2>
                  <li>
                    <Link to="/profile" class="justify-between">
                      Profile
                      <span class="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li>
                    <button onClick={() => signOut(auth)}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
