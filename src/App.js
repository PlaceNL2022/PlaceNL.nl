import { BrowserRouter, Route, Routes } from 'react-router-dom';

import OrderHistoryPage from './pages/orderhistory/OrderHistoryPage';
import TimelinePage from './pages/timeline/TimelinePage';

export default () => (
    <div className='min-h-screen bg-gray-900 text-white p-5'>
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/orderhistory' element={<OrderHistoryPage />} />
                    <Route path='/timeline' element={<TimelinePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
);
