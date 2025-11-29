import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';



const HomeLayout = () => {
    return (
        <div>
            <header>

          <Header></Header>
          

          <section>
            <LatestNews></LatestNews>
          </section>

          <section>
              <Navbar></Navbar>
          </section>

            </header>
          
          

            <main>
                <section className="left-nav"></section>
                <section className="main">
                    
                    <Outlet></Outlet>
                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;