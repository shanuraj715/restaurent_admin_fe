import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideMenuSidebar, showMenuSidebar } from "../../../store/actions/AppState";

/// images
import logo from "../../../assets/images/logo.png";
import logoText from "../../../assets/images/logo-text.png";

export function NavMenuToggle(state) {
   console.log("SHANU")
   setTimeout(() => {
      let mainwrapper = document.querySelector("#main-wrapper");
      if (mainwrapper.classList.contains('menu-toggle')) {
         mainwrapper.classList.remove("menu-toggle");
      } else {
         mainwrapper.classList.add("menu-toggle");
      }
   }, 200);
}

const NavHader = () => {
   const appState = useSelector(state => state.appState);
   const dispatch = useDispatch();

   React.useEffect(() => {
      console.log(appState);
   }, [appState]);

   const handleClick = React.useCallback(() => {
      if (appState.isSidebarVisible) {
         dispatch(hideMenuSidebar());
      }
      else {
         dispatch(showMenuSidebar());
      }
      // NavMenuToggle()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [appState.isSidebarVisible]);

   return (
      <div className="nav-header">
         <Link to="/" className="brand-logo">
            <img className="logo-abbr" src={logo} alt="" />
            <img className="logo-compact" src={logoText} alt="" />
            <img className="brand-title" src={logoText} alt="" />
         </Link>

         <div className="nav-control"
            onClick={handleClick}
         >
            <div className={`hamburger ${!appState.isSidebarVisible ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
