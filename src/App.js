import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TimelinePage from './pages/timeline/TimelinePage';

export default () => (
    <div className='min-h-screen bg-gray-900 text-white p-5'>
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/timeline' element={<TimelinePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
);
