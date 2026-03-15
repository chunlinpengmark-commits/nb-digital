import { Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f8] text-[#111111]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
<div className="flex items-center">
  <img src="/logo.png" alt="Harbor Point Merchant Services" className="h-10 w-auto" />
</div>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#home" className="text-[15px] text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#services" className="text-[15px] text-gray-700 hover:text-black">
              Services
            </a>
            <a href="#about" className="text-[15px] text-gray-700 hover:text-black">
              About
            </a>
            <a href="#how" className="text-[15px] text-gray-700 hover:text-black">
              How It Works
            </a>
            <a href="#contact" className="text-[15px] text-gray-700 hover:text-black">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-[#05051c] px-7 py-3 text-[15px] font-medium text-white"
          >
            Get Started
          </a>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2"
      >
        <div>
          <div className="inline-flex items-center rounded-full bg-[#ececf3] px-5 py-3 text-sm text-gray-600">
            ✨ Automation &amp; Systems Experts
          </div>

<h1 className="mt-8 text-5xl font-semibold leading-[1.02] md:text-7xl">
  AI Automation for
  <br />
  <span className="text-[#6a5cff]">Small Businesses</span>
  <br />
  Automate & Scale
</h1>

<p className="mt-8 max-w-xl text-2xl leading-10 text-[#6a6f85]">
Harbor Point Merchant Services helps small businesses streamline payments, merchant services, and business operations.
</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-[#05051c] px-8 py-4 text-lg font-medium text-white"
            >
              Get Your Free Audit →
            </a>
            <a
              href="#how"
              className="rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-[#222]"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-lg text-[#5f657d]">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              No long-term contracts
            </div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              Done-for-you implementation
            </div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              Custom to your industry
            </div>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Analytics dashboard"
              className="h-[540px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-semibold">
  AI Automation Services for Small Businesses
</h2>
<p className="mt-6 text-2xl text-[#6a6f85]">
  We build AI automation services for small businesses, including marketing automation,
  lead generation systems, and business process automation.
</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "AI Marketing Automation",
              text: "Custom automated workflows for email, social media, and customer engagement that run on autopilot.",
            },
            {
              title: "Business Process Automation for Small Businesses",
              text: "Streamline operations with automated systems for lead management, follow-ups, and customer onboarding.",
            },
            {
              title: "AI Lead Generation Systems",
              text: "Industry-specific marketing campaigns designed to dominate your niche market and attract ideal customers.",
            },
            {
              title: "AI Analytics & Marketing Reporting",
              text: "Real-time dashboards and automated reporting to track KPIs and make data-driven decisions.",
            },
            {
              title: "CRM & Sales Systems",
              text: "Complete sales infrastructure with automated pipelines, nurture sequences, and conversion tracking.",
            },
            {
              title: "Custom Solutions",
              text: "Tailored systems and integrations built specifically for your unique business needs and industry.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-gray-200 bg-white p-9">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl text-white">
                ✦
              </div>
              <h3 className="text-[34px] font-semibold leading-tight">{item.title}</h3>
              <p className="mt-6 text-[18px] leading-9 text-[#6a6f85]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2"
      >
        <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80"
            alt="Business dashboard on laptop"
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-6xl font-semibold leading-tight">
            Your Complete Business
            <br />
            Operating System
          </h2>

          <p className="mt-8 text-[20px] leading-10 text-[#6a6f85]">
            We don&apos;t just run ads or post on social media. We build complete
            marketing and operational systems that work 24/7. Whether you need
            marketing automation, sales processes, or custom integrations—we create
            the infrastructure that lets niche businesses scale without burning out.
          </p>

          <div className="mt-8 space-y-5 text-[18px] text-[#333]">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                ✓
              </span>
              Custom automation that runs your marketing 24/7
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                ✓
              </span>
              Industry-specific systems built for your niche
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                ✓
              </span>
              Complete integration of your sales and operations
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                ✓
              </span>
              Done-for-you implementation, not just consulting
            </div>
          </div>

          <a
            href="#how"
            className="mt-10 inline-block rounded-2xl bg-[#05051c] px-8 py-4 text-lg font-medium text-white"
          >
            See How We Work
          </a>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-5xl font-semibold">How We Work</h2>
        <p className="mt-6 text-2xl text-[#6a6f85]">
          From audit to automation in 4 simple steps
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {[
            {
              number: "1",
              title: "Free Audit",
              text: "We analyze your current operations and identify automation opportunities that will save you time and generate revenue.",
            },
            {
              number: "2",
              title: "Custom Blueprint",
              text: "Get a detailed roadmap of exactly what systems we&apos;ll build, how they work together, and the results you can expect.",
            },
            {
              number: "3",
              title: "Build & Integrate",
              text: "We build your custom marketing automation, CRM integration, and operational systems. You stay focused on your business.",
            },
            {
              number: "4",
              title: "Launch & Optimize",
              text: "Your systems go live and start working 24/7. We monitor, optimize, and scale as your business grows.",
            },
          ].map((step) => (
            <div key={step.number} className="relative">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-blue-500 to-purple-600 text-3xl text-white">
                ✦
              </div>
              <div className="absolute left-[58%] top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#05051c] text-xl text-white">
                {step.number}
              </div>
              <h3 className="mt-8 text-[34px] font-semibold">{step.title}</h3>
              <p className="mt-5 text-[18px] leading-9 text-[#6a6f85]">{step.text}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-14 inline-block rounded-2xl bg-[#05051c] px-10 py-4 text-lg font-medium text-white"
        >
          Start Your Free Audit
        </a>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-semibold">Ready to Automate &amp; Scale?</h2>
          <p className="mt-6 text-2xl text-[#6a6f85]">
            Get a free audit of your current systems. We&apos;ll show you exactly how to automate and grow.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <form
  action="https://formspree.io/f/xlgplbkp"
  method="POST"
  className="space-y-6"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full border p-3 rounded-lg"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full border p-3 rounded-lg"
    required
  />

  <input
    type="text"
    name="company"
    placeholder="Company"
    className="w-full border p-3 rounded-lg"
  />

  <textarea
    name="message"
    placeholder="Tell us about your project"
    className="w-full border p-3 rounded-lg"
    rows={4}
  ></textarea>

  <button
    type="submit"
    className="bg-[#05051c] text-white px-6 py-3 rounded-lg"
  >
    Start Your Free Audit
  </button>
</form>
          <div>
            <h3 className="text-4xl font-semibold">Book Your Free Audit</h3>
            <p className="mt-6 max-w-xl text-[20px] leading-10 text-[#6a6f85]">
              Tell us about your business and we&apos;ll show you the exact systems
              and automation you need to scale. Response within 24 hours.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-2xl font-semibold">Email Us</p>
                  <p className="mt-1 text-xl text-[#6a6f85]">info@notbadcapital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-2xl font-semibold">Call Us</p>
                  <p className="mt-1 text-xl text-[#6a6f85]">+1 (770) 826-0555</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-2xl font-semibold">Visit Us</p>
                  <p className="mt-1 text-xl leading-9 text-[#6a6f85]">
                    266 Robledo St
                    <br />
                    Las Vegas, NV, 89138
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[28px] border border-gray-200 bg-white p-9">
            <div className="space-y-7">
              <div>
                <label className="mb-3 block text-2xl font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f6f7] px-5 py-5 text-lg outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-2xl font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f6f7] px-5 py-5 text-lg outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-2xl font-medium">Industry</label>
                <input
                  type="text"
                  placeholder="e.g., Healthcare, Legal, Construction"
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f6f7] px-5 py-5 text-lg outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-2xl font-medium">
                  What do you need help with?
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your biggest challenges with marketing, lead generation, or business operations..."
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f6f7] px-5 py-5 text-lg outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#05051c] px-6 py-5 text-xl font-medium text-white"
              >
                Book My Free Audit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}