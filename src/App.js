import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigator } from './Components/Navigator/Navigator';
import { SearchMealByIngred } from './Pages/SearchMealByIngred/SearchMealByIngred';
import { MealDetailPage } from './Pages/MealDetailPage/MealDetailPage';
import { Loading } from './Components/Loading/Loading';
import { useSelector } from 'react-redux';
import { selectIsLoading } from './Global_state/Loading/LoadingSelector';

function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
      <Router>
        <div className="App">
          <Navigator />
          <div className="bodyDiv">
            <Routes>
              <Route path="/" element={<SearchMealByIngred />} />
              <Route path="/meal" element={<MealDetailPage />} />
            </Routes>
          </div>
          <Loading isLoading={isLoading}/>
        </div>
      </Router>
  );
}

export default App;
