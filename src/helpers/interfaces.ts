import type { FC as ReactFC, PropsWithChildren } from 'react';

export type FC<Props = unknown> = ReactFC<PropsWithChildren<Props>>;
