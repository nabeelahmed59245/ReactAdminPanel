import React, { Component } from 'react';
import '../assets/css/style.css';
import '../assets/vendors/css/vendor-bundle-base.css';
import '../assets/vendors/mdi/css/materialdesignicons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/js/chart';
import '../assets/js/dashboard';
import '../assets/js/file-upload';
import '../assets/js/hoverable-collapse';
import '../assets/js/misc';
import '../assets/js/off-canvas';
import '../assets/js/todolist';

class Sidebar extends Component {
    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <span className="menu-title">Dashboard</span>
                  <i className="mdi mdi-home menu-icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <span className="menu-title">Test 1</span>
                  <i className="mdi mdi-contacts menu-icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <span className="menu-title">Test 2</span>
                  <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <span className="menu-title">Test 3</span>
                  <i className="mdi mdi-chart-bar menu-icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <span className="menu-title">Test 4</span>
                  <i className="mdi mdi-table-large menu-icon"></i>
                </a>
              </li>
              <li className="nav-item sidebar-actions">
                <span className="nav-link">
                  <button className="btn btn-block btn-lg btn-gradient-primary mt-4">Log Out</button>
                </span>
              </li>
            </ul>
          </nav>
        )
    }
}

export default Sidebar;