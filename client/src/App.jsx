import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import AdminLayout from "./components/adminComponents/AdminLayout";
import AdminDashboard from "./pages/adminPages/AdminDashboard";
import AdminProducts from "./pages/adminPages/Products/AdminProductsPage";
import AdminBrands from "./pages/adminPages/Brands/AdminBrandsPage";
import AdminProductTypes from "./pages/adminPages/Types/AdminProductTypesPage";
import AdminUsers from "./pages/adminPages/Users/AdminUsersPage";
import UserLayout from "./components/userComponents/UserLayout";
import UserHomePage from "./pages/userPages/UserHomePage";
import OneProductPage from "./pages/userPages/OneProductPage/OneProductPage";
import ProductGroupPage from "./pages/userPages/ProductGroupPage/ProductGroupPage";
import LoginPage from "./pages/userPages/LoginPage/LoginPage";
import ErrorPage from "./pages/userPages/ErrorPage/ErrorPage";
import UserCabinet from "./pages/userPages/UserCabinet/UserCabinet";
import AdminLogin from "./pages/adminPages/AdminLogin/AdminLogin";
import CreateAccountPage from "./pages/userPages/CreateAccountPage/CreateAccountPage";
import { refreshToken } from "./store/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
function App() {
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token != null) {
			dispatch(refreshToken());
		}
	}, []);

	const user = useSelector((store) => store.UserReducer.user);
	return (
		<Routes>
			<Route path="/adminlogin" element={<AdminLogin />} />

			{user.role === "ADMIN" ? (
				<Route path="/admin" key={"admin"} element={<AdminLayout />}>
					<Route index element={<AdminDashboard />} />
					<Route path="/admin/products" element={<AdminProducts />} />
					<Route path="/admin/users" element={<AdminUsers />} />
					<Route path="/admin/brands" element={<AdminBrands />} />
					<Route
						path="/admin/types"
						element={<AdminProductTypes />}
					/>
				</Route>
			) : (
				<></>
			)}

			<Route path="/" element={<UserLayout />}>
				<Route index element={<UserHomePage />} />
				<Route path="product/:id" element={<OneProductPage />} />
				<Route path="collection" element={<ProductGroupPage />} />
				<Route
					path="collection/:typeBrand/:group"
					element={<ProductGroupPage />}
				/>
				<Route path="login" element={<LoginPage />} />
				<Route path="create-account" element={<CreateAccountPage />} />
				<Route path="*" element={<ErrorPage />} />
				{user.role === "USER" ? (
					<Route
						path="portal"
						key={"user"}
						element={<UserCabinet />}
					/>
				) : (
					<></>
				)}
			</Route>
		</Routes>
	);
}

export default App;
