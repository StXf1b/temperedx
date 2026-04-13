"use client";
import React from "react";
import "./Admin.css";
import { useState } from "react";

const Admin = () => {
	const [activeTab, setActiveTab] = useState("reviews");

	return (
		<div className="admin-page">
			<h1>Admin Dashboard</h1>
			<div className="buttons-header">
				<button className="btn" onClick={() => setActiveTab("reviews")}>
					Manage Reviews
				</button>
			</div>
			<div className="admin-content">
				{/* {activeTab === "reviews" && <ReviewsManagement />} */}
			</div>
		</div>
	);
};

export default Admin;
