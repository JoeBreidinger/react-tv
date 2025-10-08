import { useState } from "react";
import { tvShows } from "./shows/data.js";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails.jsx";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={tvShows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
