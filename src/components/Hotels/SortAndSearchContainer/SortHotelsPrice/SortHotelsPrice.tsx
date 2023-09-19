import Slider from "react-slider";
import cn from "classnames";
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
        <input
          className={cn("slider__value", "slider__left")}
          type="number"
          value={sortByPrice[0]}
          onChange={(e) =>
            handleChange([Number(e.target.value), sortByPrice[1]])
          }
        />
        <input
          className={cn("slider__value", "slider__right")}
          type="number"
          value={sortByPrice[1]}
          onChange={(e) =>
            handleChange([sortByPrice[0], Number(e.target.value)])
          }
        />
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
