import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDevices } from "../../../store/actions/DevicesActions";
import { fetchOneType } from "../../../store/actions/TypeActions";
import { fetchOneBrand } from "../../../store/actions/BrandActions";
import style from "./ProductGroupPage.module.css";
import ProductGroupHeader from "../../../components/userComponents/ProductGroupHeader/ProductGroupHeader";
import ProductCard from "../../../components/userComponents/UI/ProductCard/ProductCard";

const ProductGroupPage = () => {
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		switch (params.group) {
			case "naruto": {
				dispatch(fetchAllDevices(2000, 1, 1));
				dispatch(fetchOneBrand(1));
				break;
			}
			case "hunter-x-hunter": {
				dispatch(fetchAllDevices(2000, 1, 2));
				dispatch(fetchOneBrand(2));
				break;
			}
			case "yu-yu-hakusho": {
				dispatch(fetchAllDevices(2000, 1, 3));
				dispatch(fetchOneBrand(3));
				break;
			}
			case "jojo's-bizarre-adventure": {
				dispatch(fetchAllDevices(2000, 1, 4));
				dispatch(fetchOneBrand(4));
				break;
			}
			case "berserk": {
				dispatch(fetchAllDevices(2000, 1, 5));
				dispatch(fetchOneBrand(5));
				break;
			}
			case "jujutsu-kaisen": {
				dispatch(fetchAllDevices(2000, 1, 6));
				dispatch(fetchOneBrand(6));
				break;
			}
			case "evangelion": {
				dispatch(fetchAllDevices(2000, 1, 7));
				dispatch(fetchOneBrand(7));
				break;
			}
			case "chainsaw-man": {
				dispatch(fetchAllDevices(2000, 1, 8));
				dispatch(fetchOneBrand(8));
				break;
			}
			case "dragon-ball-z": {
				dispatch(fetchAllDevices(2000, 1, 9));
				dispatch(fetchOneBrand(9));
				break;
			}
			case "all":
			case "new": {
				dispatch(fetchAllDevices(2000, 1));
				break;
			}
			case "t-shirts": {
				dispatch(fetchAllDevices(2000, 1, null, 2));
				dispatch(fetchOneType(2));
				break;
			}
			case "hoodies-and-fleece": {
				dispatch(fetchAllDevices(2000, 1, null, 1));
				dispatch(fetchOneType(1));
				break;
			}
			case "bottoms": {
				dispatch(fetchAllDevices(2000, 1, null, 3));
				dispatch(fetchOneType(3));
				break;
			}
			case "loungewear": {
				dispatch(fetchAllDevices(2000, 1, null, 4));
				dispatch(fetchOneType(4));
				break;
			}
			case "accessories": {
				dispatch(fetchAllDevices(2000, 1, null, 5));
				dispatch(fetchOneType(5));
				break;
			}
			default: {
				dispatch(fetchAllDevices(2000, 1));
				break;
			}
		}
	}, [params]);
	const allDevices = useSelector((store) => store.DeviceReducer.allDevices);
	const oneType = useSelector((store) => store.TypeReducer.oneType);
	const oneBrand = useSelector((store) => store.BrandReducer.oneBrand);
	const [activeSort, setActiveSort] = useState(false);
	const [sortValue, setSortValue] = useState("");

	const productSorting = (value) => {
		if (value === "") {
			setActiveSort(false);
		} else {
			setActiveSort(true);
		}
		setSortValue(value);
	};

	function pageCategoryCheck() {
		if (params.typeBrand == "type") {
			if (params.group !== "new") {
				return (
					<ProductGroupHeader
						pageName={oneType.name}
						numberOfProducts={allDevices.length}
						productSorting={productSorting}
					/>
				);
			} else {
				return (
					<ProductGroupHeader
						pageName={"New Arrivals"}
						numberOfProducts={allDevices.length}
						productSorting={productSorting}
					/>
				);
			}
		} else if (params.typeBrand == "brand") {
			return (
				<ProductGroupHeader
					pageName={oneBrand.name}
					numberOfProducts={allDevices.length}
					productSorting={productSorting}
				/>
			);
		} else {
			return (
				<ProductGroupHeader
					pageName={"All Products"}
					numberOfProducts={allDevices.length}
					productSorting={productSorting}
				/>
			);
		}
	}

	const displayProducts = () => {
		if (activeSort === true && sortValue == "Newest Arrivals") {
			const sortedDevices = [...allDevices].sort((a, b) => {
				return a.createdAt - b.createdAt > 0 ? 1 : -1;
			});
			return sortedDevices.map((product, idx) => {
				return <ProductCard product={product} key={idx} cart={false} />;
			});
		} else if (activeSort === true && sortValue == "Price: High to Low") {
			const sortedDevices = [...allDevices].sort((a, b) => {
				return a.price - b.price > 0 ? -1 : 1;
			});
			return sortedDevices.map((product, idx) => {
				return <ProductCard product={product} key={idx} cart={false} />;
			});
		} else if (activeSort === true && sortValue == "Price: Low to High") {
			const sortedDevices = [...allDevices].sort((a, b) => {
				return a.price - b.price < 0 ? -1 : 1;
			});
			return sortedDevices.map((product, idx) => {
				return <ProductCard product={product} key={idx} cart={false} />;
			});
		} else {
			return allDevices.map((product, idx) => {
				return <ProductCard product={product} key={idx} />;
			});
		}
	};

	return (
		<section className={style.contentContainer}>
			{allDevices.length > 1 ? pageCategoryCheck() : <></>}
			<div className={style.allProducts}>
				{allDevices.length > 1 ? displayProducts() : <></>}
			</div>
		</section>
	);
};

export default ProductGroupPage;
