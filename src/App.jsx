import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Started from './pages/Started';
import Mainlayout from './components/MainLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Mainlayout}>
          <Route path="/" Component={Home} />
          <Route path="/stared" Component={Started} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
