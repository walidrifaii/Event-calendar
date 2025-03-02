import "./index.css";

import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from "./context/AppContext";
import ProtectedRoute from './routes/ProtectedRoute';
import DemoApp from "./calendare";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <>
      <AppProvider>
        <Router>
           <Routes>
           <Route path="/login" element={<LoginPage />} />
        <Route
            path="/"
            element={
              <ProtectedRoute>
                <DemoApp />
              </ProtectedRoute>
            }
          />
           </Routes>
        </Router>
        <ToastContainer />
      </AppProvider>
    </>
  );
}

export default App;
