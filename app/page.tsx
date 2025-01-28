"use client"

import { CourseModules } from "./components/course-modules"
import { FreeResources } from "./components/free-resources"
import { Hero } from "./components/hero"
import { PainPoints } from "./components/pain-points"
import { TestimonialOverlappingImage } from "./components/testimonial-overlapping-image"
import { WhyVetCPA } from "./components/why-vetcpa"
import { FAQs } from './components/faqs';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <PainPoints />
      <WhyVetCPA />
      <CourseModules />
      <FreeResources />
      <TestimonialOverlappingImage /> 
      <FAQs/>
    </div>
   
   
  )
}

