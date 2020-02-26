import * as React from 'react';
import { TrackingAnalyzeEvent, withTrackingAnalyze } from '../high-orders/withTrackingAnalyze';
import { useTrackingAnalyzeState } from '../../providers/trackingAnalyzeProvider';

interface Props {
  eventQueue: TrackingAnalyzeEvent[];
}

export const TrackingAnalyzeConsumer = withTrackingAnalyze(({ eventQueue }: Props) => {
  const state = useTrackingAnalyzeState();
  React.useEffect(() => {
    if (eventQueue.length > 0) {
      eventQueue.forEach((e) => {
        console.log('start consume event...', e);
        state.consumeEvent(1);
      });
    }
  });
  return <div/>;
});
