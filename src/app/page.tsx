import { Button } from "@/components/ui/button";
import { ImageAutoSlider } from "@/components/ui/HeroImageSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export default function Home() {
  return (
    <div className="w-full px-5 md:px-35 lg:px-45 xl:px-60 my-8">
      <main>
        <section id="hero" className="w-full text-center space-y-6">
          <h1 className="text-6xl md:text-8xl text-black font-bold ">
            SIT STOP
          </h1>
          <p className="text-md md:text-2xl">
            Free seating in local shops and businesses for anyone who needs it,
            no questions asked.
          </p>
        </section>

        <section id="hero-images" className="w-full my-8">
          <ImageAutoSlider />
        </section>

        <section id="action-buttons" className="w-full my-8">
          <div className="items-center justify-center flex gap-3 md:gap-5">
            <Button className="hover:cursor-pointer md:h-11 md:w-40">
              View all locations
            </Button>
            <Button
              variant="secondary"
              className="hover:cursor-pointer bg-gray-200 md:h-11 md:w-40"
            >
              Connect with us
            </Button>
          </div>
        </section>

        <hr className="w-full "></hr>

        <section id="about" className="w-full my-8 items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-black font-bold ">
            What is Sit Stop?
          </h1>
          <p className="text-sm md:text-xl mt-5 md:mt-10">
            <b>SIT STOP</b> is an initiative that was started in 2005 by an
            independent community group in the London Borough of Richmond upon
            Thames.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8">
            At <b>SIT STOP</b> our purpose is to make life just a little easier
            for those in need of somewhere to sit down.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8">
            These individuals may be elderly, pregnant, disabled or unwell; they
            may have tired feet or be laden down with shopping or they may just
            need somewhere to wait for a few minutes. It does not matter what
            drives the need.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8">
            In a shop or business displaying the SIT STOP logo, it is absolutely
            fine to ask for a seat or to use one if it is available. It is not
            necessary to be a customer of the store or to be using the services
            provided there.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8">
            We continue to develop the SIT STOP campaign as we learn from our
            experience and listen to the input from supporting organisations.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8">
            That&apos;s all it is!
          </p>
        </section>

        <hr className="w-full "></hr>

        <section id="about" className="w-full my-8 items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-black font-bold ">
            SIT STOP&apos;s History
          </h1>
          <p className="text-sm md:text-xl mt-5 md:mt-10">
            The SIT STOP campaign started in Richmond in 2005. A group of
            individuals led by three Royal Society of Arts (RSA) fellows met to
            discuss local issues as part of the RSA&apos;s Coffeehouse Challenge
            process. Meetings like these took place countrywide and were
            intended to bring focus to the resolution of local issues. In
            Richmond &apos;Access for All&apos; became our central theme.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8">
            With the help of Richmond Advice and Information on Disability
            (RAID) and a number of other local agencies and businesses, plus
            supporting funds from the RSA, Richmond Council and Starbucks, the
            idea took shape and grew. In Spring 2007 the project - then focused
            around specially designed chairs - was showcased around London.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8">
            The scheme was launched in Twickenham with the support of Richmond
            Council. Very ethusiastic commments about the idea were received and
            no major issues were identified by the participating businesses.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8">
            We continue to expand the number of participating organizations -
            not only in the Borough of Richmond upon Thames but also beyond.
          </p>
        </section>

        <hr className="w-full "></hr>

        <section id="about" className="w-full my-8 items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-black font-bold ">
            Our Logo / Sticker
          </h1>
          <p className="text-sm md:text-xl mt-5 md:mt-10">
            Wherever you see our logo, please feel free to ask to sit down in
            that local business, shop or place:
          </p>
          <div className="items-center sm:items-start justify-center sm:justify-start flex">
            <img
              src="https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/final-logo_12.jpg"
              alt="logo"
              className="w-50 h-60 mt-10 items-center"
              loading="lazy"
            />
          </div>
        </section>

        <hr className="w-full"></hr>

        <section id="about" className="w-full my-8 items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-black font-bold ">
            Join SIT STOP
          </h1>
          <p className="text-sm md:text-xl mt-5 md:mt-10">
            This campaign needs your support. We would welcome the assistance
            from all of the following:
          </p>
          <p className="text-sm md:text-xl mt-6 md:mt-12">
            <b>Businesses:</b>
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8 ml-5">
            - If you would like to offer a seat to those in need we would be
            very pleased to help you become a participant in the scheme. You do
            not have to be trading in Richmond Borough to participate.
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8 ml-5">
            - Contact us and we will send you a pack which includes SIT STOP
            logo window and wall stickers, information leaflets should you wish
            to place them near the seat you provide and contact information for
            further help in implementing the scheme. Participating in SIT STOP
            does not require the purchase of any special equipment. Any chair
            meets the need!
          </p>
          <p className="text-sm md:text-xl mt-6 md:mt-12">
            <b>Volunteers:</b>
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8 ml-5">
            - If you are a volunteer and would like to help spread the SIT STOP
            campaign in Richmond or in another location we would be very pleased
            to hear from you. Please contact us.
          </p>
          <p className="text-sm md:text-xl mt-6 md:mt-12">
            <b>Local Councils:</b>
          </p>
          <p className="text-sm md:text-xl mt-4 md:mt-8 ml-5">
            - If you are a local council and would like to roll out the scheme
            in your area do contact us we are pleased to share our experiences
            and provide assistance.
          </p>
        </section>

        <section id="about" className="w-full my-8 items-center justify-center">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
