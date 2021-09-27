import { useMediaQuery } from "@material-ui/core";
import React, { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./SideNav/SideBar";
import TopNav from "./TopNav/TopNav";
import MdSideBar from "./SideNav/MdSideBar";

const alphabetArray = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  return alphabet;
};

const colors = [
  "#1e88e5",
  "#009688",
  "#ef6c00",
  "#607d8b",
  "#0277bd",
  "#d81b60",
];

const fallbackColors = (alphabets) => {
  const colorComb = {};
  alphabets.forEach((alphabet) => {
    colorComb[alphabet] = colors[Math.floor(Math.random() * colors.length)];
  });
  return colorComb;
};

export const Side = React.createContext();

function Layout({ children, setToken }) {
  const { pathname } = useLocation();
  const isAuth = pathname === "/login" || pathname === "/register";
  const [fullSide, setfullSide] = useState(true);
  const [Contacts, setContacts] = useState([]);
  const [colorCodes, setcolorCodes] = useState({});
  const matches = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    const alphabets = alphabetArray();
    const fallbackColorCode = fallbackColors(alphabets);
    setcolorCodes(fallbackColorCode);
  }, []);

  useEffect(() => {
    if (matches) {
      setfullSide(false);
    }
  }, [matches]);

  const handleContacts = useCallback((data) => {
    setContacts(data);
  }, []);

  return (
    <Side.Provider value={{ fullSide, Contacts, handleContacts, colorCodes }}>
      <div>
        {!isAuth && (
          <>
            <TopNav
              setfullSide={setfullSide}
              fullSide={fullSide}
              setToken={setToken}
            />
            {matches ? (
              <MdSideBar
                fullSide={fullSide}
                Contacts={Contacts}
                setfullSide={setfullSide}
              />
            ) : (
              <Sidebar
                fullSide={fullSide}
                Contacts={Contacts}
                setfullSide={setfullSide}
              />
            )}
          </>
        )}
        {children}
      </div>
    </Side.Provider>
  );
}

export default Layout;
