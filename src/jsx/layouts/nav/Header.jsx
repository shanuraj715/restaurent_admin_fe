import React, { useState } from "react";

import { Link } from "react-router-dom";
/// Scroll
import { Dropdown, Button } from "react-bootstrap";
import Logout from './Logout';

/// Image
import profile from "../../../assets/images/profile/17.jpg";
import { useSelector, useDispatch } from 'react-redux'

const Header = ({ onNote }) => {
  const dispatch = useDispatch();
  const pageData = useSelector(state => state.pageData)
  const appState = useSelector(state => state.appState)

  const outletChangeHandler = (selectedOutlet) => {
    const selected = appState.outletList.find(item => item.id === selectedOutlet);
    dispatch({ type: 'UPDATE_SELECTED_OUTLET', payload: selected })
  }

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                {pageData.headerText}
              </div>
            </div>
            <ul className="navbar-nav header-right">
              <div className="nav-item">
                <Button className='me-2 btn-sm' variant='info'>
                  Create Order
                  <span className='btn-icon-end'>
                    <i className='fa fa-plus' />
                  </span>
                </Button>
              </div>
              <Dropdown className="nav-item" onSelect={outletChangeHandler}>
                <Dropdown.Toggle
                  variant='outline-primary'
                  size='sm'
                  className='mt-1 mb-2'
                >
                  {appState.selectedOutlet?.name ?? 'UNDEFINED'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* <Dropdown.Item href='#'>All</Dropdown.Item> */}

                  {appState.outletList?.map(item => <Dropdown.Item eventKey={item.id} key={item.id} className="dropdown-item">{item.name}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="nav-item dropdown header-profile" as="li">
                <Dropdown.Toggle
                  as="a"
                  to="#"
                  variant=""
                  className="nav-link  i-false p-0c-pointer pointr"
                >
                  <img src={profile} width={20} alt="profile" />
                  <div className="header-info">
                    <span className="text-black">
                      <strong>Brian Lee</strong>
                    </span>
                    <p className="fs-12 mb-0">Admin</p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="mt-2">
                  <Link to="/app-profile" className="dropdown-item ai-icon">
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    <span className="ms-2">Profile </span>
                  </Link>
                  <Link to="/email-inbox" className="dropdown-item ai-icon">
                    <svg
                      id="icon-inbox"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-success"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="ms-2">Inbox </span>
                  </Link>
                  <Logout />
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
