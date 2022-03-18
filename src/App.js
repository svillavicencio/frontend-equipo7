import React from "react";
import AppRouter from "./routers/appRouter";
import AuthProvider from "./providers/AuthProviders";

import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
