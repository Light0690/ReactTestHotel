import { useEffect, useState } from "react";

import UiAlert from "@components/UI/UiAlert/UiAlert";

interface props {
  error: String;
}

const FetchWithError = ({ error }: props) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(true);
    }, 5000);
  }, [error]);

  return <>{error && <UiAlert message={error} isHidden={isHidden} />}</>;
};

export default FetchWithError;
