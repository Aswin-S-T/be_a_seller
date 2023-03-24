import React from "react";

function Carousel() {
	return (
		<div>
			<div
				id="carouselExampleControls"
				class="carousel slide"
				data-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							class="d-block w-100"
							src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"
							alt="First slide"
						/>
					</div>
					<div class="carousel-item">
						<img
							class="d-block w-100"
							src="https://m.media-amazon.com/images/I/81fl-uN9kOL._SX3000_.jpg"
							alt="Second slide"
						/>
					</div>
					<div class="carousel-item">
						<img
							class="d-block w-100"
							src="https://m.media-amazon.com/images/I/61jLjFXfkrL._SX3000_.jpg"
							alt="Third slide"
						/>
					</div>
					<div class="carousel-item">
						<img
							class="d-block w-100"
							src="https://m.media-amazon.com/images/I/51-jztXip0L._SX3000_.jpg"
							alt="Third slide"
						/>
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#carouselExampleControls"
					role="button"
					data-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carouselExampleControls"
					role="button"
					data-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}

export default Carousel;
