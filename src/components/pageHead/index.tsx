import * as React from 'react';

interface Props {
  title: string;
}

export const PageHead: React.ComponentType<Props> = ({ title }: Props) => <div>{title}</div>;
