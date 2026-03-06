import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Velkommen til Bouvet deler</h1>
        <p>Din kilde til læring, vår arena for deling</p>
      </header>

      <main className="App-main">
        <section className="hero">
          <h2>Kom i gang</h2>
          <p>Dette er en grunnleggende React-applikasjon for å komme i gang.</p>
        </section>

        <section className="counter">
          <h2>Tel-demo</h2>
          <p>Gjeldende telling: <strong>{count}</strong></p>
          <button onClick={() => setCount(count + 1)}>Øk</button>
          <button onClick={() => setCount(count - 1)}>Reduser</button>
          <button onClick={() => setCount(0)}>Tilbakestill</button>
        </section>

        <section className="features">
          <h2>Funksjoner</h2>
          <ul>
            <li>⚛️ Bygget med React 18</li>
            <li>🎨 Enkel stilisering med CSS</li>
            <li>🚀 Klar for utvikling</li>
            <li>📦 Create React App-oppsett</li>
          </ul>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2026 Bouvet deler. Alle rettigheter reservert.</p>
      </footer>
    </div>
  );
}

export default App;
