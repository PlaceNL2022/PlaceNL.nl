import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import TimelinePage from './pages/timeline/TimelinePage.js';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Routes>
                <Route path='/timeline' element={<TimelinePage />} />
            </Routes>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
