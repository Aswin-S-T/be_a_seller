import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/product/:id" element={<ProductScreen />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
