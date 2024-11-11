import { atom, selector } from "recoil";
import axios from "axios";

// async data request

export const updates = atom({
	key: "updates",
	default: selector({
		key: "networkSelector",
		get: async () => {
			const res = await axios.get(
				"https://sum-server.100xdevs.com/notifications"
			);
			return res.data;
		},
	}),
});

export const totalNotificationCount = selector({
	key: "totalNotificationCount",
	get: ({ get }) => {
		const allNotifs = get(updates);
		return (
			allNotifs.network +
			allNotifs.jobs +
			allNotifs.notifications +
			allNotifs.messaging
		);
	},
});
