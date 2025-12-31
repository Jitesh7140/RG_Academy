import { FileText, MousePointerClick, CreditCard, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Request Info',
    description: 'Fill out our inquiry form to receive detailed information about our programs',
    icon: FileText,
  },
  {
    number: 2,
    title: 'Apply Online',
    description: 'Complete the online application form with required details',
    icon: MousePointerClick,
  },
  {
    number: 3,
    title: 'Submit',
    description: 'Submit your application and we will contact you very soon with next steps',
    icon: CreditCard,
  },
];

export default function AdmissionProcess() {
  return (
    <section className="py-10 md:py-24 bg-[linear-gradient(45deg,#084e91,#017eb1)]">
      <div className=" mx-auto px-6">
        <h2 className="text-xl md:text-6xl font-bold  mb-10 md:mb-20 text-white">
          | Admission Process
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex items-center gap-8 w-full">
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="bg-yellow-400 text-gray-900 font-bold text-2xl w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    <Icon className="text-blue-900 w-6 h-6 md:w-12 md:h-12"   strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="hidden md:block text-yellow-500 flex-shrink-0"
                    size={40}
                    strokeWidth={2}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
