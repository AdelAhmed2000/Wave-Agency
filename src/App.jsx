import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./component/layout/Layout";
import ScrollToTop from "./component/scrollTop/ScrollTop";
import { Home } from "./pages/home/Home";

function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <main>
      <ScrollToTop />
      <RouterProvider router={routing} />
    </main>
  );
}

export default App;
