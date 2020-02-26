import * as React from 'react';
import { Diff } from '../../types/typeHelper';
import { useTrackingAnalyzeState } from '../../providers/trackingAnalyzeProvider';

export interface TrackingAnalyzeEvent {
  pageName: string;
  pageType: 'PAGE_VIEW' | 'CLICK'
}

interface TrackingAnalyzeProps {
  eventQueue: TrackingAnalyzeEvent[];
}

interface PushEvent {
  data: TrackingAnalyzeEvent;
  type: 'PUSH_EVENT';
}

export const withTrackingAnalyze = <Props extends TrackingAnalyzeProps>(Child: any, event?: PushEvent) =>
  (props: Diff<Props, TrackingAnalyzeProps>) => {
    const state = useTrackingAnalyzeState();

    React.useEffect(() => {
      if (event) {
        state.pushEvent(event.data);
      }
    }, [event]);

    return <Child {...{ eventQueue: state.eventQueue }} {...props} />
  };
