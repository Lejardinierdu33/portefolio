import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import MentionsLegales from "./pages/MentionsLégales/MentionsLegales";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/mentions_legales' element={<MentionsLegales />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
