import { RouterProvider } from "react-router";
import { HelmetProvider } from 'react-helmet-async';
import router from "./route";

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
