import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import InsightListPage from "./pages/InsightListPage";
import InsightDetailPage from "./pages/InsightDetailPage";
import { EsgPage } from "./pages/EsgPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "esg", Component: EsgPage },
      { path: "insight", Component: InsightListPage },
      { path: "insight/:id", Component: InsightDetailPage },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
