import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Truck 
} from 'lucide-react';
import { products } from '../data/products';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const base = import.meta.env.BASE_URL;
  const whatsappUrl = 'https://wa.me/5531973101116?text=' + encodeURIComponent(
    'Olá! Vim pelo site da Fibrart e gostaria de solicitar um orçamento dos produtos direto de fábrica.'
  );

  // Seleciona os 3 primeiros produtos como destaque
  const featuredProducts = products.slice(0, 3);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto Principal */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Mais de 16 Anos de Tradição e Excelência
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Tanques, Pias e Lavatórios em <span className="text-blue-400">Marmofibra</span>
              </h1>
              
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-xl">
                A união da beleza do mármore com a resistência da fibra de vidro e acabamento exclusivo em Gel Coat. Direto da fábrica em Sete Lagoas - MG.
              </p>

              {/* Botões de Chamada */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => handleNavigate('products')}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-200"
                >
                  Ver Catálogo Completo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Orçamento no WhatsApp
                </a>
              </div>

              {/* Indicadores */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">+16</p>
                  <p className="text-xs text-slate-400 mt-1">Anos de Mercado</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">100%</p>
                  <p className="text-xs text-slate-400 mt-1">Produção Própria</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">4 Cores</p>
                  <p className="text-xs text-slate-400 mt-1">Gel Coat Nobre</p>
                </div>
              </div>
            </div>

            {/* Imagem em Destaque no Hero */}
            <div className="relative">
              <div className="relative aspect-[16/9] w-full bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl p-4 flex items-center justify-center">
                <img
                  src={`${base}products/pia-120-50.png`}
                  alt="Pia de Marmofibra Fibrart"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DA MARMOFIBRA */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Por que escolher a Fibrart?</h2>
            <p className="text-slate-600 mt-2 text-sm">
              Conheça os diferenciais técnicos que garantem a satisfação de lojistas e consumidores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Fibra de Vidro</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Revestimento estrutural que absorve impactos e elimina a fragilidade do mármore sintético comum.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Pintura em Gel Coat</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Formulação exclusiva com acabamento espelhado e máxima resistência contra manchas.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Preço de Fábrica</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Condições comerciais diretas da indústria em Sete Lagoas, ampliando a margem de revenda.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Entrega Ágil</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Logística programada com frota própria para garantir pedidos pontuais e sem avarias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Destaques do Catálogo</h2>
              <p className="text-slate-600 text-sm mt-1">Conheça nossos modelos mais procurados.</p>
            </div>
            <button
              onClick={() => handleNavigate('products')}
              className="mt-4 sm:mt-0 text-blue-600 font-semibold hover:underline flex items-center gap-1 text-sm"
            >
              Ver todos os modelos →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleNavigate('products')}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col"
              >
                {/* Imagem Horizontal 16:9 */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden flex items-center justify-center p-3 border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold mb-3">
                      Medidas: {product.dimensions}
                    </p>
                    <p className="text-slate-600 text-xs line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">4 cores disponíveis</span>
                    <span className="text-xs font-bold text-blue-600">Ver detalhes →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER DE CHAMADA FINAL */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto para abastecer sua loja ou obra com a Fibrart?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Entre em contato com nossa equipe comercial e receba a tabela de preços para sua cidade.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Vendas no WhatsApp: (31) 97310-1116
          </a>
        </div>
      </section>
    </div>
  );
}
