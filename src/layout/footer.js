import React, { Component } from 'react';
import '../assets/css/style.css';
import '../assets/vendors/css/vendor-bundle-base.css';
import '../assets/vendors/mdi/css/materialdesignicons.min.css';
import 'bootstrap/dist/css/bootstrap.css';

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
