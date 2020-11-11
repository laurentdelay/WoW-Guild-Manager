import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import Header from "./Header";
import MainRoutes from "@components/routes/MainRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div id="app" className="bg-dark min-vh-100">
          <Header />
          <Container style={{ minHeight: "85vh" }}>
            <MainRoutes />
          </Container>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;