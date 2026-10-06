'use client';

import { useState, FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Code, Copy, Check, ArrowUpRight, Send, User, MessageSquare, Sparkles, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import InteractiveHeading from './InteractiveHeading';

const CONTACT_DIRECTORY = [
  {
    label: 'Email',
    value: 'parthchampaneri45@gmail.com',
    type: 'copy',
    href: 'mailto:parthchampaneri45@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/parth-champaneri-969133267',
    type: 'link',
    href: 'https://www.linkedin.com/in/parth-champaneri-969133267',
  },
  {
    label: 'GitHub',
    value: 'github.com/Parthchampaneri23',
    type: 'link',
    href: 'https://github.com/Parthchampaneri23',
  },
  {
    label: 'Résumé',
    value: 'Download Resume (PDF)',
    type: 'link',
    href: 'https://drive.google.com/file/d/1-R3_GSb9txf3x2GsvVymlWqfPFvCiG0k/view?usp=sharing',
  },
];

const SOCIALS = [
  {
    name: 'GitHub',
    href: 'https://github.com/Parthchampaneri23',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/parth-champaneri-969133267',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: 'Projects',
    href: '#work',
    svg: <Code className="w-4 h-4" />,
  },
  {
    name: 'Email',
    href: 'mailto:parthchampaneri45@gmail.com',
    svg: <Mail className="w-4 h-4" />,
  },
];

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#E4311C', '#3F6FFF', '#3DDC84'],
    });

    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E4311C', '#3F6FFF', '#FFFFFF'],
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 lg:px-16 border-t border-[var(--line)] bg-[var(--bg-2)]/40">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono text-xs font-semibold text-[var(--red)] uppercase tracking-widest block mb-2">
          {"// 07. GET IN TOUCH"}
        </span>
        <InteractiveHeading
          text="LET'S TALK."
          className="text-5xl sm:text-7xl lg:text-8xl"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Profession Headline & Statement */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--red)]/10 border border-[var(--red)]/30 text-[var(--red)] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Mern Stack Developer
          </div>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--text)] leading-[1.1] tracking-tight mb-6">
            Ready to build scalable <span className="text-[var(--red)]">MERN &amp; Next.js</span> web applications or integrate AI tools?
          </h3>
          <p className="text-base text-[var(--muted)] font-sans leading-relaxed mb-6">
            I specialize in crafting high-performance React/Next.js frontends, resilient Node.js &amp; Express APIs, and scalable MongoDB databases. Open for full-time Mern Stack &amp; Software Engineering opportunities.
          </p>

          <div className="flex flex-col gap-3 font-mono text-xs text-[var(--muted)] pt-2 border-t border-[var(--line)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-time Roles &amp; Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--red)]">📍</span>
              <span>DAHANU, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Personal Contact Channels Directory */}
        <div className="lg:col-span-7 bg-[var(--panel)] border border-[var(--line)] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="space-y-4">
            {CONTACT_DIRECTORY.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl bg-[var(--panel-2)]/60 border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-[var(--red)]/40 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-xs font-semibold text-[var(--red)] uppercase tracking-wider block mb-1">
                    {item.label}
                  </span>

                  <div className="font-sans font-bold text-base sm:text-lg text-[var(--text)] tracking-tight break-all">
                    {item.type === 'link' || item.type === 'download' ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="hover:text-[var(--red)] transition-colors inline-flex items-center gap-1.5 flex-wrap"
                      >
                        <span>{item.value}</span>
                        <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--red)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all inline-block shrink-0" />
                      </a>
                    ) : (
                      <span className="select-all">{item.value}</span>
                    )}
                  </div>
                </div>

                {/* Right Action Button */}
                <div className="flex-none pt-1 sm:pt-0">
                  {item.type === 'copy' && (
                    <button
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--line)] bg-[var(--panel)] hover:border-[var(--red)] hover:text-[var(--red)] text-xs font-mono font-semibold text-[var(--text)] transition-all shadow-sm"
                    >
                      {copiedKey === item.label ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span className="text-emerald-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[var(--muted)]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  )}

                  {item.type === 'link' && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--line)] bg-[var(--panel)] hover:border-[var(--red)] hover:text-[var(--red)] text-xs font-mono font-semibold text-[var(--text)] transition-all shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4 text-[var(--muted)]" />
                      <span>Open Link</span>
                    </a>
                  )}

                  {item.type === 'download' && (
                    <a
                      href={item.href}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--red)] text-[var(--on-red)] hover:opacity-90 text-xs font-mono font-semibold transition-all shadow-md shadow-[var(--red)]/20"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Get PDF</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CONTACT FORM SECTION --- */}
      <div className="mt-20 pt-16 border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto bg-[var(--panel)] border border-[var(--line)] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs font-semibold text-[var(--red)] uppercase tracking-widest block mb-1">
                {"// SEND A DIRECT MESSAGE"}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[var(--text)]">
                Start a Conversation
              </h3>
            </div>
            <p className="font-mono text-xs text-[var(--muted)] bg-[var(--panel-2)] px-3 py-1.5 rounded-lg border border-[var(--line)]">
              ⚡ Typical Response Time: &lt; 24h
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display font-bold text-2xl text-[var(--text)]">
                Message Received!
              </h4>
              <p className="text-[var(--muted)] max-w-md text-sm font-sans">
                Thank you for reaching out. I&apos;ll review your requirements and get back to you shortly at <span className="text-[var(--text)] font-mono font-semibold">{formData.email}</span>.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-6 px-6 py-2.5 rounded-full border border-[var(--line)] bg-[var(--panel-2)] text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text)] hover:border-[var(--red)] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                    Your Name <span className="text-[var(--red)]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[var(--bg-2)] border border-[var(--line)] text-[var(--text)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--red)] focus:ring-1 focus:ring-[var(--red)] transition-all font-sans text-sm"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                    Email Address <span className="text-[var(--red)]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[var(--bg-2)] border border-[var(--line)] text-[var(--text)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--red)] focus:ring-1 focus:ring-[var(--red)] transition-all font-sans text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block font-mono text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  Subject
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Mern Stack Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[var(--bg-2)] border border-[var(--line)] text-[var(--text)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--red)] focus:ring-1 focus:ring-[var(--red)] transition-all font-sans text-sm"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block font-mono text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  Project Details / Message <span className="text-[var(--red)]">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-4 top-4 text-[var(--muted)]" />
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project goals, stack preferences, or employment opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[var(--bg-2)] border border-[var(--line)] text-[var(--text)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--red)] focus:ring-1 focus:ring-[var(--red)] transition-all font-sans text-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[var(--red)] text-[var(--on-red)] font-sans font-bold text-sm tracking-tight overflow-hidden shadow-lg shadow-[var(--red)]/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Social Links Matrix */}
      <div className="mt-20 pt-12 border-t border-[var(--line)] grid grid-cols-2 sm:grid-cols-4 gap-4">
        {SOCIALS.map((soc) => (
          <a
            key={soc.name}
            href={soc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[var(--panel)] border border-[var(--line)] text-[var(--text)] hover:border-[var(--red)] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="text-[var(--muted)] group-hover:text-[var(--red)] transition-colors">
                {soc.svg}
              </div>
              <span className="font-sans font-bold text-sm">{soc.name}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ))}
      </div>

      {/* Footer copyright */}
      <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--muted)]">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[var(--red)] text-[var(--on-red)] flex items-center justify-center font-display font-black text-xs">
            PC
          </div>
          <span>© 2026 Parth Champaneri. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}

