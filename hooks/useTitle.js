import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Fairy Tale Treasures`
  }, [title]);
};

export default useTitle;
