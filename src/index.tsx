import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import FooterComponent from './Components/FooterComponent/FooterComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <div style={{ width: '73%', margin: '0 auto' }}>
      <App />
    </div>
    <div style={{width: '100%', backgroundColor: '#00395D'}}>
      <FooterComponent />
    </div>
  </BrowserRouter>
);

