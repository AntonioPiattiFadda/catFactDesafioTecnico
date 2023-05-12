import { useEffect, useState } from 'react';
import { getRandomFact } from '../Services/Facts';

export function useGetRandomFact(params) {
  const [fact, setFact] = useState('');
  useEffect(() => {
    getRandomFact().then((e) => setFact(e));
  }, []);
  const updateFact = () => {
    getRandomFact().then((e) => setFact(e));
  };
  return { fact, updateFact };
}
