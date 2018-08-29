import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../component/global/header';
import '../../scss/page/timestamp.scss';

const Page404 = () => (
    <div>
        <Header pageName="404" />
        <main className="main">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Return home</Link>
        </main>
    </div>
);

export default Page404;
