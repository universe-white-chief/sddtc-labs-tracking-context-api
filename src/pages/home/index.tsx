import * as React from 'react';
import { PageHead } from '../../components/pageHead';
import { withTrackingAnalyze } from '../../components/high-orders/withTrackingAnalyze';

const pageLoadEvent = { pageName: `pv-${new Date().getTime()}` };
export const SddtcHome = withTrackingAnalyze(() => <PageHead title={'Home'}/>, pageLoadEvent);
