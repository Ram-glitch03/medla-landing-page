/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Users,
  Award,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Building2,
  Gavel,
  Landmark,
  Database,
  Languages,
  Zap,
  HeartHandshake,
  Check,
  Globe,
  Mail,
  Headphones,
  Menu,
  X,
  PlusCircle
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-accent" />
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-medla/95 py-3 shadow-xl backdrop-blur-md' : 'bg-navy-medla py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tighter font-headline text-white">
              MEDLA <span className="text-primary-container">×</span> JotForm
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Soluciones', 'Integración', 'Seguridad', 'Precios'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Iniciar Sesión
            </button>
            <button className="bg-primary-container text-white px-6 py-2.5 rounded-md font-bold text-sm shadow-lg shadow-primary-container/20 hover:scale-[1.03] active:scale-95 transition-all">
              Empezar Ahora
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-navy-medla border-t border-white/10 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col gap-4 p-6">
                {['Soluciones', 'Integración', 'Seguridad', 'Precios'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-semibold text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <hr className="border-white/10" />
                <button className="w-full py-3 text-center font-bold text-primary-container border border-primary-container rounded-md">
                  Iniciar Sesión
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-5 mb-8">
            <img src="/medla-logo.png" alt="Medla Asesores" className="h-16 w-auto object-contain drop-shadow-sm" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="text-slate-300 font-black text-xl">×</span>
            <img src="/jotform-logo.png" alt="JotForm" className="h-14 w-auto object-contain drop-shadow-sm" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <span className="inline-block py-1.5 px-4 bg-primary-container/10 text-primary-container text-[11px] font-black tracking-[0.2em] uppercase rounded-full mb-6 border border-primary-container/20">
            Escudo Legal Integrado 🛡️
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-navy-medla leading-[1.1] mb-8">
            Automatiza tu captación sin arriesgarte a <span className="text-primary-container">multas del RGPD.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
            Combina la potencia de <strong>JotForm</strong> con la protección jurídica de <strong>MEDLA</strong>. Transforma visitantes en clientes con formularios 100% legales, diseñados para disparar tu conversión en España.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#registro" className="bg-gradient-to-r from-primary-container to-teal-medla text-white px-8 py-4 rounded-xl font-black text-lg shadow-2xl shadow-primary-container/30 hover:scale-105 hover:shadow-teal-medla/40 transition-all flex items-center justify-center gap-3">
                Crear cuenta ahora <ArrowRight size={20} className="stroke-[3px]" />
              </a>
              <a href="#precios" className="relative overflow-hidden border-2 border-navy-medla text-navy-medla px-8 py-4 rounded-xl font-bold text-lg hover:text-white hover:bg-navy-medla hover:scale-105 transition-all flex justify-center items-center">
                Ver planes y precios
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-slate-500 font-bold">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-teal-medla" /> Onboarding Inmediato</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-teal-medla" /> Listo en 5 minutos</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-teal-medla" /> Respaldo Legal MEDLA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Browser Mockup */}
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative z-10">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-white rounded-md px-4 py-1 text-[10px] text-slate-400 w-full max-w-xs mx-auto text-center border border-slate-100">
                app.jotform.com/form-builder
              </div>
            </div>
            <div className="p-8 bg-white min-h-[400px]">
              <div className="max-w-md mx-auto space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Nombre completo</label>
                  <div className="h-10 border-2 border-primary-container rounded-lg bg-primary-container/5 px-4 flex items-center">
                    <div className="w-1 h-4 bg-primary-container animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">NIF/CIF</label>
                  <div className="h-10 border border-slate-200 rounded-lg bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Email corporativo</label>
                  <div className="h-10 border border-slate-200 rounded-lg bg-slate-50" />
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-4 h-4 border-2 border-primary-container rounded mt-0.5" />
                  <p className="text-[10px] text-slate-500 leading-tight">Acepto los términos conforme al RGPD y el tratamiento de mis datos por parte de MEDLA.</p>
                </div>
                <div className="h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-lg shadow-green-500/20">
                  Enviar solicitud
                </div>
              </div>
            </div>
          </div>

          {/* Floating Element 1: Legal Document */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 z-20 bg-white p-4 rounded-xl shadow-2xl border border-slate-100 max-w-[200px] rotate-3"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                <Database size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-navy-medla leading-tight">Contrato de encargado de tratamiento — Art. 28 RGPD</p>
                <span className="inline-block px-1.5 py-0.5 bg-red-500 text-white text-[8px] font-black rounded uppercase">Firmado</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-50 flex justify-end">
              <span className="text-[8px] font-black text-slate-300">MEDLA LEGAL</span>
            </div>
          </motion.div>

          {/* Floating Element 2: Certification Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-12 z-20 w-32 h-32 rounded-full bg-navy-medla p-1 shadow-2xl -rotate-6"
          >
            <div className="w-full h-full rounded-full border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-center p-2">
              <ShieldCheck size={32} className="text-primary-container mb-1" />
              <p className="text-[9px] font-black text-white uppercase leading-tight">RGPD<br />Compliant</p>
            </div>
          </motion.div>

          {/* Floating Element 3: Stat Card */}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-16 z-20 bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 flex items-center gap-2 rotate-2"
          >
            <div className="w-6 h-6 bg-primary-container rounded-full flex items-center justify-center text-white text-[10px] font-black">J</div>
            <span className="text-[10px] font-bold text-navy-medla whitespace-nowrap">35M+ usuarios confían en JotForm</span>
          </motion.div>

          {/* Floating Element 4: Data Server Card */}
          <motion.div
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-16 z-20 bg-navy-medla p-4 rounded-xl shadow-2xl border border-white/10 flex items-center gap-3 -rotate-2"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <div className="space-y-0.5">
              <p className="text-[9px] font-bold text-white">Datos almacenados en servidores europeos 🇪🇺</p>
              <p className="text-[8px] text-slate-400 font-medium">Infraestructura MEDLA × JotForm</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="divider-wave text-surface">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }}
    >
      {count}{suffix}
    </motion.span>
  );
};

