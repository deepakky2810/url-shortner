import { ShortnerPage, SignupPage, HomePage } from "../pages";

const routes = [
	{
		map: "0",
		path: "/",
		component: HomePage,
		exact: true,
	},
	{
		map: "1",
		path: "/shortner",
		component: ShortnerPage,
		exact: true,
	},
	{
		map: "2",
		path: "/signup",
		component: SignupPage,
		exact: true,
	},
	// {
	// 	map: "2",
	// 	path: "/register-owner",
	// 	component: RegisterOwnerPage,
	// 	exact: true,
	// },
	// {
	// 	map: "3",
	// 	path: "/register-customer",
	// 	component: RegisterCustomerPage,
	// 	exact: true,
	// }
];

export default routes;
