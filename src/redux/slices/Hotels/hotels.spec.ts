import { getNowDate } from "@helpers/date/date";
import { MAX, MIN } from "@constans/sortPriceValues";
import reducer, {
  State,
  // changeFavorites,
  setErrorNotification,
  setSearchForm,
  // sortFavorites,
} from "./hotelsSlice";


describe("hotelsSlice", () => {
  const state: State = {
    location: "Москва",
    checkInDate: getNowDate(),
    countDays: 1,
    sortByStars: [],
    sortByPrice: [MIN,MAX],
    isLoading: false,
    error: "",

    sortType: [
      { title: "Рейтинг", type: "stars", desc: true },
      { title: "Цена", type: "priceAvg", desc: true },
    ],
    hotels: [],
    hotelById : null,
    favorites: [],
  };

  test("должно вернуть initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(state);
  });

  test("setSearchForm", () => {
    const formValues = {
      location: "Санкт-Петербург",
      checkInDate: "2001-04-24",
      countDays: 3,
    };

    expect(reducer(undefined, setSearchForm(formValues))).toEqual({
      ...state,
      location: "Санкт-Петербург",
      checkInDate: "2001-04-24",
      countDays: 3,
    });
  });

  // test("changeFavorites", () => {
  //   const itemFavorite = {
  //     _id: 3,
  //     hotelName: "test",
  //     city: "test",
  //     priceAvg: 13000,
  //     stars: 4,
  //     isFavorite: false,
  //   };

  //   const newState: State = {
  //     ...state,
  //     favorites: [{ ...itemFavorite, isFavorite: true }],
  //   };

  //   expect(reducer(undefined, changeFavorites(itemFavorite))).toEqual(newState);
  //   expect(
  //     reducer(newState, changeFavorites({ ...itemFavorite, isFavorite: true })),
  //   ).toEqual({ ...state, favorites: [] });
  // });

  // test("sortFavorites", () => {
  //   const itemFavorite1 = {
  //     _id: 1,
  //     hotelName: "test1",
  //     city: "test1",
  //     priceAvg: 1,
  //     stars: 1,
  //     isFavorite: true,
  //   };
  //   const itemFavorite2 = {
  //     _id: 2,
  //     hotelName: "test2",
  //     city: "test2",
  //     priceAvg: 2,
  //     stars: 2,
  //     isFavorite: true,
  //   };
  //   const newState: State = {
  //     ...state,
  //     sortType: [
  //       { title: "Рейтинг", type: "stars", desc: false },
  //       { title: "Цена", type: "priceAvg", desc: true },
  //     ],
  //     favorites: [itemFavorite2, itemFavorite1],
  //   };

  //   expect(
  //     reducer(
  //       { ...state, favorites: [itemFavorite1, itemFavorite2] },
  //       sortFavorites({ type: "stars", desc: true }),
  //     ),
  //   ).toEqual(newState);
  //   expect(
  //     reducer(newState, sortFavorites({ type: "stars", desc: false })),
  //   ).toEqual({
  //     ...state,
  //     sortType: [
  //       { title: "Рейтинг", type: "stars", desc: true },
  //       { title: "Цена", type: "priceAvg", desc: true },
  //     ],
  //     favorites: [itemFavorite1, itemFavorite2],
  //   });
  // });

  test("setErrorNotification", () => {
    const errorMessage = "test";

    expect(reducer(undefined, setErrorNotification(errorMessage))).toEqual({
      ...state,
      error: errorMessage,
    });
  });
});
