import path from 'path';
import {app, BrowserWindow, IpcMainInvokeEvent} from 'electron';
import { resolveHtmlPath } from '../util';

export const useOpenWindow = async (_: IpcMainInvokeEvent, url: string) => {
    let win:BrowserWindow | null = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: app.isPackaged
                ? path.join(__dirname, '../preload.js')
                : path.join(__dirname, '../../../.erb/dll/preload.js'),
        }
    });
    win.on('closed', () => {
        win = null;
    });
    win.loadURL(resolveHtmlPath('index.html') + "#" + url);

    return win;
}
