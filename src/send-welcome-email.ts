import Mailjet from 'node-mailjet';

const mailjet = Mailjet.connect(process.env.MAILJET_KEY, process.env.MAILJET_SECRET);

export default (email: String): Promise<any> =>
  mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "sastraxi+maijet@gmail.com",
            "Name": "Cameron"
          },
          "To": [
            {
              "Email": email,
              "Name": "Cameron"
            }
          ],
          "Subject": "Welcome to the world of Hasura!",
          "TextPart": "When in doubt, push responsibility to the frontend and to your database.",
          "HTMLPart": "<h3>Some advice...</h3><p><b>When in doubt<b>, push responsibility to the <em>frontend</em> and to your <em>database</em></p>.",
          "CustomID": "hasura-webhook-ts"
        }
      ]
    });
