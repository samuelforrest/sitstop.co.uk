import { ImageAutoSlider } from "@/components/ui/HeroImageSlider";

export default function Home() {
  return (
    <div className="w-full max-w-8xl h-full my-10 md:my-25 overflow-x-hidden">
      <main>
        <section id="hero" className="text-center space-y-6 px-2">
          <h1 className="text-6xl md:text-8xl text-black font-bold ">
            SIT STOP
          </h1>
          <p className="text-md md:text-2xl">
            Free seating in local shops and businesses for anyone who needs it,
            no questions asked.
          </p>
        </section>

        <section id="hero-images" className="mt-8 md:mt-20">
          <ImageAutoSlider />
        </section>

        <section
          id="about"
          className="mt-8 md:mt-20 items-center justify-center"
        >
          <h1 className="text-2xl md:text-4xl text-black font-bold ">
            What is Sit Stop?
          </h1>
          <p className="text-sm md:text-xl mt-3 max-w-6xl">
            SIT STOP is an initiative that was started in 2005 by an independent
            community group in the London Borough of Richmond upon Thames.
          </p>
        </section>
      </main>
    </div>
  );
}
