import './App.css';
import PortfolioContainer from './Container/PortfolioContainer';
import ScrollToTop from './Container/ScrollToTop/ScrollToTop'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer/>
<PortfolioContainer/>
<ScrollToTop/>
    </div>
  );
}

export default App;
 