import { Route, Routes } from 'react-router-dom';
import "../App.css";
import Home from './Home';
import Research from './ResearchPage';
import UserChannel from './UserChannelPage';

function Router() {
	return (
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/community' element={<Research />} />
					<Route path='/mypage' element={<UserChannel />} />
				</Routes>
	);
}

export default Router;
