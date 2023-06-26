import { IncomingWebhook } from '@slack/webhook'

const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK as string
const webHook = new IncomingWebhook(SLACK_WEBHOOK)
export const loggerStream: any = {
  write: async (message: string) => {
    await webHook.send({
      text: message,
      attachments: [
        {
          // color: '#36a64f'
          // pretext: 'Pretexto',
          // author_name: 'Daniel S Méndez',
          // title: 'Reporte de error',
          // text: message
        }
      ]
    })
  }
}
