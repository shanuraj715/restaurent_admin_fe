import React, { Fragment, useContext, useEffect, useReducer, useState } from "react";
import { Collapse } from 'react-bootstrap';
import { Modal } from "react-bootstrap";
/// Link
import { Link } from "react-router-dom";
import getMenu from "./Menu";
import { useSelector } from "react-redux";
import foodServing from "../../../assets/images/food-serving.png";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import genericFunctions from "../../../utility/genericFunctions";


const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
  activeSubmenu: "",
}

const SideBar = () => {
  const authState = useSelector(state => state.auth.auth);
  var d = new Date();
  const [addMenus, setAddMenus] = useState(false);
  const [state, setState] = useReducer(reducer, initialState);
  let handleheartBlast = document.querySelector('.heart');
  function heartBlast() {
    return handleheartBlast.classList.toggle("heart-blast");
  }

  const [hideOnScroll, setHideOnScroll] = useState(true)
  const MenuList = getMenu(authState.userType);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )


  const handleMenuActive = status => {
    setState({ active: status });
    if (state.active === status) {
      setState({ active: "" });
    }
  }
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status })
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" })
    }
  }


  /// Path
  const fullPath = window.location.pathname.substring(1);
  let path = fullPath.split("/");
  path = path[0];
  useEffect(() => {
    MenuList.forEach((data) => {
      data.content?.forEach(item => {
        if (data.startsWith.includes(path)) {
          setState({
            active: data.title
          })
        }
      })
    })
  }, [fullPath]);

  return (
    <div className="deznav">
      <div className="deznav-scroll dz-scroll">
        <ul className="metismenu" id="menu">
          {MenuList.map((data, index) => {
            let menuClass = data.classsChange;
            if (menuClass === "menu-title") {
              return (
                <li className={menuClass} key={index} >{data.title}</li>
              )
            } else {
              return (
                <li className={` ${genericFunctions.compareArrays(data.startsWith, state.active) ? 'mm-active' : ''} ${data.startsWith.includes(path) ? 'mm-active' : ''}`}
                  key={index}
                >
                  {data.content && data.content.length > 0 ?
                    <Fragment>
                      <Link to={"#"}
                        className="has-arrow"
                        onClick={() => { handleMenuActive(data.startsWith) }}
                      >
                        {data.iconStyle}{" "}
                        <span className="nav-text">{data.title}</span>
                      </Link>
                      <Collapse in={genericFunctions.compareArrays(data.startsWith, state.active) || data.startsWith.includes(path) ? true : false}>
                        <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                          {data.content && data.content.map((data, index) => {
                            return (
                              <li key={index}
                                className={`${genericFunctions.compareArrays(data.startsWith, state.active) ? "mm-active" : ""} ${data.startsWith.includes(fullPath) ? 'mm-active' : ''}`}
                              >
                                {data.content && data.content.length > 0 ?
                                  <>
                                    <Link to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                      onClick={() => { handleSubmenuActive(data.startsWith) }}
                                    >
                                      {data.title}
                                    </Link>
                                    <Collapse in={state.activeSubmenu === data.title ? true : false}>
                                      <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                        {data.content && data.content.map((data, index) => {
                                          return (
                                            <Fragment key={index}>
                                              <li>
                                                <Link className={`${data.startsWith.includes(fullPath) ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                              </li>
                                            </Fragment>
                                          )
                                        })}
                                      </ul>
                                    </Collapse>
                                  </>
                                  :
                                  <Link to={data.to} className={`${data.startsWith.includes(fullPath) ? 'mm-active' : ''}`}>
                                    {data.title}
                                  </Link>
                                }

                              </li>

                            )
                          })}
                        </ul>
                      </Collapse>

                    </Fragment>
                    :
                    <Link to={data.to} >
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </Link>
                  }

                </li>
              )
            }
          })}
        </ul>
        {/* <div className="add-menu-sidebar">
          <img src={foodServing} alt="foodServing" />
          <p className="mb-3">Organize your menus through button bellow</p>
          <span className="fs-12 d-block mb-3">Lorem ipsum dolor sit amet</span>
          <Link
            onClick={() => setAddMenus(true)}
            className="btn btn-secondary btn-rounded"
          >
            +Add Menus
          </Link>
        </div>
        <Modal show={addMenus} onHide={setAddMenus} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Menus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label className="form-label">Food Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Order Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Food Price</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </Modal.Body>
        </Modal> */}
        <div className="copyright">
          <p>
            <strong>STWD Restaurant Dashboard</strong> © {d.getFullYear()} All Rights Reserved
          </p>
          <p>
            Made with{" "}
            <span className="heart" onClick={() => heartBlast()}></span>{" "}by Shanu Raj
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
