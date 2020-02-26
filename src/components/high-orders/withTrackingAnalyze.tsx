import * as React from 'react';
import { Diff } from '../../types/typeHelper';
import { TrackingAnalyzeContext } from '../../providers/trackingAnalyzeProvider';

export interface TrackingAnalyzeEvent {
  pageName: string;
}

interface TrackingAnalyzeProps {
  eventQueue: TrackingAnalyzeEvent[];
  setEvent: (eventQueue: TrackingAnalyzeEvent[]) => void;
}

const fetchProps = <Props extends TrackingAnalyzeProps>(keys: [keyof Props]) => {
  const context = React.useContext(TrackingAnalyzeContext);
  return Object.assign({}, ...keys.map(k => ({ [k]: context[k] })));
};

export const withTrackingAnalyze = <Props extends TrackingAnalyzeProps>(Child: any, ...key: any) =>
  (props: Diff<Props, TrackingAnalyzeProps>) => {
    const trackingProps = fetchProps(key);
    return <Child {...trackingProps} {...props} />
  };
