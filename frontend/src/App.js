import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
function App() {
	return (
		<BrowserRouter>
			<div>
				<div class="grid-container">
					<header class="same-row">
						<div>
							<a class="brand" href="index.html">
								B-a-Seller
							</a>
						</div>
						<div>
							<a href="cart.html">Cart</a>
							<a href="signin.html">Sign In</a>
						</div>
					</header>
					<main>
						<Carousel />
					</main>
					<section>
						<Routes>
							<Route path="/" element={<HomeScreen />} />
						</Routes>
					</section>
					<footer class="same-row center">All right reserved</footer>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
