import React from "react";
import "./App.css";
import Header from "./components/navigation/Header";

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <section className="d-flex justify-content-between">
        <aside className="d-flex" style={{ background: "lightgray" }}>
          side bar
        </aside>
        <main className="d-flex" style={{ background: "lightcoral" }}>
          main app
        </main>
      </section>
    </div>
  );
}

export default App;
