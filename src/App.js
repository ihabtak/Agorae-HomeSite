import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Home  from './components/home/Home';
import projetMap21  from './components/projetMap21/projetMap21';
import  nuageDeTheme  from './components/nuageDeThemes/nuageDeTheme';
import  NouveauItem  from './components/nouveauItem/nouveauItem';
import { Syllabus } from './components/syllabus/Syllabus';
import { Guide } from './components/guide/Guide';
import  Contact  from './components/contact/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import NavigationBar from './components/navbar/NavigationBar';
import {Footer} from './components/footer/Footer';
import "./App.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <I18nextProvider i18n={i18n}>
        <div>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path={["/", "/accueil"]} component={Home} />
              <Route path="/projetmap21" component={projetMap21} />
              <Route path="/nuagedethemes" component={nuageDeTheme} />
              <Route path="/Nouveauitem" component={NouveauItem} />
              <Route path="/syllabus" component={Syllabus} />
              <Route path="/guide" component={Guide} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </div>
          </I18nextProvider>
        </Router>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
