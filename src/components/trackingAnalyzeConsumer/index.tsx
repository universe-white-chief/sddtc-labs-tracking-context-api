import * as React from 'react';
import { TrackingAnalyzeEvent, withTrackingAnalyze } from '../high-orders/withTrackingAnalyze';

interface Props {
  eventQueue: TrackingAnalyzeEvent[];
}

export const TrackingAnalyzeConsumer = withTrackingAnalyze(({ eventQueue }: Props) => {
  React.useEffect(() => {
    console.log('eventQueue:', eventQueue);
  });
  return null;
}, 'eventQueue');
