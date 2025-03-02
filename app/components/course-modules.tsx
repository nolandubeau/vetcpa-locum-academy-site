const posts = [
  {
    id: 1,
    title: 'GST/HST Registration for Canadian Business Owners',
    href: '#',
    description:
      'Master GST/HST essentials for your locum practice. Learn when to register, how to charge correctly across provinces, and avoid costly compliance mistakes.',
    imageUrl: '/assets/gst-hst-registration.png',
    date: 'Module 1',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/assets/bento-large.png',
    },
  },
  {
    id: 2,
    title: 'Taxes and Deadlines - Understanding Tax Obligations',
    href: '#',
    description:
      'Stay ahead of tax obligations with smart planning strategies. Understand instalments, key deadlines, and optimize your tax payments for better cash flow.',
    imageUrl: '/assets/tax-deadlines.png',
    date: 'Module 2',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/assets/bento-large.png',
    },
  },
  {
    id: 3,
    title: 'Expense Tracking and Record Keeping Essentials',
    href: '#',
    description:
      'Maximize deductions with our comprehensive expense guide. Learn what you can claim, proper record-keeping, and efficient digital tracking tools.',
    imageUrl: '/assets/expense-tracking.png',
    date: 'Module 3',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/assets/bento-large.png',
    },
  },
  {
    id: 4,
    title: 'Vehicle Expenses - Maximize Deductions & Ensure Compliance',
    href: '#',
    description:
      'Get the most from your vehicle expenses. Learn CRA-compliant tracking methods and documentation requirements to optimize your claims.',
    imageUrl: '/assets/vehicle-expenses.png',
    date: 'Module 4',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/assets/bento-large.png',
    },
  },
  {
    id: 5,
    title: 'Invoicing & Documentation for Veterinary Practices',
    href: '#',
    description:
      'Create professional invoices that get you paid faster. Access templates, digital tools, and proven payment collection strategies.',
    imageUrl: '/assets/invoicing.png',
    date: 'Module 5',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/assets/bento-large.png',
    },
  },
  {
    id: 6,
    title: 'Incorporating Your Locum Veterinary Practice',
    href: '#',
    description:
      'Understand when and why to incorporate your locum practice. Learn the tax benefits and follow our streamlined process for transitioning to a corporation.',
    imageUrl: '/assets/incorporating.png',
    date: 'Module 6',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: '/assets/bento-large.png',
    },
  },
  // More posts...
];

export const CourseModules = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="what-you-will-learn">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            What You'll Learn
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Designed exclusively for Canadian veterinary locums, this FREE
            comprehensive course delivers practical, actionable financial and
            tax guidance from experienced veterinary accountants.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  {/* <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a> */}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

