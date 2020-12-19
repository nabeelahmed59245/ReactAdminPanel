import React, { Component } from 'react';
import '../assets/css/style.css';
import '../assets/vendors/css/vendor-bundle-base.css';
import '../assets/vendors/mdi/css/materialdesignicons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './dashboard';
import Footer from './footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class Home extends Component {
    render () {
        return (
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <Dashboard />
                        <Footer />
                    </div>
                </div>    
            </div>  
        );
    }
}

export default Home;