export type FaqType = {
  question: string
  answer: string
}

export const faqData: FaqType[] = [
  {
    question: 'Can I send bulk messages to WhatsApp groups?',
    answer: 'Yes, our broadcasting tool allows you to send bulk and personalized messages directly to WhatsApp groups.',
  },
  {
    question: 'Can I schedule messages in advance?',
    answer: 'Absolutely! You can schedule messages to be sent at specific times using the broadcasting scheduler.',
  },
  {
    question: 'How does the AI-powered template feature work?',
    answer: 'Our AI analyzes your needs and generates message templates automatically, or you can choose from ready-to-use default templates.',
  },
  {
    question: 'Can I import and manage contacts easily?',
    answer: 'Yes, you can import contacts from CSV or Google Sheets, label them, and integrate with CRM platforms for streamlined management.',
  },
  {
    question: 'Is there a way to validate WhatsApp numbers before messaging?',
    answer: 'Yes, the WhatsApp number validator checks the authenticity of numbers before you send messages.',
  },
  {
    question: 'Does the system support media and file attachments?',
    answer: 'Yes, you can send images, videos, documents, emojis, and GIFs as part of your messages.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Your privacy is our priority. All contacts and broadcasts are stored securely with strong privacy controls in place.',
  },
]
