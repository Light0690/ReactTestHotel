import ContentLoader from "react-content-loader";

const HotelSkeleton = () => (
  <ContentLoader
    speed={2}
    width={540}
    height={86}
    viewBox="0 0 540 86"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="121" y="15" rx="10" ry="10" width="80" height="20" />
    <rect x="121" y="39" rx="10" ry="10" width="140" height="20" />
    <rect x="121" y="65" rx="10" ry="10" width="89" height="20" />
    <rect x="499" y="11" rx="10" ry="10" width="20" height="20" />
    <rect x="433" y="59" rx="10" ry="10" width="89" height="20" />
    <circle cx="45" cy="48" r="38" />
  </ContentLoader>
);

export default HotelSkeleton;
