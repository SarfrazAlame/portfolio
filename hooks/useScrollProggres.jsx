import React, { useEffect, useState } from "react";

const useScrollProggres = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updatedScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    window.addEventListener("scroll", updatedScrollCompletion);

    return () => window.removeEventListener("scroll", updatedScrollCompletion);
  }, []);
  return completion;
};

export default useScrollProggres;
