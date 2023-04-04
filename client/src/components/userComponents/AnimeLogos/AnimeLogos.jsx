import React from "react";
import style from "./AnimeLogos.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLogos } from "../../../store/actions/AnimeLogosActions";
import { NavLink } from "react-router-dom";

const AnimeLogos = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllLogos());
	}, []);

	const logos = useSelector((store) => store.AnimeLogosReducer.allLogos);

	const displayLogos = () => {
		return logos.map((logo, idx) => {
			return (
				<div className={style.logoContainer} key={idx}>
					<NavLink className={style.logoLink} to={logo.link}>
						<img
							className={style.logo}
							src={`http://127.0.0.1:4000/${logo.img}`}
							alt="anime logo"
						/>
					</NavLink>
				</div>
			);
		});
	};
	return (
		<section className={style.animeLogos}>
			{logos.length > 1 ? displayLogos() : <></>}
		</section>
	);
};

export default AnimeLogos;
