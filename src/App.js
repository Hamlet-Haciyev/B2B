import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Main } from "./components";
import { Footer, LoginContainer } from "./containers";
import RegisterContainer from "./containers/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Details from "./components/Tender/Details";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/reg"
            element={
              <Main>
                <RegisterContainer />
              </Main>
            }
          />
          <Route
            path="/login"
            element={
              <Main>
                <LoginContainer />
              </Main>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Main>
                  <Home />
                </Main>
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <Main>
                  <About />
                </Main>
                <Footer />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                <Main>
                  <Dashboard />
                </Main>
                <Footer />
              </>
            }
          />
           <Route
            path="/tender/:id"
            element={
              <>
                <Navbar />
                <Main>
                  <Details/>
                </Main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
