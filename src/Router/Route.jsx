import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import DonationPage from "../Pages/DonationPage";
import StatisticsPage from "../Pages/StatisticsPage";
import CampaignPage from "../Pages/CampaignPage";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/donation",
        element: <DonationPage></DonationPage>,
      },
      {
        path: "/campaign/:id",
        element: <CampaignPage></CampaignPage>,
      },
      {
        path: "/statistics",
        element: <StatisticsPage></StatisticsPage>,
      },
    ],
  },
]);
