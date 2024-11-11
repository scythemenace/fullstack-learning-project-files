import { atom, selector } from "recoil";

const countAtom = atom({
	// Expects two arguments: object (bunch of keys)
	key: "countAtom", // The key is useful when we have a big application with a bunch of atoms. We can uniquely identify this atom
	default: 0,
});

// Selector is basically like useMemo(), if count has not changed isEven won't run the expensive operation below
const evenOdd = selector({
	key: "evenOdd",
	get: ({ get }) => {
		const decider = get(countAtom);
		const evaluate = decider % 2 == 0;

		return evaluate ? "It is even" : null;
	},
});

export { countAtom, evenOdd };
