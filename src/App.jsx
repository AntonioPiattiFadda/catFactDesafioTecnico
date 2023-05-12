import React from 'react';
import './App.css';
import useGetImg from './Hooks/useGetImg';
import { useGetRandomFact } from './Hooks/useGetRandomFact';

const App = () => {
  const { fact, updateFact } = useGetRandomFact();
  const { img, error, loading } = useGetImg({ fact });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFact();
  };

  return (
    <>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>App de gatitos</h1>
        <form onSubmit={handleSubmit} action="">
          <button>Search fact</button>
        </form>
        <section
          style={{
            width: '600px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {fact ? <p style={{ width: '250px' }}>{fact} </p> : <div />}
          <div
            style={{
              width: '250px',
              display: 'grid',
              placeContent: 'center',
            }}
          >
            {loading ? (
              <span>Cargando...</span>
            ) : img ? (
              <img
                src={img}
                alt="Random picture of a cat taken from a cat's page"
                style={{ width: '250px' }}
              />
            ) : (
              <></>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
