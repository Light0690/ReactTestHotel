import { useParams } from "react-router-dom";

// import styles from "./HotelById.module.scss";

const HotelById = () => {
  const params = useParams();
  return <div>{params.id}</div>;
};

export default HotelById;
