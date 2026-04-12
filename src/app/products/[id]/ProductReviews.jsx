"use client";

import { useState } from "react";
import "./ProductReviews.css";
import { Star } from "lucide-react";

const ProductReviews = ({ product }) => {
	const [rating, setRating] = useState(5);
	const [comment, setComment] = useState("");

	return (
		<div className="reviews">
			{/* ===== ADD REVIEW ===== */}
			<div className="review-form">
				<h2>Leave a review</h2>

				<div className="stars-input">
					{[1, 2, 3, 4, 5].map((star) => (
						<Star
							key={star}
							size={20}
							onClick={() => setRating(star)}
							className={rating >= star ? "active" : ""}
						/>
					))}
				</div>

				<textarea
					placeholder="Write your review..."
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>

				<button className="submit-review">Submit Review</button>
			</div>

			{/* ===== LIST ===== */}
			<div className="reviews-list">
				{product.reviews?.map((review) => (
					<div key={review.id} className="review-card">
						<div className="review-header">
							<div className="user">{review.user_name}</div>
							<div className="stars flex">
								{[...Array(review.rating)].map((_, i) => (
									<Star key={i} size={14} />
								))}
							</div>
						</div>

						<p className="review-text">{review.comment}</p>

						<span className="review-date">{review.created_at}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductReviews;
