import Slider from "react-slider";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
  setSortByPrice,
  sortByPriceSelector,
} from "@redux/slices/Hotels/hotelsSlice";

import { MAX, MIN } from "@constans/sortPriceValues";

import "./SortHotelsPrice.scss";

const SortHotelsPrice = () => {
  const sortByPrice = useAppSelector(sortByPriceSelector);

  const dispatch = useAppDispatch();

  const handleChange = (nums: number[]) => {
    dispatch(setSortByPrice(nums));
  };

  return (
    <div className="block">
      <h3>Цена за 1 ночь</h3>
      <div>
        от {sortByPrice[0]} - до {sortByPrice[1]}
      </div>

      <Slider
        className="slider"
        onAfterChange={handleChange}
        value={sortByPrice}
        min={MIN}
        max={MAX}
      />
    </div>
  );
};

export default SortHotelsPrice;
