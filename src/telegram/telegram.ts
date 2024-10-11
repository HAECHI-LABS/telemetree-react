import { TelegramWebAppData } from '../models';
import { Telegram } from './web-app';

/**
 * @returns TelegramWebAppData
 */
export const getTelegramWebAppData = (webApp: Telegram.WebApp) => {
  const initData = webApp.initDataUnsafe;
  return {
    ...initData,
    platform: webApp.platform,
  } satisfies TelegramWebAppData;
};
