import * as React from 'react';
import { PageHead } from '../../components/pageHead';
import { TrackingAnalyzeEvent, withTrackingAnalyze } from '../../components/high-orders/withTrackingAnalyze';
import { useTrackingAnalyzeState } from '../../providers/trackingAnalyzeProvider';

const pageLoadEvent: TrackingAnalyzeEvent = { pageName: `pv-${new Date().getTime()}`, pageType: 'PAGE_VIEW' };
export const SddtcHome = withTrackingAnalyze(() => {
    const state = useTrackingAnalyzeState();
    const pushClickEvent = () => {
      const clickEvent: TrackingAnalyzeEvent = { pageName: `click-${new Date().getTime()}`, pageType: 'CLICK' };
      state.pushEvent(clickEvent);
    };

    return <div>
      <PageHead title={'Home'}/>
      <button onClick={pushClickEvent}>click me</button>
    </div>
  },
  { type: 'PUSH_EVENT', data: pageLoadEvent });
