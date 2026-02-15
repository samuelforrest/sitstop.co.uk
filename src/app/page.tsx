import { Button } from "@/components/ui/button";
import { ImageAutoSlider } from "@/components/ui/HeroImageSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavigationBar } from "@/components/NavigationBar";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#faef50] focus:text-black focus:font-bold focus:rounded"
      >
        Skip to main content
      </a>
      <NavigationBar />
      <div className="w-full flex justify-center px-5 md:px-10 lg:px-16 xl:px-20 my-8 pt-15">
        <main id="main-content" className="w-full max-w-7xl">
          <section
            id="hero"
            className="w-full text-center space-y-6 justify-center mb-6 md:mb-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold p-4 md:p-6">
              SIT STOP
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Making life a little easier for those who need to sit down.
            </p>
          </section>

          <section id="hero-images" className="w-full mb-10 md:mb-5">
            <ImageAutoSlider />
          </section>

          <section id="action-buttons" className="w-full mb-30 md:mb-35">
            <div className="items-center justify-center flex gap-3 md:gap-5">
              <Link href="/locations">
                <Button className="hover:cursor-pointer md:h-11 md:w-40">
                  View all locations
                </Button>
              </Link>
              {/* need to replace with acc link*/}
              <a href="#contact">
                <Button
                  variant="secondary"
                  className="hover:cursor-pointer bg-gray-200 md:h-11 md:w-40"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </section>

          <section id="about" className="w-full mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
              About Us
            </h2>
            <hr className="w-full mb-8 border-t-2"></hr>
            <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
              <p>
                <b>SIT STOP</b> is an initiative that was started in 2006 by an
                independent community group in the London Borough of Richmond
                upon Thames. At <b>SIT STOP</b> our purpose is to make life just
                a little easier for those in need of somewhere to sit down.
              </p>

              <p>
                These individuals may be elderly, pregnant, disabled or unwell;
                they may have tired feet or be laden down with shopping or they
                may just need somewhere to wait for a few minutes. It does not
                matter what drives the need.
              </p>
              <p>
                In a shop or business displaying the <b>SIT STOP</b> logo, it is
                absolutely fine to ask for a seat or to use one if it is
                available. It is not necessary to be a customer of the store or
                to be using the services provided there.
              </p>
              <p>
                We continue to develop the <b>SIT STOP</b> campaign as we learn
                from our experience and listen to the input from supporting
                organisations.
              </p>
              <p>That&apos;s all it is!</p>
            </div>
          </section>

          <section id="history" className="w-full mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
              SIT STOP&apos;s History
            </h2>
            <hr className="w-full mb-8 border-t-2"></hr>
            <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
              <p>
                The <b>SIT STOP</b> campaign started in Richmond in 2005. A
                group of individuals led by three{" "}
                <a
                  href="https://www.thersa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline underline-offset-2"
                >
                  Royal Society of Arts (RSA)
                </a>{" "}
                fellows met to discuss local issues as part of the RSA&apos;s
                Coffeehouse Challenge process. Meetings like these took place
                countrywide and were intended to bring focus to the resolution
                of local issues. In Richmond &apos;Access for All&apos; became
                our central theme.
              </p>
              <p>
                With the help of Richmond Advice and Information on Disability
                (RAID) and a number of other local agencies and businesses, plus
                supporting funds from the RSA, Richmond Council and{" "}
                <a
                  href="https://www.starbucks.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline underline-offset-2"
                >
                  Starbucks
                </a>
                , the idea took shape and grew. In Spring 2007 the project -
                then focused around specially designed chairs - was showcased
                around London.
              </p>
              <p>
                The scheme was launched in Twickenham with the support of{" "}
                <a
                  href="https://www.richmond.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline underline-offset-2"
                >
                  Richmond Council
                </a>
                . Very ethusiastic commments about the idea were received and no
                major issues were identified by the participating businesses.
              </p>
              <p>
                We continue to expand the number of participating organizations
                - not only in the Borough of Richmond upon Thames but also
                beyond. For example, the{" "}
                <a
                  href="https://www.rbht.nhs.uk/patients-visitors/for-patients/access-and-support-for-disabled-patients-and-visitors/sit-stop-chairs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline underline-offset-2"
                >
                  Royal Brompton Hospital
                </a>{" "}
                have set up their own <b>SIT STOP</b> initiative.
              </p>
            </div>
          </section>

          <section id="logo" className="w-full mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
              Logo
            </h2>
            <hr className="w-full mb-8 border-t-2"></hr>
            <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
              <p>
                If you see the following logo in the window of a shop, it means
                that they have partnered with <b>SIT STOP</b>.
              </p>
              <p>Feel free to ask for their seat.</p>
              <div className="flex justify-center md:justify-start mt-8">
                <img
                  src="sitstop-logo.jpg"
                  alt="SIT STOP logo - yellow circular sticker"
                  className="w-64 h-auto rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section id="join" className="w-full mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
              Joining SIT STOP
            </h2>
            <hr className="w-full mb-8 border-t-2"></hr>

            <div className="space-y-8 text-base md:text-lg lg:text-xl leading-relaxed">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Businesses
                </h3>
                <div className="space-y-4">
                  <p>
                    If you would like to offer a seat to those in need we would
                    be very pleased to help you become a participant in the
                    scheme. You do not have to be trading in Richmond Borough to
                    participate.
                  </p>
                  <p>
                    Contact us and we will send you a pack which includes SIT
                    STOP logo window and wall stickers, information leaflets
                    should you wish to place them near the seat you provide and
                    contact information for further help in implementing the
                    scheme. Participating in <b>SIT STOP</b> does not require
                    the purchase of any special equipment. Any chair meets the
                    need!
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Volunteers
                </h3>
                <p>
                  If you are a volunteer and would like to help spread the{" "}
                  <b>SIT STOP</b> campaign in Richmond or in another location we
                  would be very pleased to hear from you. Please contact us.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Local Councils
                </h3>
                <p>
                  If you are a local council and would like to roll out the
                  scheme in your area do contact us we are pleased to share our
                  experiences and provide assistance.
                </p>
              </div>
            </div>
          </section>

          <section id="faqs" className="w-full mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <hr className="w-full mb-8 border-t-2"></hr>
            <Accordion
              type="single"
              collapsible
              className="w-full mt-10"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  If my business joins the SIT STOP campaign do we have to
                  provide a special/designated chair?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    No - any chair in the part of your business that is open to
                    the public is fine. Equally, if a chair is willingly
                    provided on request, that is an acceptable alternative.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  Can I designate a particular chair if I wish to?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    Yes, we would be delighted to supply a <b>SIT STOP</b>{" "}
                    sticker for the chair if you wish. Please do contact us to
                    order your sticker. Details are on the contacts page.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  Is there a particular type of chair which is best for SIT
                  STOP’s purpose?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    Yes, a chair which has a relatively high seat and ideally
                    arms is the easiest for most people with mobility problems
                    to use. However any stable chair is welcome to someone who
                    needs to sit down.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  Does the chair have to be in a particular part of my premises?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    No, anywhere in the public area that is convenient to you,
                    and accessible to the user.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  What do I do if someone abuses our hospitality by behaving
                  anti-socially?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    Any premises open to the public will from time to time have
                    incidents of this type. Evidence from our pilot project is
                    that participating in <b>SIT STOP</b> does not increase the
                    frequency of such events. When they occur they should be
                    addressed by staff in the way they have been trained.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  Am I required to provide additional first aid training to
                  staff because I participate in Sit Stop?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    No, there is no incremental obligation beyond that which
                    your business already has.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  As a business providing a seat as part of the SIT STOP
                  campaign do we get paid?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>No. The campaign is entirely voluntary throughout.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  I know of a business which provides seating but they are not
                  SIT STOP participants. Should I say something to them?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    We would be very pleased to know of public spirited
                    businesses such as these! Displaying the <b>SIT STOP</b>{" "}
                    logo helps the public, builds awareness of <b>SIT STOP</b>{" "}
                    and assists recruitment of additional participant
                    businesses.
                  </p>
                  <p>
                    By all means approach them to display the logo and put us in
                    touch with them by giving us the name and address of the
                    business and the name of the person you spoke to.
                    Alternatively if you would like us to approach them just
                    send us the details.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  Do I have to pay anything because I participate in SIT STOP?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    No. We are a voluntary body. We are funded through donations
                    which cover our costs of operation. All our team give their
                    time without payment.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
                  If I want to make a donation in support of SIT STOP what
                  should I do?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                  <p>
                    Cheques payable to <b>‘SIT STOP’</b> will be very gratefully
                    received. They can be mailed to us at the address on the
                    contacts page.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          <section id="contact" className="w-full mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
              Contact Us
            </h2>

            <hr className="w-full mb-8 border-t-2"></hr>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="flex items-center gap-3 text-lg md:text-xl">
                  <Mail className="w-6 h-6" />
                  <span className="font-bold">Email</span>
                </div>
                <a
                  href="mailto:richmond@sitstop.co.uk"
                  className="text-blue-600 hover:underline text-base md:text-lg"
                >
                  richmond@sitstop.co.uk
                </a>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="flex items-center gap-3 text-lg md:text-xl">
                  <PhoneCall className="w-6 h-6" />
                  <span className="font-bold">Mobile</span>
                </div>
                <a
                  href="tel:+447789438246"
                  className="text-blue-600 hover:underline text-base md:text-lg"
                >
                  (+44) 7789 438246
                </a>
              </div>
            </div>
          </section>
          <section className="border-t pt-8 space-y-4 text-center text-sm md:text-base text-gray-600">
            <p>&copy; 2026, All rights are reserved</p>
            <p>
              Site developed by{" "}
              <a
                href="https://www.samuelforrest.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                Samuel Forrest
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
