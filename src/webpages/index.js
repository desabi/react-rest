import React from 'react';

import {
    BrowserRouter as Router,    
    Route,
    Routes    
} from "react-router-dom";

import Home from './home';
import User from './user';
// fuente
// https://medium.com/@nutanbhogendrasharma/step-by-step-consume-rest-api-in-react-application-48388f6c4d9c

const Webpages = () => {
    //<Route exact path="/" component= {Home} />
    //<Route path = "/user" component = {User} />
    return(
        <Router>
            <Routes>
                
                <Route exact path="/" element={<Home />} />
                <Route path = "/user/:id" element={<User />} />            
            </Routes>                                
        </Router>
    );
};

export default Webpages;