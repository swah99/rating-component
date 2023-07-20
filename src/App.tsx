import { useState, createContext } from "react";
import Ratings from "./ratings";
import Results from "./results";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

export const RatingsContext = createContext<{
  ratings: number | null;
  setRatings: (val: number | null) => void;
}>({
  ratings: null,
  setRatings: () => {},
});
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Ratings />} />
      <Route path="/thank-you" element={<Results />} />
    </Route>
  )
);
function App() {
  const [ratings, setRatings] = useState<number | null>(null);
  const contextValue = {
    ratings,
    setRatings,
  };
  return (
    <RatingsContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </RatingsContext.Provider>
  );
}

export default App;
