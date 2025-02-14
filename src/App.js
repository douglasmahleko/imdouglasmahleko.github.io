import './App.css';
import Header from './components/common/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/home';
import About from './components/about/about';
import CourseHome from './components/allCourses/courseHome';
import Team from './components/team/team';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/aboutMe" component={About} />
        <Route path = "/skills" component={CourseHome} />
        <Route path = "/employmentHistory" component={Team} />
        <Route path = "/projects" component={Blog} />
        <Route path = "/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
