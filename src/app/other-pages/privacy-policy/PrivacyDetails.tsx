import { Col, Container, Row } from 'react-bootstrap'

const PrivacyDetails = () => {
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="pt-4 pt-lg-0">
        <Row>
          <Col xl={8} className="mx-auto">
            <div className="text-center mb-6">
              <h1>Privacy &amp; Policy</h1>
              <p className="lead mb-0">Last update on May 2025</p>
            </div>
            <h6 className="mb-3 mt-5">1. Information We Collect</h6>
            <p>We collect the following types of information:</p>

            <h6 className="mb-3 mt-4">1.1 Personal Information</h6>
            <ul>
              <li>Name, email address, phone number, billing address.</li>
              <li>Login credentials and account information.</li>
            </ul>

            <h6 className="mb-3 mt-4">1.2 Business Data</h6>
            <ul>
              <li>Contact lists you upload (e.g., phone numbers, labels).</li>
              <li>Messages and templates created for WhatsApp communication.</li>
              <li>Chat logs and campaign analytics (optional).</li>
            </ul>

            <h6 className="mb-3 mt-4">1.3 Technical & Usage Data</h6>
            <ul>
              <li>IP address, browser type, device information.</li>
              <li>Usage statistics, access times, pages viewed.</li>
            </ul>

            <h6 className="mb-3 mt-5">2. How We Use Your Information</h6>
            <ul>
              <li>Provide and maintain the Service.</li>
              <li>Send system updates, account notifications, or support communications.</li>
              <li>Improve product functionality and user experience.</li>
              <li>Ensure compliance with legal and policy obligations.</li>
              <li>Prevent fraud, abuse, and security threats.</li>
            </ul>
            <p>We do not sell or share your contact lists or broadcast data with third parties.</p>

            <h6 className="mb-3 mt-5">3. Data Sharing & Disclosure</h6>
            <ul>
              <li>Trusted third-party service providers (e.g., payment processors, analytics services).</li>
              <li>Legal authorities, if required to comply with a lawful request.</li>
              <li>In the event of a merger, acquisition, or business restructuring (you will be notified).</li>
            </ul>
            <p>We ensure all third parties adhere to data protection and confidentiality agreements.</p>

            <h6 className="mb-3 mt-5">4. Data Retention</h6>
            <ul>
              <li>Account data: retained while your account is active.</li>
              <li>Contact lists & campaign data: deleted upon request or account termination.</li>
              <li>Analytics data: anonymized and retained for internal improvement.</li>
            </ul>

            <h6 className="mb-3 mt-5">5. Data Security</h6>
            <p>We implement industry-standard security measures, including:</p>
            <ul>
              <li>Encryption of data in transit and at rest.</li>
              <li>Role-based access controls.</li>
              <li>Secure servers and firewalls.</li>
            </ul>
            <p>However, no online platform can guarantee absolute security. Users are responsible for safeguarding their account credentials.</p>

            <h6 className="mb-3 mt-5">6. Your Rights</h6>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information.</li>
              <li>Export your data.</li>
              <li>Object to data processing or request restriction.</li>
              <li>Withdraw consent at any time.</li>
            </ul>

            <h6 className="mb-3 mt-5">7. Cookies & Tracking Technologies</h6>
            <p>Our website may use cookies to:</p>
            <ul>
              <li>Remember user preferences.</li>
              <li>Track user behavior for analytics.</li>
              <li>Improve website performance.</li>
            </ul>
            <p>You can control cookie preferences in your browser settings.</p>

            <h6 className="mb-3 mt-5">8. Third-Party Links</h6>
            <p>
              Our platform may contain links to external websites. We are not responsible for their privacy practices. Please review their policies
              before sharing personal data.
            </p>

            <h6 className="mb-3 mt-5">9. Updates to This Policy</h6>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use
              of the Service indicates your acceptance of the revised policy.
            </p>

            <h6 className="mb-3 mt-5">10. Contact Us</h6>
            <p>If you have questions or concerns about this Privacy Policy, please contact:</p>
            <p>
              📧 Email: <a href="mailto:support@wablasters.com">support@wablasters.com</a>
              <br />
              🌐 Website:{' '}
              <a href="https://www.wablasters.com" target="_blank" rel="noopener noreferrer">
                www.wablasters.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PrivacyDetails
