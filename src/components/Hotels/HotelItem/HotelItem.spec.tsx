import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import { Provider } from "react-redux";
import { store } from "@redux/store";

import HotelItem from "./HotelItem";

describe("", () => {

  const item = {
    _id: 1,
    hotelName: "test1",
    city: "test1",
    priceAvg: 1,
    stars: 1,
    isFavorite: true,
  };

  test("", () => {
    const { queryByText } = render(
      <Provider store={store}>
        <HotelItem {...item}/>
      </Provider>
    );

    
    expect(queryByText('Стоимость:')).toBeInTheDocument();
    expect(queryByText('цена')).not.toBeInTheDocument();
  });
});
