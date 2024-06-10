import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/legal' element={<LegalNotice />} />
					<Route path='/privacy' element={<PrivacyPolicy />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
