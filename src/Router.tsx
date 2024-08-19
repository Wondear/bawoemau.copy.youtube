import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './URLPage/HomePage';
import Research from './URLPage/ResearchPage';
import UserChannel from './URLPage/UserChannelPage';
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
