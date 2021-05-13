import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
		meta: {
			linkText: 'Dashboard',
			icon: 'icon-wallet',
		}
	},
	{
		path: "/earnings",
		name: "Earnings",
		component: () => import("../views/Earnings.vue"),
		meta: {
			linkText: 'Earnings',
			icon: 'icon-exchange',
			notifications: 2
		}
	},
	{
		path: "/wallets",
		name: "Wallets",
		component: () => import("../views/Wallets.vue"),
		meta: {
			linkText: 'My wallets',
			icon: 'icon-wallets',
		}
	},
	{
		path: "/exchange",
		name: "Exchange",
		component: () => import("../views/Exchange.vue"),
		meta: {
			linkText: 'Exchange',
			icon: 'icon-dollar-bitcoin',
		}
	},
	{
		path: "/support",
		name: "Support",
		component: () => import("../views/Support.vue"),
		meta: {
			linkText: 'Support',
			icon: 'icon-about',
		}
	},
	{
		path: "/giveaway",
		name: "Giveaway",
		component: () => import("../views/Giveaway.vue"),
		meta: {
			linkText: 'Giveaway',
			icon: 'icon-leaderboard',
		}
	},
	{
		path: "/settings",
		name: "Settings",
		component: () => import("../views/Settings.vue"),
		meta: {
			linkText: 'Settings',
			icon: 'icon-settings',
		}
	},
	{
		path: "/notifications",
		name: "Notifications",
		component: () => import("../views/Notifications.vue"),
		meta: {
			linkText: 'Notifications',
			icon: 'icon-notification',
			notifications: 2
		}
	},
	// {
	// 	path: "/components",
	// 	name: "Components",
	// 	component: () => import("../views/Components.vue"),
	// },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
