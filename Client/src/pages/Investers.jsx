import React from 'react'
import InvestorHero from './investers/InvestorHero'
import InvestorOverview from './investers/InvestorOverview'
import FinancialHighlights from './investers/FinancialHighlights'
import GovernanceSection from './investers/GovernanceSection'
import ReportsAndFilings from './investers/ReportsAndFilings'
import InvestorContact from './investers/InvestorContact'
import ContactForm from './success/ContactForm'

function Investers() {
  return (
    <div>
       <InvestorHero />
      <InvestorOverview />
      <FinancialHighlights />
      <GovernanceSection />
      <ReportsAndFilings />
      {/* <InvestorContact />
       */}
    <ContactForm/>
    </div>
  )
}

export default Investers
