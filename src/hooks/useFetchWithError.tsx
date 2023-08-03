import { useEffect, useState } from "react";

import UiAlert from "@components/UI/UiAlert/UiAlert";

export const useFetchWithError = (error: String) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(true);
    }, 5000);
  }, [error]);

  return <>{error && <UiAlert message={error} isHidden={isHidden} />}</>;
};
