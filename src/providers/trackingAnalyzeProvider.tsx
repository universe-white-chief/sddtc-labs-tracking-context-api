import * as React from 'react';
import { TrackingAnalyzeEvent } from '../components/high-orders/withTrackingAnalyze';

interface TrackingAnalyzeState {
  setEvent: (eventQueue: TrackingAnalyzeEvent[]) => TrackingAnalyzeEvent[];
  eventQueue: TrackingAnalyzeEvent[];
}

const defaultValue: TrackingAnalyzeState = {
  setEvent: (eventQueue: TrackingAnalyzeEvent[]) => eventQueue,
  eventQueue: []
};

export const TrackingAnalyzeContext = React.createContext(defaultValue as any);


