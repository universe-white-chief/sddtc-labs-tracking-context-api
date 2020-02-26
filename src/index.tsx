import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './pages/home';
import { TrackingAnalyzeConsumer } from './components/trackingAnalyzeConsumer';

ReactDOM.render(
  <div>
    <TrackingAnalyzeConsumer/>
    <Home/>
  </div>,
  document.getElementById('root'),
);
