import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./layout/Layout";
import Merchants from "./pages/Merchants/Merchants";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-background/90 text-dark">
      <Routes>
        <Route
          index
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/wallet"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/merchants"
          element={
            <Layout>
              <Merchants />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
