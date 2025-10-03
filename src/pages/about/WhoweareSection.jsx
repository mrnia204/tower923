import Card from '../../components/ui/Card';


function WhoweareSection () {
  const teamImg = 'https://plus.unsplash.com/premium_photo-1661932816149-291a447e3022?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Established in 2018, Tower 923 Ltd is a PNG-owned diversified contractor
             specializing in Design, Engineering, Procurement, and Construction (EPC). 
             We deliver high-quality projects in civil works, 
              power distribution, renewable energy, and telecommunications across the country.
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-6">
            As a 100% nationally-owned engineering and construction company, 
            we are committed to delivering innovative, cost-effective, 
            and sustainable solutions that contribute to Papua New Guinea's development and growth.
          </p>
         
        </div>

        <div className="relative">
          <img 
            src={teamImg} 
            alt="Tower 923 Team" 
            className="rounded-lg shadow-lg object-cover w-full h-96 hover:shadow-lg"
          />
        </div>
      </div>
    </Card>
  );
};

export default WhoweareSection;