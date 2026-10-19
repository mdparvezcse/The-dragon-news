import React from 'react';
import Header from '../Components/Header';
import LeftAside from '../Components/homeLayout/LeftAside';
import RightAside from '../Components/homeLayout/RightAside';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 m-auto grid grid-cols-12 mt-5 mb-5 gap-5'>
                <aside className='col-span-3 top-0 h-fit sticky'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 top-0 h-fit sticky'>
                    <RightAside></RightAside>
                </aside>
            </main>
            
        </div>
    );
};

export default HomeLayouts;