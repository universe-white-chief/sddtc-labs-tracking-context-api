import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SddtcHome } from './pages/home';
import { TrackingProvider } from './providers/trackingAnalyzeProvider';
import { TrackingAnalyzeConsumer } from './components/trackingAnalyzeConsumer';

ReactDOM.render(
  <TrackingProvider>
    <SddtcHome/>
    <TrackingAnalyzeConsumer/>
  </TrackingProvider>,
  document.getElementById('root'),
);
