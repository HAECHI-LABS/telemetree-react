'use client';

import { Logger, LogLevel } from './utils/logger';

Logger.setLevel(
  import.meta.env.MODE === 'production' ? LogLevel.INFO : LogLevel.DEBUG,
);

export { useTWAEvent } from './hooks';
export {
  type TwaAnalyticsProviderProps,
  type TwaAnalyticsProviderOptions,
  TwaAnalyticsProvider,
} from './components';
export {
  type BaseEvent,
  type EventDetails,
  type EventUserDetails,
} from './types/event';
