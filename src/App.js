import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppTemplate } from './components/template/AppTemplate';
import ListAlgorithmPage from './pages/ListAlgorithmPage';
import WorkspacePage from './pages/WorkspacePage';

const App = () => {
  return (
    <Router>
      <AppTemplate>
        <Route path="/" exact component={ListAlgorithmPage}/>
        <Route path="/workspace" exact component={WorkspacePage}/>
      </AppTemplate>
    </Router>
  );
};

export default App;
