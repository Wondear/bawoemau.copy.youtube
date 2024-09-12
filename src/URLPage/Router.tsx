import * as React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './HomePage';
import Research from './ResearchPage';
import UserChannel from './UserChannelPage';
function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<div className='Contents-wrapper'>
					<Route path='/' element={<Home />} />
					<Route path='/community' element={<Research />} />
					<Route path='/mypage' element={<UserChannel />} />
				</div>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
