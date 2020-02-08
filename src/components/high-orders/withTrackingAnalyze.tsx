import * as React from 'react';
import { Diff } from '../../types/typeHelper';

export interface TrackingAnalyzeEvent {
  pageName: string;
}

interface TrackingAnalyzeProps {
  eventQueue: TrackingAnalyzeEvent[];
}

export const TrackingAnalyzeContext = React.createContext({} as any);

export const withTrackingAnalyze = <Props extends TrackingAnalyzeProps>(
  Child: React.ComponentType<TrackingAnalyzeProps & Diff<Props, TrackingAnalyzeProps>>): React.ComponentType<Diff<Props, TrackingAnalyzeProps>> =>
  (props: Diff<Props, TrackingAnalyzeProps>) =>
    <Child eventQueue={React.useContext(TrackingAnalyzeContext)} {...props}/>;
