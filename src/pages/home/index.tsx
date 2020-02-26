import * as React from 'react';
import { TrackingAnalyzeEvent, withTrackingAnalyze } from '../../components/high-orders/withTrackingAnalyze';
import { PageHead } from '../../components/pageHead';

interface Props {
  setEvent: (eventQueue: TrackingAnalyzeEvent[]) => TrackingAnalyzeEvent[];
  eventQueue: TrackingAnalyzeEvent[];
}

export const Home = withTrackingAnalyze(({ setEvent, eventQueue }: Props) => {
  setEvent({ ...eventQueue, ...{ pageName: 'home' } });
  console.log('set event success.');

  return <PageHead title={'Home'}/>;
}, 'setEvent', 'eventQueue');
