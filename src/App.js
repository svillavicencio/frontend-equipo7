import React from "react";
import AppRouter from "./routers/appRouter";
import AuthProvider from "./providers/AuthProviders";
import Header from "./components/Header";

import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <Header />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
