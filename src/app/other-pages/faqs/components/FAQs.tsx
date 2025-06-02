'use client'

import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const FAQs = () => {
  const { t } = useTranslation()
  const faqData = t('faq', { returnObjects: true }) as { question: string; answer: string }[]

  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col md={10} className="mx-auto">
            <Accordion className="accordion-icon accordion-border" defaultActiveKey="0">
              {faqData.map((item, idx) => (
                <AccordionItem className={idx === 0 ? 'mb-2' : 'mb-3'} key={idx} eventKey={idx.toString()}>
                  <AccordionHeader as="p" className="font-base mb-3">
                    <span className="fw-semibold">{item.question}</span>
                  </AccordionHeader>
                  <AccordionBody>{item.answer}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQs
