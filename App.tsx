import React, { useState } from 'react';
import { 
  Leaf, 
  MessageCircle, 
  Globe, 
  Cpu, 
  Database, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight,
  Menu,
  X,
  Languages,
  Users,
  Lightbulb,
  ExternalLink,
  Mic,
  Image as ImageIcon,
  Volume2,
  Instagram,
  Camera,
  GraduationCap
} from 'lucide-react';
import { translations } from './translations';
import { Language } from './types';

// Custom Brain-Leaf Logo Component
const LogoIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left Side: Brain/Circuit */}
    <path d="M48 15C38 15 28 22 22 35C18 43 18 55 22 65C28 78 38 85 48 85" stroke="#059669" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M48 35H38M48 50H32M48 65H40" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
    <circle cx="38" cy="35" r="3" fill="#059669" />
    <circle cx="32" cy="50" r="3" fill="#059669" />
    <circle cx="40" cy="65" r="3" fill="#059669" />
    
    {/* Right Side: Leaf */}
    <path d="M52 15C75 15 88 40 88 50C88 60 75 85 52 85V15Z" fill="#10B981" />
    <path d="M52 35L75 45M52 55L80 60M52 70L70 75" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M52 15V85" stroke="white" strokeWidth="2" />
  </svg>
);

// Components
const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-9 h-9" />
            <span className="text-xl font-bold text-emerald-900 tracking-tight">EcoMind<span className="text-emerald-500">IA</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Como Funciona</a>
            <a href="#origin" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Origem</a>
            <a href="#impact" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Impacto</a>
            
            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
              <Languages className="w-4 h-4 text-slate-400" />
              {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-bold uppercase w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    lang === l ? 'bg-emerald-600 text-white' : 'hover:bg-slate-100 text-slate-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-4">
          <a href="#how" className="block text-lg font-medium text-slate-600">Como Funciona</a>
          <a href="#origin" className="block text-lg font-medium text-slate-600">Origem</a>
          <div className="flex gap-4 pt-4">
             {(['pt', 'en', 'es'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setIsOpen(false); }}
                  className={`flex-1 py-2 rounded-lg text-center font-bold uppercase ${
                    lang === l ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {l}
                </button>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ t }: { t: any }) => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            <Award className="w-4 h-4" />
            Projeto Premiado Nacionalmente
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/553197912550?text=Oi%21%20Vi%20a%20EcoMindIA%20no%20site%20e%20quero%20saber%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.cta}
            </a>
            <button className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 px-8 py-4 rounded-xl font-bold transition-all">
              Ver Projetos
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4">
             <div className="text-center">
               <span className="block text-2xl font-bold text-emerald-600">3k+</span>
               <span className="text-xs text-slate-400 uppercase font-semibold">Famílias</span>
             </div>
             <div className="w-px h-10 bg-slate-200"></div>
             <div className="text-center">
               <span className="block text-2xl font-bold text-emerald-600">15+</span>
               <span className="text-xs text-slate-400 uppercase font-semibold">Prêmios</span>
             </div>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000">
          <div className="relative bg-white rounded-3xl shadow-2xl p-4 border border-slate-100 max-w-sm mx-auto overflow-hidden">
            <div className="bg-[#075e54] text-white p-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100/20 flex items-center justify-center">
                <LogoIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold leading-none">EcoMindIA</div>
                <div className="text-[10px] opacity-70">online</div>
              </div>
            </div>
            <div className="bg-[#e5ddd5] p-3 space-y-4 min-h-[400px]">
              <div className="bg-white p-3 rounded-lg shadow-sm text-xs max-w-[85%]">
                Olá! Sou a EcoMindIA. Baseado nos dados do INPE, há previsão de geada para sua região nos próximos 3 dias.
              </div>
              <div className="bg-[#dcf8c6] p-3 rounded-lg shadow-sm text-xs max-w-[85%] ml-auto">
                O que devo fazer com meu plantio de café?
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm text-xs max-w-[85%] border-l-4 border-emerald-500">
                <strong>Recomendação:</strong> Aplique cobertura morta e evite podas agora. Isso ajudará a manter a temperatura do solo.
              </div>
              <div className="flex justify-center pt-8">
                <div className="animate-pulse flex items-center gap-1 text-[10px] text-slate-400">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  EcoMindIA está digitando...
                </div>
              </div>
            </div>
            <div className="p-2 border-t border-slate-200 flex gap-2">
              <div className="flex-1 h-8 bg-slate-100 rounded-full px-4 text-[10px] flex items-center text-slate-400 italic">Escreva sua dúvida...</div>
              <div className="w-8 h-8 bg-[#128c7e] rounded-full flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3">
             <div className="p-2 bg-emerald-100 rounded-lg"><Globe className="w-6 h-6 text-emerald-600" /></div>
             <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Fonte de Dados</p>
                <p className="text-sm font-bold text-slate-700 italic">IPCC / INPE</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyWhatsApp = ({ t }: { t: any }) => (
  <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
       <div className="grid grid-cols-12 gap-4 h-full">
         {Array.from({length: 48}).map((_, i) => (
           <div key={i} className="border border-white/20 h-20"></div>
         ))}
       </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.whatsapp.title}</h2>
        <p className="text-emerald-100 text-lg opacity-80">{t.whatsapp.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Users />, title: t.whatsapp.feature1, desc: "A tecnologia mais familiar para quem produz o alimento do Brasil." },
          { icon: <TrendingUp />, title: t.whatsapp.feature2, desc: "Funciona perfeitamente em redes 3G ou sinais instáveis de campo." },
          { icon: <ShieldCheck />, title: t.whatsapp.feature3, desc: "Segurança de dados e interface que dispensa treinamento." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-emerald-50/70 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InclusionSection = ({ t }: { t: any }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           <div className="relative z-10 bg-emerald-50 rounded-3xl p-8 border border-emerald-100 shadow-xl overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Mic className="w-32 h-32 text-emerald-600" />
             </div>
             <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                  Impacto Social
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t.inclusion.subtitle}</h3>
                <p className="text-slate-600 leading-relaxed italic border-l-4 border-emerald-500 pl-4">
                  "{t.inclusion.description}"
                </p>
                <div className="pt-4 grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{t.inclusion.featureVoice.title}</h4>
                      <p className="text-xs text-slate-500">{t.inclusion.featureVoice.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{t.inclusion.featureImage.title}</h4>
                      <p className="text-xs text-slate-500">{t.inclusion.featureImage.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <Volume2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{t.inclusion.featureAudioResponse.title}</h4>
                      <p className="text-xs text-slate-500">{t.inclusion.featureAudioResponse.desc}</p>
                    </div>
                  </div>
                </div>
             </div>
           </div>
           <div className="absolute -bottom-6 -right-6 w-32 h-32 grid grid-cols-4 gap-2 opacity-20 -z-10">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              ))}
           </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
           <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
             {t.inclusion.title}
           </h2>
           <p className="text-xl text-slate-600 leading-relaxed">
             No EcoMindIA, acreditamos que o <strong>conhecimento científico</strong> não deve exigir um diploma ou domínio da escrita. 
             Ao utilizar o WhatsApp, permitimos que o produtor rural use suas ferramentas naturais: <strong>a voz e o olhar</strong>.
           </p>
           <p className="text-lg text-slate-500">
             Essa é a verdadeira democratização tecnológica. É levar a inteligência do IPCC e da WMO para quem semeia com as mãos, sem pedir nada em troca além da vontade de proteger o solo.
           </p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = ({ t }: { t: any }) => (
  <section id="how" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
           <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">{t.howItWorks.title}</h2>
              
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-100"></div>
                
                {[
                  { step: t.howItWorks.steps.collect, icon: <Database /> },
                  { step: t.howItWorks.steps.analyze, icon: <Cpu /> },
                  { step: t.howItWorks.steps.deliver, icon: <MessageCircle /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className="w-12 h-12 bg-white border-2 border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 relative z-10">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
        
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
           <div className="bg-slate-900 p-8 rounded-3xl text-white space-y-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center"><Globe className="w-5 h-5" /></div>
              <h4 className="font-bold text-lg">IPCC & WMO</h4>
              <p className="text-slate-400 text-sm">Dados climáticos globais e alertas de desastres.</p>
           </div>
           <div className="bg-emerald-600 p-8 rounded-3xl text-white mt-12 space-y-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-white" /></div>
              <h4 className="font-bold text-lg">INPE</h4>
              <p className="text-emerald-100 text-sm">Monitoramento via satélite nacional.</p>
           </div>
           <div className="col-span-2 bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex items-center gap-6">
              <div className="p-4 bg-white rounded-2xl shadow-sm"><Lightbulb className="w-8 h-8 text-emerald-600" /></div>
              <div>
                <p className="text-emerald-800 font-bold">O Diferencial</p>
                <p className="text-emerald-600 text-sm">Validamos informações científicas com a realidade local do solo brasileiro.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Timeline = ({ t }: { t: any }) => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">{t.awards.title}</h2>
      </div>
      
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-100 -translate-y-1/2"></div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {[
            { year: "2025", title: t.awards.febic, icon: "🥈", color: "bg-slate-300", link: "https://www.febic.com.br" },
            { year: "2025", title: t.awards.fecitec, icon: "🥇", color: "bg-emerald-500", link: "https://fecitec.caf.ufv.br" },
            { year: "2025", title: t.awards.femic, icon: "🥇", color: "bg-emerald-600", link: "https://femic.com.br" }
          ].map((award, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center relative z-10 transform hover:-translate-y-2 transition-transform flex flex-col items-center">
              <div className={`w-16 h-16 ${award.color} text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 shadow-lg`}>
                {award.icon}
              </div>
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">{award.year}</span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 mb-6">{award.title}</h3>
              <a 
                href={award.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-full text-xs font-bold transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t.awards.officialSite}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Impact = ({ t }: { t: any }) => (
  <section id="impact" className="py-24 bg-emerald-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.impact.title}</h2>
        <p className="text-slate-600">Transformação que começa na ciência e termina na colheita.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { label: "Social", title: t.impact.social, stat: "98%", desc: "Acessibilidade para idosos rurais" },
          { label: "Ambiental", title: t.impact.eco, stat: "30%", desc: "Menos uso de defensivos" },
          { label: "Econômico", title: t.impact.economic, stat: "15%", desc: "Aumento na margem de lucro" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-lg shadow-emerald-900/5 border border-white hover:border-emerald-200 transition-all">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-4 block">{item.label}</span>
            <div className="text-4xl font-bold text-slate-900 mb-2">{item.stat}</div>
            <h4 className="text-lg font-bold text-emerald-800 mb-4">{item.title}</h4>
            <p className="text-slate-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const UseCases = ({ t }: { t: any }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.useCases.title}</h2>
          <p className="text-slate-600">Uma solução escalável para múltiplos setores da sociedade.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-emerald-600 font-bold group">
          Explorar Documentação <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-[300px]">
          <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Agricultura" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-xl font-bold">{t.useCases.agri}</h3>
            <p className="text-white/60 text-sm">Resiliência climática no campo.</p>
          </div>
        </div>
        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-[300px]">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Educação" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-xl font-bold">{t.useCases.edu}</h3>
            <p className="text-white/60 text-sm">Ciência cidadã nas escolas.</p>
          </div>
        </div>
        <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-[300px]">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Políticas" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-xl font-bold">{t.useCases.policy}</h3>
            <p className="text-white/60 text-sm">Dados para gestão pública.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Origin = ({ t }: { t: any }) => (
  <section id="origin" className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">{t.origin.title}</h2>
          <p className="text-slate-400 text-lg leading-relaxed">{t.origin.text}</p>
          <div className="p-6 bg-emerald-600/10 border border-emerald-600/20 rounded-2xl italic text-emerald-200">
            "Não buscamos apenas prever o clima, mas empoderar quem planta para que o caos não se torne fome."
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-sm font-bold">AG</div>
            <div>
              <p className="font-bold">Arthur Giancoti</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Autor Da Eco Mind</p>
            </div>
          </div>
        </div>
        <div className="relative">
           <div className="bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-3xl aspect-square rotate-3 flex items-center justify-center p-12">
              <div className="bg-slate-900 rounded-2xl w-full h-full -rotate-3 p-8 flex flex-col justify-center">
                 <h4 className="text-2xl font-bold mb-4">Semeando Sustentabilidade</h4>
                 <div className="h-1 w-20 bg-emerald-500 mb-6"></div>
                 <p className="text-slate-400">Um projeto focado na tríade: Ciência, Acessibilidade e Impacto Social.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <LogoIcon className="w-8 h-8" />
          <span className="text-lg font-bold text-emerald-900">EcoMindIA</span>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-emerald-600">Documentação</a>
          <a href="#" className="hover:text-emerald-600">Parcerias</a>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://www.instagram.com/ecomindia.social/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-emerald-100 hover:text-emerald-600 transition-all shadow-sm"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-50 text-center text-xs text-slate-400 uppercase tracking-widest font-bold">
        © 2025 EcoMindIA - Primeira Revolução Climática. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const t = translations[lang];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <Hero t={t} />
      <WhyWhatsApp t={t} />
      <InclusionSection t={t} />
      <HowItWorks t={t} />
      <Timeline t={t} />
      <Impact t={t} />
      <Origin t={t} />
      <UseCases t={t} />
      
      <div className="fixed bottom-6 right-6 z-40 group">
         <div className="absolute right-0 bottom-full mb-4 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            Clique para testar no WhatsApp!
         </div>
         <a 
            href="https://wa.me/553197912550?text=Oi%21%20Vi%20a%20EcoMindIA%20no%20site%20e%20quero%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all"
         >
            <MessageCircle className="w-8 h-8" />
         </a>
      </div>

      <Footer />
    </div>
  );
};

export default App;