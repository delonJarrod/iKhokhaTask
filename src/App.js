import "./App.css";
import HomePage from "./components/pages/Homepage";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/HomePage/Footer";
import Layout from "./components/layout/Layout";
import LogoSection from "./components/HomePage/LogoSection";
import Blog from "./components/HomePage/Blog";

//import the layout with the main navigation

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          {/*define for which path which component should be loaded */}
          <Switch>
            {/* / is the default path 
        if there is a "/" default path set, add exact to the route */}
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/Products" exact>
              <LogoSection />
            </Route>
            {/*define for which path which component should be loaded */}
            <Route path="/Blog" exact>
              <Blog />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
