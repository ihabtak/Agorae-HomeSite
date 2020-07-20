import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "react-bootstrap/Form";
/* import projetMap21 from ;
import nuageDeTheme from ;
import { nouveauItem } from ;
import { Syllabus } from ;
import { Guide } from ;
import Contact from ;
import { NoMatch } from ; */
import { Layout } from "./components/Layout";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import NavigationBar from "./components/navbar/NavigationBar";
import { Footer } from "./components/footer/Footer";
import "./App.css";
//import { Jumbotron } from './components/Jumbotron';
const Home = lazy(() => import("./components/home/Home"));
const projetMap21 = lazy(() => import("./components/projetMap21/projetMap21"));
const nuageDeTheme = lazy(() => import("./components/nuageDeThemes/nuageDeTheme"));
const nouveauItem = lazy(() => import("./components/nouveauItem/nouveauItem"));
const Syllabus = lazy(() => import("./components/syllabus/Syllabus"));
const Guide = lazy(() => import("./components/guide/Guide"));
const Contact = lazy(() => import("./components/contact/Contact"));
const NoMatch = lazy(() => import("./components/NoMatch"));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <I18nextProvider i18n={i18n}>
            <div>
              <NavigationBar />
              <Layout>
                <Suspense
                  fallback={
                    <div className="container-centered">
                      <Spinner
                        color="dark"
                        style={{ width: "3rem", height: "3rem" }}
                      />
                    </div>
                  }
                >
                  <Switch>
                    <Route exact path={["/", "/accueil"]} component={Home} />
                    <Route path="/projetmap21" component={projetMap21} />
                    <Route path="/nuagedethemes" component={nuageDeTheme} />
                    <Route path="/nouveauitem" component={nouveauItem} />
                    <Route path="/syllabus" component={Syllabus} />
                    <Route path="/guide" component={Guide} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                  </Switch>
                </Suspense>
              </Layout>
            </div>
          </I18nextProvider>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
