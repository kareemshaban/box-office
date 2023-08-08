import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Started from './pages/Started';
import Mainlayout from './components/MainLayout';
import Show from './components/Shows/Show';
import Actor from './components/Actors/Actor';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
