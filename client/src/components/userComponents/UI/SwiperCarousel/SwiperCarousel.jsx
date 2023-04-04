import React from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import style from "./SwiperCarousel.module.css";
import CarouselDeviceCard from "../CarouselDeviceCard/CarouselDeviceCard";
import { Navigation } from "swiper";
import Button from "../Button/Button";

const SwiperCarousel = (props) => {
	const swiperCarousel = document.querySelectorAll("swiper-container");
	const swiperParams = {
		breakpoints: {
			1430: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			1200: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},

			700: {
				slidesPerView: 2,
				slidesPerGroup: 1,
			},

			100: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
		},
		on: {
			init() {},
		},
	};
	register();
	swiperCarousel ? (
		swiperCarousel.forEach((carousel) =>
			Object.assign(carousel, swiperParams)
		)
	) : (
		<></>
	);

	return (
		<div className={style.carouselContainer}>
			<div className={style.headingContainer}>
				<h4 className={style.smallHeading}>{props.smallHeading}</h4>
				<h3 className={style.carouselHeading}>{props.bigHeading}</h3>
			</div>
			<div className={style.carouselWrapper}>
				<swiper-container
					modules={[Navigation]}
					space-between={50}
					slides-per-view={4}
					navigation={{
						nextEl: `${style.next}`,
						prevEl: `${style.prev}`,
					}}
					slides-per-group={4}
					id={"mySwiper"}
					className={"mySwiper"}
				>
					{props.products.length > 1 ? (
						props.products.map((product, idx) => {
							return (
								<swiper-slide
									key={idx}
									id={`${style.swiperSlide}`}
								>
									<CarouselDeviceCard product={product} />
								</swiper-slide>
							);
						})
					) : (
						<></>
					)}
				</swiper-container>
			</div>
			<div className={style.carouselButton}>
				<Button
					color={"blue"}
					text={props.buttonText}
					link={props.buttonLink}
				/>
			</div>
		</div>
	);
};

export default SwiperCarousel;
