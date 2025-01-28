import { CheckCircleIcon } from "@heroicons/react/24/outline"

const painPoints = [
  {
    id: 1,
    title: "Understanding when to register for GST/HST?",
    icon: CheckCircleIcon,
    category: "tax",
  },
  {
    id: 2,
    title: "Keeping track of vehicle expenses between clinics?",
    icon: CheckCircleIcon,
    category: "expenses",
  },
  {
    id: 3,
    title: "Creating professional invoices that get paid promptly?",
    icon: CheckCircleIcon,
    category: "billing",
  },
  {
    id: 4,
    title: "Knowing which expenses you can claim?",
    icon: CheckCircleIcon,
    category: "expenses",
  },
  {
    id: 5,
    title: "Deciding if and when to incorporate?",
    icon: CheckCircleIcon,
    category: "business",
  },
  {
    id: 6,
    title: "Meeting CRA deadlines and requirements?",
    icon: CheckCircleIcon,
    category: "compliance",
  },
]
export const PainPoints = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-red-600">Stop Stressing About Taxes</h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Are you struggling with...
          </p>
          {/* <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-400">
            Our free course is designed to help you understand the basics of veterinary locum finances, so you can focus on what you do best: saving lives.
          </p> */}
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white">
            {painPoints.map((point) => (
              <div key={point.id} className="relative flex gap-x-3">
                <dt className="flex items-center">
                  <point.icon className="h-5 w-5 text-red-600" aria-hidden="true" />
                </dt>
                <dd className="text-lg">{point.title}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Enroll now for FREE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

