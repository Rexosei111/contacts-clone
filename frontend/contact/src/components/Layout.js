import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./SideNav/SideBar";
import TopNav from "./TopNav/TopNav";

export const Side = React.createContext()

function Layout({ children }) {
  const { pathname } = useLocation();
  const isAuth = pathname === "/login" || pathname === "/register";
  const [fullSide, setfullSide] = useState(true)

  return (
    <div>
      {!isAuth && (
        <>
          <TopNav setfullSide={setfullSide} fullSide={fullSide} />
          <Sidebar fullSide={fullSide} />
        </>
      )}
      <Side.Provider value={fullSide}>
        {children}
      </Side.Provider>
    </div>
  );
}

export default Layout;
