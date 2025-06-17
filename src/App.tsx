import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { 
  ChevronLeft, ChevronRight, Play, Pause, MapPin, Award, Star, TrendingUp,
  Users, Link as LinkIcon, PenSquare, BarChart2, DollarSign, ArrowRight, Mail, Phone, Globe, CheckCircle, Plus, Minus, ShieldCheck, Gem, RefreshCw, Send, Handshake,
  BedDouble, Car, KeyRound, Briefcase, Instagram, QrCode, 
  MessageSquare // <-- Adicione este
} from 'lucide-react';


import mmcLogo from './assets/logo-mmc.png';
import fozImg from './assets/foz.jpg';
import gramadoImg from './assets/gramado.jpg';
import rioImg from './assets/rio.jpg';
import img3848 from './assets/IMG_3848.jpeg';
import img43F4 from './assets/43F45E7F-CE78-4C2E-B1DA-05C4C9052368.jpeg';
import arquivo009 from './assets/Arquivo_009.jpeg';
import designSemNome from './assets/Designsemnome.jpg';
import gramadoVeu from './assets/gramadoveu.jpg';
import cataratasFalls from "./assets/cataratasfalls.jpeg"; // CORRIGIDO
import marcoAmericas from './assets/marcoamericas.jpeg';
import moara from './assets/moara.jpg';
import moara2 from './assets/moara2.jpg';
import cataratasDupla from './assets/cataratasdupla.jpeg';

// --- DATA SOURCE FOR THE PRESENTATION ---
const slides = [
  { id: 'cover', component: 'CoverSlide', background: img3848 },
  { id: 'intro', component: 'IntroSlide', background: img43F4 },
  { id: 'why-mmc', component: 'WhyMmcSlide', background: arquivo009 },
  { id: 'destinations', component: 'DestinationsSlide', background: designSemNome },
  { id: 'how-it-works', component: 'HowItWorksDashboardSlide', background: gramadoVeu },
  { id: 'product-tiers', component: 'ProductTiersDashboard', background: designSemNome },
  { id: 'who-can-be', component: 'WhoCanBeAffiliateSlide', background: cataratasFalls },
  { id: 'support', component: 'SupportSlide', background: marcoAmericas },
  { id: 'faq', component: 'FAQSlide', background: moara },
  { id: 'join-us-cycle', component: 'JoinUsCycleSlide', background: moara2 },
  { id: 'cta', component: 'CtaSlide', background: cataratasDupla },
];

// --- ANIMATION VARIANTS ---
const slideVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3 } },
};
const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

// --- REUSABLE COMPONENTS ---
const Card = ({ children, className = "", onClick }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, boxShadow: "0px 10px 30px -5px rgba(40, 167, 69, 0.3)" }}
    whileTap={{ scale: 0.98 }}
    className={`bg-white/90 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-white/20 text-dark-gray ${className}`}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

// --- SLIDE COMPONENTS DEFINITION ---

