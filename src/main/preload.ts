import { contextBridge, ipcRenderer } from 'electron';

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('control', {
    openWindow(url: string) {
        ipcRenderer.invoke('control-openWindow', url);
    }
})
