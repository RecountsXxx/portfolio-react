import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
									<br/>
									-----------------------------------------------------------------------------------------------------------
									<h4>Skills: PHP,
										HTML, CSS, JavaScript, TypeScript,
										C#</h4>
									<h4>
										Frameworks: Laravel, React,
										Angular, WPF, WF, ASP.NET
									</h4>
									<h4>
										Liblaries and Tools: Bootstrap,
										Tailwind, jQuery
									</h4>
									<h4>
										Vesion Control: Git, BitBucket
									</h4>
									<h4>
										Databases: MySQL, PostgreSQL, MariaDB, MongoDB, Redis
									</h4>
									<h4>
										Other: Nginx, Apache, Docker,
										Webpack, RabbitMq, Amazon S3, Microsoft Azure, Composer, PHPMyAdmin, AJAX, RESTfulт
									</h4>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials/>
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials/>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
