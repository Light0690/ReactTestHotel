import { useEffect, useState } from "react";

import UiAlert from "@components/UI/UiAlert/UiAlert";

interface Props {
  error: string;
}

const FetchWithError = ({ error }: Props) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    setIsHidden(false);

    setTimeout(() => {
      setIsHidden(true);
    }, 5000);
  }, [error]);

  return <>{error && <UiAlert message={error} isHidden={isHidden} />}</>;
};

export default FetchWithError;
