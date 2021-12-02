import {
    create,
    Client,
    Message,
} from '@open-wa/wa-automate';

import * as Handler from './util/handler';
import settings from './util/settings';
create({
    authTimeout:0,
    logConsole: false,
    multiDevice: settings.MultipleDevice,
}).then(client => start(client));

function start(client: Client) {
    Handler.LoadComamnds()
    client.onAnyMessage(async (message: Message) => {
        Handler.Handle(message,client);
    });
}