import ContentLoader from "react-content-loader";

import { useResize } from "@hooks/useResize";

const HotelSkeleton = () => {
  const { width, isScreenLg } = useResize();
  const size = isScreenLg ? 740 : width * 0.8;

  return (
    <ContentLoader
      speed={2}
      width={size}
      height={86}
      viewBox="0 0 740 86"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="121" y="15" rx="10" ry="10" width="80" height="20" />
      <rect x="121" y="39" rx="10" ry="10" width="140" height="20" />
      <rect x="121" y="65" rx="10" ry="10" width="89" height="20" />
      <rect x="715" y="14" rx="10" ry="10" width="20" height="20" />
      <circle cx="45" cy="48" r="38" />
      <rect x="668" y="38" rx="10" ry="10" width="70" height="17" />
      <rect x="650" y="59" rx="10" ry="10" width="89" height="20" />
    </ContentLoader>
  );
};

export default HotelSkeleton;
