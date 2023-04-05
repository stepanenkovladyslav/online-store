import React from "react";
import CategoriesGrid from "../../components/userComponents/CategoriesGrid/CategoriesGrid";
import Hero from "../../components/userComponents/Hero/Hero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDevices } from "../../store/actions/DevicesActions";
import InstagramPictures from "../../components/userComponents/InstagramPictures/InstagramPictures";
import AnimeLogos from "../../components/userComponents/AnimeLogos/AnimeLogos";
import SwiperCarousel from "../../components/userComponents/UI/SwiperCarousel/SwiperCarousel";

const UserHomePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllDevices(2000, 1));
	}, []);

	const jojoCollection = useSelector((store) =>
		store.DeviceReducer.allDevices.filter(
			(device, idx) => device.brandId === 4
		)
	);

	const newArrivals = [
		...useSelector((store) => store.DeviceReducer.allDevices),
	].sort((a, b) => {
		return a.createdAt - b.createdAt > 0 ? 1 : -1;
	});

	return (
		<main>
			<Hero />
			<CategoriesGrid />
			<SwiperCarousel
				products={newArrivals}
				bigHeading={"New Arrivals"}
				smallHeading={"Presenting our new products"}
				buttonText={"View All Products"}
				buttonLink={"/collection/type/new"}
			/>
			<InstagramPictures />
			<SwiperCarousel
				products={jojoCollection}
				bigHeading={"JoJo's Bizarre Adventure Collection"}
				smallHeading={"Atsuko exclusive"}
				buttonText={"View Collection"}
				buttonLink={"/collection/brand/jojo's-bizarre-adventure"}
			/>
			<AnimeLogos />
		</main>
	);
};

export default UserHomePage;
