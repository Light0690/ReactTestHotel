import { useEffect, useState } from "react";
import Slider from "react-slider";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { setSortByPrice, sortByPriceSelector } from "@redux/slices/Hotels/hotelsSlice";

import { MAX, MIN } from "@constans/sortPriceValues";

import "./SortHotelsPrice.scss";


const SortHotelsPrice = () => {
  const sortByPrice = useAppSelector(sortByPriceSelector)
  const [sortValues, setSortValues] = useState(sortByPrice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setSortValues(sortByPrice)
  },[sortByPrice])

  const handleSliderChange = (nums: number[]) => {
    dispatch(setSortByPrice(nums));
  };

  const handleInputChange = (nums: number[]) => {
    setSortValues(nums);
    handleSliderChange(nums);
  };

  return (
    <div className="block">
      <h3>Цена за 1 ночь</h3>
      <div>
        <input
          className={cn("slider__value", "slider__left")}
          type="number"
          value={sortValues[0]}
          onChange={(e) =>
            handleInputChange([Number(e.target.value), sortByPrice[1]])
          }
        />
        <input
          className={cn("slider__value", "slider__right")}
          type="number"
          value={sortValues[1]}
          onChange={(e) =>
            handleInputChange([sortByPrice[0], Number(e.target.value)])
          }
        />
      </div>

      <Slider
        className="slider"
        onAfterChange={handleSliderChange}
        onChange={setSortValues}
        value={sortValues}
        min={MIN}
        max={MAX}
      />
    </div>
  );
};

export default SortHotelsPrice;
