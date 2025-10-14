function Card({children, className='bg-white'}) {
  return (
    <section className={`${className} py-12 sm:py-16 lg:py-20`}>
      <div className="max-w-5xl md:max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Card;