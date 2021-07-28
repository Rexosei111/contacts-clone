import React, { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./SideNav/SideBar";
import TopNav from "./TopNav/TopNav";

const alphabetArray = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  return alphabet;
};

const colors = [
  "#3f51b5",
  "#00695c",
  "#e65100",
  "#d84315",
  "#b71c1c",
  "#0277bd",
];

const fallbackColors = (alphabets) => {
  const colorComb = {};
  alphabets.forEach((alphabet) => {
    colorComb[alphabet] = colors[Math.floor(Math.random() * colors.length)];
  });
  return colorComb;
};

export const Side = React.createContext();

function Layout({ children }) {
  const { pathname } = useLocation();
  const isAuth = pathname === "/login" || pathname === "/register";
  const [fullSide, setfullSide] = useState(true);
  const [Contacts, setContacts] = useState([]);
  const [colorCodes, setcolorCodes] = useState({});

  useEffect(() => {
    const alphabets = alphabetArray();
    const fallbackColorCode = fallbackColors(alphabets);
    setcolorCodes(fallbackColorCode)
  }, []);

  const handleContacts = useCallback((data) => {
    setContacts(data);
  }, []);

  return (
    <Side.Provider value={{ fullSide, Contacts, handleContacts, colorCodes }}>
      <div>
        {!isAuth && (
          <>
            <TopNav setfullSide={setfullSide} fullSide={fullSide} />
            <Sidebar fullSide={fullSide} Contacts={Contacts} />
          </>
        )}
        {children}
      </div>
    </Side.Provider>
  );
}

export default Layout;
