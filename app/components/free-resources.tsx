export const FreeResources = () => {
  return (
    <div className="bg-white py-24 sm:py-32" style={{ marginTop: "-120px" }} id="free-resources">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-coral-600">FREE Bonus Resources Included</h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Everything you need to track your income and expenses
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img alt="" src="/assets/mileage-tracking.png" className="h-80 object-cover object-left" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-coral-600">FREE</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Mileage Tracking Template</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Ready-to-use Excel template for tracking business travel and calculating vehicle expense claims according to CRA requirements.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="/assets/invoice-template.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-coral-600">FREE</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Professional Invoice Templates</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Invoice templates designed specifically for veterinary locums, with built-in GST/HST calculations.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img alt="" src="/assets/expense-tracking-template.png" className="h-80 object-cover object-left" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-coral-600">FREE</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Expense Tracking Template</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Comprehensive spreadsheet with pre-populated veterinary expense categories and automatic tax calculations.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <img alt="" src="/assets/quick-reference-guide.png" className="h-80 object-cover" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-coral-600">FREE</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">GST/HST Quick Reference Guide</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                At-a-glance guide covering registration requirements, filing deadlines, and province-specific GST/HST rates for locums.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img alt="" src="/assets/tax-deadlines-calendar.png" className="h-80 object-cover" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-coral-600">FREE</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Tax Deadlines Calendar</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Complete annual calendar of CRA deadlines for GST/HST payments, tax installments, and returns.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}

