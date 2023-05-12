import { useEffect, useState } from 'react';

const useGetImg = ({fact}) => {
  const [img, setImg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!fact) return;
    setLoading(true);
    const factString = fact;
    const firstThreeWords = factString.split(' ', 3).join(' ');

    const randomFact = fetch(`https://cataas.com/cat/says/${firstThreeWords}`);
    randomFact.then((res) => {
      setImg(res.url);
      setLoading(false);
    });
  }, [fact]);
  return { img, error, loading };
};

export default useGetImg;
