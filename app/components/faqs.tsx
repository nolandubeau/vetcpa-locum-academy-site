const faqs = [
  {
    question: 'How long do I have access to the course?',
    answer:
      'Forever! Once enrolled, you have lifetime access to all current and future updates.',
  },
  {
    question: 'Is this really free?',
    answer:
      'Yes! This course is provided free of charge as part of our commitment to supporting Canadian veterinary locums.',
  },
  {
    question: 'How long does it take to complete?',
    answer:
      'The course is self-paced and takes approximately 6-8 hours to complete. You can learn at your own pace.',
  },
  {
    question: 'Do I need any previous tax knowledge?',
    answer:
      "No! We've designed the course to be accessible for beginners while still providing value to experienced locums.",
  },
];

export const FAQs = () => {
  return (
    <div className="bg-white" style={{ marginTop: '-100px' }}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-30">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-pretty text-base/7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base/7 font-semibold text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
