import { Button } from "@/components/ui/button";
import { ImageAutoSlider } from "@/components/ui/HeroImageSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="w-full px-5 md:px-35 lg:px-45 xl:px-60 2xl:px-100 my-8">
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

        <hr className="w-full"></hr>

        <section id="about" className="w-full my-8 items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-black font-bold ">
            Frequently Asked
          </h1>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-10"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm md:text-xl">
                If my business joins the SIT STOP campaign do we have to provide
                a special/designated chair?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  No - any chair in the part of your business that is open to
                  the public is fine. Equally, if a chair is willingly provided
                  on request, that is an acceptable alternative.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm md:text-xl">
                Can I designate a particular chair if I wish to?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  Yes, we would be delighted to supply a SIT STOP sticker for
                  the chair if you wish. Please do contact us to order your
                  sticker. Details are on the contacts page.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-sm md:text-xl">
                Is there a particular type of chair which is best for SIT STOP’s
                purpose?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  Yes, a chair which has a relatively high seat and ideally arms
                  is the easiest for most people with mobility problems to use.
                  However any stable chair is welcome to someone who needs to
                  sit down.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-sm md:text-xl">
                Does the chair have to be in a particular part of my premises?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  No, anywhere in the public area that is convenient to you, and
                  accessible to the user.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-sm md:text-xl">
                What do I do if someone abuses our hospitality by behaving
                anti-socially?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  Any premises open to the public will from time to time have
                  incidents of this type. Evidence from our pilot project is
                  that participating in SIT STOP does not increase the frequency
                  of such events. When they occur they should be addressed by
                  staff in the way they have been trained.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-sm md:text-xl">
                Am I required to provide additional first aid training to staff
                because I participate in Sit Stop?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  No, there is no incremental obligation beyond that which your
                  business already has.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-sm md:text-xl">
                As a business providing a seat as part of the SIT STOP campaign
                do we get paid?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>No. The campaign is entirely voluntary throughout.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-sm md:text-xl">
                I know of a business which provides seating but they are not SIT
                STOP participants. Should I say something to them?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  We would be very pleased to know of public spirited businesses
                  such as these! Displaying the SIT STOP logo helps the public,
                  builds awareness of SIT STOP and assists recruitment of
                  additional participant businesses.
                </p>
                <p>
                  By all means approach them to display the logo and put us in
                  touch with them by giving us the name and address of the
                  business and the name of the person you spoke to.
                  Alternatively if you would like us to approach them just send
                  us the details.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-sm md:text-xl">
                I use a business frequently but they have no seating which I
                feel they should provide. Would you approach them for me?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  Yes, if we can get there. We have found that face to face is
                  the best way to persuade people. We are south west London
                  based. At this stage of the campaign it is not easy for us to
                  approach businesses substantially outside our area.
                </p>

                <p>
                  However, we are very happy to write to them if you supply the
                  full postal address and the name of the manager. Our contact
                  details are in the contacts section of this website.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-sm md:text-xl">
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
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-sm md:text-xl">
                If I want to make a donation in support of SIT STOP what should
                I do?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl">
                <p>
                  Cheques payable to ‘SIT STOP’ will be very gratefully
                  received. They can be mailed to us at the address on the
                  contacts page.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
