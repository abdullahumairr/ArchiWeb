

const Hero = () => {
    return (
      <section
        id="hero"
      >
        <img className="flex absolute -z-10 w-full h-[1000px] object-cover" src="public/house-hero.jpg" alt="" />
        <div className="flex h-screen items-center">
            <div className="relative text-white max-w-2xl px-6 md:px-12 py-10 bg-zinc-400/70 ">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 ">Best Solution For Your Home</h1>
                <p className="text-lg md:text-xl">
                Transform your living spaces with innovative designs and expert craftsmanship. At ArchiWeb, we create homes that inspire, combining aesthetics and functionality to suit your lifestyle. Discover the perfect solutions for your dream home today
                </p>
            </div>
        </div>
      </section>
    );
  };
  
  export default Hero;