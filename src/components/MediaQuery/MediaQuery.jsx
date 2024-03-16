import React, { useState, useEffect } from 'react';

const MediaQuery = ({ query, children }) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleResize = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [query]);

  return matches ? <>{children}</> : null;
};

export default MediaQuery;
