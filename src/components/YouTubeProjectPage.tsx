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
  Check,
  Play,
  Film,
  AlertTriangle,
} from 'lucide-react';
import { Navbar } from './Navbar';

interface YouTubeProjectPageProps {
  onBack: () => void;
}

export const YouTubeProjectPage: React.FC<YouTubeProjectPageProps> = ({ onBack }) => {
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

        <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
          Simulated Project
        </span>
      </div>

      {/* Main Case Study Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#101010] border border-white/10 rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative red/amber glow for YouTube branding */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* PROJECT HERO HEADER */}
          <header className="border-b border-white/10 pb-8 mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-red-400 font-semibold flex items-center gap-1.5">
                <Play className="w-3 h-3 fill-red-400" />
                Google Ads • YouTube Video • Lead Generation
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-mono">
                Delhi, Noida & Ghaziabad
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] mb-2">
              Simulated YouTube Lead Generation Campaign
            </h1>
            <p className="text-primary text-base sm:text-lg md:text-xl font-medium mb-3">
              Digital Marketing Course — Local Education & Training Business
            </p>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-3xl">
              A video-first acquisition strategy structured around direct lead generation, moving prospective students from career frustration to booking a free demo class.
            </p>

            {/* Quick Strategy Scope Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Project Type
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  Simulated Portfolio
                </span>
              </div>

              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Platform
                </span>
                <span className="text-xs sm:text-sm font-bold text-red-400">
                  Google Ads / YouTube
                </span>
              </div>

              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Daily Budget
                </span>
                <span className="text-xs sm:text-sm font-bold text-primary font-mono">
                  ₹1,000 / day
                </span>
              </div>

              <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                  Target Locations
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#E1E0CC]">
                  Delhi, Noida, Ghaziabad
                </span>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-lg bg-red-500/5 border border-red-500/20 text-xs text-red-200/90 font-light">
              <strong>Important Disclaimer:</strong> This is a simulated campaign created to demonstrate my approach to YouTube lead generation. No live campaign performance or conversion results are being claimed.
            </div>

            <div className="mt-3 p-3 rounded-lg bg-[#181818] border border-white/5 text-xs text-gray-400">
              <strong className="text-gray-300">My Role:</strong> Campaign planning, audience research, campaign setup, ad messaging and video creative planning. Built and configured up to pre-launch review.
            </div>
          </header>

          {/* 1. PROJECT OVERVIEW */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-primary" />
              1. Project Overview
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-3.5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                The objective of this project was to develop a YouTube lead-generation campaign for a digital marketing training institute targeting people in Delhi, Noida and Ghaziabad who may be interested in learning digital marketing for career development, employment or business purposes.
              </p>
              <p>
                Rather than treating YouTube simply as a video-awareness channel, I structured the campaign around a <strong className="text-white font-medium">lead-generation objective</strong>, with the intended conversion being a prospective student's enquiry or demo-class booking.
              </p>
              <p className="text-gray-400">
                The project covered the complete lifecycle from audience research through ad creation and Google Ads setup.
              </p>
            </div>
          </section>

          {/* 2. CAMPAIGN OBJECTIVE */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              2. Campaign Objective
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-white font-medium">
                Primary objective: Generate leads for a digital marketing course through YouTube video advertising.
              </p>

              {/* Conversion Pipeline Flow */}
              <div className="bg-black/50 p-4 rounded-xl border border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary block mb-2 font-semibold">
                  Proposed Conversion Journey
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-300">
                  <span className="px-2.5 py-1 rounded bg-white/5 text-white">Target audience</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">YouTube video ad</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-white">Landing page</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20">Free demo / enquiry</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">Lead</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                The creative was designed to move the viewer from a recognizable problem—difficulty finding opportunities—to a specific solution: acquiring practical digital marketing skills.
              </p>
            </div>
          </section>

          {/* 3. TARGET MARKET */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              3. Target Market
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 space-y-2">
                <span className="text-xs font-semibold text-primary block uppercase tracking-wider font-mono">
                  Geographic Targeting
                </span>
                <p className="text-sm font-medium text-white">
                  Delhi, Noida and Ghaziabad
                </p>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  These locations were selected to keep the simulated campaign focused on a defined local market rather than targeting India broadly.
                </p>
              </div>

              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 space-y-2">
                <span className="text-xs font-semibold text-primary block uppercase tracking-wider font-mono">
                  Language Mix
                </span>
                <p className="text-sm font-medium text-white">
                  English + Hindi
                </p>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  The language mix was intended to reflect the local audience and allow the advertisement to communicate with both English- and Hindi-speaking prospects.
                </p>
              </div>
            </div>
          </section>

          {/* 4. AUDIENCE STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              4. Audience Strategy
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-light">
              I approached the audience from three different targeting perspectives rather than relying on one audience type:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Custom Segments */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-400 font-mono uppercase tracking-wider">
                      Custom Segments
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono">
                      High Intent
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-light mb-3">
                    Built around digital-marketing learning and career intent:
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Learn Digital Marketing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>SEO Course</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Google Ads Training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Meta Ads Course</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Performance Marketing</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-400 font-light">
                  Captures people actively showing interest in learning marketing skills.
                </div>
              </div>

              {/* In-Market Audiences */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider">
                      In-Market Audiences
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                      Commercial Intent
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-light mb-3">
                    Broad commercial, educational and career intent:
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Business Services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Education</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Job Seekers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Small Business Owners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Marketing & Advertising Services</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-400 font-light">
                  Introduces broader career and business development interest.
                </div>
              </div>

              {/* Affinity Audiences */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary font-mono uppercase tracking-wider">
                      Affinity Audiences
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-mono">
                      Broader Reach
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-light mb-3">
                    Lifestyle and professional profile themes:
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Technology Enthusiasts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Entrepreneurs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Students</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Business Professionals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Startup Owners</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-400 font-light">
                  Explores adjacent groups whose backgrounds make training relevant.
                </div>
              </div>
            </div>
          </section>

          {/* 5. YOUTUBE SEARCH-INTENT RESEARCH */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Search className="w-4 h-4 text-primary" />
              5. YouTube Search-Intent Research
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                I researched YouTube-related search themes that could help identify people actively consuming digital-marketing learning content.
              </p>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                  Audience-Intent Signals Researched:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Digital Marketing Course',
                    'Learn Google Ads',
                    'SEO Course',
                    'Meta Ads Training',
                    'PPC Course',
                    'Digital Marketing Classes',
                    'Google Ads Tutorial',
                    'Online Marketing Course',
                    'Marketing Certification',
                    'AI Digital Marketing',
                  ].map((query, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-primary"
                    >
                      {query}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 font-light">
                <strong className="text-white font-medium">Strategic Principle:</strong> These were treated as <em>audience-intent signals</em>, rather than positioning them as Google Search keywords. Someone actively consuming tutorials and courses around Google Ads, SEO or digital marketing is much closer to consideration than someone with only a general interest in technology.
              </div>
            </div>
          </section>

          {/* 6. YOUTUBE CHANNEL & CONTENT RESEARCH */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Film className="w-4 h-4 text-primary" />
              6. YouTube Channel & Content Research
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                I researched channels and publishers relevant to digital marketing education to understand where the target audience consumes content:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {[
                  'WsCube Tech',
                  'Surfside PPC',
                  'Neil Patel',
                  'Ahrefs',
                  'Google Ads',
                  'Google Analytics',
                  'HubSpot',
                  'Semrush',
                  'Simplilearn',
                  'Think with Google',
                ].map((channel, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-black/40 rounded-lg border border-white/5 text-center font-mono text-xs text-[#E1E0CC]"
                  >
                    {channel}
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 font-light leading-relaxed">
                The purpose was to identify the type of content already attracting the target audience and potential contextual/placement opportunities. Rather than automatically targeting every channel, the research was used to inform placement decisions and understand media consumption habits.
              </p>
            </div>
          </section>

          {/* 7 & 8. CAMPAIGN SETUP & AD GROUP */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-primary" />
              7 & 8. Campaign Setup & Ad Group Configuration
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                I built the campaign environment inside Google Ads rather than limiting the project to a written media plan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-black/40 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                    Dedicated Ad Group
                  </span>
                  <span className="text-xs font-mono font-bold text-white">
                    AG_Digital_Marketing_Course
                  </span>
                  <p className="text-[11px] text-gray-400 mt-1 font-light">
                    Configured with selected YouTube placements/surfaces and custom marketing intent.
                  </p>
                </div>

                <div className="p-3.5 bg-black/40 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                    Audience Expansion
                  </span>
                  <span className="text-xs font-mono font-bold text-primary">
                    Optimised Targeting: Enabled
                  </span>
                  <p className="text-[11px] text-gray-400 mt-1 font-light">
                    Allows Google to algorithmically discover incremental high-converting prospects beyond manual segments.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/5 text-xs text-gray-300 font-light">
                <strong className="text-white font-medium">Testing consideration:</strong> The selected audience provides the initial targeting anchor, while optimised targeting allows the algorithm to scale reach dynamically where conversion likelihood is high.
              </div>
            </div>
          </section>

          {/* 9. CREATIVE STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              9. Creative Strategy
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Rather than opening with a generic course advertisement, the creative starts with a pain point that the intended audience could immediately recognize. The video follows a rigorous 5-step narrative framework:
              </p>

              {/* Framework Pills */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-primary/90 bg-black/40 p-4 rounded-xl border border-white/10">
                <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-300 border border-red-500/20">Problem</span>
                <span className="text-gray-500">→</span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-white">Demand</span>
                <span className="text-gray-500">→</span>
                <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">Solution</span>
                <span className="text-gray-500">→</span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Benefits</span>
                <span className="text-gray-500">→</span>
                <span className="px-2.5 py-1 rounded bg-primary/20 text-primary border border-primary/30 font-bold">CTA</span>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-white/10 italic text-primary/90 text-xs sm:text-sm">
                “Core message: Practical digital marketing skills can create more career opportunities.”
              </div>
            </div>
          </section>

          {/* 10 & 11. 30-SECOND VIDEO AD CONCEPT & STORYBOARD */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Film className="w-4 h-4 text-primary" />
              10 & 11. 30-Second Video Ad Concept & Storyboard
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-light">
              The storyboard was developed as a complete five-scene production sequence specifying visual direction, voice-over, on-screen text, CTA/graphic treatment, and timing:
            </p>

            <div className="space-y-4">
              {/* Scene 1 */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white uppercase font-mono">
                      Scene 1 — Hook
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                      0–5 sec
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">STOP SCROLL</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-gray-300">
                    <strong className="text-primary font-medium">Visual:</strong> A young job seeker receiving rejected/unsuccessful job application notifications on phone and laptop.
                  </p>
                  <p className="text-white italic bg-black/40 p-2.5 rounded-lg border border-white/5">
                    <strong>Voice-over:</strong> “Still searching for a high-paying job but getting no responses?”
                  </p>
                  <p className="text-red-400 font-mono text-xs">
                    <strong>On-screen message:</strong> NO PRACTICAL SKILLS = LIMITED OPPORTUNITIES
                  </p>
                  <p className="text-gray-400 text-xs font-light pt-1">
                    <strong>Purpose:</strong> Connect immediately with the viewer's career frustration rather than beginning with the institute itself.
                  </p>
                </div>
              </div>

              {/* Scene 2 */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white uppercase font-mono">
                      Scene 2 — Problem / Market Demand
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      5–10 sec
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">MARKET OPPORTUNITY</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-gray-300">
                    <strong className="text-primary font-medium">Visual:</strong> Digital marketing job listings and animated skills-demand graphic.
                  </p>
                  <p className="text-white italic bg-black/40 p-2.5 rounded-lg border border-white/5">
                    <strong>Voice-over:</strong> “Top businesses are actively hiring Digital Marketing experts with practical skills.”
                  </p>
                  <p className="text-amber-300 font-mono text-xs">
                    <strong>Skills shown:</strong> SEO, Google Ads, Meta Ads, AI Tools.
                  </p>
                  <p className="text-gray-400 text-xs font-light pt-1">
                    <strong>Purpose:</strong> Shift from the individual's pain point to the actual market demand.
                  </p>
                </div>
              </div>

              {/* Scene 3 */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white uppercase font-mono">
                      Scene 3 — Solution
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      10–20 sec
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">PRACTICAL TRAINING</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-gray-300">
                    <strong className="text-primary font-medium">Visual:</strong> Modern training environment, live Google Ads dashboards, and students actively managing projects.
                  </p>
                  <p className="text-white italic bg-black/40 p-2.5 rounded-lg border border-white/5">
                    <strong>Voice-over:</strong> “Join our hands-on course and master SEO, Google Ads, Meta Ads, and AI Tools on real live projects.”
                  </p>
                  <p className="text-blue-300 font-mono text-xs">
                    <strong>Supporting messaging:</strong> 100% Practical Training • Live Industry Projects • AI Marketing Tools
                  </p>
                  <p className="text-gray-400 text-xs font-light pt-1">
                    <strong>Purpose:</strong> Position the course around hands-on application rather than boring theory.
                  </p>
                </div>
              </div>

              {/* Scene 4 */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white uppercase font-mono">
                      Scene 4 — Benefits
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      20–25 sec
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">CREDIBILITY & CAREER</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-gray-300">
                    <strong className="text-primary font-medium">Visual:</strong> Industry certification badges, resume building sessions, and interview preparation imagery.
                  </p>
                  <p className="text-white italic bg-black/40 p-2.5 rounded-lg border border-white/5">
                    <strong>Voice-over:</strong> “Get industry certifications, resume building, and placement support.”
                  </p>
                  <p className="text-emerald-300 font-mono text-xs">
                    <strong>Supporting messaging:</strong> Recognized Certifications • Placement Assistance • 1-on-1 Mentorship
                  </p>
                  <p className="text-gray-400 text-xs font-light pt-1">
                    <strong>Purpose:</strong> Provide clear risk-reversal and tangible career reasons to choose the academy.
                  </p>
                </div>
              </div>

              {/* Scene 5 */}
              <div className="bg-[#181818] p-5 rounded-xl border border-primary/30 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary uppercase font-mono">
                      Scene 5 — Call to Action
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                      25–30 sec
                    </span>
                  </div>
                  <span className="text-[10px] text-primary font-mono font-bold">CONVERSION</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-gray-300">
                    <strong className="text-primary font-medium">Visual:</strong> Digital Growth Institute branding, countdown badge, and prominent CTA overlay.
                  </p>
                  <p className="text-white italic bg-black/40 p-2.5 rounded-lg border border-white/5">
                    <strong>Voice-over:</strong> “Seats are filling fast! Click below to book your FREE live demo class today!”
                  </p>
                  <div className="p-2.5 bg-primary/10 border border-primary/30 rounded-lg inline-block">
                    <span className="text-xs font-bold font-mono text-primary">
                      CTA: BOOK DEMO NOW
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs font-light pt-1">
                    <strong>Purpose:</strong> Low-friction next step enabling instant intent without payment resistance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 12. AD MESSAGING */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              12. Ad Messaging Architecture
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light">
                The ad copy was designed around three core value propositions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-xs font-bold text-primary block mb-1">
                    1. Career Opportunity
                  </span>
                  <p className="text-xs text-gray-300 font-light">
                    Learn skills that real businesses are actively hiring for.
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-xs font-bold text-primary block mb-1">
                    2. Practical Learning
                  </span>
                  <p className="text-xs text-gray-300 font-light">
                    Learn by working on live projects rather than textbook theory.
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-xs font-bold text-primary block mb-1">
                    3. Low-Friction Entry
                  </span>
                  <p className="text-xs text-gray-300 font-light">
                    Experience a free live demo class before committing to the course.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2 text-xs text-gray-300 font-mono">
                <span className="text-white">Why should I care?</span>
                <span className="text-gray-500">→</span>
                <span className="text-white">Why this course?</span>
                <span className="text-gray-500">→</span>
                <span className="text-primary font-bold">What should I do next?</span>
              </div>
            </div>
          </section>

          {/* 13. CONVERSION STRATEGY */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              13. Conversion Strategy & Funnel
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                The intended conversion was a qualified lead, with the <strong className="text-white font-medium">free demo class</strong> serving as the primary lead magnet.
              </p>

              <div className="bg-black/50 p-4 rounded-xl border border-white/10 text-xs font-mono space-y-2">
                <span className="text-gray-400 block uppercase text-[10px] tracking-wider">
                  Full Funnel Flow
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-primary">
                  <span className="text-gray-300">Cold audience</span>
                  <span className="text-gray-500">→</span>
                  <span>YouTube video ad</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-gray-300">Interested viewer</span>
                  <span className="text-gray-500">→</span>
                  <span>Landing page</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-amber-300">Free demo class</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-emerald-400 font-bold">Lead</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-gray-300">Follow-up / remarketing</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-primary font-bold">Course enrolment</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 font-light leading-relaxed">
                The free demo is critical because asking a cold YouTube viewer to immediately purchase a high-ticket educational course introduces massive friction and tanked conversion rates.
              </p>
            </div>
          </section>

          {/* 14. BUDGET & BIDDING */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-primary" />
              14. Budget & Bidding Approach
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                    Simulated Budget
                  </span>
                  <span className="text-base sm:text-lg font-bold font-mono text-primary">
                    ₹1,000 / day
                  </span>
                  <p className="text-xs text-gray-400 mt-1 font-light">
                    Used as the baseline testing budget for regional distribution.
                  </p>
                </div>

                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">
                    Bidding Philosophy
                  </span>
                  <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">
                    Maximize Conversions
                  </span>
                  <p className="text-xs text-gray-400 mt-1 font-light">
                    Optimizes toward lead generation rather than vanity video views.
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Because this campaign was not actually launched, there is no basis for claiming that the bidding strategy generated conversions or achieved a particular CPA.
              </p>
            </div>
          </section>

          {/* 15. PRE-LAUNCH ANALYSIS */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              15. Pre-Launch Diagnostics & Analysis
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-amber-500/20 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light">
                The Google Ads review stage highlighted two critical diagnostic issues that must be addressed before treating the campaign as launch-ready:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <span className="text-xs font-bold text-amber-300 block mb-1 uppercase font-mono">
                    Issue 1: Unverified Conversion Tracking
                  </span>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    Google Ads showed that the selected conversion actions were unverified. Conversion tracking must be validated in Google Tag Manager / GA4 before launch so the algorithm has reliable, high-integrity lead signals to optimize against.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <span className="text-xs font-bold text-amber-300 block mb-1 uppercase font-mono">
                    Issue 2: Budget Limitation Flag
                  </span>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    Google Ads flagged the ₹1,000/day budget as potentially restrictive for video lead generation in competitive urban clusters. Rather than simply increasing budget, the strategy recommends first proving conversion intent on the baseline and scaling strictly on performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 16. MEASUREMENT FRAMEWORK */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              16. Measurement Framework (3 Evaluation Tiers)
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-light">
              If launched, the campaign would be evaluated across three distinct operational levels:
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Evaluation Level</th>
                    <th className="py-3 px-4">Key Metrics</th>
                    <th className="py-3 px-4">Strategic Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300 font-light">
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">1. Delivery Tier</td>
                    <td className="py-3 px-4 font-mono text-primary text-xs">
                      Impressions, reach, frequency, view rate, video engagement
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Determine delivery efficiency and video hook resonance
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">2. Traffic Tier</td>
                    <td className="py-3 px-4 font-mono text-primary text-xs">
                      CTR, clicks, landing-page sessions, cost per click (CPC)
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Evaluate audience intent to leave YouTube and explore course
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-semibold text-white">3. Business Outcomes</td>
                    <td className="py-3 px-4 font-mono text-emerald-400 text-xs font-semibold">
                      Leads, CPL, demo bookings, qualified prospects, enrolments
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Measure bottom-line ROI rather than vanity video views
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3.5 bg-[#181818] rounded-lg border border-white/5 text-xs text-gray-300 font-light">
              <strong className="text-primary font-medium">Core Principle:</strong> The most important distinction is between <em>platform activity</em> and <em>actual business outcomes</em>. A high view count does not mean the campaign succeeded if demo bookings fail to materialize.
            </div>
          </section>

          {/* 17. OPTIMIZATION PLAN */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-primary" />
              17. Post-Launch Optimization Plan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">
                  Creative Iteration
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Test four distinct hook angles: career-opportunity, salary/job-frustration, practical hands-on skills, and career-transition.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">
                  Audience Segment Comparison
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Compare performance across custom intent, in-market, affinity layers, and Google's optimised targeting expansion.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-primary block mb-1">
                  Geographic Reallocation
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Compare CPL and demo attendance rates between Delhi, Noida, and Ghaziabad to concentrate ad spend.
                </p>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl border border-white/5">
                <span className="text-xs font-semibold text-emerald-400 block mb-1">
                  Conversion Quality over Cheap CPL
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Do not optimize purely for the cheapest lead: a ₹200 lead who ghosted the demo is far less valuable than a ₹400 lead who attends and enrols.
                </p>
              </div>
            </div>
          </section>

          {/* 18. WHAT I WOULD IMPROVE BEFORE LAUNCH */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-primary" />
              18. Pre-Launch Improvements & Landing Page Audit
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <div className="border-l-2 border-red-500 pl-3">
                <strong className="text-white text-xs block">Priority 1: Conversion-Tracking Validation</strong>
                <p className="text-xs text-gray-300 font-light mt-0.5">
                  The campaign should not be considered ready for performance optimization until the lead conversion action is verified.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-primary block mb-2 font-mono uppercase tracking-wider">
                  6-Point Landing Page Pre-Flight Checklist:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-light">
                  <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-white/5">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Mobile page load speed audit</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-white/5">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Clarity of the course proposition above the fold</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-white/5">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Visibility & prominence of the free demo CTA</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-white/5">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Industry certifications & mentor trust signals</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-white/5">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Form friction reduction (minimal fields)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-white/5">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Message match between video promise & landing page</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 19. KEY LEARNING */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              19. Key Learnings
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-3.5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                This project reinforced that launching a high-converting YouTube campaign is far more than just uploading a video ad:
              </p>
              <div className="p-3.5 bg-black/60 rounded-xl border border-white/10 text-xs font-mono text-primary text-center">
                Audience → Message → Creative → Landing Page → Conversion → Measurement
              </div>
              <p>
                The primary takeaway was that <strong className="text-white">creative and targeting must work in total alignment</strong>. A career-focused audience responds differently to a “job opportunity” hook than a small business owner does to a “grow your business” message.
              </p>
            </div>
          </section>

          {/* 20. PROJECT OUTCOME & CAPABILITIES */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              20. What This Project Demonstrates
            </h2>
            <div className="bg-[#181818] p-5 sm:p-6 rounded-xl border border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 font-light">
                Because this was a simulated campaign, I do not present fabricated impressions, clicks, leads, CPA, or ROAS. Instead, the deliverable demonstrates practical execution skills across:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300 font-light">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Planning an end-to-end YouTube lead-generation campaign</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Audience research & 3-perspective segmentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Translating search intent into targeting signals</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Building and configuring a Google Ads video campaign</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Developing multi-proposition ad messaging</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Writing a complete 30-second 5-scene video storyboard</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Structuring a low-friction demo conversion funnel</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Identifying pre-launch tracking and budget constraints</span>
                </div>
              </div>
            </div>
          </section>

          {/* CAMPAIGN CONFIGURATION SNAPSHOT TABLE */}
          <section className="mb-12">
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-primary" />
              Campaign Configuration Snapshot
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#181818] text-primary uppercase font-mono text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Setting</th>
                    <th className="py-3 px-4">Configuration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Campaign</td>
                    <td className="py-3 px-4 font-mono text-primary">YT_Digital_Marketing_Course_July2026</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Objective</td>
                    <td className="py-3 px-4 font-mono text-emerald-400">Leads</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Campaign type</td>
                    <td className="py-3 px-4 font-mono text-gray-300">Video</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Daily budget</td>
                    <td className="py-3 px-4 font-mono text-primary font-bold">₹1,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Bidding</td>
                    <td className="py-3 px-4 font-mono text-emerald-400">Maximize Conversions</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Location</td>
                    <td className="py-3 px-4 font-light text-gray-300">Delhi, Noida, Ghaziabad</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Languages</td>
                    <td className="py-3 px-4 font-light text-gray-300">English + Hindi</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Ad format</td>
                    <td className="py-3 px-4 font-mono text-primary">Video Ad</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-white">Ad group</td>
                    <td className="py-3 px-4 font-mono text-white font-medium">AG_Digital_Marketing_Course</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* PORTFOLIO POSITIONING & TOOLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-[#181818] p-5 rounded-xl border border-white/5">
              <span className="text-xs font-semibold text-primary block uppercase font-mono mb-2">
                Portfolio Positioning
              </span>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                <strong className="text-white">Primary capability:</strong> YouTube / Google Ads lead-generation planning and video creative strategy. Complements real-client Meta lead generation by demonstrating mastery of video-first acquisition on Google.
              </p>
            </div>

            <div className="bg-[#181818] p-5 rounded-xl border border-white/5">
              <span className="text-xs font-semibold text-primary block uppercase font-mono mb-2">
                Tools & Platforms
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[#E1E0CC]">
                  Google Ads
                </span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-red-400">
                  YouTube
                </span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[#E1E0CC]">
                  Google Ads Audience Research
                </span>
                <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-primary">
                  Video Creative Planning
                </span>
              </div>
            </div>
          </div>

          {/* PROJECT STATUS BANNER */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-primary block mb-1">
              PROJECT STATUS: SIMULATED PROJECT
            </span>
            <p className="text-xs text-gray-400 font-light">
              This campaign was built and configured up to pre-launch review. No live media spend or campaign results are claimed.
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
