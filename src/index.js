import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./components/Navbarre/NavBarre.css";
import "./pages/Home/Home.css";
import "./components/CV/Cv.css";
import "./components/work/Work.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/Skills/Skills.css";
import "./components/Contact/Contact.css";
import "./components/Proposition/Proposition.css";
import "./components/Scrollimage/ScrollImg.css";
import "./components/Caroussel/Caroussel.css";
import "./components/Footer/Footer.css";
import "./components/ScrollToTopButton/ScrollToTopButton.css";
import "./pages/MentionsLégales/MentionsLegales.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);