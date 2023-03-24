import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function ProductScreen(props) {
	const [product, setProduct] = useState({});
	useEffect(() => {
		console.log("PROPS-------------", props);
	}, []);
	return (
		<div className="">
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
					<div className="container mt-5">
						<div className="row">
							<div className="col-md-6">
								<img
									src="https://m.media-amazon.com/images/I/31t1DKJ63OL.jpg"
									className=""
								/>
							</div>
							<div className="col-md-6">
								<h2>Fit Slim Shirt</h2>
								<div class="rating">
									<span>
										{" "}
										<i class="fa fa-star"></i>{" "}
									</span>
									<span>
										{" "}
										<i class="fa fa-star"></i>{" "}
									</span>
									<span>
										{" "}
										<i class="fa fa-star"></i>{" "}
									</span>
									<span>
										{" "}
										<i class="fa fa-star"></i>{" "}
									</span>
									<span>
										{" "}
										<i class="fa fa-star"></i>{" "}
									</span>
								</div>
								<div class="price">$120</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default ProductScreen;
