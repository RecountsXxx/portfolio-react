import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://coolorca.com/public/uploads/20231227/d22ed617b54c07beb7433fbbc959066e.gif"
								alt="coolorca"
								className="work-image"
							/>
							<div className="work-title">CoolOrca</div>
							<div className="work-subtitle">
								Full-stack developer, stack: Laravel | jQuery | PHP | JS | MySQL | Docker | Nginx | Redis | HTML | CSS
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
