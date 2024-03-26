import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTES } from "./Route.constants";
import { Dashboard } from "../Pages/Dashboard";
import { DynamicPage } from "../Pages/DynamicPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.DYNAMIC_PAGE} element={<DynamicPage />} />
    </>
  )
);
