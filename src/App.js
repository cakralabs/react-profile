import logo from './new_profile.jpg';
import './App.css';

function App() {
  return (
    <div className="profile-page">
      <nav className="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg "  color-on-scroll="100"  id="sectionsNav">
          <div className="container">
              <div className="navbar-translate">
                  <a className="navbar-brand" href="http://blog.cakra.web.id" target="_blank" rel="noreferrer">Blog </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                  </button>
              </div>
          
              <div className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">                      
                      <li className="nav-item">
                          <a className="nav-link" href="https://www.linkedin.com/in/cakra-aminuddin-a62992112/" target="_blank" rel="noreferrer">
                              <i className="fa fa-linkedin"></i>
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link"  href="https://github.com/cakralabs" target="_blank" rel="noreferrer">
                              <i className="fa fa-github"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      
      <div className="page-header header-filter" data-parallax="true"></div>
      <div className="main main-raised">
          <div className="profile-content">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 ml-auto mr-auto">
                         <div className="profile">
                              <div className="avatar">
                                  <img src={logo} alt={`Baz taking a ${logo}`} className="img-raised rounded-circle img-fluid"/>
                              </div>
                              <div className="name">
                                  <h3 className="title">Cakra Aminuddin</h3>
                                  <h6>Programmer</h6>
                                  <a href="http://blog.cakra.web.id" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-dribbble"></i></a>
                                  <a href="mailto:cakra.amin@gmail.com" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-envelope-square"></i></a>
                                  <a href="https://github.com/cakralabs" className="btn btn-just-icon btn-link btn-github"><i className="fa fa-github"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="description text-center">
                      <p>Backend Specialist — Backend programmer with 10+ years experience based on Codeigniter, laravel, Nodejs, React, React Native, Graphql, Mysql, Git, Ubuntu Server</p>
                  </div>                
              </div>
          </div>
      </div>
      
      <footer className="footer text-center ">
          <p>Made with <a href="https://demos.creative-tim.com/material-kit/index.html" target="_blank" rel="noreferrer">Material Kit</a> by Creative Tim</p>
      </footer>
    </div>
  );
}

export default App;
