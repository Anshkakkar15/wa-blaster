import React from 'react'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import { Container } from 'react-bootstrap'
import CTA from '../terms-conditions/components/CTA'
import PrivacyDetails from './PrivacyDetails'

const PrivacyPolicyPage = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'mx-auto',
        }}
        showSignUp
        showBuyNow
      />
      <main>
        <PrivacyDetails />
        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default PrivacyPolicyPage
