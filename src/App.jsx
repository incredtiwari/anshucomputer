import React, { useState } from 'react';
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
  Sparkles,
  Zap,
  HelpCircle,
  Award,
  ThumbsUp,
  Globe,
  Code,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [bookingStatus, setBookingStatus] = useState(null);
  const [contactStatus, setContactStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const serviceColors = {
    violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'hover:border-violet-300', shadow: 'hover:shadow-violet-200' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'hover:border-rose-300', shadow: 'hover:shadow-rose-200' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'hover:border-amber-300', shadow: 'hover:shadow-amber-200' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'hover:border-emerald-300', shadow: 'hover:shadow-emerald-200' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'hover:border-cyan-300', shadow: 'hover:shadow-cyan-200' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'hover:border-pink-300', shadow: 'hover:shadow-pink-200' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'hover:border-blue-300', shadow: 'hover:shadow-blue-200' },
  };

  const servicesList = [
    { title: 'Website Design & Dev', desc: 'Modern, fast, and responsive websites built to grow your online business.', icon: <Globe className="w-8 h-8" />, colorKey: 'blue' },
    { title: 'OS Installation', desc: 'Windows, Linux, or macOS setup, configured for peak performance.', icon: <Monitor className="w-8 h-8" />, colorKey: 'violet' },
    { title: 'Virus Removal', desc: 'Deep system scans to eliminate malware and secure your personal data.', icon: <ShieldAlert className="w-8 h-8" />, colorKey: 'rose' },
    { title: 'Software Fixes', desc: 'Fixing crashing apps, blue screens, and general system errors instantly.', icon: <Wrench className="w-8 h-8" />, colorKey: 'amber' },
    { title: 'Data Recovery', desc: 'Expert recovery for accidentally deleted files or corrupted drive partitions.', icon: <Database className="w-8 h-8" />, colorKey: 'emerald' },
    { title: 'System Tune-up', desc: 'Cleaning junk files and optimizing registry to speed up your PC.', icon: <Clock className="w-8 h-8" />, colorKey: 'pink' },
  ];

  const faqs = [
    { q: "Do you create business websites?", a: "Yes! We specialize in custom business websites, portfolios, and e-commerce stores." },
    { q: "How long does a typical repair take?", a: "Most software issues are resolved within 1 to 3 hours depending on complexity." },
    { q: "Do you offer remote support?", a: "Absolutely. Many software issues can be fixed remotely over a secure connection." },
    { q: "Is my data safe during repair?", a: "Yes. We prioritize data safety and perform backups before any major OS resets." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative overflow-hidden selection:bg-violet-100 selection:text-violet-900">
      
      {/* Background Blobs (Hidden on mobile for performance/clarity) */}
      <div className="hidden md:block absolute top-[-10%] left-[-10%] w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 z-0 animate-pulse"></div>
      <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-cyan-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center cursor-pointer group" onClick={() => navigateTo('home')}>
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2 rounded-xl mr-2 md:mr-3 shadow-lg group-hover:scale-105 transition-transform">
                <Laptop className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="font-extrabold text-lg md:text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                {ownerDetails.company}
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1 bg-slate-100/50 p-1 rounded-full border border-slate-200">
              {['home', 'about', 'services', 'faq', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => navigateTo(item)} 
                  className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
                    activeSection === item 
                      ? 'bg-white text-violet-700 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {item === 'faq' ? 'FAQ' : item}
                </button>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => navigateTo('booking')}
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold shadow-md active:scale-95 transition-all"
              >
                Book Now
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            {['home', 'about', 'services', 'faq', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => navigateTo(item)}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold capitalize transition-colors ${
                  activeSection === item ? 'bg-violet-50 text-violet-700' : 'text-slate-600 active:bg-slate-50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        
        {/* --- HOME SECTION --- */}
        {activeSection === 'home' && (
          <div className="space-y-12 md:space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Hero */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl md:rounded-[2.5rem] shadow-xl md:shadow-2xl border border-white p-6 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <div className="inline-flex self-center md:self-start items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 border border-blue-200">
                  <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Software & Web Solutions
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600">Grow</span> Digital or <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-orange-500">Fix</span> Your PC.
                </h1>
                
                <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 font-medium leading-relaxed">
                  Fast, reliable computer software support and premium web development services for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button 
                    onClick={() => navigateTo('booking')}
                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all"
                  >
                    Get Started
                  </button>
                  <button 
                    onClick={() => navigateTo('services')}
                    className="bg-white text-slate-800 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold border-2 border-slate-200 active:bg-slate-50 transition-all"
                  >
                    View Services
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 relative hidden sm:block">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-[4px] md:border-[6px] border-white transform md:rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Web Tech" 
                    className="w-full h-full object-cover max-h-[300px] md:max-h-[450px]"
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: 'Web Development', icon: <Globe />, color: 'blue' },
                { title: 'Software Support', icon: <Wrench />, color: 'amber' },
                { title: 'Virus Protection', icon: <ShieldAlert />, color: 'rose' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center">
                  <div className={`${serviceColors[stat.color].bg} ${serviceColors[stat.color].text} p-3 rounded-xl mb-4`}>
                    {stat.icon}
                  </div>
                  <h3 className="font-bold text-lg md:text-xl text-slate-800">{stat.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- SERVICES SECTION --- */}
        {activeSection === 'services' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Our Services</h2>
              <p className="text-slate-600 font-medium px-4">From hardware-level support to high-end website creation, we cover it all.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {servicesList.map((service, idx) => {
                const colors = serviceColors[service.colorKey];
                return (
                  <div key={idx} className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border-2 border-transparent ${colors.border} transition-all duration-300 group`}>
                    <div className={`${colors.bg} ${colors.text} w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-800">{service.title}</h3>
                    <p className="text-slate-600 mb-6 font-medium text-sm md:text-base leading-relaxed">{service.desc}</p>
                    <button onClick={() => navigateTo('booking')} className={`font-bold flex items-center text-sm ${colors.text}`}>
                      Inquire Now <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --- BOOKING SECTION --- */}
        {activeSection === 'booking' && (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white rounded-2xl md:rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"></div>

              <div className="p-6 md:p-14">
                <div className="text-center mb-8 md:mb-10">
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">Consultation Request</h2>
                  <p className="text-slate-600 font-medium text-sm md:text-lg">Select your preferred date and time for support.</p>
                </div>
                
                {bookingStatus === 'success' ? (
                  <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-black mb-2 text-emerald-900 text-balance">Request Sent!</h3>
                    <p className="text-emerald-700 font-medium mb-6">Himanshu will contact you shortly.</p>

                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 mb-6 max-w-xs mx-auto">
                      <h4 className="font-bold text-slate-800 mb-3">Pay Booking Fee</h4>
                      <a 
                        href={`upi://pay?pa=t.m@ptaxis&pn=Himanshu%20Computers&cu=INR`} 
                        className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-xl font-bold shadow-md active:bg-slate-800"
                      >
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Pay via UPI
                      </a>
                    </div>

                    <button onClick={() => setBookingStatus(null)} className="text-emerald-600 font-bold underline">
                      Go Back
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookSlot} className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                      <div>
                        <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <User size={18} />
                          </div>
                          <input type="text" name="name" required className="w-full bg-slate-50 rounded-xl border border-slate-200 py-3 pl-10 pr-4 focus:border-violet-500 outline-none" placeholder="Enter name" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Phone size={18} />
                          </div>
                          <input type="tel" name="phone" required className="w-full bg-slate-50 rounded-xl border border-slate-200 py-3 pl-10 pr-4 focus:border-violet-500 outline-none" placeholder="Your number" />
                        </div>
                      </div>
                    </div>

                    {/* NEW: Date and Time Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                      <div>
                        <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Preferred Date</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Calendar size={18} />
                          </div>
                          <input type="date" name="date" required className="w-full bg-slate-50 rounded-xl border border-slate-200 py-3 pl-10 pr-4 focus:border-violet-500 outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Preferred Time</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Clock size={18} />
                          </div>
                          <input type="time" name="time" required className="w-full bg-slate-50 rounded-xl border border-slate-200 py-3 pl-10 pr-4 focus:border-violet-500 outline-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Service Details</label>
                      <textarea name="issue" rows="4" required className="w-full bg-slate-50 rounded-xl border border-slate-200 py-3 px-4 focus:border-violet-500 outline-none resize-none" placeholder="Explain your requirement..."></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 text-white font-black py-4 rounded-xl shadow-lg active:scale-95 transition-all">
                      {isSubmitting ? 'Sending...' : 'Confirm Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- CONTACT SECTION --- */}
        {activeSection === 'contact' && (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3">Contact Us</h2>
              <p className="text-slate-600 font-medium">Click on any detail below to reach us instantly.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <a href={`tel:${ownerDetails.phone}`} className="block bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-violet-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="bg-violet-100 p-3 rounded-xl text-violet-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Me</p>
                      <p className="text-lg font-black text-slate-800">{ownerDetails.displayPhone}</p>
                    </div>
                  </div>
                </a>

                <a href={`mailto:${ownerDetails.email}`} className="block bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-fuchsia-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-100 p-3 rounded-xl text-fuchsia-600">
                      <Mail size={24} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                      <p className="text-base md:text-lg font-black text-slate-800 truncate">{ownerDetails.email}</p>
                    </div>
                  </div>
                </a>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available</p>
                      <p className="text-lg font-black text-slate-800">Mon-Sat, 9AM-7PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100">
                <h3 className="text-2xl font-black mb-6 text-slate-800">Send Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <input type="text" name="name" required className="w-full bg-slate-50 rounded-xl border border-slate-200 p-3.5 outline-none focus:border-violet-500" placeholder="Name" />
                  <input type="email" name="email" required className="w-full bg-slate-50 rounded-xl border border-slate-200 p-3.5 outline-none focus:border-violet-500" placeholder="Email" />
                  <textarea name="message" rows="4" required className="w-full bg-slate-50 rounded-xl border border-slate-200 p-3.5 outline-none focus:border-violet-500 resize-none" placeholder="Message"></textarea>
                  <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10 bg-slate-900 text-white font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-all">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeSection === 'faq' && (
          <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-8">
            <h2 className="text-3xl font-black text-center mb-10">Frequently Asked</h2>
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        )}

        {/* About Us (Simplified) */}
        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-slate-100">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-5xl font-black mb-4">About Himanshu Computers</h2>
                  <p className="text-slate-600 font-medium leading-relaxed">Dedicated to solving your computer problems and growing your digital presence with over 5 years of experience.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="bg-violet-50 p-6 rounded-2xl border border-violet-100 text-center">
                      <Award className="mx-auto text-violet-600 mb-3" size={40} />
                      <h4 className="font-black text-2xl text-slate-800">{ownerDetails.experience}</h4>
                      <p className="text-sm font-bold text-slate-500 uppercase">Expertise</p>
                   </div>
                   <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center">
                      <ThumbsUp className="mx-auto text-emerald-600 mb-3" size={40} />
                      <h4 className="font-black text-2xl text-slate-800">{ownerDetails.successRate}</h4>
                      <p className="text-sm font-bold text-slate-500 uppercase">Success Rate</p>
                   </div>
                </div>
             </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 mt-12 px-4 border-t-4 border-violet-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <Laptop className="h-5 w-5 mr-2 text-violet-500" />
              <span className="font-black text-white text-lg uppercase tracking-wider">{ownerDetails.company}</span>
            </div>
            <p className="text-sm">Premium Software Support & Web Services</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs uppercase font-bold text-slate-500 tracking-widest mb-2">Direct Contact</p>
            <a href={`tel:${ownerDetails.phone}`} className="block text-white font-bold hover:text-violet-400 transition-colors">
              {ownerDetails.displayPhone}
            </a>
            <a href={`mailto:${ownerDetails.email}`} className="block text-sm hover:text-violet-400 transition-colors underline break-all">
              {ownerDetails.email}
            </a>
          </div>

          <div className="text-xs">
            <p>&copy; {new Date().getFullYear()} {ownerDetails.company}</p>
            <p className="mt-1">Owned by {ownerDetails.name}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;