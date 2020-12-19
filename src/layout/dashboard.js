import React, { Component } from 'react';
import '../assets/css/style.css';
import '../assets/vendors/css/vendor-bundle-base.css';
import '../assets/vendors/mdi/css/materialdesignicons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import CircleImage from '../assets/images/dashboard/circle.svg';

class Dashboard extends Component {
    render() {
    return (
  <div className="content-wrapper">    
    <div className="page-header">
      <h3 className="page-title">
        <span className="page-title-icon bg-gradient-primary text-white mr-2">
          <i className="mdi mdi-home"></i>
        </span> Dashboard
      </h3>
    </div>
    <div className="row">
      <div className="col-md-4 stretch-card grid-margin">
        <div className="card bg-gradient-danger card-img-holder text-white">
          <div className="card-body">
            <img src={CircleImage} className="card-img-absolute" alt="circle-image" />
            <h4 className="font-weight-normal mb-3">Total Users <i className="mdi mdi-account-outline mdi-24px float-right"></i>
            </h4>
            <h2 className="mb-5">3,000</h2>
            <div className="d-flex flex-row">
              <h6 className="card-text">View All</h6>
              <i className="mdi mdi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 stretch-card grid-margin">
        <div className="card bg-gradient-info card-img-holder text-white">
          <div className="card-body">
            <img src={CircleImage} className="card-img-absolute" alt="circle-image" />
              <h4 className="font-weight-normal mb-3">Blocked Users <i className="mdi mdi-close mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">3,000</h2>
              <div className="d-flex flex-row">
                <h6 className="card-text">View All</h6>
                <i className="mdi mdi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img src={CircleImage} className="card-img-absolute" alt="circle-image" />
              <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">95,5741</h2>
              <div className="d-flex flex-row">
                <h6 className="card-text">View All</h6>
                <i className="mdi mdi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    )
}

}

export default Dashboard;