import { Client, decryptMedia, Message } from "@open-wa/wa-automate";

export = {
    name:"testButton",
    description: "Generate Sticker From Image",
    execute: async (Message: Message, args: string[],client:Client) => {

        client.sendButtons(Message.chatId,"test",[{id:"test",text:"test"}])

    }
}