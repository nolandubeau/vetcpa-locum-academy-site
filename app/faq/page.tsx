import { FAQs } from '../components/faqs';

export default function FAQPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Can't find the answer you're looking for? Reach out to our{' '}
            <a href="#" className="font-medium text-primary hover:text-primary/80">
              customer support
            </a>{' '}
            team.
          </p>
        </div>
        <div className="mt-20">
          <FAQs />
        </div>
      </div>
    </div>
  );
}

