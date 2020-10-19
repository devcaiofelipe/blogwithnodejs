import Mail from '../lib/Mail';


export default new class ConfirmationMail {
  get key() {
    return 'ConfirmationMail';
  }
  
  async handle({ data }) {
    const { user, teste } = data;
    console.log(user, teste)
    await Mail.sendMail({
      to: `${user.first_name} <${user.email}>`,
      subject: 'Confirmacao de usuario',
      template: 'confirmation',
      context: {
        user: user.first_name,
        link: `http://localhost:3333/user/confirm/${user.id}`
      }
    })
  };
};