import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import InsightListPage from "./pages/InsightListPage";
import InsightDetailPage from "./pages/InsightDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "insight", Component: InsightListPage },
      { path: "insight/:id", Component: InsightDetailPage },
    ],
  },
]);
