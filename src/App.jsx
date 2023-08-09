import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Started from './pages/Started';
import Mainlayout from './components/MainLayout';
import Show from './components/Shows/Show';
import Actor from './components/Actors/Actor';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalTheme } from './theme';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
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
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
