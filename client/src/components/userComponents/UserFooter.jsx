import React from "react";
import { NavLink } from "react-router-dom";

const UserFooter = () => {
	return (
		<footer className="user-footer">
			<div className="footer__column">
				<h3>About the Shop</h3>
				<p>
					Atsuko is a retail experience created for fans of all things
					Japanese lifestyle and culture. We carry exclusive
					officially licensed apparel, accessories, and more.{" "}
				</p>
				<p>
					The store is run by our namesake herself, Atsuko, and her
					fuzzy little companion, Nuki. They’re here to make sure you
					feel welcome and find everything you’re looking for.
				</p>
			</div>
			<div className="footer__column">
				<h3>Helpful links</h3>
				<ul className="helpful-links">
					<NavLink
						className="helpful-links__item footer-link"
						to="/login"
					>
						Sign In
					</NavLink>
					<NavLink className="helpful-links__item footer-link" to="/">
						Home
					</NavLink>
					<NavLink
						className="helpful-links__item footer-link"
						to="/collection/type/new"
					>
						New Arrivals
					</NavLink>
					<NavLink
						className="helpful-links__item footer-link"
						to="/collection"
					>
						All Products
					</NavLink>
					<NavLink
						className="helpful-links__item footer-link"
						to="/collection/type/hoodies-and-fleece"
					>
						Hoodies and Fleece
					</NavLink>
					<NavLink
						className="helpful-links__item footer-link"
						to="/collection/type/accessories"
					>
						Accessories
					</NavLink>
				</ul>
			</div>
			<div className="footer__column">
				<h3>Shop by anime series</h3>
				<div className="service-links">
					<ul>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/naruto"
						>
							Naruto
						</NavLink>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/hunter-x-hunter"
						>
							Hunter x Hunter
						</NavLink>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/yu-yu-hakusho"
						>
							Yu Yu Hakusho
						</NavLink>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/jojo's-bizarre-adventure"
						>
							JoJo's Bizarre Adventure
						</NavLink>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/berserk"
						>
							Berserk
						</NavLink>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/jujutsu-kaisen"
						>
							Jujutsu Kaisen
						</NavLink>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/evangelion"
						>
							Evangleion
						</NavLink>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/chainsaw-man"
						>
							Chainsaw Man
						</NavLink>
						<NavLink
							className="service-links__item footer-link"
							to="/collection/brand/dragon-ball-z"
						>
							Dragon Ball Z
						</NavLink>
					</ul>
				</div>
			</div>
			<div className="footer__column">
				<h3>Sign up for email</h3>
				<form className="footer-form">
					<input
						className="email-input"
						type="email"
						placeholder="Enter your email address here"
					/>
					<button className="footer-submit">Subscribe</button>
				</form>
			</div>
		</footer>
	);
};

export default UserFooter;
