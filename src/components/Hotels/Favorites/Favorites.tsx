// import { useAppDispatch, useAppSelector } from "@redux/hooks";
// import {
//   favoritesSelector,
//   sortTypeSelector,
//   sortFavorites,
// } from "@redux/slices/Hotels/hotelsSlice";

// import HotelItem from "../HotelContainer/HotelItem";
// import UiSortButton from "@components/UI/UiSortButton";

// import styles from "./Favorites.module.scss";

// const Favorites = () => {
//   const favorites = useAppSelector(favoritesSelector);
//   const sortType = useAppSelector(sortTypeSelector);

//   const dispatch = useAppDispatch();

//   const onClick = (type: "stars" | "priceAvg", desc: boolean) => {
//     dispatch(sortFavorites({ type, desc }));
//   };

//   const sortTypeTSX = sortType.map((elem) => {
//     return (
//       <UiSortButton
//         key={elem.type}
//         onClick={onClick}
//         title={elem.title}
//         type={elem.type}
//         desc={elem.desc}
//       />
//     );
//   });

//   const favoritesTSX = favorites.length ? (
//     favorites.map((elem) => <HotelItem key={elem._id} {...elem} />)
//   ) : (
//     <h2 className={styles.empty}>В избранном пока нет элементов</h2>
//   );

//   return (
//     <div className={styles.favorites}>
//       <h2 className={styles.favorites__title}>Избранное</h2>
//       <div className={styles.favorites__buttons}>{sortTypeTSX}</div>
//       <div className={styles.favorites__group}>{favoritesTSX}</div>
//     </div>
//   );
// };

// export default Favorites;
