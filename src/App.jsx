import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const dataHasLoaded = useRef(false);

  const fetchPeople = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      });
  };

  useEffect(() => {
    if (dataHasLoaded.current) return;
    console.log("Fetching data...");
    fetchPeople();
    dataHasLoaded.current = true;
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h2>Welcome to the Hire Your Team app!</h2>
            </main>
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route
          path="/person-profile/:id"
          element={
            <PersonProfile
              isEditMode={false}
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PersonProfile
              isEditMode={true}
              people={hiredPeople}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
            />
          }
        />
      </Routes>
    </>
  );
}
