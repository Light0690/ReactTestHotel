import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import UiAlert from "@ui/UiAlert";

interface Props {
  error: string;
}

const FetchWithError = ({ error }: Props) => {
  const [isVisible, setIsVisible] = useState(Boolean(error));

  useEffect(() => {
    setIsVisible(Boolean(error));

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, [error]);
  console.log(error);
  console.log(Boolean(error));
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="FetchWithError"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <UiAlert message={error} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FetchWithError;
