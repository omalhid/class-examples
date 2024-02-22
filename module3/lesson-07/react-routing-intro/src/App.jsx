import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';
import AddProjectPage from './pages/AddProjectPage';
import projectsData from './projects-data.json'
import './App.css';
 
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePageWithNavigate />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage projects={projectsData} />} />
        <Route path='/new' element={<AddProjectPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;