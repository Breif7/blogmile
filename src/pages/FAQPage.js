import React from 'react';
import FAQItem from '../components/FAQItem';

function FAQPage() {
  const faqs = [
    {
      id: 1,
      question: '¿Cuál es la pregunta frecuente 1?',
      answer: 'Esta es la respuesta a la pregunta frecuente 1.',
    },
    {
      id: 2,
      question: '¿Cuál es la pregunta frecuente 2?',
      answer: 'Esta es la respuesta a la pregunta frecuente 2.',
    },
    // Agrega más preguntas frecuentes aquí...
  ];

  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      {faqs.map(faq => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQPage;
