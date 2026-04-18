import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Wrench, 
  ShieldAlert, 
  Database, 
  Calendar, 
  Mail, 
  Phone, 
  User, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  Laptop,
  Zap,
  Award,
  ThumbsUp,
  Globe,
  Menu,
  X,
  ArrowRight,
  Cpu,
  Terminal,
  Instagram,
  Facebook
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [bookingStatus, setBookingStatus] = useState(null);
  const [contactStatus, setContactStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- EMAILJS CONFIGURATION ---
  const EMAILJS_SERVICE_ID = "service_fjxkl7x";
  const EMAILJS_TEMPLATE_ID = "template_fohe65i";
  const EMAILJS_PUBLIC_KEY = "hmlQ1NZ8VrDBWbM7I";

  const ownerDetails = {
    name: "Himanshu Tiwari",
    email: "tiwarihimanshumfka@gmail.com",
    phone: "+919170769236", 
    displayPhone: "+91 9170769236",
    company: "Himanshu Computers",
    experience: "5+ Years",
    successRate: "99%",
    clients: "500+"
  };

  const handleBookSlot = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    
    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: formData.get('name'),
        reply_to: formData.get('phone'),
        request_type: 'Slot Booking / Website Inquiry',
        date: formData.get('date'),
        time: formData.get('time'),
        message: formData.get('issue'),
        to_email: ownerDetails.email
      }
    };

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setBookingStatus('success');
        e.target.reset();
      } else {
        alert("Failed to send. Please check your EmailJS credentials.");
      }
    } catch (error) {
      alert("Network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: formData.get('name'),
        reply_to: formData.get('email'),
        request_type: 'General Inquiry',
        date: 'N/A',
        time: 'N/A',
        message: formData.get('message'),
        to_email: ownerDetails.email
      }
    };

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setContactStatus('success');
        e.target.reset();
      } else {
        alert("Failed to send. Please check your EmailJS credentials.");
      }
    } catch (error) {
      alert("Network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { title: 'Web Engineering', desc: 'High-performance, modern websites tailored for business growth and seamless UX.', icon: <Globe className="w-6 h-6" />, color: 'from-blue-500 to-cyan-400' },
    { title: 'OS Configuration', desc: 'Flawless setup for Windows, Linux, or macOS. Optimized for speed and workflow.', icon: <Monitor className="w-6 h-6" />, color: 'from-purple-500 to-indigo-500' },
    { title: 'Malware Eradication', desc: 'Enterprise-grade threat removal and advanced system fortification.', icon: <ShieldAlert className="w-6 h-6" />, color: 'from-rose-500 to-orange-500' },
    { title: 'Software Diagnostics', desc: 'Deep-level troubleshooting for crashes, BSODs, and application errors.', icon: <Wrench className="w-6 h-6" />, color: 'from-amber-400 to-orange-500' },
    { title: 'Data Restoration', desc: 'Secure retrieval of lost or corrupted files using advanced recovery protocols.', icon: <Database className="w-6 h-6" />, color: 'from-emerald-400 to-teal-500' },
    { title: 'System Optimization', desc: 'Registry cleaning, junk removal, and hardware acceleration tuning.', icon: <Cpu className="w-6 h-6" />, color: 'from-pink-500 to-rose-400' },
  ];

  const faqs = [
    { q: "Do you engineer custom business platforms?", a: "Yes. We architect scalable, high-performance websites, e-commerce solutions, and digital portfolios tailored strictly to your business logic." },
    { q: "What is your typical turnaround time?", a: "Standard diagnostics and software patches are resolved within 1-3 hours. Complex web projects are scoped individually." },
    { q: "Is remote support an option?", a: "Absolutely. We offer encrypted, secure remote sessions to resolve software anomalies without requiring physical presence." },
    { q: "How do you ensure data integrity?", a: "Data preservation is our zero-th rule. Comprehensive snapshots and backups are executed prior to any systemic alteration." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] font-sans text-zinc-300 relative overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-fuchsia-900/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-pulse" style={{ animationDuration: '12s' }}></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwaDFWMHptLTYwIDYwaDYwdi0xaC02MHYxeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] opacity-50"></div>
      </div>

      {/* Floating Glass Navbar */}
      <nav className={`fixed top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2 z-50 w-full md:w-[90%] max-w-6xl transition-all duration-300 ${scrolled ? 'md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-2xl md:border-zinc-800' : 'md:bg-transparent md:border-transparent'} border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-xl md:border md:rounded-2xl`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo area */}
            <div className="flex items-center cursor-pointer group" onClick={() => navigateTo('home')}>
              <div className="bg-gradient-to-tr from-indigo-500 to-cyan-400 p-2 md:p-2.5 rounded-xl mr-3 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-lg md:text-xl tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Himanshu <span className="text-zinc-500 font-medium">Computers</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 bg-zinc-900/50 p-1.5 rounded-full border border-zinc-800/50">
              {['home', 'about', 'services', 'faq', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => navigateTo(item)} 
                  className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300 ${
                    activeSection === item 
                      ? 'bg-white text-black shadow-md' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item === 'faq' ? 'FAQ' : item}
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center">
              <button 
                onClick={() => navigateTo('booking')}
                className="bg-white hover:bg-zinc-200 text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-white/10 active:scale-95 transition-all flex items-center gap-2"
              >
                Book Consultation <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 border-t border-zinc-800' : 'max-h-0'}`}>
          <div className="bg-zinc-950/95 backdrop-blur-xl p-4 space-y-2">
            {['home', 'about', 'services', 'faq', 'contact', 'booking'].map((item) => (
              <button 
                key={item}
                onClick={() => navigateTo(item)}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold capitalize transition-colors ${
                  activeSection === item 
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                {item === 'booking' ? 'Book Consultation' : item === 'faq' ? 'FAQ' : item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 pt-24 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[85vh]">
        
        {/* --- HOME SECTION --- */}
        {activeSection === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col justify-center min-h-[70vh]">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Hero Typography */}
              <div className="text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs font-bold text-zinc-300 backdrop-blur-sm mx-auto lg:mx-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Systems Online & Accepting Projects
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                  Engineer Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                    Digital Future.
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Elite software diagnostics, hardware repair, and bespoke web development. We don't just fix computers; we architect solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button 
                    onClick={() => navigateTo('booking')}
                    className="bg-white text-black px-8 py-4 rounded-full font-bold shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    Initiate Request <ArrowRight size={18} />
                  </button>
                  <button 
                    onClick={() => navigateTo('services')}
                    className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold border border-zinc-700 hover:bg-zinc-800 transition-all flex items-center justify-center"
                  >
                    Explore Capabilities
                  </button>
                </div>
              </div>

              {/* Right Column: Abstract/Bento Style Graphics */}
              <div className="hidden lg:grid grid-cols-2 gap-4 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent blur-3xl rounded-full"></div>
                
                <div className="col-span-2 bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 flex items-center gap-6 hover:border-zinc-700 transition-colors">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Web Architecture</h3>
                    <p className="text-zinc-400 text-sm">Next-gen performance & design.</p>
                  </div>
                </div>

                <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 hover:border-zinc-700 transition-colors">
                  <div className="bg-gradient-to-br from-rose-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <ShieldAlert className="text-white w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white mb-1">Security</h3>
                  <p className="text-zinc-500 text-xs">Zero-day threat mitigation.</p>
                </div>

                <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 hover:border-zinc-700 transition-colors">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Cpu className="text-white w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white mb-1">Optimization</h3>
                  <p className="text-zinc-500 text-xs">Maximized system compute.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SERVICES SECTION --- */}
        {activeSection === 'services' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-3xl mb-16">
              <h2 className="text-SM font-bold text-indigo-400 tracking-widest uppercase mb-3">Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Engineered for <br/> Absolute Performance.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, idx) => (
                <div key={idx} className="group bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`}></div>
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} bg-opacity-10 shadow-inner border border-white/10`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">{service.desc}</p>
                  
                  <button onClick={() => navigateTo('booking')} className="mt-auto flex items-center text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                    Deploy Service <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-indigo-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- BOOKING SECTION --- */}
        {activeSection === 'booking' && (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl relative">
              {/* Subtle top border gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400"></div>

              <div className="p-8 md:p-12 lg:p-16">
                <div className="mb-10 md:mb-12">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Initialize Request</h2>
                  <p className="text-zinc-400 text-lg">Input your parameters. We will synchronize with you shortly.</p>
                </div>
                
                {bookingStatus === 'success' ? (
                  <div className="bg-zinc-950/50 border border-emerald-500/20 rounded-3xl p-10 text-center animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-3xl font-black mb-3 text-white">Transmission Successful</h3>
                    <p className="text-zinc-400 mb-8">System logged. Himanshu will establish contact imminently.</p>

                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl max-w-sm mx-auto mb-8 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent"></div>
                      <h4 className="font-bold text-white mb-4 relative z-10">Expedite with UPI</h4>
                      <a 
                        href={`upi://pay?pa=t.m@ptaxis&pn=Himanshu%20Computers&cu=INR`} 
                        className="relative z-10 flex items-center justify-center gap-2 w-full bg-white text-black py-3.5 rounded-xl font-bold hover:bg-zinc-200 transition-colors"
                      >
                        <Zap className="w-5 h-5 text-indigo-600" />
                        Secure Pay
                      </a>
                    </div>

                    <button onClick={() => setBookingStatus(null)} className="text-zinc-500 font-medium hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4">
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookSlot} className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Client Name</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                            <User size={18} />
                          </div>
                          <input type="text" name="name" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter identifier" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Comms (Phone)</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                            <Phone size={18} />
                          </div>
                          <input type="tel" name="phone" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter number" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Target Date</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                            <Calendar size={18} />
                          </div>
                          <input type="date" name="date" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all [color-scheme:dark]" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Target Time</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                            <Clock size={18} />
                          </div>
                          <input type="time" name="time" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all [color-scheme:dark]" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Diagnostic Log / Details</label>
                      <textarea name="issue" rows="4" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Detail the anomaly or requirement..."></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-70">
                      {isSubmitting ? (
                        <><span className="animate-spin w-5 h-5 border-2 border-black/20 border-t-black rounded-full"></span> Processing...</>
                      ) : (
                        <><Zap size={20} /> Transmit Request</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- CONTACT & ABOUT (BENTO GRID) --- */}
        {(activeSection === 'contact' || activeSection === 'about') && (
          <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Command Center</h2>
              <p className="text-zinc-400">Direct lines of communication and operational metrics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Profile / Stats Card */}
              <div className="md:col-span-1 flex flex-col gap-6">
                <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 flex-1 flex flex-col justify-center">
                   <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-2xl mb-6 flex items-center justify-center">
                     <Terminal className="text-white w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-black text-white mb-1">{ownerDetails.company}</h3>
                   <p className="text-zinc-400 text-sm mb-8">Operated by {ownerDetails.name}</p>
                   
                   <div className="space-y-4">
                     <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                        <span className="text-zinc-500 font-medium">Uptime/Experience</span>
                        <span className="text-white font-bold">{ownerDetails.experience}</span>
                     </div>
                     <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                        <span className="text-zinc-500 font-medium">Resolution Rate</span>
                        <span className="text-emerald-400 font-bold">{ownerDetails.successRate}</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-zinc-500 font-medium">Nodes Serviced</span>
                        <span className="text-white font-bold">{ownerDetails.clients}</span>
                     </div>
                   </div>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 flex items-center gap-4">
                  <div className="bg-zinc-800 p-3 rounded-xl"><Phone className="text-zinc-300 w-5 h-5"/></div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Secure Line</p>
                    <a href={`tel:${ownerDetails.phone}`} className="text-white font-medium hover:text-indigo-400 transition-colors">{ownerDetails.displayPhone}</a>
                  </div>
                </div>
                
                <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 flex items-center gap-4">
                  <div className="bg-zinc-800 p-3 rounded-xl"><Mail className="text-zinc-300 w-5 h-5"/></div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Encrypted Mail</p>
                    <a href={`mailto:${ownerDetails.email}`} className="text-white font-medium hover:text-indigo-400 transition-colors truncate block">{ownerDetails.email}</a>
                  </div>
                </div>

                {/* Social Networks Add Kiye Gaye Hain */}
                <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-3">Social Networks</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/incredtiwarii/" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-xl hover:bg-pink-600/20 hover:text-pink-500 transition-all group shadow-sm">
                      <Instagram className="text-zinc-300 group-hover:text-pink-500 w-5 h-5 transition-colors"/>
                    </a>
                    <a href="https://www.facebook.com/Incred.tiwari" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-xl hover:bg-blue-600/20 hover:text-blue-500 transition-all group shadow-sm">
                      <Facebook className="text-zinc-300 group-hover:text-blue-500 w-5 h-5 transition-colors"/>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Message Form */}
              <div className="md:col-span-2 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none"></div>
                
                <h3 className="text-2xl font-black text-white mb-2">Direct Terminal</h3>
                <p className="text-zinc-400 mb-8">Transmit inquiries directly to the engineering team.</p>

                {contactStatus === 'success' ? (
                   <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                     <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4" />
                     <h4 className="text-2xl font-bold text-white mb-2">Message Received</h4>
                     <p className="text-zinc-400 mb-6">Awaiting manual review. We will reply shortly.</p>
                     <button onClick={() => setContactStatus(null)} className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-colors font-medium">Send Another</button>
                   </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input type="text" name="name" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-zinc-600" placeholder="Alias / Name" />
                      <input type="email" name="email" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-zinc-600" placeholder="Return Address (Email)" />
                    </div>
                    <textarea name="message" rows="5" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-zinc-600 resize-none" placeholder="Payload data..."></textarea>
                    
                    <div className="flex justify-end">
                      <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 active:scale-95 transition-all flex items-center justify-center gap-2">
                        {isSubmitting ? 'Transmitting...' : <><Zap size={18} /> Execute</>}
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

        {/* --- FAQ SECTION --- */}
        {activeSection === 'faq' && (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Knowledge Base</h2>
              <p className="text-zinc-400">Frequently queried parameters regarding our operations.</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 p-6 md:p-8 rounded-3xl hover:border-zinc-700 transition-colors">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-indigo-500 opacity-50">Q.</span> {faq.q}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed pl-8 border-l border-zinc-800 ml-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Minimalist Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <Terminal className="h-5 w-5 text-white" />
            <span className="font-bold text-white tracking-widest uppercase text-sm">Himanshu Computers</span>
          </div>
          
          {/* Footer me Social Links */}
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/incredtiwarii/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-pink-500 hover:scale-110 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/Incred.tiwari" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-blue-500 hover:scale-110 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-zinc-600 text-sm text-center md:text-right">
            <p>System Cycle &copy; {new Date().getFullYear()}. All nodes secured.</p>
            <p className="mt-1">Designed for high-performance computing & web logic.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
