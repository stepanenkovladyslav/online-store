import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInstaImages } from "../../../store/actions/InstaImageActions";
import style from "./InstagramPictures.module.css";

const InstagramPictures = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllInstaImages());
	}, []);

	const instaImg = useSelector((store) => store.InstaImageReducer.allImg);

	const displayImg = () => {
		return instaImg.map((img, idx) => {
			return (
				<div className={style.instagramBlock} key={idx}>
					<a
						href={img.link}
						target="_blank"
						className={style.instaLink}
					>
						<img
							className={style.instagramPic}
							src={`http://127.0.0.1:4000/${img.img}`}
							alt="instagram image"
						/>
					</a>
				</div>
			);
		});
	};
	return (
		<section className={style.instagramPictures}>
			{instaImg.length > 1 ? displayImg() : <></>}
		</section>
	);
};

export default InstagramPictures;
