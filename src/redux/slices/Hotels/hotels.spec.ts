import { getNowDate } from "@helpers/date";
import reducer from "./hotelsSlice";

describe("hotelsSlice", () => {
  test("должно вернуть initial state", () => {
    const state = {
      location: "Москва",
      checkInDate: getNowDate(),
      countDays: 1,
      isLoading: false,
      error: "",

      sortType: [
        { title: "Рейтинг", type: "stars", desc: true },
        { title: "Цена", type: "priceAvg", desc: true },
      ],
      hotels: [],
      favorites: [],
    };
    expect(reducer(undefined, { type: undefined })).toEqual(state);
  });
});
