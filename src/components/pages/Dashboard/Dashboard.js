import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <section className="py-12 mx-3 lg:mx-0">
         <label
            for="dashboard-control"
            class="bg-gray-400 p-2 rounded text-white block w-14 text-2xl drawer-button lg:hidden flex items-center justify-center"
            onClick={()=> setSideBarOpen(!sideBarOpen)}
          > 
            {sideBarOpen ? <FontAwesomeIcon icon={faXmark} /> :<FontAwesomeIcon icon={faBars} />}
        </label>

      <div class="drawer drawer-mobile shadow-lg rounded mt-4">
        <input id="dashboard-control" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content pl-0 lg:pl-5">
            <Outlet />
        </div>
        <div class="drawer-side shadow-lg">
          <label for="dashboard-control" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard/'>My Orders</Link>
            </li>
            <li>
              <Link to='/dashboard/myReviews'>My Reviews</Link>
            </li>
            <li>
              <Link to='/dashboard/myProfile'>My Profile</Link>
            </li>
            <li>
              <Link to='/dashboard/myHistory'>History</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
