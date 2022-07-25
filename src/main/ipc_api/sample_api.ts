import IpcMainEvent = Electron.IpcMainEvent;

export const example_api = async (event:IpcMainEvent, arg:string) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply('ipc-example', msgTemplate('pong'));
};
