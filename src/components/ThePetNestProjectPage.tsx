import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Target,
  Users,
  Compass,
  Sparkles,
  Layers,
  Search,
  Sliders,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  FileCheck,
  Smartphone,
  Check,
} from 'lucide-react';
import { Navbar } from './Navbar';

interface ThePetNestProjectPageProps {
  onBack: () => void;
}

export const ThePetNestProjectPage: React.FC<ThePetNestProjectPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black relative pb-28">
      {/* Background noise texture */}
      <div className="fixed inset-0 bg-noise opacity-[0.12] pointer-events-none" />

      {/* Top Navbar */}
      <div className="relative pt-6 sm:pt-8 mb-12 sm:mb-16">
        <Navbar />
      </div>

      {/* Action Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary/80 hover:text-primary transition-colors py-2 px-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer shadow-lg active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work Overview</span>
        </button>

        <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
          Simulated Project
        </span>
      </div>

      {/* Main Case Study Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#101010] border border-white/10 rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* PROJECT HERO HEADER */}
          <header className="border-b border-white/10 pb-8 mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-primary font-semibold">
                Google Ads • Top-of-Funnel Strategy • Awareness
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-mono">
                Major Urban Markets (India)
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] mb-2">
              ThePetNest
            </h1>
            <p className="text-primary text-base sm:text-lg md:text-xl font-medium mb-3">
              Google Ads Top-of-Funnel Campaign Strategy
            </p>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-3xl">
              A simulated paid-media strategy for introducing ThePetNest to new and relevant pet owners in major Indian urban markets.
            </p>

            {/* Quick Strategy Scope Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Project Type
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  Simulated Campaign
                </span>
              </div>

              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Campaign Stage
                </span>
                <span className="text-xs sm:text-sm font-bold text-primary">
                  Top of Funnel / Awareness
                </span>
              </div>

              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Target Market
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#E1E0CC]">
                  8 Major Urban Cities
                </span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20 text-xs text-blue-200/90 font-light">
              <strong>Scope:</strong> Audience research, geographic and demographic targeting, creative strategy, budget and bidding approach, competitive positioning, landing-page assessment, measurement framework, and optimization plan.
            </div>
          </header>

          {/* 01 - BUSINESS CONTEXT */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-primary" />
              01 - Business Context
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-3.5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                ThePetNest is a pet-care platform offering online veterinary consultations, grooming, boarding, dog walking, training, pet insurance, and other pet-care services.
              </p>
              <p>
                The campaign challenge was to introduce the platform to relevant pet owners <strong className="text-white">before they reached the final booking stage</strong>. The strategy focused on building awareness and consideration, and on creating a pool of users that could later support remarketing and conversion activity.
              </p>
              <div className="bg-black/50 p-4 rounded-lg border border-white/10 italic text-primary/90">
                “The strategic question: how can paid media make ThePetNest relevant to a pet owner who may not yet know the brand, but has a current or emerging pet-care need?”
              </div>
            </div>
          </section>

          {/* 02 - CAMPAIGN OBJECTIVE */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              02 - Campaign Objective
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-3">
              <p className="text-xs sm:text-sm text-white font-medium">
                Primary objective: Build awareness among new and relevant pet owners in major Indian urban markets.
              </p>
              <span className="text-xs text-primary font-semibold uppercase tracking-wider block pt-2 border-t border-white/5">
                Secondary objectives:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Generate cost-efficient reach and repeated exposure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Introduce ThePetNest's broader pet-care proposition.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Encourage users to explore the platform.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Identify audience and creative signals that can inform later funnel stages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Build remarketing pools from relevant site visitors and engaged users.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 03 - AUDIENCE STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              03 - Audience Strategy
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-light">
              I developed audience hypotheses across broad interest, category interest, and more specific intent signals, so that not every pet owner would be treated as having the same level of need or purchase intent.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Segment</th>
                    <th className="py-3 px-4">Signal / Approach</th>
                    <th className="py-3 px-4">Strategic Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 font-mono">
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Pet Lovers</td>
                    <td className="py-3 px-4 text-primary">Affinity</td>
                    <td className="py-3 px-4 font-sans text-gray-300">Broad awareness and discovery</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Family-Focused</td>
                    <td className="py-3 px-4 text-primary">Affinity</td>
                    <td className="py-3 px-4 font-sans text-gray-300">Connect pet care with household convenience</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Pet Care & Services</td>
                    <td className="py-3 px-4 text-emerald-400">In-market</td>
                    <td className="py-3 px-4 font-sans text-gray-300">Reach users already interested in pet-care categories</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Pet Supplies & Food</td>
                    <td className="py-3 px-4 text-emerald-400">In-market</td>
                    <td className="py-3 px-4 font-sans text-gray-300">Identify existing pet owners and category participants</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Pet Care Researchers</td>
                    <td className="py-3 px-4 text-blue-400">Custom intent</td>
                    <td className="py-3 px-4 font-sans text-gray-300">Reach users showing more specific service-related intent</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">New Pet Parents</td>
                    <td className="py-3 px-4 text-blue-400">Custom intent</td>
                    <td className="py-3 px-4 font-sans text-gray-300">Reach users early in their pet-parenting journey</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-[#181818] border border-white/5 text-xs text-gray-300 font-light">
              <strong className="text-primary font-medium">Strongest intent hypothesis:</strong> Service-specific intent searches such as <em>“dog grooming near me,” “pet boarding near me,” “online vet consultation,” “vet at home,”</em> and <em>“dog walker near me.”</em>
            </div>
          </section>

          {/* 04 - GEOGRAPHIC & DEMOGRAPHIC STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              04 - Geographic & Demographic Strategy
            </h2>

            <div className="bg-[#181818] p-4 rounded-xl border border-white/5 mb-4 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <strong className="text-white font-medium">Target markets:</strong> Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.
              <p className="mt-1.5 text-gray-400">
                These major urban markets were chosen as an initial test set, on the assumption that organized pet-care demand and service availability would be stronger there. Geographic performance would then be evaluated rather than treating the initial city list as fixed.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Dimension</th>
                    <th className="py-3 px-4">Initial Approach</th>
                    <th className="py-3 px-4">Reasoning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Age</td>
                    <td className="py-3 px-4 font-mono text-primary">25–44</td>
                    <td className="py-3 px-4 font-light text-gray-300">Initial working-age hypothesis, kept broad enough for testing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Gender</td>
                    <td className="py-3 px-4 font-mono text-primary">All</td>
                    <td className="py-3 px-4 font-light text-gray-300">No strong strategic reason to exclude either gender</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Parental status</td>
                    <td className="py-3 px-4 font-mono text-primary">Parents + non-parents</td>
                    <td className="py-3 px-4 font-light text-gray-300">Human-parent status is not a reliable proxy for pet-parent status</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Income</td>
                    <td className="py-3 px-4 font-mono text-primary">Upper income tiers</td>
                    <td className="py-3 px-4 font-light text-gray-300">Initial hypothesis for users with greater capacity to pay for pet-care services</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#181818] p-4 rounded-xl border border-white/5 flex items-start gap-3">
              <Smartphone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                <strong className="text-white font-medium">Device principle:</strong> Mobile should carry most of the discovery volume, while desktop stays relevant for users who spend longer researching services. Tablet performance would need to be tracked rather than assumed.
              </p>
            </div>
          </section>

          {/* 05 - CREATIVE STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              05 - Creative Strategy
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-light">
              The creative strategy is built around three user problems rather than a list of ThePetNest's services:
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-5">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Creative Angle</th>
                    <th className="py-3 px-4">User Problem</th>
                    <th className="py-3 px-4">Core Message</th>
                    <th className="py-3 px-4">CTA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">New Pet Parent</td>
                    <td className="py-3 px-4 italic text-gray-400 font-light">“I don’t know where to start.”</td>
                    <td className="py-3 px-4 text-gray-300 font-light">ThePetNest supports new pet parents from the beginning.</td>
                    <td className="py-3 px-4 font-mono text-primary font-medium">Get Started</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Convenience</td>
                    <td className="py-3 px-4 italic text-gray-400 font-light">“Pet care is difficult to fit into my schedule.”</td>
                    <td className="py-3 px-4 text-gray-300 font-light">Book pet care around your schedule.</td>
                    <td className="py-3 px-4 font-mono text-primary font-medium">Book Now</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">One Platform</td>
                    <td className="py-3 px-4 italic text-gray-400 font-light">“I need different services from different places.”</td>
                    <td className="py-3 px-4 text-gray-300 font-light">Multiple pet-care needs, one platform.</td>
                    <td className="py-3 px-4 font-mono text-primary font-medium">Explore ThePetNest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#181818] p-5 rounded-xl border border-white/5 space-y-2 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                The three finished creative concepts use distinct visual and messaging angles: <strong className="text-white font-medium">“First-Time Pet Parent? We’ve Got You,”</strong> <strong className="text-white font-medium">“Pet Care That Fits Your Schedule,”</strong> and <strong className="text-white font-medium">“Every Pet Service, One Trusted Platform.”</strong>
              </p>
              <p className="text-gray-400">
                Together, they test whether the audience responds more to onboarding reassurance, convenience, or breadth and trust.
              </p>
            </div>
          </section>

          {/* 06 - COMPETITIVE POSITIONING */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Search className="w-4 h-4 text-primary" />
              06 - Competitive Positioning
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-light">
              I reviewed Supertails, Wiggles, Monkoodog, Heads Up For Tails, and DogSpot to see how established players position themselves across health, products, boarding, daycare, retail, and community:
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Competitor</th>
                    <th className="py-3 px-4">Observed Positioning</th>
                    <th className="py-3 px-4">Strategic Implication</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Supertails</td>
                    <td className="py-3 px-4 text-gray-400 font-light">Products + health / vet care</td>
                    <td className="py-3 px-4 text-primary font-light">Opportunity to emphasize service breadth</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Wiggles</td>
                    <td className="py-3 px-4 text-gray-400 font-light">Boarding + health</td>
                    <td className="py-3 px-4 text-primary font-light">Differentiate through broader service convenience</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Monkoodog</td>
                    <td className="py-3 px-4 text-gray-400 font-light">Hyperlocal daycare / boarding</td>
                    <td className="py-3 px-4 text-primary font-light">Position ThePetNest as a broader ecosystem</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Heads Up For Tails</td>
                    <td className="py-3 px-4 text-gray-400 font-light">Premium products + brand</td>
                    <td className="py-3 px-4 text-primary font-light">Lean into service-first positioning</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">DogSpot</td>
                    <td className="py-3 px-4 text-gray-400 font-light">Community / information</td>
                    <td className="py-3 px-4 text-primary font-light">Emphasize movement from discovery to booking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 07 - LANDING PAGE ASSESSMENT */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-primary" />
              07 - Landing Page Assessment
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-3.5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                ThePetNest's website has a clear pet-care proposition, visible service-specific CTAs, and solid trust signals. Reviews, provider verification, and service guarantees matter a lot in a category where trust drives the booking decision.
              </p>
              <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/20 text-amber-200/90 space-y-1.5">
                <span className="font-semibold block uppercase tracking-wider text-[11px] text-amber-300">
                  Friction Identified
                </span>
                <p>
                  The main friction I found is the jump from cold awareness traffic straight into a fairly transactional booking flow. Someone discovering the brand for the first time may need more context before they're ready to commit to booking.
                </p>
              </div>
              <p className="pt-2 text-gray-300">
                <strong className="text-primary font-medium">Recommendation:</strong> Test a lighter first interaction for colder audiences, such as <em>“New to ThePetNest? See how it works,”</em> move stronger review and trust signals higher on the page, and check mobile load performance.
              </p>
            </div>
          </section>

          {/* 08 - BUDGET & BIDDING APPROACH */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-primary" />
              08 - Budget & Bidding Approach
            </h2>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Planning Variable</th>
                    <th className="py-3 px-4">Proposed Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Test budget</td>
                    <td className="py-3 px-4 font-mono text-primary">Rs. 3,000–Rs. 4,000/day</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Monthly equivalent</td>
                    <td className="py-3 px-4 font-mono text-gray-300">Approximately Rs. 90,000–Rs. 1.2 lakh if sustained</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Markets</td>
                    <td className="py-3 px-4 font-light text-gray-300">8 major Indian urban markets</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Bidding philosophy</td>
                    <td className="py-3 px-4 font-light text-primary">Reach / CPM-oriented for the awareness objective</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Frequency</td>
                    <td className="py-3 px-4 font-mono text-gray-300">Initial planning range of approximately 3–5 impressions per user per week</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 font-light leading-relaxed">
              The budget is a simulated planning assumption, not actual campaign spend. The reasoning was to generate enough delivery across multiple audiences and creative variants to support meaningful testing before optimization.
            </p>
          </section>

          {/* 09 - MEASUREMENT FRAMEWORK */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              09 - Measurement Framework
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-light">
              Because this is a simulated project, there are no performance results to report. Instead, here are the metrics I would use to evaluate the campaign if it launched:
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Layer</th>
                    <th className="py-3 px-4">Metrics</th>
                    <th className="py-3 px-4">What I Would Learn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 font-light">
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Delivery</td>
                    <td className="py-3 px-4 font-mono text-primary text-xs">Reach, impressions, frequency, CPM</td>
                    <td className="py-3 px-4 text-gray-300">Whether the campaign is delivering efficient awareness</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Engagement</td>
                    <td className="py-3 px-4 font-mono text-primary text-xs">CTR, CPC, engaged users, viewability</td>
                    <td className="py-3 px-4 text-gray-300">Which creative / audience combinations generate useful interaction</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Audience</td>
                    <td className="py-3 px-4 font-mono text-primary text-xs">Segment-level delivery and engagement</td>
                    <td className="py-3 px-4 text-gray-300">Which audience signals deserve greater budget weight</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Geography</td>
                    <td className="py-3 px-4 font-mono text-primary text-xs">City-level efficiency</td>
                    <td className="py-3 px-4 text-gray-300">Where incremental budget should be concentrated</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Downstream</td>
                    <td className="py-3 px-4 font-mono text-primary text-xs">New users, branded-search activity, site engagement, remarketing pool growth</td>
                    <td className="py-3 px-4 text-gray-300">Whether awareness is creating useful consideration signals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10 - OPTIMIZATION FRAMEWORK */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-primary" />
              10 - Optimization Framework
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-light">
              I would avoid making big changes based on isolated observations. Once enough data had accumulated, optimization would focus on repeatable differences across creative, audience, placement, device, and geography:
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Area</th>
                    <th className="py-3 px-4">Optimization Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 font-light">
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Creative</td>
                    <td className="py-3 px-4">Pause materially weak variants and develop new versions around the strongest messaging angle.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Audience</td>
                    <td className="py-3 px-4">Shift budget toward segments showing the strongest combination of engagement and efficient delivery.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Placements</td>
                    <td className="py-3 px-4">Identify high-volume, low-engagement inventory and exclude it where appropriate.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Device</td>
                    <td className="py-3 px-4">Compare mobile, desktop, and tablet performance and redistribute exposure when differences are meaningful.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Geography</td>
                    <td className="py-3 px-4">Increase incremental budget in stronger-performing cities and investigate weak delivery.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Frequency</td>
                    <td className="py-3 px-4">Reduce overexposure if frequency rises without corresponding engagement or brand signals.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">Remarketing</td>
                    <td className="py-3 px-4">Build audiences from relevant site visitors and ad / video engagers for later funnel stages.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 11 - FUNNEL EXTENSION */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              11 - Funnel Extension
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                The campaign was designed as the first stage of a broader acquisition system, not a one-off awareness push:
              </p>

              {/* Pipeline flowchart */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-primary/90 bg-black/40 p-4 rounded-xl border border-white/10">
                <span className="text-white">New Audience</span>
                <span className="text-gray-500">→</span>
                <span>Awareness</span>
                <span className="text-gray-500">→</span>
                <span className="text-white">Engaged Visitor</span>
                <span className="text-gray-500">→</span>
                <span>Remarketing Pool</span>
                <span className="text-gray-500">→</span>
                <span className="text-white">Consideration</span>
                <span className="text-gray-500">→</span>
                <span className="text-emerald-400 font-bold">Conversion</span>
              </div>

              <p className="text-xs text-gray-400 font-light">
                The initial campaign would produce two outputs: immediate awareness, and a pool of relevant users that could be developed through later paid-media activity.
              </p>
            </div>
          </section>

          {/* 12 - KEY STRATEGIC DECISIONS */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              12 - Key Strategic Decisions
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5">
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Use multiple audience hypotheses instead of relying only on broad pet-interest targeting.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Use service-specific intent signals to identify users with stronger category relevance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Build creative around user problems: starting pet ownership, convenience, and one-platform breadth.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Treat geographic, demographic, and device choices as testable hypotheses, not permanent assumptions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Evaluate the landing page as part of the paid-media journey, not a separate website exercise.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Define optimization rules before launch so decisions rest on evidence rather than isolated performance changes.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 13 - WHAT THIS PROJECT DEMONSTRATES */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              13 - What This Project Demonstrates
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light mb-4 leading-relaxed">
              This simulated project shows how I translate a business scenario into a structured paid-media strategy: audience research and messaging, media planning, landing-page analysis, measurement, and optimization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">Paid Media</span>
                <p className="text-xs text-gray-300 font-light">Audience strategy • Funnel planning • Budget planning • Bidding approach</p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">Creative</span>
                <p className="text-xs text-gray-300 font-light">Messaging angles • User-problem framing • CTA strategy • Creative testing</p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">Research</span>
                <p className="text-xs text-gray-300 font-light">Competitor analysis • Intent signals • Geographic segmentation</p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">Performance Thinking</span>
                <p className="text-xs text-gray-300 font-light">KPI selection • Optimization rules • Placement / device / geo analysis</p>
              </div>
            </div>
          </section>

          {/* PROJECT STATUS BANNER */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-primary block mb-1">
              PROJECT STATUS: SIMULATED PROJECT
            </span>
            <p className="text-xs text-gray-400 font-light">
              The strategy, budget, audience selections, and optimization framework here are proposed planning work. No live campaign results are implied.
            </p>
          </div>

          {/* FOOTER ACTION */}
          <footer className="border-t border-white/10 pt-8 flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Work Overview</span>
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
};
