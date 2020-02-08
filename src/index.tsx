import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TrackingAnalyzeSender } from './components/trackingAnalyzeSender';
import { Home } from './pages/home';
import { TrackingAnalyzeContext, TrackingAnalyzeEvent } from './components/high-orders/withTrackingAnalyze';

const initTrackingAnalyzeEventQueue: TrackingAnalyzeEvent[] = [];

ReactDOM.render(
  <TrackingAnalyzeContext.Provider value={initTrackingAnalyzeEventQueue}>
    <TrackingAnalyzeSender/>
    <Home/>
  </TrackingAnalyzeContext.Provider>,
  document.getElementById('root')
);
