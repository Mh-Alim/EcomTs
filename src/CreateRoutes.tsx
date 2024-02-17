import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./components/Loader.tsx";

const Header = lazy(() => import("./components/Header.tsx"));
const Cart = lazy(() => import("./pages/Cart.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const Search = lazy(() => import("./pages/Search.tsx"));
const Shipping = lazy(() => import("./pages/Shipping.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));

// Admin Dashboard
const Dashboard = lazy(() => import("./pages/admin/Dashboard.tsx"));
const Product = lazy(() => import("./pages/admin/Product.tsx"));
const Customer = lazy(() => import("./pages/admin/Customer.tsx"));
const Transaction = lazy(() => import("./pages/admin/Transaction.tsx"));

// Admin Management

const NewProduct = lazy(() => import("./pages/admin/Mangement/NewProduct.tsx"));
const ProductManagement = lazy(
  () => import("./pages/admin/Mangement/ProductManagement.tsx")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/Mangement/TransactionManagement.tsx")
);

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

      {/* Admin Routes  */}

      {/* <Route path="/admin">
          <Suspense fallback={<Loader />}>
            <AdminSidebar />
          </Suspense>
      </Route> */}
      <Route
        path="/admin/dashboard"
        element={
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        }
      />

      <Route
        path="/admin/product"
        element={
          <Suspense fallback={<Loader />}>
            <Product />
          </Suspense>
        }
      />
      <Route
        path="/admin/customer"
        element={
          <Suspense fallback={<Loader />}>
            <Customer />
          </Suspense>
        }
      />
      <Route
        path="/admin/transaction"
        element={
          <Suspense fallback={<Loader />}>
            <Transaction />
          </Suspense>
        }
      />

      {/* Mangement  */}

      <Route
        path="/admin/product/new"
        element={
          <Suspense fallback={<Loader />}>
            <NewProduct />
          </Suspense>
        }
      />
      <Route
        path="/admin/product/:id"
        element={
          <Suspense fallback={<Loader />}>
            <ProductManagement />
          </Suspense>
        }
      />
      <Route
        path="/admin/transaction/:id"
        element={
          <Suspense fallback={<Loader />}>
            <TransactionManagement />
          </Suspense>
        }
      />
    </>
  )
);

export default router;
