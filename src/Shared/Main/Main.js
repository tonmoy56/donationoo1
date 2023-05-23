import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
// import Nav from '../../components/Nav/Nav';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
            <Footer></Footer>

            
            

            
        </div>
    );
};

export default Main;