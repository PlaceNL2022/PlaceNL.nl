import './HomePage.css';

import React from 'react';

import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
    componentDidMount() {
        document.title = 'Place NL';
    }

    render() {
        return <div className='homepage-hero bg-gray-900 text-white relative text-center flex items-stretch'>
            <div className='bg-gray-500 bg-opacity-50 w-full flex justify-center items-center'>
                <div className='m-10'>
                    <h1 className='pt-2 text-6xl'>Place NL</h1>
                    <h3 className='text-3xl mb-5'>De officiële website voor de Nederlandse ondernemingen op het canvas van /r/place</h3>
                    <Link to='/timeline' className='m-5 text-xl border-2 border-blue-500 bg-blue-500 bg-opacity-50 p-2 rounded font-mono'>Tijdlijn</Link>
                    <Link to='/orderhistory' className='m-2 text-xl border-2 border-blue-500 bg-blue-500 bg-opacity-50 p-2 rounded font-mono'>Templates</Link>
                </div>
            </div>
        </div>;
    }
}
