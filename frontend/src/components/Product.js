import React from "react";
import data from "../data";

function Product() {
	return (
		<div>
			<div>
				<div class="same-row center">
					{data.products.map((product) => (
						<div class="card p-4">
							<a href={`/product/${product._id}`}>
								<img
									class="prod-image"
									src={`${product.image}`}
									alt="product"
								/>
							</a>
							<div class="card-body">
								<a href="product.html">
									<h2>${product.name}</h2>
								</a>
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
					))}
				</div>
			</div>
		</div>
	);
}

export default Product;
