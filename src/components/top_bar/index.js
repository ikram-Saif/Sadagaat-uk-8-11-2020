import React, { useState, useEffect } from 'react';
import address from './../utils/address'
import i18n from 'i18next'


import {
  BrowserRouter as Router,
  
} from 'react-router-dom'
import Login from '../Login/Login'
import Auth_user_menu from '../Login/Auth_User_menu'
import UnAuth_user_menu from '../Login/UnAuth_user-menu'
import { isAuthenticated } from '../../repository';
import{Link} from 'react-router-dom'




function TopBar() {

  const [data, setData ] = useState([])
  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}/media`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setData(response)
         }
         fetchData()
        }, [])



  
return (
          <Router>
          <div className="header-top bg-theme-colored sm-text-center">
                  <div className="container">
                <div className="row">
                      <div className="col-md-4">
                        <div className="widget no-border m-0">
                          <ul className="styled-icons icon-dark icon-theme-colored icon-sm sm-text-center">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="widget no-border m-0">
                          <ul className="list-inline pull-right flip sm-pull-none mt-5">
                            <li className="m-0 pl-10 pr-10"> <i className="fa fa-phone text-white"></i> <a className="text-white" href="#">123-456-789</a> </li>
                            <li className="m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-white"></i> <a className="text-white" href="#">contact@yourdomain.com</a> </li>
                          </ul>
                        </div>
                      </div>
                      
                        {isAuthenticated()?<Auth_user_menu />:<UnAuth_user_menu />}
                      </div>
                    </div>
                    
                  
                </div>
                </Router>



            )
}
  
export default TopBar;
  