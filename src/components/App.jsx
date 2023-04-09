import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import EventsPage from 'pages/EventsPage';
import EventsSubpage from 'pages/EventsSubpage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="events" element={<EventsPage />}>
        <Route path=":id" element={<EventsSubpage />} />
      </Route>
    </Routes>
  );
};

export default App;
