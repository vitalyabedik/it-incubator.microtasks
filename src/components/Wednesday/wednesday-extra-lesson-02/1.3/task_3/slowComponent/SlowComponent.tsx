import React, {useMemo} from 'react';

export const SlowComponent =() => {
  console.log('SlowComponent re-render...');

  const getNowValue = () => {
    let now = performance.now();

    while (performance.now() - now < 1000) {
      // Artificial delay -- do nothing for 100ms
    }

    return now
  }

  const memoizedNowValue = useMemo(getNowValue, [])

  return <p>I am a very slow component tree. </p>;
};

