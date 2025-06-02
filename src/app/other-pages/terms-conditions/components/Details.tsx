import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const Details = () => {
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="pt-4 pt-lg-0">
        <Row>
          <Col xl={8} className="mx-auto">
            <div className="text-center mb-6">
              <h1>Terms &amp; Conditions</h1>
              <p className="lead mb-0">Last update on May 2025</p>
            </div>

            <h6 className="mb-3">Welcome</h6>
            <p>
              Welcome to <strong>WABlasters!</strong> Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using
              our services, website, and applications (collectively, the “Service”) operated by WABlasters.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not
              access the Service.
            </p>

            <h6 className="mb-3 mt-5">1. Use of Service</h6>
            <p>
              WABlasters is a tool designed to assist businesses in communicating via WhatsApp using automation, broadcasting, CRM integration, and
              AI-powered messaging.
            </p>
            <p>
              You agree to use the Service only for lawful purposes and in compliance with all applicable local, national, and international laws and
              regulations. You are responsible for the accuracy and legality of all data and messages transmitted using WABlasters.
            </p>

            <h6 className="mb-3 mt-5">2. Account Registration</h6>
            <ul>
              <li>You may be required to register for an account to access certain features.</li>
              <li>You must provide accurate and complete information and keep your account information updated.</li>
              <li>
                You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your
                account.
              </li>
            </ul>

            <h6 className="mb-3 mt-5">3. Subscription and Payment</h6>
            <ul>
              <li>WABlasters offers Free, Premium, and Enterprise plans with different features and pricing.</li>
              <li>Premium plans are billed monthly or annually as selected at checkout.</li>
              <li>All payments are non-refundable except as required by applicable law.</li>
            </ul>

            <h6 className="mb-3 mt-5">4. Messaging Compliance</h6>
            <ul>
              <li>You must comply with WhatsApp’s Business Policy and Terms of Service when using the platform via WABlasters.</li>
              <li>Sending spam, unsolicited messages, or violating user privacy may result in account suspension or termination.</li>
              <li>You are solely responsible for obtaining consent from your recipients before sending messages.</li>
            </ul>

            <h6 className="mb-3 mt-5">5. Data Privacy &amp; Security</h6>
            <ul>
              <li>WABlasters uses industry-standard security practices to protect your data.</li>
              <li>We do not sell your contact data or broadcast content to third parties.</li>
              <li>By using the Service, you consent to our Privacy Policy regarding data handling.</li>
            </ul>

            <h6 className="mb-3 mt-5">6. Limitations and Restrictions</h6>
            <ul>
              <li>You may not misuse the Service by attempting to reverse-engineer, disrupt, or hack the platform.</li>
              <li>WABlasters reserves the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>

            <h6 className="mb-3 mt-5">7. Intellectual Property</h6>
            <ul>
              <li>
                All content, software, branding, and technology used in WABlasters are the intellectual property of WABlasters and its licensors.
              </li>
              <li>You may not use our branding or copyrighted content without prior written permission.</li>
            </ul>

            <h6 className="mb-3 mt-5">8. Service Availability</h6>
            <p>We may occasionally perform maintenance or updates which may affect service availability.</p>

            <h6 className="mb-3 mt-5">9. Changes to Terms</h6>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page, and your continued use of the Service
              constitutes acceptance of the updated Terms.
            </p>

            <h6 className="mb-3 mt-5">10. Contact Us</h6>
            <p>
              📧 Email: <a href="mailto:support@wablasters.com">support@wablasters.com</a>
              <br />
              🌐 Website:{' '}
              <a href="https://www.wablasters.com" target="_blank" rel="noopener noreferrer">
                www.wablasters.com
              </a>
            </p>

            <ul className="list-group list-group-borderless mt-5">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Receive instant notifications in WABlasters whenever there&apos;s an update or action in Slack
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Effortlessly create, assign, and manage tasks in both platforms, ensuring nothing falls through the cracks.
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsArrowRight className="me-2" />
                Keep all your data consistent and up to date, whether it&apos;s customer information, project details, or important messages.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Details
