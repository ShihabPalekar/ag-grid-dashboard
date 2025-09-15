import { createRoot } from 'react-dom/client'

import './index.css'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { Dashboard } from './Dashboard';

createRoot(document.getElementById('root')!).render(
  <>
    <Dashboard />
  </>,
)
