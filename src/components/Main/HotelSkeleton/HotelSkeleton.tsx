import { FC } from "react";
import ContentLoader from "react-content-loader";

const HotelSkeleton: FC = () => (
  <ContentLoader
    speed={2}
    width={580}
    height={90}
    viewBox="0 0 580 90"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="53" cy="45" r="44" />
    <rect x="122" y="6" rx="10" ry="10" width="194" height="20" />
    <rect x="122" y="37" rx="10" ry="10" width="120" height="19" />
    <rect x="122" y="65" rx="10" ry="10" width="89" height="16" />
    <rect x="538" y="4" rx="10" ry="10" width="30" height="15" />
    <rect x="487" y="57" rx="10" ry="10" width="89" height="21" />{" "}
  </ContentLoader>
);

export default HotelSkeleton;
