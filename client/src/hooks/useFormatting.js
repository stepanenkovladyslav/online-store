import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
export const useFormatting = (inputData) => {
	const allTypes = useSelector((store) => store.TypeReducer.allTypes);
	const allBrands = useSelector((store) => store.BrandReducer.allBrands);
	const productTypes = [...allTypes];
	const productBrands = [...allBrands];
	const dataWithDates = useMemo(() => {
		if (inputData[0].createdAt) {
			let types = [...inputData].map((type) => {
				return {
					...type,
					createdAt: type.createdAt
						.slice(0, 10)
						.split("-")
						.reverse()
						.join("-"),
					updatedAt: type.updatedAt
						.slice(0, 10)
						.split("-")
						.reverse()
						.join("-"),
				};
			});
			if (types[0].password) {
				types.forEach((type) => {
					delete type.password;
				});
			}
			return types;
		} else {
			return [{}];
		}
	}, [inputData]);
	const dataWithDatesAndIds = useMemo(() => {
		if (
			dataWithDates[0].img &&
			productTypes[0].name &&
			productBrands[0].name
		) {
			dataWithDates.forEach((data) => {
				const typeNeeded = productTypes.find((type) => {
					return type.id == data.typeId;
				});
				data.type = typeNeeded.name;
				delete data.typeId;
				delete data.img;
			});
			dataWithDates.forEach((data) => {
				const brandNeeded = productBrands.find((brand) => {
					return brand.id == data.brandId;
				});
				data.brand = brandNeeded.name;
				delete data.brandId;
			});
			return dataWithDates;
		} else {
			return dataWithDates;
		}
	}, [dataWithDates, productTypes, productBrands]);
	return dataWithDatesAndIds;
};
