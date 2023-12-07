import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductInfo from "../../../components/userComponents/ProductInfo/ProductInfo";
import {
	fetchAllDevices,
	fetchOneDevice,
} from "../../../store/actions/DevicesActions";
import { useFormatting } from "../../../hooks/useFormatting";
import style from "./OneProductPage.module.css";
import { fetchAllTypes } from "../../../store/actions/TypeActions";
import { fetchAllBrands } from "../../../store/actions/BrandActions";
import Recommendations from "../../../components/userComponents/Recommendations/Recommendations";

const ProductPage = (props) => {
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(fetchOneDevice(params.id));
		dispatch(fetchAllTypes());
		dispatch(fetchAllBrands());
	}, [params]);

	const oneDevice = useSelector((store) => store.DeviceReducer.oneDevice);
	const allDevices = useSelector((store) => store.DeviceReducer.allDevices);
	const devicePhotos = oneDevice.id
		? [...oneDevice.device_photos.map((device) => device.img)]
		: null;
	const displayDevice = useFormatting([oneDevice]);

	const displayPhotos = (photos) => {
            if(photos.length > 0) {
                return photos.map((photo, idx) => (
                    <img
                        className={style.productImg}
                        src={`http://127.0.0.1:4000/${photo}`}
                        key={idx}
                    ></img>
                ));
            }
            console.log(oneDevice.img)
            return (
                    <img
                        className={style.productImg}
                        src={`http://127.0.0.1:4000/${oneDevice.img}`}
                        key={oneDevice.id}
                    ></img>)
	};

	return oneDevice.id ? (
		<section className={style.contentContainer}>
			<div className={style.productInfo}>
				<div className={style.productImages}>
					{displayPhotos(devicePhotos)}
				</div>
				<div className={style.productDesc}>
					{<ProductInfo product={displayDevice} />}
				</div>
			</div>
			<div className={style.productRecommendation}>
				<Recommendations type={oneDevice.typeId} />
			</div>
			<div className={style.moreFromCollection}>
				<Recommendations brand={oneDevice.brandId} />
			</div>
		</section>
	) : (
		<></>
	);
};

export default ProductPage;
