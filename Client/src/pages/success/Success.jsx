import React from "react";
import SuccessStories from "./SuccessStories";
import SuccessStoriesCards from "./SuccessStoriesCards";
import ContactForm from "./ContactForm";
import FeatureImageSection from "./ClientLogos";
import SuccessStats from "./SuccessStats";

export default function Success() {
  return (
    <div>
      <SuccessStories />
      <SuccessStoriesCards />
      <SuccessStats />
      <FeatureImageSection />
      <ContactForm />
    </div>
  );
}
