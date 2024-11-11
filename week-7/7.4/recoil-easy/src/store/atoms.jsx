import { atom } from "recoil";

export const networkAtom = atom({
	key: "networkAtom",
	default: 104,
});

export const jobsAtom = atom({
	key: "jobsAtom",
	default: 0,
});

export const messageAtom = atom({
	key: "messageAtom",
	default: 12,
});

export const notificationAtom = atom({
	key: "notificationAtom",
	default: 0,
});

export const totalNotificationCount = selector({
	key: "totalNotificationCount",
	value: ({ get }) => {
		const networkValue = get(networkAtom);
		const jobsValue = get(jobsAtom);
		const messageValue = get(messageAtom);
		const notificationsValue = get(notificationAtom);
		return networkValue + jobsValue + messageValue + notificationsValue;
	},
});
