import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./components/Loader.tsx";
import Header from "./components/Header.tsx";

const Cart = lazy(() => import("./pages/Cart.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const Search = lazy(() => import("./pages/Search.tsx"));
const Shipping = lazy(() => import("./pages/Shipping.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Header />
            <Home />
          </Suspense>
        }
      />
      
      <Route
        path="cart"
        element={
          <Suspense fallback={<Loader />}>
            <Header />
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<Loader />}>
            <Header />
            <Login />
          </Suspense>
        }
      />
      <Route
        path="search"
        element={
          <Suspense fallback={<Loader />}>
            <Header />
            <Search />
          </Suspense>
        }
      />
      <Route
        path="shipping"
        element={
          <Suspense fallback={<Loader />}>
            <Header />
            <Shipping />
          </Suspense>
        }
      />
    </>
  )
);

export default router;
