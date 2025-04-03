import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="We deliver innovative software solutions, specializing in web, mobile, AI, and enterprise applications, custom softwares. Our expert team ensures seamless digital experiences with a focus on quality, security, and performance."
      />

      {/* <p className="text-wrap max-w-screen-lg text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
        At <strong>Luminary Core AI</strong> we are committed to transforming ideas into powerful, scalable, and secure digital solutions. With a focus on delivering bug-free code, elite support, and future-ready applications, we help businesses thrive in an ever-changing technological landscape.
        <br />
        Our mission is to empower startups, SaaS companies, and enterprises with the tools they need to succeed. We specialize in web and mobile applications, AI solutions, and enterprise software development, ensuring that our clients receive the highest quality products tailored to their unique needs.
      </p> */}
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
