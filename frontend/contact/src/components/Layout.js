import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./SideNav/SideBar";
import TopNav from "./TopNav/TopNav";

export const Side = React.createContext()

function Layout({ children }) {
  const { pathname } = useLocation();
  const isAuth = pathname === "/login" || pathname === "/register";
  const [fullSide, setfullSide] = useState(true)
  const [Contacts, setContacts] = useState([])

  return (
    <div>
      {!isAuth && (
        
        <>
          <TopNav setfullSide={setfullSide} fullSide={fullSide} />
          <Sidebar fullSide={fullSide} Contacts={Contacts}/>
        </>
      )}
      <Side.Provider value={{fullSide, Contacts, setContacts}}>
        {children}
      </Side.Provider>
    </div>
  );
}

export default Layout;
