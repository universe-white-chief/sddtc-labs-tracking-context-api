import { TrackingAnalyzeEvent, withTrackingAnalyze } from '../../components/high-orders/withTrackingAnalyze';
import { PageHead } from '../../components/pageHead';
import * as React from 'react';

interface Props {
  eventQueue: TrackingAnalyzeEvent[];
}

export const Home = withTrackingAnalyze(({ eventQueue }: Props) => {
  eventQueue.push({ pageName: 'home' });
  return <PageHead title={'Home'}/>
});
