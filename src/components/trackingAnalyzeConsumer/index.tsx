import * as React from 'react';
import { TrackingAnalyzeEvent, withTrackingAnalyze } from '../high-orders/withTrackingAnalyze';

interface Props {
  eventQueue: TrackingAnalyzeEvent[];
}

export const TrackingAnalyzeConsumer = withTrackingAnalyze(({ eventQueue }: Props) => {
  React.useEffect(() => {
    eventQueue.every((e) => console.log('consume event:', e));
  });
  return null;
});
