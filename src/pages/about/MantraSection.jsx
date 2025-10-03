import Card from "../../components/ui/Card";
import CardContent from '../../components/ui/CardContent';

function MantraSection() {
  return(
    <Card className="bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Our Mantra</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <blockquote className="text-lg md:text-2xl font-medium text-blue-600 mb-4">
              "Believing in Impossibilities"
            </blockquote>
            <p className="text-base md:text-lg text-gray-700">
              We believe nothing is impossible when skilled professionals work 
              together with the right tools and vision. This philosophy drives everything we do, 
              from the smallest project to the most complex engineering challenges.
            </p>
          </div>
        </div>
    </Card>
  );
};

export default MantraSection;