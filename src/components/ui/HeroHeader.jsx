function HeroHeader ({title, content, children, bgHeroImg}) {

  return(
    <section 
      className="relative h-96 bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgHeroImg})`
      }}
    >
      <div className="text-center max-w-4xl mx-auto px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{content}</p>
        {children && <p className="text-center">{children}</p>}
      </div>
    </section>
  );
};

export default HeroHeader;