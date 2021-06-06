import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import { LANG } from '@/helpers/language.js'

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
		meta: {
			linkText: LANG.nav.dashboard.eng,
			icon: 'icon-wallet',
		}
	},
	{
		path: "/wallets",
		name: "Wallets",
		component: () => import("@/views/Wallets.vue"),
		meta: {
			linkText: LANG.nav.wallets.eng,
			icon: 'icon-wallets',
		}
	},
	{
		path: "/exchange",
		name: "Exchange",
		component: () => import("@/views/Exchange.vue"),
		meta: {
			linkText: LANG.nav.exchange.eng,
			icon: 'icon-dollar-bitcoin',
		}
	},
	{
		path: "/earnings",
		name: "Earnings",
		component: () => import("@/views/Earnings.vue"),
		meta: {
			linkText: LANG.nav.earnings.eng,
			icon: 'icon-exchange',
			notifications: 2
		}
	},
	{
		path: "/trading",
		name: "Trading",
		component: () => import("@/views/Trading.vue"),
		meta: {
			linkText: LANG.nav.trading.eng,
			icon: 'icon-candlestick-chart',
		}
	},
	{
		path: "/giveaway",
		name: "Giveaway",
		component: () => import("@/views/Giveaway.vue"),
		meta: {
			linkText: LANG.nav.giveaway.eng,
			icon: 'icon-leaderboard',
		}
	},
	{
		path: "/exchange-history",
		name: "Exchange History",
		component: () => import("@/views/ExchangeHistory.vue"),
	},
	{
		path: "/support",
		name: "Support",
		component: () => import("@/views/Support.vue"),
		meta: {
			linkText: LANG.nav.support.eng,
			icon: 'icon-about',
		}
	},
	{
		path: "/settings",
		name: "Settings",
		component: () => import("@/views/Settings.vue"),
		meta: {
			linkText: LANG.nav.settings.eng,
			icon: 'icon-settings',
		}
	},
	{
		path: "/notifications",
		name: "Notifications",
		component: () => import("@/views/Notifications.vue"),
		meta: {
			linkText: LANG.nav.notifications.eng,
			icon: 'icon-notification',
			notifications: 2
		}
	},
	// {
	// 	path: "/components",
	// 	name: "Components",
	// 	component: () => import("@/views/Components.vue"),
	// },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
