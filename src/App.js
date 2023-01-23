import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import AsideTab from "./components/navigation/AsideTab";
import Header from "./components/navigation/Header";

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <section className="d-flex justify-content-between app-section">
        <aside>
          <AsideTab />
        </aside>
        <main>
          <Routes>
            <Route
              path="/schools/timetable/school"
              element={<AsideTab> </AsideTab>}
            />
            <Route
              path="/schools/timetable/teacher"
              element={<div>schools/timetable/teacher</div>}
            />
            <Route
              path="/schools/timetable/parent"
              element={<div>schools/timetable/parent</div>}
            />
          </Routes>
        </main>
      </section>
    </div>
  );
}

export default App;
