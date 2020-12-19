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

class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <div className="container-fluid clearfix">
                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
            </div>
        </footer>  
        );
    }
}

export default Footer;
