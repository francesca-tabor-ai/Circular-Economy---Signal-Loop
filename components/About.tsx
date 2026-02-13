
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-24 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="w-12 h-1 bg-accent-gradient rounded-full"></div>
        <h2 className="text-6xl font-heading font-extrabold text-gray-950 tracking-tighter leading-tight">
          Culture used to move in moments.<br />
          <span className="text-gray-400">Now it moves in communities.</span>
        </h2>
        <div className="max-w-2xl space-y-6 text-xl text-gray-500 font-light leading-relaxed">
          <p>
            We built SignalLoop because the creator economy is still built on unstable income, disposable content, and algorithms that decide who gets seen and who gets paid.
          </p>
          <p>
            Creators pour identity, creativity, and emotional labour into their work — but most platforms only reward volume and virality. We believe creators deserve something better: <span className="text-gray-950 font-medium">ownership of their audience economy.</span>
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 p-16 rounded-[48px] border border-gray-100">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Our Mission</p>
        <h3 className="text-3xl font-heading font-bold text-gray-950 tracking-tight leading-snug">
          To help creators turn identity, influence, and audience loyalty into predictable, compounding revenue — without sacrificing authenticity or creative freedom.
        </h3>
      </section>

      {/* Values */}
      <section className="space-y-12">
        <h3 className="text-sm font-heading font-bold text-gray-950 uppercase tracking-widest">What We Believe</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-bold text-gray-950">Identity is the new product</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              The strongest creator businesses aren’t built on content volume. They’re built on trust, personality, and cultural influence.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-bold text-gray-950">Fans want to belong</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              The next generation of audiences wants access, status, and participation — not just passive consumption.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-bold text-gray-950">The future is circular</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Value shouldn’t disappear after a post, stream, or launch. It should compound over time for creators and their communities.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="space-y-12 border-t border-gray-100 pt-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h3 className="text-sm font-heading font-bold text-gray-950 uppercase tracking-widest">What We Do</h3>
          </div>
          <div className="md:w-2/3 space-y-8">
            <p className="text-2xl font-light text-gray-900 leading-relaxed">
              SignalLoop gives creators the infrastructure to build their own fan economy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Identity-based membership tiers",
                "Premium experience drops",
                "Fan status progression systems",
                "Ongoing revenue from resale and upgrades"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-emerald-500 font-bold">/</span>
                  <span className="text-gray-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who & Why */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-24 py-12">
        <div className="space-y-6">
          <h3 className="text-sm font-heading font-bold text-gray-950 uppercase tracking-widest">Who We Build For</h3>
          <p className="text-gray-500 leading-relaxed">
            We build for creators who already have an audience — and want to turn it into something sustainable. Creators who want predictable monthly income, deeper fan relationships, and ownership of their brand economy.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-sm font-heading font-bold text-gray-950 uppercase tracking-widest">Why Now</h3>
          <p className="text-gray-500 leading-relaxed">
            The creator economy is entering its next phase. Wave 1 was attention. Wave 2 was subscriptions. The next wave is creator-owned micro-economies. SignalLoop exists to power that shift.
          </p>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="text-center py-24 border-t border-gray-100">
        <h3 className="text-4xl font-heading font-extrabold text-gray-950 tracking-tighter mb-4">
          The Future We’re Building
        </h3>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed italic">
          "A world where creators don’t just monetise content — they own culture, build community wealth, and create lasting economic ecosystems."
        </p>
      </section>
    </div>
  );
};

export default About;
