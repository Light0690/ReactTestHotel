import { useState } from "react";

import Slider from "react-slider";

import "./SortHotelsPrice.scss";

const MIN = 100;
const MAX = 12000;

const SortHotelsPrice = () => {
  const [values, setValues] = useState([MIN, MAX]);

  return (
    <div className="wrapper">
      <h3>Цена</h3>
      <div>
        от {values[0]} - до {values[1]}
      </div>

      <Slider className="slider" onChange={setValues} value={values} min={MIN} max={MAX} />
    </div>
  );
};

export default SortHotelsPrice;
