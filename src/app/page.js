"use client"
import LayoutOne from "@/components/Layout/LayoutOne";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import AboutOne from "@/components/Sections/About/AboutOne";
import BenefitOne from "@/components/Sections/Benefit/BenefitOne";
import benefitData from "@/data/benefit/data.json"
import SolutionOne from "@/components/Sections/Solution/SolutionOne";
import serviceData from "@/data/service/data.json"
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json"
import BannerOne from "@/components/Sections/Banner/BannerOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import testimonialData from "@/data/testimonial/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import SliderTwo from "@/components/Sections/Slider/SliderTwo";
import allCss from "../styles/components/all.css"
import Head from 'next/head';

export default function Home() {
 
  return (
    <>
    
    <Head>
          {/* Link to local Font Awesome CSS */}
          <link rel="stylesheet" href={allCss} />
          <link rel="icon" href="/favicon.ico" />

        </Head>
      <LayoutOne className="-style-1 font-sans">
        <SliderTwo className="-style-1 lg:py-[60px] py-0 " />
        <AboutOne />
        <BenefitOne classname="lg:mt-20 sm:mt-14 mt-10" data={benefitData} start={0} limit={4} />
        <SolutionOne data={serviceData} start={0} limit={6} />
        {/* <ServiceOne data={serviceData} start={6} limit={16} /> */}
        {/* <CaseStudyOne classname={'bg-linear lg:mt-20 sm:mt-14 mt-10 lg:py-20 sm:py-14 py-10'} data={caseStudyData} start={0} limit={5} /> */}
        {/* <BannerOne /> */}
        {/* <BrandOne classname={'bg-white lg:py-20 md:py-14 py-10'} /> */}
        {/* <TestimonialOne data={testimonialData} /> */}
        <ContactOne classname={'bg-linear-blue'} />
      </LayoutOne>
    </>
  );
}
