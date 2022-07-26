import { BrowserWindow } from 'electron';
import { Channels } from 'main/preload';

declare global {
  interface Window {
    control:{
        openWindow(url: string): Promise<BrowserWindow>;
    }
  }
}

export {};
