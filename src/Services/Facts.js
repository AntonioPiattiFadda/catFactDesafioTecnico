export function getRandomFact() {
  return fetch('https://catfact.ninja/fact')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const { fact } = data;
      return fact;
    });
}
