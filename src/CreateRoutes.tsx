import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  
  import { lazy, Suspense } from "react";
  import Loader from "./components/Loader.tsx";
  
  const Cart = lazy(() => import("./pages/Cart.tsx"));
  const Home = lazy(() => import("./pages/Home.tsx"));
  const Search = lazy(() => import("./pages/Search.tsx"));
  
  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path="/" element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
          <Route path="cart" element={<Suspense fallback={<Loader />}><Cart /></Suspense>} />
          <Route path="search" element={<Suspense fallback={<Loader />}><Search /></Suspense>} />
        </>
    )
  );
  
  export default router;
  