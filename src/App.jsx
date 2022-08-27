import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme.jsx";
import HomePage from "./pages/HomePage/HomePage";
import ClientsPage from "./pages/ClientsPage/ClientsPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
