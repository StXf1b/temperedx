"use client";

import { CheckCircle, Wrench, Sparkles } from "lucide-react";
import "./ProductChangelog.css";

const getIcon = (type) => {
	switch (type) {
		case "feature":
			return <Sparkles size={16} />;
		case "improvement":
			return <Wrench size={16} />;
		case "fix":
			return <CheckCircle size={16} />;
		default:
			return null;
	}
};

const ProductChangelog = ({ product }) => {
	return (
		<div className="changelog">
			{product.changelogs?.map((entry, index) => (
				<div key={index} className="changelog-entry">
					<div className="changelog-header">
						<div className="version">
							v{entry.version}
							<span className="date">{entry.date}</span>
						</div>
					</div>

					<ul className="changelog-list">
						{entry.changes.map((change, i) => (
							<li key={i} className={`change-item ${change.type}`}>
								<span className="icon">{getIcon(change.type)}</span>
								<span>{change.text}</span>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default ProductChangelog;
