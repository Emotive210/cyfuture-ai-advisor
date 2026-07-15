import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Advisor from "./pages/Advisor/Advisor";
import ComingSoon from "./pages/ComingSoon";
import AdvisorLoading from "./pages/Advisor/AdvisorLoading";
import Recommendation from "./pages/Advisor/Recommendation";


const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/advisor" element={<Advisor />} />
				</Route>

				<Route path="/compare" element={<ComingSoon />} />
				<Route path="/benchmarks" element={<ComingSoon />} />
				<Route path="/docs" element={<ComingSoon />} />
				<Route path="*" element={<ComingSoon />} />

				<Route path="/advisor/loading" element={<AdvisorLoading />} />
				<Route path="/advisor/recommendation" element={<Recommendation />} />

			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;