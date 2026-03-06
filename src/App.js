import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bouvet Deler</h1>
        <p>A simple React sample website</p>
      </header>

      <main className="App-main">
        <section className="hero">
          <h2>Getting Started</h2>
          <p>This is a basic React application to get you started.</p>
        </section>

        <section className="counter">
          <h2>Counter Demo</h2>
          <p>Current count: <strong>{count}</strong></p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </section>

        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>⚛️ Built with React 18</li>
            <li>🎨 Simple styling with CSS</li>
            <li>🚀 Ready for development</li>
            <li>📦 Create React App setup</li>
          </ul>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2026 Bouvet Deler. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
