const StarWars = () => {
  return (
    <section className="flex items-center justify-center py-8 relative">
      <div className="flex flex-col gap-2">
        <img
          src="https://cssanimation.rocks/demo/starwars/images/star.svg"
          alt="Star Wars"
          className="w-full max-w-[25rem] md:max-w-[30rem]"
        />
        <img
          src="https://cssanimation.rocks/demo/starwars/images/wars.svg"
          alt="Star Wars"
          className="w-full max-w-[25rem] md:max-w-[30rem]"
        />
      </div>
      <p className="force-awake hidden lg:block text-center absolute top-[50%] left-[50%] font-semibold md:font-bold text-[2rem] tracking-[0.1rem] max-w-[35rem]">
        THE FORCE AWAKENS
      </p>
    </section>
  );
};

export default StarWars;
