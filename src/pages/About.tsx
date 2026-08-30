import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle2, 
  Calendar, 
  Factory, 
  TrendingUp, 
  Check 
} from 'lucide-react';

const timelineEvents = [
  {
    year: '2010',
    title: 'Fundação da Fibrart',
    description: 'Início das atividades em Prudente de Morais com a proposta de desenvolver pias e tanques artesanais em marmofibra com alta durabilidade e custo acessível.',
    icon: Calendar,
  },
  {
    year: '2016',
    title: 'Expansão e Nova Fábrica em Sete Lagoas',
    description: 'Com o aumento da demanda, a Fibrart expandiu sua estrutura e transferiu a unidade fabril para a Rodovia MG-424 em Sete Lagoas - MG, otimizando a logística de entrega.',
    icon: Factory,
  },
  {
    year: '2020',
    title: 'Inovação em Gel Coat e Linha Inox',
    description: 'Desenvolvimento de formulação própria de Gel Coat para acabamento de alto brilho e lançamento das pias de marmofibra com bojo em aço inox 430 polido.',
    icon: Sparkles,
  },
  {
    year: 'Hoje (+16 anos)',
    title: 'Consolidação e Parceria com o Mercado',
    description: 'Mais de 16 anos de história sólida, sendo referência para lojistas de materiais de construção, atacadistas e construtoras de toda a região.',
    icon: TrendingUp,
  },
];

export default function About() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            Quem Somos
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Mais de 16 Anos de Tradição e Inovação em Marmofibra
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Fundada em 2010, a Fibrart é especialista na fabricação de tanques, pias e lavatórios em mármore sintético revestido com fibra de vidro, unindo resistência mecânica, acabamento impecável e o melhor custo-benefício do mercado.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Nossa Linha do Tempo</h2>
            <p className="text-slate-600 text-sm mt-2">
              Conheça os principais marcos da história da Fibrart ao longo de mais de 16 anos.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-32 md:border-l-2 space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  {/* Marcador do Ponto na Linha */}
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Cartão de Conteúdo */}
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-3">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Diferenciais da Tecnologia Marmofibra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wide">
              Tecnologia Exclusiva
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              A Resistência e o Acabamento da Marmofibra
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Nossos produtos são desenvolvidos a partir de um núcleo robusto de mármore sintético reforçado com manta estrutural de fibra de vidro e finalizado com pintura em Gel Coat de formulação exclusiva.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div>
                <p className="text-3xl font-extrabold text-blue-600">+16</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Anos de Mercado</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-600">100%</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Produção Própria</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-600">4 Cores</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Padrão de Acabamento</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-blue-900 to-slate-800 p-8 sm:p-10 rounded-3xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-blue-400" />
              Diferenciais Fibrart
            </h3>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Revestimento em Fibra de Vidro:</strong> Alta resistência a impactos e flexibilidade que evitam quebras acidentais.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Pintura em Gel Coat:</strong> Brilho constante e proteção contra manchas, nas cores <em>Branco Liso</em>, <em>Preto Aracruz</em>, <em>Cinza Andorinha</em> e <em>Bege Bahia</em>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Superfície Não Porosa:</strong> Facilita a limpeza diária e garante máxima higiene.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Custo-Benefício Superior:</strong> Estética de pedras nobres com valores e margens altamente atrativas.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pilares / Valores */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Nossos Pilares</h2>
            <p className="text-slate-600 text-sm mt-2">
              Princípios que guiam nossa produção e o atendimento direto da indústria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Atendimento Humanizado</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Suporte ágil e consultivo para lojistas e construtoras, com canais diretos de orçamento e pedidos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Qualidade & Robustez</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Padrão industrial consistente com matérias-primas selecionadas e inspeção rigorosa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Preço Competitivo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Venda direta de fábrica com condições comerciais projetadas para alavancar a rentabilidade da sua loja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}