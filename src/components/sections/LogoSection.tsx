/* eslint-disable @next/next/no-img-element */
export function LogoSection() {
  return (
    <section id="logo" className="w-full mb-20 md:mb-30">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
        Logo
      </h2>
      <hr className="w-full mb-8 border-t-2"></hr>
      <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
        <p>
          If you see the following logo in the window of a shop, it means that
          they have partnered with <b>SIT STOP</b>.
        </p>
        <p>Feel free to ask for their seat.</p>
        <div className="flex flex-col items-start space-y-4">
          <img
            src="sitstop-logo.jpg"
            alt="SIT STOP official logo"
            className="w-64 h-auto rounded-lg shadow-md"
            loading="lazy"
          />
          <p className="text-sm md:text-base text-gray-600 italic">
            SIT STOP Official Logo
          </p>
        </div>
      </div>
    </section>
  );
}
