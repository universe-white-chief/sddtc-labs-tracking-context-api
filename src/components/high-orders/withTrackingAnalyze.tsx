import * as React from 'react';
import { Diff } from '../../types/typeHelper';
import { useState } from '../../providers/trackingAnalyzeProvider';

export interface TrackingAnalyzeEvent {
  pageName: string;
}

interface TrackingAnalyzeProps {
  eventQueue: TrackingAnalyzeEvent[];
}

export const withTrackingAnalyze = <Props extends TrackingAnalyzeProps>(Child: any, event?: any) =>
  (props: Diff<Props, TrackingAnalyzeProps>) => {
    const state = useState();

    React.useEffect(() => {
      if (event) {
        console.log('push a new event:', event);
        state.pushEvent(event);
      }
    }, [event]);

    return <Child {...{ eventQueue: state.eventQueue }} {...props} />
  };
