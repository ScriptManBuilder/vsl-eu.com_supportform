import React, { useState, FormEvent } from 'react';
import CustomAlert from '../components/CustomAlert';
import {
  Container,
  FormWrapper,
  Header,
  IconWrapper,
  Icon,
  MainTitle,
  Subtitle,
  BadgesWrapper,
  Badge,
  SectionTitle,
  SectionDescription,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  Footer,
  CheckIcon,
} from './Home.styles';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    show: false,
    type: 'success',
    title: '',
    message: '',
  });

  const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN || '';
  const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID || '';

  const sendToTelegram = async (formData: {
    name: string;
    surname: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const text = `
🆕 New message from support form!

👤 Name: ${formData.name}
👤 Surname: ${formData.surname}
📧 Email: ${formData.email}
📋 Subject: ${formData.subject}
💬 Message: ${formData.message}
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      const data = await response.json();

      if (data.ok) {
        return { success: true };
      } else {
        throw new Error(data.description || 'Send error');
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return { success: false, error };
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await sendToTelegram({ name, surname, email, subject, message });

    setIsLoading(false);

    if (result.success) {
      setAlert({
        show: true,
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you for reaching out! We will get back to you shortly.',
      });
      // Очистка формы
      setName('');
      setSurname('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setAlert({
        show: true,
        type: 'error',
        title: 'Send Failed',
        message: 'Failed to send message. Please try again later or contact us directly.',
      });
    }
  };

  const closeAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <Container>
      <div style={{ width: '100%', maxWidth: '680px', boxSizing: 'border-box' }}>
        <Header>
          <IconWrapper>
            <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                fill="currentColor"
              />
            </Icon>
          </IconWrapper>
          <MainTitle>Hey there! We're here to help</MainTitle>
          <Subtitle>
            Got a question? Need assistance? Our friendly team is ready to jump in and help you out!
          </Subtitle>
          <BadgesWrapper>
            <Badge color="blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
              </svg>
              Quick responses
            </Badge>
            <Badge color="green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
              Always friendly
            </Badge>
          </BadgesWrapper>
        </Header>

        <FormWrapper>
          <SectionTitle>Help & Support</SectionTitle>
          <SectionDescription>
            We're here to help you. Send us a message and we'll respond as soon as possible. Please provide as much detail as you can so we can better identify and assist you. Include specific information about your situation or issue.
          </SectionDescription>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="surname">Surname</Label>
              <Input
                type="text"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Enter your surname"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What can we help you with?"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue or question..."
                required
              />
            </FormGroup>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </Form>

          <Footer>
            <CheckIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="currentColor"
              />
            </CheckIcon>
            Your information is safe with us
          </Footer>
        </FormWrapper>
      </div>

      {alert.show && (
        <CustomAlert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={closeAlert}
        />
      )}
    </Container>
  );
};

export default Home;
