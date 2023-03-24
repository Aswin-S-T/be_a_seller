import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";

function HomeScreen() {
	return (
		<div>
			<div class="grid-container">
				<header class="same-row">
					<div>
						<a class="brand" to="index.html">
							B-a-Seller
						</a>
					</div>
					<div>
						<a href="cart.html">Cart</a>
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown button
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<Link class="dropdown-item" to="#">
									Action
								</Link>
								<Link class="dropdown-item" to="#">
									Another action
								</Link>
								<Link class="dropdown-item" to="#">
									Something else here
								</Link>
							</div>
						</div>
					</div>
				</header>
				<main>
					<Carousel />
				</main>
				<section>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-2">
								<Sidebar />
							</div>
							<div className="col-md-10">
								<Product />
							</div>
						</div>
					</div>
				</section>
				{/* <footer class="same-row center">All right reserved</footer> */}
			</div>
		</div>
	);
}

export default HomeScreen;
