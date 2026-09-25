import React from 'react';
import {
  ArrowLeft,
  Printer,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Navbar } from './Navbar';

interface ResumePageProps {
  onBackToHome: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onBackToHome }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black relative pb-20">
      {/* Background noise */}
      <div className="fixed inset-0 bg-noise opacity-[0.12] pointer-events-none" />

      {/* Top Navbar */}
      <div className="relative pt-6 sm:pt-8 mb-12 sm:mb-16">
        <Navbar />
      </div>

      {/* Action Bar (Back & Print) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 flex items-center justify-between gap-4 print:hidden">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary/80 hover:text-primary transition-colors py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-primary text-black hover:bg-[#E1E0CC] transition-all py-2 px-4 rounded-full font-medium cursor-pointer shadow-lg hover:scale-105 active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* Resume Paper Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#101010] border border-white/10 rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden print:bg-white print:text-black print:border-none print:p-0 print:shadow-none">
          {/* Subtle decorative radial glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none print:hidden" />

          {/* HEADER */}
          <header className="border-b border-white/10 pb-8 mb-8 print:border-neutral-300">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] print:text-black">
              KANISHK PRABHAT
            </h1>
            <p className="text-primary text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase font-semibold mt-2.5 print:text-neutral-700">
              Digital Marketing <span className="text-primary/40 px-1">|</span> Performance Marketing
            </p>

            {/* Contact Row */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-gray-400 print:text-neutral-600">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary print:text-black" />
                New Delhi, India
              </span>
              <a
                href="tel:+919102395579"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors print:text-black"
              >
                <Phone className="w-3.5 h-3.5 text-primary print:text-black" />
                +91-9102395579
              </a>
              <a
                href="mailto:kanishkprabha31@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors print:text-black"
              >
                <Mail className="w-3.5 h-3.5 text-primary print:text-black" />
                kanishkprabha31@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/kanishk-prabhat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors text-primary/90 print:text-black"
              >
                <Linkedin className="w-3.5 h-3.5 text-primary print:text-black" />
                <span>linkedin.com/in/kanishk-prabhat</span>
                <ExternalLink className="w-3 h-3 opacity-60 print:hidden" />
              </a>
            </div>
          </header>

          {/* SUMMARY */}
          <section className="mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-3 flex items-center gap-2 print:text-black">
              <Sparkles className="w-4 h-4 text-primary print:text-black" />
              Summary
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-light print:text-neutral-800">
              Entry-level digital marketer focused on paid acquisition and performance marketing. Hands-on experience planning and running Meta Ads and Google Ads campaigns, including audience and creative strategy, lead generation, and conversion tracking. Working knowledge of GA4, GTM, SEO, WordPress, Canva, and AI-assisted marketing and website workflows.
            </p>
          </section>

          {/* SKILLS */}
          <section className="mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2 print:text-black">
              <Layers className="w-4 h-4 text-primary print:text-black" />
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#181818] p-4 rounded-xl border border-white/5 print:bg-neutral-50 print:border-neutral-200">
                <span className="text-xs font-semibold text-primary block mb-1.5 print:text-black">
                  Paid Media
                </span>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed print:text-neutral-700">
                  Google Ads, Meta Ads, LinkedIn Ads, Lead Generation, Audience Targeting, Campaign Optimization
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5 print:bg-neutral-50 print:border-neutral-200">
                <span className="text-xs font-semibold text-primary block mb-1.5 print:text-black">
                  Analytics & Tracking
                </span>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed print:text-neutral-700">
                  GA4, Google Tag Manager, Conversion Tracking, Campaign Performance Analysis
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5 print:bg-neutral-50 print:border-neutral-200">
                <span className="text-xs font-semibold text-primary block mb-1.5 print:text-black">
                  Digital Marketing
                </span>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed print:text-neutral-700">
                  SEO, WordPress, Canva, Landing Page Strategy, Creative Strategy, Funnel Strategy, A/B Testing
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5 print:bg-neutral-50 print:border-neutral-200">
                <span className="text-xs font-semibold text-primary block mb-1.5 print:text-black">
                  AI & Automation
                </span>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed print:text-neutral-700">
                  AI Website & Landing Page Creation, AI Agents, Antigravity, AI-Assisted Marketing Workflows, Marketing Automation
                </p>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-5 flex items-center gap-2 print:text-black">
              <TrendingUp className="w-4 h-4 text-primary print:text-black" />
              Featured Projects
            </h2>

            <div className="space-y-6">
              {/* Project 1 */}
              <div className="bg-[#181818]/80 p-5 sm:p-6 rounded-xl border border-white/5 relative print:bg-neutral-50 print:border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                  <h3 className="text-sm sm:text-base font-semibold text-[#E1E0CC] print:text-black flex items-center gap-2">
                    Dwell Construction — Meta Ads Lead Generation
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 print:border-neutral-300 print:text-neutral-800">
                      Real Client
                    </span>
                  </h3>
                  <span className="text-xs text-gray-500 font-mono print:text-neutral-600">
                    Aug 2026
                  </span>
                </div>

                {/* Key Metrics Chips */}
                <div className="flex flex-wrap gap-2 my-3 print:hidden">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-primary">
                    Spend: ₹3,389.80
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-primary">
                    31 Instant Form Leads (@ ₹66.19)
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-primary">
                    38 WhatsApp Chats (@ ₹35.21)
                  </span>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-300 print:text-neutral-700">
                  <li>
                    Ran a Meta lead-generation campaign across Delhi NCR and Meerut, owning campaign structure, targeting, budgets, creative assignment, lead forms, WhatsApp conversion flow, launch, and optimization.
                  </li>
                  <li>
                    Generated 31 Instant Form leads at ₹66.19/lead and 38 WhatsApp conversations at ₹35.21/conversation from a ₹3,389.80 spend.
                  </li>
                  <li>
                    Client issued roughly 8–10 quotations to prospects sourced from the campaign; final sales/revenue were outside project scope.
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="bg-[#181818]/80 p-5 sm:p-6 rounded-xl border border-white/5 print:bg-neutral-50 print:border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-[#E1E0CC] print:text-black flex items-center gap-2">
                    ThePetNest — Google Display Network TOFU Strategy
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 print:border-neutral-300 print:text-neutral-800">
                      Simulated
                    </span>
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 print:text-neutral-700 leading-relaxed">
                  Planned a top-of-funnel awareness campaign covering audience segmentation, custom intent, geographic targeting, creative angles, budget assumptions, KPIs, landing-page considerations, and remarketing.
                </p>
              </div>

              {/* Project 3 */}
              <div className="bg-[#181818]/80 p-5 sm:p-6 rounded-xl border border-white/5 print:bg-neutral-50 print:border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-[#E1E0CC] print:text-black flex items-center gap-2">
                    Digital Marketing Course — YouTube Lead Generation
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 print:border-neutral-300 print:text-neutral-800">
                      Simulated
                    </span>
                  </h3>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-300 print:text-neutral-700">
                  <li>
                    Planned and configured a Google Ads video lead-generation campaign targeting Delhi, Noida, and Ghaziabad on a simulated ₹1,000/day budget.
                  </li>
                  <li>
                    Researched audience segments, YouTube search intent, and channels, then developed a 30-second video ad concept.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-5 flex items-center gap-2 print:text-black">
              <Briefcase className="w-4 h-4 text-primary print:text-black" />
              Experience
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-[#E1E0CC] print:text-black">
                    Sikharthy Infotech Pvt. Ltd. — <span className="font-normal text-primary print:text-neutral-800">Marketing Intern</span>
                  </h3>
                  <span className="text-xs text-gray-500 font-mono print:text-neutral-600">
                    May 2023 – Jul 2023
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-300 print:text-neutral-700">
                  <li>Researched B2B prospects and supported outreach, pitching, content, and marketing activities.</li>
                  <li>Helped convert 2 key clients through prospecting and marketing support.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-[#E1E0CC] print:text-black">
                    Nblik — <span className="font-normal text-primary print:text-neutral-800">Community Manager / Reporting Manager Intern</span>
                  </h3>
                  <span className="text-xs text-gray-500 font-mono print:text-neutral-600">
                    Apr 2023 – Jun 2023
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-300 print:text-neutral-700">
                  <li>Onboarded 75+ active users in 48 hours and managed community engagement across writers and readers.</li>
                  <li>Promoted to Reporting Manager within 14 days; managed and mentored 10+ community managers and supported retention and reporting initiatives.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION & CERTIFICATIONS (2-column on larger screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Education */}
            <section>
              <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2 print:text-black">
                <GraduationCap className="w-4 h-4 text-primary print:text-black" />
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#E1E0CC] print:text-black">
                      BBA — Sikkim Manipal Institute of Technology (SMU)
                    </h3>
                    <span className="text-xs text-gray-500 font-mono print:text-neutral-600">
                      2021 – 2024
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#E1E0CC] print:text-black">
                      Class XII, Commerce/Business — Doon Senior Secondary School
                    </h3>
                    <span className="text-xs text-gray-500 font-mono print:text-neutral-600">
                      2019 – 2021
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2 print:text-black">
                <Award className="w-4 h-4 text-primary print:text-black" />
                Certifications
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300 print:text-neutral-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary print:bg-black" />
                  Fundamentals of Digital Marketing — Google
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary print:bg-black" />
                  Become an AI-Powered Marketer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary print:bg-black" />
                  Introduction to Prompt Engineering for Generative AI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary print:bg-black" />
                  Master Your Brand Voice — Jack Appleby
                </li>
              </ul>
            </section>
          </div>

          {/* TOOLS & PLATFORMS */}
          <section className="border-t border-white/10 pt-8 print:border-neutral-300">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 print:text-black">
              Tools & Platforms
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Google Ads',
                'Meta Ads Manager',
                'LinkedIn Ads',
                'Google Analytics 4',
                'Google Tag Manager',
                'WordPress',
                'Canva',
                'Antigravity',
                'Spreadsheets',
              ].map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#181818] border border-white/10 text-primary/90 print:bg-neutral-100 print:border-neutral-300 print:text-black"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
