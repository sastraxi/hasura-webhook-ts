import Mailjet from 'node-mailjet';

const mailjet = Mailjet.connect(process.env.MAILJET_KEY, process.env.MAILJET_SECRET);

export default (email: String): Promise<any> => {

};
