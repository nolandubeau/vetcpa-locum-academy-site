const faqs = [
  {
    question: "How long do I have access to the course?",
    answer: "Forever! Once enrolled, you have lifetime access to all current and future updates.",
  },
  {
    question: "Is this really free?",
    answer:
      "Yes! This course is provided free of charge as part of our commitment to supporting Canadian veterinary locums.",
  },
  {
    question: "How long does it take to complete?",
    answer: "The course is self-paced and takes approximately 6-8 hours to complete. You can learn at your own pace.",
  },
  {
    question: "Do I need any previous tax knowledge?",
    answer:
      "No! We've designed the course to be accessible for beginners while still providing value to experienced locums.",
  },
]

export const FAQs = () => {
  return (
    <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
      {faqs.map((faq) => (
        <div key={faq.question} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
          <dd className="mt-4 lg:col-span-7 lg:mt-0">
            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
          </dd>
        </div>
      ))}
    </dl>
  )
}

