import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route path="news" element={<News />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
