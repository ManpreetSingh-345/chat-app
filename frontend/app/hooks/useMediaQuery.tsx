import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    setMatches(media.matches);
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
