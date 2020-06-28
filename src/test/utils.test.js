import { toShortDay } from "../utils";

it("to short data", () => {
  expect(toShortDay('2020-04-22T00:00:00Z')).toEqual('Apr 22 2020');
  expect(toShortDay('2009-03-18T00:00:00Z')).toEqual('Mar 18 2009');
});
