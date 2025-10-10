import React from 'react'
import InvestorHero from './investers/InvestorHero'
import InvestorOverview from './investers/InvestorOverview'
import FinancialHighlights from './investers/FinancialHighlights'
import GovernanceSection from './investers/GovernanceSection'
import ReportsAndFilings from './investers/ReportsAndFilings'
import InvestorContact from './investers/InvestorContact'
import ContactForm from './success/ContactForm'
import InvestersPanel from './investers/InvestersPanel'

function Investers() {
  return (
          <div className="pt-21 bg-white min-h-screen">

       {/* <InvestorHero />
      <InvestorOverview />
      <FinancialHighlights />
      <GovernanceSection />
      <ReportsAndFilings />
      {/* <InvestorContact />
       */}
    {/* <ContactForm/> */} 
    <InvestersPanel/>
    </div>
  )
}

export default Investers
