import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import AddUsersPage from 'pages/AddUsersPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="add" element={<AddUsersPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