// CÓDIGO ATUALIZADO DO CoverSlide
const CoverSlide = () => (
  <motion.div variants={contentVariants} className="text-center flex flex-col items-center justify-center h-full px-4">
    
    {/* --- LOGO ADICIONADO AQUI --- */}
    <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
    
     <img src={mmcLogo} alt="MMC Receptivo Logo" className="w-32 h-32 sm:w-48 sm:h-48" />

    </motion.div>
    {/* --- FIM DA SEÇÃO DO LOGO --- */}

    <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
      Programa de Afiliados
    </motion.h1>
    <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-mmc-green mt-1 sm:mt-2">
      MMC Turismo
    </motion.h2>
    <motion.p variants={itemVariants} className="max-w-3xl text-sm sm:text-lg md:text-xl text-light-gray px-2 mt-4" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
      Indique experiências turísticas incríveis e ganhe comissões a cada venda.
    </motion.p>
    
    <motion.div 
      variants={itemVariants}
      className="sm:hidden flex items-center mt-8 text-light-gray/80 text-sm"
      animate={{ x: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ChevronLeft size={16} className="mr-1" />
      Deslize para navegar
      <ChevronRight size={16} className="ml-1" />
    </motion.div>
  </motion.div>
);

const IntroSlide = () => (
  <motion.div variants={contentVariants} className="text-center max-w-4xl mx-auto p-4">
    <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
      Seja um Parceiro de Sucesso MMC
    </motion.h1>
    <motion.p variants={itemVariants} className="text-sm sm:text-lg text-light-gray mb-4">
      A <span className="font-semibold text-mmc-green">MMC Turismo</span>, especialista em criar momentos inesquecíveis nos principais destinos do Brasil, convida você para uma parceria de crescimento mútuo.
    </motion.p>
    <motion.p variants={itemVariants} className="text-sm sm:text-lg text-light-gray">
      Transforme sua influência e suas indicações em uma fonte de renda, oferecendo o melhor do turismo nacional.
    </motion.p>
  </motion.div>
);

const WhyMmcSlide = () => (
  <motion.div variants={contentVariants} className="text-center p-2 sm:p-4">
    <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
      Por que escolher a MMC?
    </motion.h1>
    <motion.p variants={itemVariants} className="text-sm sm:text-lg text-light-gray mb-6 sm:mb-12">
      Credibilidade, qualidade e uma parceria que valoriza seu trabalho.
    </motion.p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-left">
      <Card>
        <Award className="w-8 h-8 sm:w-10 sm:h-10 text-mmc-green mb-2 sm:mb-4" />
        <h3 className="font-display text-lg sm:text-xl font-bold mb-1 sm:mb-2">Marca de Confiança</h3>
        <p className="text-sm sm:text-base">Associe-se a uma empresa com anos de mercado e milhares de avaliações positivas. Qualidade que vende por si só.</p>
      </Card>
      <Card>
        <Star className="w-8 h-8 sm:w-10 sm:h-10 text-mmc-green mb-2 sm:mb-4" />
        <h3 className="font-display text-lg sm:text-xl font-bold mb-1 sm:mb-2">Produtos de Alta Conversão</h3>
        <p className="text-sm sm:text-base">Ofereça passeios e serviços com alta demanda e satisfação garantida, facilitando suas vendas e maximizando seus ganhos.</p>
      </Card>
      <Card>
        <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-mmc-green mb-2 sm:mb-4" />
        <h3 className="font-display text-lg sm:text-xl font-bold mb-1 sm:mb-2">Potencial de Crescimento</h3>
        <p className="text-sm sm:text-base">Nosso programa é estruturado para recompensar seu desempenho, com comissões atrativas e suporte contínuo.</p>
      </Card>
    </div>
  </motion.div>
);

const DestinationsSlide = () => (
  <motion.div variants={contentVariants} className="text-center p-2 sm:p-4">
    <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
      Destinos Incríveis
    </motion.h1>
    <motion.p variants={itemVariants} className="text-xs sm:text-lg text-light-gray mb-6 sm:mb-12">
      Divulgue experiências nos locais mais desejados do Brasil.
    </motion.p>
    
    <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { img: fozImg, title: "Foz do Iguaçu", desc: "Cataratas, Itaipu e Aventura" },
        { img: gramadoImg, title: "Gramado", desc: "Charme Europeu e Gastronomia" },
        { img: rioImg, title: "Rio de Janeiro", desc: "Cidade Maravilhosa e seus Encantos" }
      ].map((dest, i) => (
        <motion.div key={i} variants={itemVariants} whileHover={{ y: -10, scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative rounded-xl overflow-hidden group shadow-lg sm:shadow-2xl">
          <img src={dest.img} alt={dest.title} className="w-full h-48 sm:h-64 md:h-80 object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 sm:p-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{dest.title}</h3>
            <p className="text-light-gray/90 text-sm sm:text-base">{dest.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const HowItWorksDashboardSlide = () => {
  const steps = [
    { icon: PenSquare, title: "Cadastre-se" }, { icon: LinkIcon, title: "Receba seu Link" },
    { icon: Users, title: "Divulgue" }, { icon: BarChart2, title: "Acompanhe" },
    { icon: DollarSign, title: "Receba" },
  ];
  return (
    <motion.div variants={contentVariants} className="text-center p-2 sm:p-4">
      <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-4xl font-bold text-white mb-6 sm:mb-12">
        O Ciclo de Sucesso do Afiliado
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-mmc-green/80 text-white rounded-full flex items-center justify-center border-2 border-white/50">
                <step.icon size={24} className="sm:w-8 sm:h-8" />
              </div>
              <p className="font-display text-xs sm:text-sm md:text-base font-semibold text-white mt-1 sm:mt-2">{step.title}</p>
            </motion.div>
            {i < steps.length - 1 && (<motion.div variants={itemVariants} className="h-6 w-px md:h-px md:w-8 sm:md:w-12 bg-mmc-green/70"></motion.div>)}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

const ProductTiersDashboard = () => {
  const initialTiers = [
    { name: 'Bronze', commissionRate: 0.03, icon: Award, color: 'text-amber-600', products: [
      { id: 1, name: 'Ingresso Cataratas BR', price: 120.00, count: 0 }, { id: 2, name: 'Voo Helisul 10min', price: 635.00, count: 0 },
    ]},
    { name: 'Prata', commissionRate: 0.05, icon: Award, color: 'text-slate-500', products: [
      { id: 3, name: 'Ingresso Museu de Cera', price: 110.00, count: 0 }, { id: 4, name: 'Kattamaram II c/ Almoço', price: 280.00, count: 0 },
    ]},
    { name: 'Ouro', commissionRate: 0.08, icon: Star, color: 'text-mmc-gold', products: [
      { id: 5, name: 'Transfer Cataratas BR', price: 100.00, count: 0 }, { id: 6, name: 'Transfer City Tour Foz', price: 100.00, count: 0 },
    ]},
    { name: 'Esmeralda', commissionRate: 0.10, icon: Gem, color: 'text-mmc-green', products: [
      { id: 7, name: 'Transfer Cataratas AR', price: 135.00, count: 0 }, { id: 8, name: 'Transfer By Night AR', price: 110.00, count: 0 },
    ]},
  ];
  const [tiers, setTiers] = useState(initialTiers);
  const handleProductChange = (tierIndex, productIndex, delta) => {
    const newTiers = [...tiers];
    const newCount = Math.max(0, newTiers[tierIndex].products[productIndex].count + delta);
    newTiers[tierIndex].products[productIndex].count = newCount;
    setTiers(newTiers);
  };
  const totalCommission = tiers.reduce((acc, tier) => {
    const tierCommission = tier.products.reduce((productAcc, product) => productAcc + (product.count * product.price * tier.commissionRate), 0);
    return acc + tierCommission;
  }, 0);

  return (
    <motion.div variants={contentVariants} className="text-center p-2 sm:p-4">
      <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
        Simulador de Comissão
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xs sm:text-lg text-light-gray mb-4 sm:mb-8">
        Adicione produtos para simular sua comissão
      </motion.p>
      <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-8">
        <div className="w-full lg:w-2/3 grid grid-cols-1 gap-4 sm:gap-6">
          {tiers.map((tier, tierIndex) => (
            <Card key={tier.name} className="flex flex-col">
              <div className="flex items-center mb-2 sm:mb-4">
                <tier.icon className={`w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 ${tier.color}`} />
                <h3 className={`font-display text-lg sm:text-2xl font-bold ${tier.color}`}>{tier.name} - {tier.commissionRate * 100}%</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {tier.products.map((product, productIndex) => (
                  <div key={product.id} className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="w-2/3">
                      <p className="font-semibold text-left truncate">{product.name}</p>
                      <p className="text-dark-gray/60 text-left">R$ {product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                      <button onClick={(e) => { e.stopPropagation(); handleProductChange(tierIndex, productIndex, -1); }} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"><Minus size={12} className="sm:w-3.5 sm:h-3.5"/></button>
                      <span className="font-bold text-sm w-4 sm:w-6 text-center">{product.count}</span>
                      <button onClick={(e) => { e.stopPropagation(); handleProductChange(tierIndex, productIndex, 1); }} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"><Plus size={12} className="sm:w-3.5 sm:h-3.5"/></button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <Card className="flex flex-col justify-center bg-mmc-green text-mmc-green p-4 sm:p-6">
            <p className="font-display font-semibold text-sm sm:text-xl">Comissão Total</p>
            <p className="font-display text-3xl sm:text-6xl font-extrabold my-1 sm:my-2">R$ <CountUp end={totalCommission} duration={0.5} separator="." decimal="," decimals={2} preserveValue /></p>
            <p className="text-[10px] sm:text-xs opacity-80 mt-1 sm:mt-2">Valor simulado. Comissão final varia conforme produtos vendidos.</p>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

const WhoCanBeAffiliateSlide = () => {
    const affiliateTypes = [
        { icon: Star, title: "Influenciadores Digitais" },
        { icon: MapPin, title: "Guias de Turismo" },
        { icon: PenSquare, title: "Blogueiros de Viagem" },
        { icon: Briefcase, title: "Agências de Viagem" },
        { icon: BedDouble, title: "Hotéis, pousadas e AirBnB" },
        { icon: Car, title: "Motoristas de App" },
        { icon: KeyRound, title: "Locadoras de Veículos" },
        { icon: Users, title: "Criadores de Conteúdo" },
    ];

    return (
        <motion.div variants={contentVariants} className="text-center p-2 sm:p-4">
            <motion.div variants={itemVariants} className="mb-6 sm:mb-12">
                <Users className="w-10 h-10 sm:w-14 sm:h-14 text-mmc-green mx-auto mb-3" />
                <h1 className="font-display text-2xl sm:text-4xl font-bold text-white">
                    Quem Pode Ser um Afiliado?
                </h1>
                <p className="text-sm sm:text-lg text-light-gray mt-2 max-w-2xl mx-auto">
                    Nosso programa é aberto para todos que amam o turismo e possuem uma audiência engajada.
                </p>
            </motion.div>
            
            <motion.div 
                variants={contentVariants} 
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
            >
                {affiliateTypes.map((affiliate, i) => (
                    <Card key={i} className="flex flex-col items-center justify-center text-center p-3 sm:p-4">
                        <affiliate.icon className="w-8 h-8 sm:w-10 sm:h-10 text-mmc-green mb-2 sm:mb-3"/>
                        <h3 className="font-display font-bold text-xs sm:text-base">{affiliate.title}</h3>
                    </Card>
                ))}
            </motion.div>
        </motion.div>
    );
};

const JoinUsCycleSlide = () => {
  const centerItem = { icon: MapPin, title: "Viaje com a gente", desc: "Conheça nossos produtos e destinos" };
  const items = [
    { icon: Send, title: "Venda com a gente", desc: "Compartilhe e ganhe comissões" },
    { icon: TrendingUp, title: "Cresça com a gente", desc: "Aumente seus ganhos" },
    { icon: Handshake, title: "Transforme vidas", desc: "Proporcione experiências" },
  ];
  return(
    <motion.div variants={contentVariants} className="text-center p-2 sm:p-4">
      <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-4xl font-bold text-white mb-6 sm:mb-12">
        Junte-se a Nós!
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-center">
        <motion.div variants={itemVariants} className="text-center">
          <centerItem.icon className="w-10 h-10 sm:w-12 sm:h-12 text-mmc-green mx-auto mb-2"/>
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">{centerItem.title}</h3>
          <p className="text-light-gray/80 text-sm sm:text-base">{centerItem.desc}</p>
        </motion.div>
        {items.map((item, i) => {
          const ItemIcon = item.icon;
          return (
            <motion.div key={i} variants={itemVariants} className="text-center">
              <ItemIcon className="w-10 h-10 sm:w-12 sm:h-12 text-mmc-green mx-auto mb-2"/>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">{item.title}</h3>
              <p className="text-light-gray/80 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  );
}

const SupportSlide = () => (
  <motion.div variants={contentVariants} className="text-center max-w-4xl mx-auto p-2 sm:p-4">
    <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
      Ferramentas e Suporte para Você
    </motion.h1>
    <motion.p variants={itemVariants} className="text-sm sm:text-lg text-light-gray mb-6 sm:mb-12">
      Oferecemos tudo o que você precisa para decolar.
    </motion.p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
      <Card>
        <BarChart2 className="w-6 h-6 sm:w-8 sm:h-8 text-mmc-green mb-2 sm:mb-3"/>
        <h3 className="font-display font-bold text-base sm:text-lg mb-1 sm:mb-1">Painel de Afiliado</h3>
        <p className="text-sm sm:text-base">Acompanhe seus cliques, vendas e comissões em tempo real com um dashboard completo e intuitivo.</p>
      </Card>
      <Card>
        <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-mmc-green mb-2 sm:mb-3"/>
        <h3 className="font-display font-bold text-base sm:text-lg mb-1 sm:mb-1">Materiais de Marketing</h3>
        <p className="text-sm sm:text-base">Acesso a um kit completo com banners, vídeos e fotos de alta qualidade para suas campanhas de divulgação.</p>
      </Card>
      <Card>
        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-mmc-green mb-2 sm:mb-3"/>
        <h3 className="font-display font-bold text-base sm:text-lg mb-1 sm:mb-1">Suporte Dedicado</h3>
        <p className="text-sm sm:text-base">Conte com nossa equipe de suporte para tirar dúvidas, receber dicas e otimizar suas estratégias de venda.</p>
      </Card>
      <Card>
        <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-mmc-green mb-2 sm:mb-3"/>
        <h3 className="font-display font-bold text-base sm:text-lg mb-1 sm:mb-1">Cookie de 30 dias</h3>
        <p className="text-sm sm:text-base">Se o cliente comprar em até 30 dias após clicar no seu link, a comissão ainda é sua. Mais chances de lucrar!</p>
      </Card>
    </div>
  </motion.div>
);

const FAQSlide = () => {
  const faqs = [
    { q: "Como funciona o rastreamento das vendas?", a: "Nosso sistema utiliza cookies para rastrear as vendas. Quando um cliente clica no seu link, um cookie de 30 dias é armazenado no navegador dele, garantindo sua comissão." },
    { q: "Qual o valor mínimo para solicitar o pagamento?", a: "O valor mínimo para resgate das comissões é de R$100,00." },
    { q: "Como e quando são feitos os pagamentos?", a: "Os pagamentos são processados quinzenalmente, via transferência bancária ou PIX, após a solicitação em seu painel." },
    { q: "Há algum custo para se tornar um afiliado?", a: "Não! O cadastro no nosso programa é 100% gratuito. Você só tem a ganhar." },
  ];
  const [expanded, setExpanded] = useState(null);

  return (
    <motion.div variants={contentVariants} className="max-w-4xl mx-auto p-2 sm:p-4">
      <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-12">
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Perguntas Frequentes</h1>
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
        {faqs.map((faq, i) => (
          <Card key={i} className="p-0 overflow-hidden">
            <motion.button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full flex justify-between items-center p-3 sm:p-6 text-left" aria-expanded={expanded === i} aria-controls={`faq-content-${i}`}>
              <h3 className="font-display text-sm sm:text-base font-semibold text-dark-gray">{faq.q}</h3>
              <motion.div animate={{ rotate: expanded === i ? 45 : 0 }} className="flex-shrink-0 ml-3 sm:ml-4"><Plus className="w-5 h-5 sm:w-6 sm:h-6 text-mmc-green"/></motion.div>
            </motion.button>
            <AnimatePresence>
              {expanded === i && (
                <motion.div id={`faq-content-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <p className="px-3 sm:px-6 pb-3 sm:pb-6 pt-0 text-sm sm:text-base text-dark-gray/80">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        ))}
      </motion.div>
    </motion.div>
  );
};

const CtaSlide = () => (
  <motion.div 
    variants={contentVariants} 
    className="text-center max-w-5xl mx-auto p-4"
  >
    {/* --- TÍTULO --- */}
    <motion.h1 
      variants={itemVariants} 
      className="font-display text-3xl sm:text-5xl font-bold text-white mb-2"
    >
      📣 Fale com a Gente!
    </motion.h1>
    <motion.p 
      variants={itemVariants} 
      className="text-sm sm:text-lg text-light-gray mb-8 sm:mb-12"
    >
      Dúvidas? Quer saber mais? Nossa equipe está pronta para ajudar.
    </motion.p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
      
      {/* --- COLUNA ESQUERDA: CONTATOS --- */}
      <motion.div 
        variants={contentVariants} 
        className="flex flex-col space-y-4 text-left w-full md:w-auto"
      >
        {/* WhatsApp */}
        <motion.a 
          href="https://wa.me/5545999376567" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={itemVariants}
          className="flex items-center gap-3 text-light-gray hover:text-white transition-colors group"
        >
          <MessageSquare className="w-6 h-6 text-mmc-green group-hover:scale-110 transition-transform" />
          <div>
            <span className="font-semibold text-white">WhatsApp</span>
            <p className="text-sm">(45) 99937-6567</p>
          </div>
        </motion.a>

        {/* Email */}
        <motion.a 
          href="mailto:afiliados@mmcreceptivo.com.br"
          variants={itemVariants}
          className="flex items-center gap-3 text-light-gray hover:text-white transition-colors group"
        >
          <Mail className="w-6 h-6 text-mmc-green group-hover:scale-110 transition-transform" />
           <div>
            <span className="font-semibold text-white">Email</span>
            <p className="text-sm">afiliados@mmcreceptivo.com.br</p>
          </div>
        </motion.a>

        {/* Instagram */}
         <motion.a 
          href="https://instagram.com/mmcturismo"
          target="_blank" 
          rel="noopener noreferrer"
          variants={itemVariants}
          className="flex items-center gap-3 text-light-gray hover:text-white transition-colors group"
        >
          <Instagram className="w-6 h-6 text-mmc-green group-hover:scale-110 transition-transform" />
          <div>
            <span className="font-semibold text-white">Instagram</span>
            <p className="text-sm">@mmcturismo</p>
          </div>
        </motion.a>
      </motion.div>

      {/* --- COLUNA DIREITA: QR CODE E CTA --- */}
      <motion.div variants={itemVariants} className="flex flex-col items-center">
        <div className="bg-white p-3 rounded-xl shadow-2xl">
           {/* Para o QR Code funcionar, você precisará usar uma biblioteca 
             como 'qrcode.react' e passar a URL de cadastro.
             Ex: <QRCode value="https://mmcreceptivo.com.br/afiliados" size={140} />
             Este é um placeholder visual.
           */}
          <QrCode className="w-32 h-32 sm:w-36 sm:h-36 text-dark-gray" />
        </div>
        <p className="text-white font-semibold mt-3 text-sm">Escaneie para se cadastrar!</p>
      </motion.div>

    </div>
    
     {/* --- BOTÃO DE CADASTRO PRINCIPAL --- */}
    <motion.div variants={itemVariants} className="mt-12">
        <motion.a 
          href="https://mmcreceptivo.com.br/afiliados"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-mmc-gold text-dark-gray px-8 py-3 sm:px-12 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 transition-colors shadow-lg"
        >
          QUERO ME CADASTRAR AGORA
        </motion.a>
    </motion.div>

  </motion.div>
);

// --- SLIDE COMPONENTS MAPPING ---
const slideComponents = {
  CoverSlide, IntroSlide, WhyMmcSlide, DestinationsSlide, HowItWorksDashboardSlide, 
  ProductTiersDashboard, WhoCanBeAffiliateSlide, JoinUsCycleSlide, SupportSlide, 
  FAQSlide, CtaSlide,
};

// --- MAIN PRESENTATION COMPONENT ---
export default function MmcPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(nextSlide, 12000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) { nextSlide(); }
    else if (isRightSwipe) { prevSlide(); }
  };
  const CurrentSlideComponent = slideComponents[slides[currentSlide].component] || CoverSlide;

  return (
    <div id="main-container" className="min-h-screen bg-dark-gray text-white font-sans overflow-hidden">
      <div className="relative h-screen flex flex-col" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={slides[currentSlide].id}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeInOut' } }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-gray-800 opacity-0"></div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-br from-mmc-green/80 via-dark-gray/80 to-black/95"></div>
        </div>
        
        <div className="relative z-10 flex-grow flex items-center justify-center overflow-y-auto p-2 sm:p-4 md:p-8">
          <div className="w-full max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <CurrentSlideComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-black/30 backdrop-blur-md rounded-full p-1 px-2 sm:px-3 text-xs sm:text-sm border border-white/10">
          <span>{currentSlide + 1} / {slides.length}</span>
        </div>
        
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
          <button onClick={() => setIsAutoPlay(!isAutoPlay)} className="bg-black/30 backdrop-blur-md rounded-full p-1 sm:p-2 hover:bg-white/20 active:scale-95 transition-all flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 border border-white/10 text-xs sm:text-sm" aria-label={isAutoPlay ? "Pausar apresentação automática" : "Iniciar apresentação automática"}>
            {isAutoPlay ? <Pause size={14} /> : <Play size={14} />}
            <span className="hidden sm:inline">{isAutoPlay ? "Pausar" : "Auto"}</span>
          </button>
        </div>
        
        <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-white/30 transition-colors hidden sm:block" aria-label="Slide Anterior"><ChevronLeft /></button>
        <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-white/30 transition-colors hidden sm:block" aria-label="Próximo Slide"><ChevronRight /></button>
        
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20">
          <motion.div className="h-full bg-mmc-green" animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} transition={{ duration: 0.5, ease: 'easeOut' }} />
        </div>
      </div>
    </div>
  );
}