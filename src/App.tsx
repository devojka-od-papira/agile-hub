import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Login from './views/login';

import './assets/styles/main.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.LOGIN} element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
