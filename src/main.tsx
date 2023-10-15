
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from "react-redux";
import store from "./store/index.ts";

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );}

