import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Sparkles,
  Cog,
  Thermometer,
  ChefHat,
  WashingMachine,
  Users,
} from 'lucide-react';

const differentials = [
  {
    icon: Shield,
    title: 'Alta Durabilidade',
    desc: 'Produtos projetados para durar décadas. Resistência superior a impactos, rachaduras e deformações.',
  },
  {
    icon: Sparkles,
    title: 'Acabamento Premium',
    desc: 'Gel Coat de alto brilho que mantém a aparência impecável, resistente a manchas e descoloração.',
  },
  {
    icon: Cog,
    title: 'Tecnologia Avançada',
    desc: 'Marmofibra: mármore sintético revestido com fibra de vidro, unindo robustez, superfície lisa e acabamento em Gel Coat.',
  },
  {
    icon: Thermometer,
    title: 'Resistência Térmica',
    desc: 'Suportam variações extremas de temperatura sem trincas ou danos estruturais.',
  },
  {
    icon: Users,
    title: 'Atendimento Humanizado',
    desc: 'Suporte próximo e dedicado a cada cliente, com vendas internas responsáveis por 87% da receita da empresa.',
  },
];

export default function Home() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        {/* Hero BG image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-900/88 to-brand-900/70" />
        </div>

        {/* Blue accent bar (brand-inspired) */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-500 opacity-80" />

        <div className="relative section-container w-full py-32 md:py-0">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-8 h-0.5 bg-brand-400" />
              <span className="text-brand-400 text-xs font-bold uppercase tracking-[0.22em]">
                Marmofibra — Há 15 anos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 animate-fade-in-up">
              Inovação, resistência<br />
              e{' '}
              <span className="text-brand-400">acabamento impecável</span>{' '}
              para o seu lar.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10 animate-fade-in-up [animation-delay:0.15s]">
              Tecnologia de moldagem avançada para pias e tanques com
              qualidade, durabilidade e o design que a sua obra exige.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.3s]">
              <Link to="/produtos" className="btn-primary !text-base">
                Conheça Nosso Catálogo
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/quem-somos"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white/80 font-semibold rounded-lg border border-white/20 hover:border-white/50 hover:text-white transition-all duration-200 text-base"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in [animation-delay:0.7s]">
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-brand-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── Differentials ─── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-brand-500" />
              <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">
                Por que FIBRART
              </span>
              <div className="w-8 h-0.5 bg-brand-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-2 text-balance">
              Diferenciais que fazem a diferença
            </h2>
            <p className="text-charcoal-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Cada produto FIBRART é resultado de processos industriais
              rigorosos, materiais selecionados e tecnologia de ponta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="group p-7 rounded-2xl border border-charcoal-100 bg-white card-hover hover:border-brand-200 hover:shadow-brand-100/60"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Categories ─── */}
      <section className="section-padding bg-charcoal-50">
        <div className="section-container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-brand-500" />
              <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">
                Linhas de Produtos
              </span>
              <div className="w-8 h-0.5 bg-brand-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-2">
              Categorias em Destaque
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Link
              to="/produtos?cat=pia"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-hover"
            >
              <img
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pias FIBRART"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-900/30 to-transparent" />
              {/* Brand accent strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <ChefHat size={22} className="text-brand-400" />
                  <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">
                    Linha Gourmet
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Pias
                </h3>
                <p className="text-white/60 text-sm">
                  Da cozinha à área gourmet
                </p>
                <span className="inline-flex items-center gap-1 text-brand-400 text-sm font-bold mt-4 group-hover:gap-2 transition-all">
                  Ver catálogo <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link
              to="/produtos?cat=tanque"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-hover"
            >
              <img
                src="https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tanques FIBRART"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-900/30 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <WashingMachine size={22} className="text-brand-400" />
                  <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">
                    Linha Classic
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Tanques
                </h3>
                <p className="text-white/60 text-sm">
                  Lavanderia e área de serviço
                </p>
                <span className="inline-flex items-center gap-1 text-brand-400 text-sm font-bold mt-4 group-hover:gap-2 transition-all">
                  Ver catálogo <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="relative overflow-hidden gradient-brand">
        <div className="py-16 md:py-20">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Realizar sonhos agora ficou mais fácil!
            </h2>
            <p className="text-brand-100/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Trabalhamos com lojistas, distribuidores e construtoras em todo o
              Brasil. Qualidade e economia na mesma embalagem.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-lg hover:bg-brand-50 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              Seja um Distribuidor
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
