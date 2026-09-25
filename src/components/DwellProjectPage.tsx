import React, { useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Target,
  Layers,
  Sparkles,
  AlertCircle,
  Lightbulb,
  MessageSquare,
  FileText,
  DollarSign,
  Users,
  Check,
  Calendar,
  HelpCircle,
  Quote,
} from 'lucide-react';
import { Navbar } from './Navbar';

interface DwellProjectPageProps {
  onBack: () => void;
}

export const DwellProjectPage: React.FC<DwellProjectPageProps> = ({ onBack }) => {
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

        <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Real Client Campaign
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
                Real Client Campaign • Meta Ads • Lead Generation
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-mono">
                Delhi NCR & Meerut
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] mb-2">
              DWELL CONSTRUCTION
            </h1>
            <p className="text-primary text-base sm:text-lg md:text-xl font-medium mb-3">
              Meta Lead Generation Campaign
            </p>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
              Campaign Period: 17–24 August 2026 • Platform: Facebook & Instagram via Meta Ads • Objective: Lead Generation • Role: End-to-end campaign execution
            </p>

            {/* Quick KPI Scorecard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Total Spend
                </span>
                <span className="text-base sm:text-lg font-bold text-primary font-mono">
                  ₹3,389.80
                </span>
              </div>

              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Form Leads
                </span>
                <span className="text-base sm:text-lg font-bold text-[#E1E0CC] font-mono">
                  31 <span className="text-xs font-normal text-gray-400">(@ ₹66.19)</span>
                </span>
              </div>

              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  WhatsApp Chats
                </span>
                <span className="text-base sm:text-lg font-bold text-[#E1E0CC] font-mono">
                  38 <span className="text-xs font-normal text-gray-400">(@ ₹35.21)</span>
                </span>
              </div>

              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Quotations Issued
                </span>
                <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                  8–10 Quotes
                </span>
              </div>
            </div>
          </header>

          {/* 01. PROJECT OVERVIEW */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              01. Project Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-500 uppercase font-mono block">Client</span>
                <span className="text-xs sm:text-sm font-medium text-white">Dwell Construction</span>
              </div>
              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-500 uppercase font-mono block">Industry</span>
                <span className="text-xs sm:text-sm font-medium text-white">Interior Design & Construction</span>
              </div>
              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-500 uppercase font-mono block">Platform</span>
                <span className="text-xs sm:text-sm font-medium text-white">Meta Ads — Facebook & Instagram</span>
              </div>
              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-500 uppercase font-mono block">Campaign Duration & Budget</span>
                <span className="text-xs sm:text-sm font-medium text-white">17–24 August 2026 • ₹500/day</span>
              </div>
            </div>

            <div className="bg-[#181818] p-5 rounded-xl border border-white/5 space-y-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                <strong className="text-primary font-medium">My Role:</strong> End-to-end campaign planning, setup, creative strategy, copy development, conversion-path selection, launch, monitoring, and lead-quality review.
              </p>
              <p>
                <strong className="text-primary font-medium">The Business:</strong> Dwell Construction provides residential and commercial design and construction services, including terrace garden design and construction, residential design and construction, interior design, and commercial-space design and construction. For this campaign, the immediate focus was <strong className="text-white">Terrace Garden</strong> as the primary priority, followed by <strong className="text-white">Interior Design</strong>.
              </p>
            </div>
          </section>

          {/* 02. CAMPAIGN OBJECTIVE */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              02. Campaign Objective
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light mb-4">
              The primary objective was to generate qualified prospects for Dwell Construction's services:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#181818] p-4 sm:p-5 rounded-xl border border-white/5">
                <h3 className="text-xs sm:text-sm font-medium text-primary mb-1.5 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Terrace Garden → Instant Form
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Capture project and qualification information before the prospect moved further into the sales process.
                </p>
              </div>
              <div className="bg-[#181818] p-4 sm:p-5 rounded-xl border border-white/5">
                <h3 className="text-xs sm:text-sm font-medium text-primary mb-1.5 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Interior Design → WhatsApp
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Allow prospects to initiate a direct conversation about their requirements.
                </p>
              </div>
            </div>
          </section>

          {/* 03. AUDIENCE STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              03. Audience Strategy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">Location: Delhi NCR + Meerut</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Delhi NCR was selected because it was Dwell Construction's primary service area. Meerut was included based on the client's requirement.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">Age: 25–60</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  I chose this range to focus the campaign on an audience more likely to be in a stage of life where home improvement, renovation, interior design, or property-related projects could be relevant.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">Gender: All Genders</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  I deliberately kept gender targeting broad rather than restricting the audience without a strong initial reason to exclude either gender.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">Placement: Advantage+ Placements</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  The campaign was allowed to use Meta's available Facebook and Instagram placements rather than manually restricting placements at launch.
                </p>
              </div>
            </div>
          </section>

          {/* 04. CAMPAIGN ARCHITECTURE */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              04. Campaign Architecture
            </h2>

            {/* Tree diagram */}
            <div className="bg-[#181818] p-5 rounded-xl border border-white/5 font-mono text-xs text-gray-300 mb-4 leading-loose">
              <div className="text-primary font-bold">Dwell Construction — Leads</div>
              <div className="pl-4 border-l border-white/10 mt-2">
                <div className="text-white font-semibold">├── Terrace_Garden — ₹300/day</div>
                <div className="pl-6 text-gray-400">
                  <div>├── Desire</div>
                  <div>├── Hook</div>
                  <div>└── Testimonial</div>
                </div>
              </div>
              <div className="pl-4 border-l border-white/10 mt-3">
                <div className="text-white font-semibold">└── Interior_design — ₹200/day</div>
                <div className="pl-6 text-gray-400">
                  <div>├── Before_its_built</div>
                  <div>└── Makeover</div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                Why this structure?
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-300 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Allocate budget according to business priority.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Evaluate each service independently.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Use different conversion paths.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Compare creative performance within each service.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Avoid treating two different customer journeys as one identical campaign.
                </li>
              </ul>
            </div>
          </section>

          {/* 05. BUDGET ALLOCATION */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              05. Budget Allocation
            </h2>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Ad Set</th>
                    <th className="py-3 px-4">Daily Budget</th>
                    <th className="py-3 px-4">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 font-mono">
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Terrace Garden</td>
                    <td className="py-3 px-4">₹300</td>
                    <td className="py-3 px-4 text-primary font-sans font-medium">Primary</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Interior Design</td>
                    <td className="py-3 px-4">₹200</td>
                    <td className="py-3 px-4 text-gray-400 font-sans">Secondary</td>
                  </tr>
                  <tr className="bg-white/[0.02] font-bold text-white">
                    <td className="py-3 px-4 font-sans">Total</td>
                    <td className="py-3 px-4 text-primary">₹500 / day</td>
                    <td className="py-3 px-4 font-sans font-normal text-gray-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              The higher allocation for Terrace Garden reflected the client's priority for that service and the relative strength of the available creative assets. The campaign used ad-set-level budget allocation, giving each service its defined daily budget.
            </p>
          </section>

          {/* 06. CREATIVE STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              06. Creative Strategy
            </h2>

            <div className="space-y-4">
              {/* Creative 1 */}
              <div className="bg-[#181818] p-4 sm:p-5 rounded-xl border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-white">
                    Terrace Garden — Desire
                  </h3>
                  <span className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">
                    Role: Desire → Consideration → Lead
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  The concept compared an ordinary terrace with what the space could become through a professionally designed terrace garden. The objective was to help the viewer visualize the possibility for their own terrace, create aspiration, and then move them toward requesting a quote.
                </p>
              </div>

              {/* Creative 2 */}
              <div className="bg-[#181818] p-4 sm:p-5 rounded-xl border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-white">
                    Terrace Garden — Hook
                  </h3>
                  <span className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">
                    Role: Attention → Interest → Lead
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  The Hook creative used a project/process-oriented approach designed to capture attention and lead the viewer toward the project reveal.
                </p>
              </div>

              {/* Creative 3 */}
              <div className="bg-[#181818] p-4 sm:p-5 rounded-xl border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-white">
                    Terrace Garden — Testimonial
                  </h3>
                  <span className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">
                    Role: Trust → Consideration → Lead
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  The Testimonial creative used an actual customer testimonial from a completed terrace garden project. The purpose was to introduce social proof and trust.
                </p>
              </div>

              {/* Creative 4 */}
              <div className="bg-[#181818] p-4 sm:p-5 rounded-xl border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-white">
                    Interior Design — Before_its_built
                  </h3>
                  <span className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">
                    Role: Visualization → Interest → Conversation
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  This creative used a rendered interior design video to help potential customers visualize what a completed interior could look like.
                </p>
              </div>

              {/* Creative 5 */}
              <div className="bg-[#181818] p-4 sm:p-5 rounded-xl border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-white">
                    Interior Design — Makeover
                  </h3>
                  <span className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">
                    Role: Transformation → Interest → Conversation
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  The Makeover creative focused on the transformation of a home's appearance through interior design.
                </p>
              </div>
            </div>
          </section>

          {/* 07. CONVERSION STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              07. Conversion Strategy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5">
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-2">
                  Terrace Garden — Instant Form
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  I used Meta Instant Forms to collect more structured information from potential prospects. The form included name, phone number, project location, budget, and expected project timeline. I also introduced <strong className="text-primary font-medium">OTP verification</strong> as an additional layer to reduce low-intent submissions and improve the usefulness of the information passed to the client.
                </p>
              </div>

              <div className="bg-[#181818] p-5 rounded-xl border border-white/5">
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-2">
                  Interior Design — WhatsApp
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  For Interior Design, I used WhatsApp as the conversion location. The idea was to reduce friction and allow prospects to directly communicate their requirements with the business.
                </p>
              </div>
            </div>
          </section>

          {/* 08. MY ROLE & EXECUTION */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              08. My Role & Execution
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-300 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Set up the Meta advertising environment and obtained partner access.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Created the campaign and ad-set structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Defined the audience and allocated the budget.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Developed and finalized ad copy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Decided which creative belonged to each ad set.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Selected conversion locations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Set up the Instant Form with qualification questions and OTP verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Launched and monitored the campaign.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Reviewed lead quality with the client.</span>
                </li>
              </ul>

              <div className="mt-4 pt-4 border-t border-white/5 text-xs text-gray-400 font-light">
                The client provided raw footage for the Terrace Garden content, which was edited for advertising use. I developed the copy concepts and finalized the messaging with AI-assisted brainstorming.
              </div>
            </div>
          </section>

          {/* 09. LAUNCH & EARLY PERFORMANCE */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              09. Launch & Early Performance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#181818] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Day 1</span>
                <span className="text-sm font-mono font-bold text-primary">4 leads</span>
              </div>
              <div className="bg-[#181818] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Day 2</span>
                <span className="text-sm font-mono font-bold text-primary">6 new leads</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 font-light leading-relaxed bg-[#181818] p-4 rounded-xl border border-white/5">
              The early response indicated that the campaign was generating demand immediately. At the creative level, <strong className="text-white">Desire</strong> emerged as a particularly strong-performing creative within the Terrace Garden ad set. At the same time, <strong className="text-white">Before_its_built</strong> was generating messaging conversations for Interior Design.
            </p>
          </section>

          {/* 10. THE UNEXPECTED CREATIVE CHANGE */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-primary" />
              10. The Unexpected Creative Change
            </h2>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5 sm:p-6 space-y-3">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                The <strong className="text-white">Desire</strong> creative had to be removed after the initial four days. It was not removed because of poor performance; it had been one of the strongest-performing creatives. The creative was subsequently removed at the client's request because of a third-party ownership/usage concern involving the project featured in the video.
              </p>
              <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  My Response
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  I expected that removing a strong-performing creative could negatively affect campaign performance. However, because the campaign was still in its learning phase, I chose not to make additional unnecessary changes immediately and allowed the remaining creatives to continue running. The <strong className="text-white">Testimonial</strong> creative subsequently began generating leads.
                </p>
              </div>
            </div>
          </section>

          {/* 11. CAMPAIGN RESULTS */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              11. Campaign Results
            </h2>

            {/* Overall Campaign Performance */}
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Overall Campaign Performance
            </h3>
            <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Metric</th>
                    <th className="py-3 px-4">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 font-mono">
                  <tr>
                    <td className="py-2.5 px-4 font-sans font-medium text-white">Total Spend</td>
                    <td className="py-2.5 px-4 text-primary">₹3,389.80</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-sans font-medium text-white">Reach</td>
                    <td className="py-2.5 px-4">19,384</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-sans font-medium text-white">Impressions</td>
                    <td className="py-2.5 px-4">25,520</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-sans font-medium text-white">Frequency</td>
                    <td className="py-2.5 px-4">1.32</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* By Conversion Path */}
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              By Conversion Path
            </h3>
            <div className="overflow-x-auto rounded-xl border border-white/10 mb-3">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Conversion</th>
                    <th className="py-3 px-4">Result</th>
                    <th className="py-3 px-4">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 font-mono">
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Terrace Garden</td>
                    <td className="py-3 px-4 font-sans">Instant Form</td>
                    <td className="py-3 px-4 text-primary">31 form leads</td>
                    <td className="py-3 px-4">₹66.19/lead</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-white">Interior Design</td>
                    <td className="py-3 px-4 font-sans">WhatsApp</td>
                    <td className="py-3 px-4 text-primary">38 messaging conversations</td>
                    <td className="py-3 px-4">₹35.21/conversation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 text-xs text-amber-200/90 font-light">
              <strong>Important:</strong> These results should not be combined into a single “69 leads” figure because they represent different conversion actions: form submissions versus messaging conversations.
            </div>
          </section>

          {/* 12. LEAD QUALITY & SALES HANDOFF */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              12. Lead Quality & Sales Handoff
            </h2>
            <div className="bg-[#181818] p-5 rounded-xl border border-white/5 space-y-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                My responsibility in this campaign was <strong className="text-white">lead generation and qualification</strong>, not closing the client's sales. I therefore did not attribute final customers, revenue, or ROAS to the campaign without verified client-side data.
              </p>
              <p>
                I did, however, cross-check lead quality with the client. The client subsequently issued approximately <strong className="text-emerald-400 font-medium">8–10 quotations</strong> to prospects generated through the campaign.
              </p>
              <p className="text-gray-400 text-xs italic pt-2 border-t border-white/5">
                Scope note: Final closed sales and revenue were not tracked within my campaign scope, so I have not claimed them as campaign conversions.
              </p>
            </div>
          </section>

          {/* 13. WHAT THE CAMPAIGN DEMONSTRATED */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              13. What the Campaign Demonstrated
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <h3 className="font-semibold text-white mb-1">1. Creative strategy mattered</h3>
                <p>Different creative angles produced different responses. Desire was particularly effective at generating initial response for Terrace Garden, while Testimonial demonstrated its ability to generate leads after Desire was removed.</p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <h3 className="font-semibold text-white mb-1">2. Conversion design should match the service</h3>
                <p>I did not force both services into the same conversion mechanism: Terrace Garden used Instant Forms for structured qualification, while Interior Design used WhatsApp for direct communication.</p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <h3 className="font-semibold text-white mb-1">3. Performance data isn't the only constraint</h3>
                <p>Desire was performing well, but it still had to be removed because of a business/usage constraint. The highest-performing creative isn't always the creative you are allowed to keep running.</p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <h3 className="font-semibold text-white mb-1">4. Avoid unnecessary intervention</h3>
                <p>After Desire was removed, I did not immediately restructure the campaign or make multiple simultaneous changes. The remaining Testimonial creative subsequently began producing leads.</p>
              </div>
            </div>
          </section>

          {/* 14. WHAT I WOULD TEST NEXT */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-primary" />
              14. What I Would Test Next
            </h2>
            <div className="bg-[#181818] p-5 rounded-xl border border-white/5">
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Create more variations based on the strongest-performing creative angles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Develop additional testimonial-based creatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Use more real-project footage where available rather than relying heavily on renders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Test different hooks around the same core offer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Compare Instant Form qualification against WhatsApp for the same service where appropriate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Improve downstream tracking from lead → qualified → quotation → customer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Evaluate future optimization using cost per qualified lead and eventual customer value, not only cost per lead.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 15. KEY TAKEAWAY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Quote className="w-4 h-4 text-primary" />
              15. Key Takeaway
            </h2>
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative">
              <blockquote className="text-sm sm:text-base md:text-lg text-primary font-normal leading-relaxed italic mb-4">
                “This campaign taught me that performance marketing is not simply about launching ads and watching metrics. It involves making structured decisions around audience, budget, creative, conversion paths, and lead quality — while adapting to real-world business constraints.”
              </blockquote>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-3">
                The campaign generated 31 form leads and 38 messaging conversations from ₹3,389.80 in spend, while client feedback indicated approximately 8–10 quotations were issued to generated prospects.
              </p>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                More importantly, the campaign gave me hands-on experience managing a real paid-media campaign from planning and setup through launch, creative evaluation, lead qualification, and post-launch decision-making.
              </p>
            </div>
          </section>

          {/* TOOLS & PLATFORMS */}
          <section className="border-t border-white/10 pt-8 mb-8">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Tools & Platforms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#181818] p-3 rounded-lg border border-white/5">
                <span className="font-semibold text-white block">Meta Ads Manager</span>
                <span className="text-gray-400 font-light">Campaign setup, audience targeting, budget allocation, ad delivery, creative management and performance monitoring.</span>
              </div>
              <div className="bg-[#181818] p-3 rounded-lg border border-white/5">
                <span className="font-semibold text-white block">Meta Instant Forms</span>
                <span className="text-gray-400 font-light">Lead capture and qualification with OTP verification.</span>
              </div>
              <div className="bg-[#181818] p-3 rounded-lg border border-white/5">
                <span className="font-semibold text-white block">WhatsApp</span>
                <span className="text-gray-400 font-light">Direct-response conversion path for Interior Design.</span>
              </div>
              <div className="bg-[#181818] p-3 rounded-lg border border-white/5">
                <span className="font-semibold text-white block">AI / ChatGPT</span>
                <span className="text-gray-400 font-light">Creative brainstorming and copy development support.</span>
              </div>
              <div className="bg-[#181818] p-3 rounded-lg border border-white/5 sm:col-span-2">
                <span className="font-semibold text-white block">Spreadsheets</span>
                <span className="text-gray-400 font-light">Campaign reporting and performance analysis.</span>
              </div>
            </div>
          </section>

          {/* FOOTER ACTION */}
          <footer className="pt-4 flex items-center justify-between">
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
