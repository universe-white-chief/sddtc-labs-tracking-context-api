import * as React from 'react';
import { TrackingAnalyzeEvent } from '../components/high-orders/withTrackingAnalyze';

export interface TrackingAnalyzeState {
  eventQueue: TrackingAnalyzeEvent[];
}

type Action = 'PUSH_EVENT';

interface TrackingAnalyzeAction {
  type: Action;
  event: TrackingAnalyzeEvent;
}

const initial: TrackingAnalyzeState = {
  eventQueue: []
};

const reducer = (state: TrackingAnalyzeState, action: TrackingAnalyzeAction) => {
  switch (action.type) {
    case 'PUSH_EVENT':
      return { eventQueue: state.eventQueue.concat(action.event) };
    default:
      return state;
  }
};

export const TrackingAnalyzeContext = React.createContext(initial as any);

export const TrackingProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(reducer, initial);

  return (
    <TrackingAnalyzeContext.Provider value={[state, dispatch]}>
      {children}
    </TrackingAnalyzeContext.Provider>
  );
};

export const useState = () => {
  const [state, dispatch] = React.useContext(TrackingAnalyzeContext);
  const pushEvent = (event: TrackingAnalyzeEvent) => {
    dispatch({ type: 'PUSH_EVENT', event });
  };

  return { pushEvent, eventQueue: state.eventQueue }
};
