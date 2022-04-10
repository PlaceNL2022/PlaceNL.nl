import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import OrderHistoryPage from './pages/orderhistory/OrderHistoryPage';
import TimelinePage from './pages/timeline/TimelinePage';

import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

export default () => (
    <div className='min-h-screen bg-gray-900 text-white relative'>
        <BrowserRouter>
            <Navbar />
            <div className='p-5 pb-20'>
                <Routes>
                    <Route path='/orderhistory' element={<OrderHistoryPage />} />
                    <Route path='/timeline' element={<TimelinePage />} />
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
);
