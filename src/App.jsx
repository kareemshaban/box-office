import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Started from './pages/Started';
import Mainlayout from './components/MainLayout';
import Show from './components/Shows/Show';
import Actor from './components/Actors/Actor';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Mainlayout}>
          <Route path="/" Component={Home} />
          <Route path="/stared" Component={Started} />
        </Route>
        <Route path="/show/:showId" Component={Show} />
        <Route path="/actor/:actorId" Component={Actor} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
