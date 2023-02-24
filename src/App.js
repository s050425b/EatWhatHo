import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigator } from './Components/Navigator/Navigator';
import { SearchMealByIngred } from './Pages/SearchMealByIngred/SearchMealByIngred';
import { MealDetailPage } from './Pages/MealDetailPage/MealDetailPage';

function App() {
  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path="/" element={<SearchMealByIngred />} />
        <Route path="/meal" element={<MealDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
