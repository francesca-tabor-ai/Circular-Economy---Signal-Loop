import React from 'react';
import { ViewType } from '../types';

interface LandingProps {
  onNavigate?: (view: ViewType) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/055/504/802/large_2x/giraffe-silhouette-at-sunset-in-african-savanna-golden-hour-landscapegraphy-free-photo.jpeg)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="text-center space-y-6 mb-12">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Turn your audience into<br />predictable monthly revenue
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-[1.7] font-light">
              Stop relying on algorithms, brand deals, and one-off launches.<br />
              SignalLoop is the circular economy platform for creators — where value compounds through resale, upgrades, and ongoing access.
            </p>
            <p className="text-sm text-white/80 font-normal leading-relaxed">
              Built by engineers who study how systems fail — and how to make them stable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button 
                onClick={() => onNavigate?.(ViewType.CREATOR_DASHBOARD)}
                className="bg-white hover:bg-gray-100 text-gray-950 px-8 py-4 rounded-full text-base font-bold tracking-tight shadow-lg transition-all hover:scale-105"
              >
                Start Building Your Circular Economy
              </button>
              <button 
                onClick={() => onNavigate?.(ViewType.CREATOR_DASHBOARD)}
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-base font-bold tracking-tight transition-all hover:bg-white/10 backdrop-blur-sm"
              >
                See How It Works
              </button>
            </div>
          </div>
          
          {/* Trust Strip */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-center text-sm text-white/80 font-medium">
              Trusted by creators building sustainable income — not chasing viral moments.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-950 mb-6 leading-[1.2]">
            The creator economy has a stability problem
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-[1.7] font-normal">
            Most creator income is built on systems designed for attention — not reliability.
          </p>
          
          <div className="space-y-4 mb-8">
            <p className="text-base text-gray-700 font-medium">You've probably experienced this:</p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                <p className="text-gray-900 font-semibold">Revenue spikes → followed by drop-offs</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                <p className="text-gray-900 font-semibold">Strong engagement → weak conversion</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                <p className="text-gray-900 font-semibold">Loyal audience → unpredictable income</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                <p className="text-gray-900 font-semibold">Months of work → one monetisation window</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-950 text-white p-8 rounded-2xl mt-8">
            <p className="text-lg font-semibold">The problem isn't your audience.</p>
            <p className="text-lg font-semibold mt-2">The problem is the system.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-950 mb-6 leading-[1.2]">
            SignalLoop is the circular economy platform for creators
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-[1.7] font-normal">
            Unlike linear creator economies where value disappears after a sale, SignalLoop builds circular revenue loops. Every launch, membership, and experience continues generating value through resale, upgrades, and secondary markets.
          </p>
          <div className="bg-emerald-50 border-2 border-emerald-200 p-8 rounded-2xl">
            <p className="text-lg font-semibold text-gray-950">
              You don't just launch products.<br />
              You build circular revenue infrastructure that compounds.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-950 mb-12 text-center leading-[1.2]">
            How it works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gray-300 mb-4">1</div>
              <h3 className="font-heading text-xl font-bold text-gray-950 mb-3 leading-[1.3]">
                Build identity membership tiers
              </h3>
              <p className="text-gray-600 text-sm leading-[1.7] font-normal">
                Turn audience loyalty into recurring revenue through status-based membership in your circular economy.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gray-300 mb-4">2</div>
              <h3 className="font-heading text-xl font-bold text-gray-950 mb-3 leading-[1.3]">
                Launch high-value experience drops
              </h3>
              <p className="text-gray-600 text-sm leading-[1.7] font-normal">
                Monetise access, not just content. Private sessions. Limited experiences. Cultural moments that retain value in the circular economy.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gray-300 mb-4">3</div>
              <h3 className="font-heading text-xl font-bold text-gray-950 mb-3 leading-[1.3]">
                Create fan status progression
              </h3>
              <p className="text-gray-600 text-sm leading-[1.7] font-normal">
                Fans unlock deeper access over time — increasing retention and lifetime value in your circular economy.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gray-300 mb-4">4</div>
              <h3 className="font-heading text-xl font-bold text-gray-950 mb-3 leading-[1.3]">
                Earn from resale and upgrades
              </h3>
              <p className="text-gray-600 text-sm leading-[1.7] font-normal">
                Your past launches continue generating revenue as fans trade and upgrade access — the core of circular economy value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-950 mb-12 text-center leading-[1.2]">
            Why creators move to SignalLoop
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <h3 className="font-heading text-xl font-bold text-gray-950 mb-3 leading-[1.3]">
                Predictable monthly revenue
              </h3>
              <p className="text-gray-600 text-sm leading-[1.7] font-normal">
                Build income you can forecast — not hope for.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-heading text-xl font-bold text-gray-950 mb-3">
                Higher Revenue Per Fan
              </h3>
              <p className="text-gray-600 text-sm">
                Monetise belonging, not just views.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-heading text-xl font-bold text-gray-950 mb-3">
                Lower Churn Communities
              </h3>
              <p className="text-gray-600 text-sm">
                Status and progression keep fans invested.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-heading text-xl font-bold text-gray-950 mb-3 leading-[1.3]">
                Circular revenue loops
              </h3>
              <p className="text-gray-600 text-sm leading-[1.7] font-normal">
                Past launches keep generating income through resale, upgrades, and secondary markets — true circular economy value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-950 mb-6 leading-[1.2]">
            Built with systems thinking — not growth hacks
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl leading-[1.7] font-normal">
            SignalLoop was founded by Adrian Kovač, a systems reliability engineer who worked in environments where failure isn't an option — healthcare systems, regulated manufacturing, and lifecycle traceability programs.
          </p>
          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl">
            <p className="text-lg font-semibold text-gray-950 italic">
              His core belief:
            </p>
            <p className="text-xl font-bold text-gray-950 mt-4">
              "If you don't understand where something has been, you cannot predict how it will behave."
            </p>
            <p className="text-base text-gray-700 mt-6">
              SignalLoop applies that thinking to creator economies — building platforms with memory, traceability, and predictable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-950 mb-12 text-center leading-[1.2]">
            Creators on SignalLoop report
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center">
              <p className="text-gray-900 font-semibold">More stable monthly income</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center">
              <p className="text-gray-900 font-semibold">Higher fan retention</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center">
              <p className="text-gray-900 font-semibold">Less pressure to constantly produce content</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center">
              <p className="text-gray-900 font-semibold">Stronger community loyalty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-950 mb-6 leading-[1.2]">
                Who this is for
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-[1.7] font-normal">
                SignalLoop is built for creators who:
              </p>
              <ul className="space-y-3">
                {['Already have an audience', 'Want predictable income', 'Want deeper fan relationships', 'Want to build something long-term', 'Are tired of chasing algorithms'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-xl mt-0.5">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-950 mb-6 leading-[1.2]">
                Who this is not for
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-[1.7] font-normal">
                If you want:
              </p>
              <ul className="space-y-3">
                {['Viral-only growth hacks', 'One-off product launches', 'Ad-driven content income'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gray-400 font-bold text-xl mt-0.5">✗</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 font-semibold mt-6">
                SignalLoop probably isn't for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform AI Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-950 mb-6 leading-[1.2]">
            Meet Adrian — founder AI assistant
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-[1.7] font-normal">
            Every creator on SignalLoop gets access to Adrian, our founder AI assistant.
          </p>
          <div className="bg-gray-950 text-white p-8 rounded-2xl">
            <p className="text-lg font-semibold mb-4">Ask anything:</p>
            <ul className="space-y-2 text-gray-200">
              <li>• How to structure membership tiers</li>
              <li>• How to reduce churn</li>
              <li>• How to price experiences</li>
              <li>• How to build long-term revenue loops</li>
            </ul>
            <p className="text-base text-gray-300 mt-6 italic">
              No hype. Just systems thinking applied to circular creator economics.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-[1.2]">
            Build a circular creator economy that doesn't break
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-[1.7] font-normal">
            Your audience already trusts you.<br />
            SignalLoop helps you build a circular economy where value compounds through resale, upgrades, and ongoing access — month after month.
          </p>
          <button 
            onClick={() => onNavigate?.(ViewType.CREATOR_DASHBOARD)}
            className="bg-white hover:bg-gray-100 text-gray-950 px-10 py-5 rounded-full text-lg font-bold tracking-tight shadow-lg transition-all hover:scale-105"
          >
            Start Building Your Circular Economy
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
