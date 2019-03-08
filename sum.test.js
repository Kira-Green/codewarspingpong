const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
});

test("adds -3 + 2 to equal -1", () => {
	expect(sum(-3, 2)).toBe(-1);
});

test("pass in a string", () => {
	expect(sum("a", "2")).toBe("input is not a number");
});
