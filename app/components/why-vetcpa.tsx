const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
]

export const WhyVetCPA = () => {
  return (
    <div className="relative bg-gray-100" id="about-vetcpa">
      <img
        alt=""
        src="/assets/vetcpa-locum.jpg"
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base/8 font-semibold text-coral-600">Why VetCPA?</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Trusted by veterinarians across Canada
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
            VetCPA provides industry-specific tax and accounting expertise for veterinarians, offering comprehensive cloud-based bookkeeping, accounting, tax planning and practice
            management support. At the core of our mission lies a deep commitment to supporting veterinarians in realizing their financial
              goals. We understand the significance of their invaluable contributions to animal welfare and believe that
              they should be able to thrive financially while doing what they love. With our unwavering dedication and
              comprehensive resources, we aim to empower veterinarians to attain their financial goals and secure a
              prosperous future.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              <a href="https://www.vetcpa.ca" target="_new" className="text-sm/6 font-semibold text-gray-900">
                Learn more about VetCPA <span aria-hidden="true">→</span>
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
