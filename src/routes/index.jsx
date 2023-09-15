import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { Layout } from "../Layouts";
import { NotFoundPage } from "../pages/Not-Found";
import { Suspense } from "react";
import { FallbackPage } from "../pages/Fallback";
import { ErrorPage } from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FallbackPage />}>
        <Layout />
      </Suspense>
    ),
    // errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