const TrustBar = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFC] relative z-10 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-headline font-extrabold text-navy-medla tracking-tight mb-4">Experiencia que blinda tu negocio</h3>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">La infraestructura tecnológica #1 del mundo protegida por la firma legal española de referencia.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary-container/10 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary-container/10 transition-all duration-700" />
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-container/30 border border-slate-100 overflow-hidden">
                <img src="/jotform-logo.png" alt="Jotform" className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-container"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'; }} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-navy-medla">Tecnología JotForm</h4>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Motor Global</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {[
                { icon: <Users size={18} />, text: <><CountUp end={35} suffix="M+" /> Usuarios</> },
                { icon: <Award size={18} />, text: "#1 en G2" },
                { icon: <ShieldCheck size={18} />, text: "HIPAA & SOC 2" },
                { icon: <Lock size={18} />, text: "SSL 256-BIT" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-sm font-bold text-slate-600">
                  <span className="text-primary-container drop-shadow-sm">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-navy-medla rounded-3xl p-10 shadow-2xl relative overflow-hidden group hover:shadow-teal-medla/20 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-medla/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-teal-medla/20 transition-all duration-700" />
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-teal-medla/30 overflow-hidden border border-white/20">
                <img src="/medla-logo.png" alt="Medla" className="w-10 h-10 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-medla"><path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>'; }} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white">Garantía MEDLA</h4>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-medla">Defensa Legal Local</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {[
                { icon: <Building2 size={18} />, text: "Firma en Madrid" },
                { icon: <Gavel size={18} />, text: "Expertos RGPD" },
                { icon: <Landmark size={18} />, text: "Colegiados" },
                { icon: <Database size={18} />, text: "Servidores 🇪🇺" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/5 text-sm font-bold text-white backdrop-blur-sm">
                  <span className="text-teal-medla">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a href="#registro" className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-xl bg-gradient-to-r from-primary-container to-teal-medla text-white font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary-container/30 relative z-10">
            Asegurar infraestructura ahora <ArrowRight size={20} className="stroke-[3px]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const MedlaSpotlight = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-10 gap-16 items-center">
        {/* Left Side: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
              alt="MEDLA Legal Team"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Orange Bracket Accent */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-primary-container z-20" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-primary-container z-20" />
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-6 -left-6 w-full h-full bg-navy-medla/5 rounded-2xl -z-10" />
        </motion.div>

        {/* Right Side: Credentials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 space-y-8"
        >
          <div>
            <span className="text-primary-container font-black text-[10px] tracking-[0.2em] uppercase mb-4 block">TU GARANTÍA LEGAL EN ESPAÑA</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-navy-medla mb-6">
              MEDLA no es solo un sello de cumplimiento. Es tu equipo legal en Madrid.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Abogados colegiados especialistas en derecho digital y AEPD.",
              "Redacción de contratos de encargado de tratamiento a medida.",
              "Representación legal ante posibles inspecciones de privacidad.",
              "Auditoría continua de tus flujos de datos en JotForm."
            ].map((text, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-teal-medla/10 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-teal-medla" strokeWidth={4} />
                </div>
                <p className="text-sm font-semibold text-navy-medla/80 leading-snug">{text}</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl border-l-4 border-primary-container italic text-navy-medla/70 text-lg leading-relaxed">
            "Nuestra misión es que la tecnología no sea un obstáculo legal, sino una ventaja competitiva segura para tu empresa en el mercado europeo."
          </div>

          <a href="#registro" className="mt-4 p-4 rounded-xl bg-navy-medla text-white inline-flex items-center justify-center gap-3 font-black text-sm hover:scale-105 hover:bg-opacity-95 transition-all shadow-xl shadow-navy-medla/20">
            Asegurar mi Empresa <ShieldCheck size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const BentoFeatures = () => {
  const features = [
    {
      icon: <Gavel className="text-primary-container" size={32} />,
      title: "Cumplimiento por Diseño",
      desc: "Elimina el riesgo de multas de la AEPD con formularios pre-diseñados para seguir los estándares españoles desde el primer clic."
    },
    {
      icon: <Zap className="text-primary-container" size={32} />,
      title: "Flujos de Trabajo Acelerados",
      desc: "Plantillas legales de MEDLA integradas directamente en el constructor de arrastrar y soltar de JotForm para un despliegue rápido."
    },
    {
      icon: <HeartHandshake className="text-primary-container" size={32} />,
      title: "Seguridad Total de Datos",
      desc: "Cifrado de extremo a extremo con enrutamiento local en servidores españoles para el procesamiento de datos legales y médicos sensibles."
    }
  ];

  return (
    <section className="py-24 bg-[#F0F4F8] relative">
      {/* Diagonal Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 text-white">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Cerrando la Brecha de la Automatización Legal</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Resolvemos la complejidad de la legislación digital española mediante una recopilación de datos fluida y supervisión legal.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-8">{f.icon}</div>
              <h3 className="font-headline text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  return (
    <section className="py-32 bg-[#0D1B2A] text-white relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-container font-black text-[10px] tracking-[0.2em] uppercase mb-4 block">PRODUCT SHOWCASE</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Diseñado para la Jurisprudencia Española</h2>
          <div className="space-y-8">
            {[
              { title: "Plantillas Certificadas por la AEPD", desc: "Cada formulario incluye las capas de información necesarias requeridas por la Agencia Española de Protección de Datos." },
              { title: "Legalidad en Firma Electrónica", desc: "Cumplimiento con las regulaciones eIDAS para firmas digitales en contratos legales españoles." },
              { title: "Almacenamiento en la Nube Fiscal", desc: "Sistemas de respaldo automatizados diseñados para la regla española de retención de registros legales de 5 años." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-5"
              >
                <div className="flex-none w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white">
                  <Check size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Laptop Mockup */}
          <div className="relative z-10 bg-slate-800 rounded-xl p-1.5 shadow-2xl border border-white/10">
            <div className="bg-[#0D1B2A] rounded-lg overflow-hidden border border-white/5 aspect-video relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="JotForm Builder UI"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent" />

              {/* Floating Feature Chips */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 left-10 bg-white text-navy-medla px-3 py-1 rounded-full text-[10px] font-black shadow-lg flex items-center gap-1.5"
              >
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                AI Agents
              </motion.div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-20 right-10 bg-white text-navy-medla px-3 py-1 rounded-full text-[10px] font-black shadow-lg flex items-center gap-1.5"
              >
                <div className="w-1.5 h-1.5 bg-teal-medla rounded-full" />
                150+ integraciones
              </motion.div>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 right-20 bg-white text-navy-medla px-3 py-1 rounded-full text-[10px] font-black shadow-lg flex items-center gap-1.5"
              >
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Drag & Drop
              </motion.div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="h-3 w-[105%] bg-slate-700 mx-auto -mt-1 rounded-b-xl relative z-0 shadow-xl" />
          <div className="h-1 w-20 bg-slate-600 mx-auto rounded-b-full" />
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "Gratis", features: ["5 formularios", "100 respuestas/mes", "Plantillas básicas"], medla: "Sin complemento MEDLA", button: "Empezar gratis" },
    { name: "Bronze", price: "€34", features: ["25 formularios", "1.000 respuestas/mes", "Pagos integrados"], medla: "Revisión RGPD básica (1 sesión)", button: "Contratar Bronze" },
    { name: "Silver", price: "€39", features: ["Formularios ilimitados", "10.000 respuestas/mes", "AI Agents", "150+ integraciones"], medla: "Certificación RGPD completa + asesoría anual", featured: true, button: "Contratar Silver" },
    { name: "Enterprise", price: "Consulta", features: ["Todo ilimitado", "SSO", "Residencia de datos en Europa", "SLA garantizado"], medla: "Retainer legal mensual incluido", button: "Solicitar propuesta", dark: true },
  ];

  return (
    <section className="py-24 px-6 bg-white section-divider" id="precios">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Planes diseñados para empresas españolas</h2>
          <p className="text-slate-500">Transparencia total. Sin costes legales ocultos. Solo pura automatización.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${p.featured ? 'border-primary-container shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm hover:shadow-lg'} ${p.dark ? 'bg-secondary text-white' : 'bg-white'}`}
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Más popular
                </div>
              )}
              <div className="mb-8">
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${p.dark ? 'text-slate-400' : 'text-slate-400'}`}>{p.name}</p>
                <div className="text-4xl font-extrabold flex items-baseline gap-1">
                  {p.price}
                  {p.price !== 'Gratis' && p.price !== 'Consulta' && <span className="text-sm font-medium text-slate-400">/mes</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className={p.featured ? 'text-primary-container' : 'text-green-500'} />
                    <span className={p.dark ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className={`pt-6 border-t mb-8 ${p.dark ? 'border-white/10' : 'border-slate-50'}`}>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${p.featured ? 'text-primary-container' : 'text-slate-400'}`}>Complemento MEDLA</p>
                <p className={`text-xs font-bold ${p.dark ? 'text-slate-300' : 'text-slate-700'}`}>{p.medla}</p>
              </div>
              <a href="#registro" className={`flex justify-center items-center gap-2 w-full py-3.5 rounded-xl font-black text-sm transition-all hover:scale-[1.03] active:scale-95 ${p.featured ? 'bg-gradient-to-r from-primary-container to-teal-medla text-white shadow-xl shadow-primary-container/30' : p.dark ? 'bg-white text-secondary' : 'border-2 border-primary-container text-primary-container hover:bg-primary-container/5'}`}>
                {p.button} <ArrowRight size={16} className="stroke-[3px]" />
              </a>

              <div className="mt-6 flex items-center justify-center gap-2 opacity-30 grayscale scale-75">
                <span className="text-[8px] font-black uppercase tracking-tighter">JotForm</span>
                <div className={`w-px h-3 ${p.dark ? 'bg-white' : 'bg-slate-900'}`}></div>
                <span className="text-[8px] font-black uppercase tracking-tighter">MEDLA</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComplianceSection = () => {
  return (
    <section className="bg-navy-medla text-white py-32 relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow opacity-30 pointer-events-none" />

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <ShieldCheck size={600} strokeWidth={0.5} />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-20 leading-tight"
        >
          JotForm cumple con el RGPD. <br />
          <span className="text-primary-container">MEDLA lo garantiza por contrato.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-1.5 h-8 bg-primary-container rounded-full"></div>
              <h3 className="font-headline text-2xl font-bold">JotForm: seguridad técnica</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Servidores en Europa (residencia de datos)",
                "Cifrado SSL 256-bit en todos los formularios",
                "Certificado SOC 2 Tipo II",
                "Cumplimiento HIPAA",
                "Sin venta de datos de usuarios",
                "Control de acceso por roles",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <CheckCircle2 size={20} className="text-primary-container mt-1 shrink-0" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-1.5 h-8 bg-[#2BA99B] rounded-full"></div>
              <h3 className="font-headline text-2xl font-bold">MEDLA: garantía legal</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Revisión de configuración bajo ley española",
                "Asesoría en cláusulas de privacidad y cookies",
                "Adaptación a LOPD y RGPD para formularios web",
                "Soporte ante la AEPD si fuera necesario",
                "Documentación legal de tu implementación",
                "Firma del contrato de encargado de tratamiento",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <CheckCircle2 size={20} className="text-[#2BA99B] mt-1 shrink-0" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.a
          href="#registro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex mt-20 border-2 border-primary-container text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-gradient-to-r hover:from-primary-container hover:to-teal-medla hover:border-transparent hover:scale-105 transition-all items-center gap-3"
        >
          Regístrate y Protégete Ahora <Zap size={20} className="fill-white" />
        </motion.a>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F5F5F5] px-6 relative">
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 text-navy-medla">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline text-4xl font-extrabold tracking-tight text-center mb-20"
        >
          Voces de la Innovación
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              quote: "Como Responsable de IT en Madrid, la integración entre la facilidad de uso de JotForm y la experiencia legal de MEDLA nos permitió lanzar nuestro portal de captación de clientes en 48 horas en lugar de 3 semanas de revisiones legales.",
              author: "Javier Moreno",
              role: "Responsable de IT, Nexo Soluciones"
            },
            {
              quote: "MEDLA resolvió nuestra ansiedad por el cumplimiento. Ahora podemos enfocarnos en hacer crecer nuestro negocio mientras JotForm se encarga del trabajo pesado de la captura de datos. Una verdadera alianza estratégica para el emprendedor moderno.",
              author: "Elena García",
              role: "CEO, E-Gabinete Jurídico"
            }
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm relative hover:shadow-xl transition-all duration-300"
            >
              <p className="text-slate-500 text-lg italic mb-10 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-300">
                  <Users size={24} />
                </div>
                <div>
                  <p className="font-bold text-on-surface">{t.author}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="registro" className="py-24 bg-white px-6 section-divider scroll-mt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-5xl font-extrabold tracking-tight mb-8">¿Listo para Asegurar tus Flujos de Trabajo?</h2>
          <p className="text-lg text-slate-500 mb-12 leading-relaxed">Únete a más de 5.000 empresas españolas que confían en MEDLA × JotForm para su automatización legal. Obtén una consulta personalizada o comienza tu prueba hoy mismo.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                <Headphones size={20} />
              </div>
              <span className="font-medium">Soporte en Español e Inglés</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                <Award size={20} />
              </div>
              <span className="font-medium">Garantía legal en todas las plantillas</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-low p-10 rounded-3xl shadow-inner border border-slate-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nombre</label>
                <input className="w-full bg-white border border-slate-100 rounded-xl p-4 focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-sm" placeholder="Juan Pérez" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Corporativo</label>
                <input className="w-full bg-white border border-slate-100 rounded-xl p-4 focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-sm" placeholder="juan@empresa.es" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Empresa</label>
              <input className="w-full bg-white border border-slate-100 rounded-xl p-4 focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-sm" placeholder="Nombre de tu negocio" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mensaje</label>
              <textarea className="w-full bg-white border border-slate-100 rounded-xl p-4 h-32 focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-sm resize-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
            </div>
            <button className="w-full jotform-gradient text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all">
              Enviar Consulta
            </button>
            <p className="text-[10px] text-slate-400 text-center px-4 leading-relaxed">
              Al enviar este formulario, aceptas nuestra Política de Privacidad y el procesamiento de tus datos bajo estándares RGPD.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-medla text-slate-300 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-2xl font-extrabold text-white tracking-tighter block mb-6">MEDLA <span className="text-primary-container">×</span> JotForm</span>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">Empoderando a las empresas españolas con automatización legal inteligente e infraestructura de datos segura.</p>
          </div>

          <div>
            <p className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Colaboración</p>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Building2 size={20} className="text-primary-container" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">MEDLA</p>
                  <p className="text-[10px] text-slate-500 uppercase">Abogados en Madrid</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Globe size={20} className="text-primary-container" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">JotForm</p>
                  <p className="text-[10px] text-slate-500 uppercase">Global Form Builder</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Producto</p>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Plantillas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <p className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</p>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">© 2026 MEDLA × JotForm. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Landing desarrollada por</span>
            <span className="text-[10px] font-black text-teal-medla uppercase tracking-widest">Avanzza AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <MedlaSpotlight />
      <BentoFeatures />
      <Showcase />
      <Pricing />
      <ComplianceSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
