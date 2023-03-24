import React from "react";

function Sidebar() {
	return (
		<div>
			<div className="card">
				<div className="container-fluid p-4 m-4">
					<h2>Price Range</h2>
					<div className="p-2">
						<input type="checkbox" /> Low to High
					</div>
					<div className="p-2">
						<input type="checkbox" /> Low to High
					</div>
					<div className="p-2">
						<input type="checkbox" /> Low to High
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
