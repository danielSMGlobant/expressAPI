import { IncomingWebhook } from '@slack/webhook'

const SLACK_WEBHOOK = String(process.env.SLACK_WEBHOOK)
const webHook = new IncomingWebhook(SLACK_WEBHOOK)
export const loggerStream: any = {
  write: async (message: any) => {
    await webHook.send({
      text: message
    })
  }
}
