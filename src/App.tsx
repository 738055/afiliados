import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { 
  ChevronLeft, ChevronRight, Play, Pause, MapPin, Award, Star, TrendingUp,
  Users, Link as LinkIcon, PenSquare, BarChart2, DollarSign, ArrowRight, Mail, Phone, Globe, CheckCircle, Plus, Minus, ShieldCheck, Gem, RefreshCw, Send, Handshake
} from 'lucide-react';

// --- DATA SOURCE FOR THE PRESENTATION ---
const slides = [
  { id: 'cover', component: 'CoverSlide', background: 'https://images.pexels.com/photos/2363359/pexels-photo-2363359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'intro', component: 'IntroSlide', background: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'why-mmc', component: 'WhyMmcSlide', background: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'destinations', component: 'DestinationsSlide', background: 'https://images.pexels.com/photos/1797223/pexels-photo-1797223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'how-it-works', component: 'HowItWorksDashboardSlide', background: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'product-tiers', component: 'ProductTiersDashboard', background: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'support', component: 'SupportSlide', background: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'faq', component: 'FAQSlide', background: 'https://images.pexels.com/photos/3182830/pexels-photo-3182830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'join-us-cycle', component: 'JoinUsCycleSlide', background: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  { id: 'cta', component: 'CtaSlide', background: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
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
const Card = ({ children, className = "" }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, boxShadow: "0px 10px 30px -5px rgba(40, 167, 69, 0.3)" }}
        className={`bg-white/90 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-white/20 text-dark-gray ${className}`}
    >
        {children}
    </motion.div>
);

// --- SLIDE COMPONENTS DEFINITION ---

const CoverSlide = () => (
    <motion.div variants={contentVariants} className="text-center flex flex-col items-center justify-center h-full p-4">
        <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>Programa de Afiliados</motion.h1>
        <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-mmc-green mt-2">MMC RECEPTIVO</motion.h2>
        <motion.div variants={itemVariants} className="w-24 h-1 bg-mmc-green my-6 md:my-8 rounded-full" />
        <motion.p variants={itemVariants} className="max-w-3xl text-base sm:text-lg md:text-xl text-light-gray" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>Indique experiências turísticas incríveis e ganhe comissões a cada venda.</motion.p>
    </motion.div>
);

const IntroSlide = () => (
    <motion.div variants={contentVariants} className="text-center max-w-4xl mx-auto p-4">
        <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Seja um Parceiro de Sucesso MMC</motion.h1>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-light-gray mb-4">A <span className="font-semibold text-mmc-green">MMC Receptivo</span>, especialista em criar momentos inesquecíveis nos principais destinos do Brasil, convida você para uma parceria de crescimento mútuo.</motion.p>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-light-gray">Transforme sua influência e suas indicações em uma fonte de renda, oferecendo o melhor do turismo nacional.</motion.p>
    </motion.div>
);

const WhyMmcSlide = () => (
    <motion.div variants={contentVariants} className="text-center p-4">
        <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Por que escolher a MMC?</motion.h1>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-light-gray mb-12">Credibilidade, qualidade e uma parceria que valoriza seu trabalho.</motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Card>
                <Award className="w-10 h-10 text-mmc-green mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Marca de Confiança</h3>
                <p>Associe-se a uma empresa com anos de mercado e milhares de avaliações positivas. Qualidade que vende por si só.</p>
            </Card>
            <Card>
                <Star className="w-10 h-10 text-mmc-green mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Produtos de Alta Conversão</h3>
                <p>Ofereça passeios e serviços com alta demanda e satisfação garantida, facilitando suas vendas e maximizando seus ganhos.</p>
            </Card>
            <Card>
                <TrendingUp className="w-10 h-10 text-mmc-green mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Potencial de Crescimento</h3>
                <p>Nosso programa é estruturado para recompensar seu desempenho, com comissões atrativas e suporte contínuo.</p>
            </Card>
        </div>
    </motion.div>
);

const DestinationsSlide = () => (
    <motion.div variants={contentVariants} className="text-center p-4">
        <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Destinos Incríveis para Promover</motion.h1>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-light-gray mb-12">Divulgue experiências nos locais mais desejados do Brasil.</motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} whileHover={{y: -10, scale: 1.03}} className="relative rounded-xl overflow-hidden group shadow-2xl">
                <img src="https://images.pexels.com/photos/164543/pexels-photo-164543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Foz do Iguaçu" className="w-full h-80 object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">Foz do Iguaçu</h3>
                    <p className="text-light-gray/90">Cataratas, Itaipu e Aventura.</p>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{y: -10, scale: 1.03}} className="relative rounded-xl overflow-hidden group shadow-2xl">
                <img src="https://images.pexels.com/photos/10197711/pexels-photo-10197711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gramado" className="w-full h-80 object-cover"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">Gramado</h3>
                    <p className="text-light-gray/90">Charme Europeu e Gastronomia.</p>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{y: -10, scale: 1.03}} className="relative rounded-xl overflow-hidden group shadow-2xl sm:col-span-2 lg:col-span-1">
                <img src="https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Rio de Janeiro" className="w-full h-80 object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">Rio de Janeiro</h3>
                    <p className="text-light-gray/90">Cidade Maravilhosa e seus Encantos.</p>
                </div>
            </motion.div>
        </div>
    </motion.div>
);

const HowItWorksDashboardSlide = () => {
    const steps = [
        { icon: PenSquare, title: "Cadastre-se" },
        { icon: LinkIcon, title: "Receba seu Link" },
        { icon: Users, title: "Divulgue" },
        { icon: BarChart2, title: "Acompanhe" },
        { icon: DollarSign, title: "Receba" },
    ];
    return (
        <motion.div variants={contentVariants} className="text-center p-4">
            <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">O Ciclo de Sucesso do Afiliado</motion.h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                {steps.map((step, i) => (
                    <React.Fragment key={i}>
                        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-mmc-green/80 text-white rounded-full flex items-center justify-center border-2 border-white/50">
                                <step.icon size={32} />
                            </div>
                            <p className="font-display text-sm sm:text-base font-semibold text-white mt-2">{step.title}</p>
                        </motion.div>
                        {i < steps.length - 1 && (
                            <motion.div variants={itemVariants} className="h-8 w-px md:h-px md:w-12 bg-mmc-green/70"></motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
    );
};

const ProductTiersDashboard = () => {
    const initialTiers = [
        { name: 'Bronze', commissionRate: 0.03, icon: Award, color: 'text-amber-600', products: [
            { id: 1, name: 'Ingresso Cataratas BR', price: 120.00, count: 0 },
            { id: 2, name: 'Voo Helisul 10min', price: 635.00, count: 0 },
        ]},
        { name: 'Prata', commissionRate: 0.05, icon: Award, color: 'text-slate-500', products: [
            { id: 3, name: 'Ingresso Museu de Cera', price: 110.00, count: 0 },
            { id: 4, name: 'Kattamaram II c/ Almoço', price: 280.00, count: 0 },
        ]},
        { name: 'Ouro', commissionRate: 0.08, icon: Star, color: 'text-mmc-gold', products: [
             { id: 5, name: 'Transfer Cataratas BR', price: 100.00, count: 0 },
             { id: 6, name: 'Transfer City Tour Foz', price: 100.00, count: 0 },
        ]},
        { name: 'Esmeralda', commissionRate: 0.10, icon: Gem, color: 'text-mmc-green', products: [
             { id: 7, name: 'Transfer Cataratas AR', price: 135.00, count: 0 },
             { id: 8, name: 'Transfer By Night AR', price: 110.00, count: 0 },
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
        const tierCommission = tier.products.reduce((productAcc, product) => {
            return productAcc + (product.count * product.price * tier.commissionRate);
        }, 0);
        return acc + tierCommission;
    }, 0);

    return (
        <motion.div variants={contentVariants} className="text-center p-4">
            <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Simulador de Comissão por Produto</motion.h1>
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-light-gray mb-8">Adicione produtos de cada nível para simular sua comissão estimada.</motion.p>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tiers.map((tier, tierIndex) => (
                        <Card key={tier.name} className="flex flex-col">
                            <div className="flex items-center mb-4">
                                <tier.icon className={`w-8 h-8 mr-3 ${tier.color}`} />
                                <h3 className={`font-display text-xl sm:text-2xl font-bold ${tier.color}`}>{tier.name} - {tier.commissionRate * 100}%</h3>
                            </div>
                            <div className="space-y-3">
                                {tier.products.map((product, productIndex) => (
                                    <div key={product.id} className="flex items-center justify-between text-sm">
                                        <div>
                                            <p className="font-semibold text-left">{product.name}</p>
                                            <p className="text-dark-gray/60 text-left">R$ {product.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                                            <button onClick={() => handleProductChange(tierIndex, productIndex, -1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"><Minus size={14}/></button>
                                            <span className="font-bold text-md w-6 text-center">{product.count}</span>
                                            <button onClick={() => handleProductChange(tierIndex, productIndex, 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"><Plus size={14}/></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="sticky top-28">
                         <Card className="h-full flex flex-col justify-center bg-mmc-green text-white">
                            <p className="font-display font-semibold text-lg sm:text-xl">Comissão Total Estimada</p>
                            <p className="font-display text-4xl sm:text-6xl font-extrabold my-2">
                                R$ <CountUp end={totalCommission} duration={0.5} separator="." decimal="," decimals={2} preserveValue />
                            </p>
                            <p className="text-xs opacity-80 mt-2">Valor simulado. A comissão final dependerá dos produtos vendidos.</p>
                        </Card>
                    </div>
                </div>
            </div>
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
        <motion.div variants={contentVariants} className="text-center p-4">
            <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">Junte-se a Nós!</motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                 <motion.div variants={itemVariants} className="text-center">
                    <centerItem.icon className="w-12 h-12 text-mmc-green mx-auto mb-2"/>
                    <h3 className="font-display text-xl font-bold text-white">{centerItem.title}</h3>
                    <p className="text-light-gray/80">{centerItem.desc}</p>
                 </motion.div>
                 {items.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                        <motion.div key={i} variants={itemVariants} className="text-center">
                            <ItemIcon className="w-12 h-12 text-mmc-green mx-auto mb-2"/>
                            <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-light-gray/80">{item.desc}</p>
                        </motion.div>
                    )
                 })}
            </div>
        </motion.div>
    );
}

const SupportSlide = () => (
    <motion.div variants={contentVariants} className="text-center max-w-4xl mx-auto p-4">
        <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Ferramentas e Suporte para Você</motion.h1>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-light-gray mb-12">Oferecemos tudo o que você precisa para decolar.</motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <Card>
                <BarChart2 className="w-8 h-8 text-mmc-green mb-3"/>
                <h3 className="font-display font-bold text-lg mb-1">Painel de Afiliado</h3>
                <p>Acompanhe seus cliques, vendas e comissões em tempo real com um dashboard completo e intuitivo.</p>
            </Card>
            <Card>
                 <ShieldCheck className="w-8 h-8 text-mmc-green mb-3"/>
                <h3 className="font-display font-bold text-lg mb-1">Materiais de Marketing</h3>
                <p>Acesso a um kit completo com banners, vídeos e fotos de alta qualidade para suas campanhas de divulgação.</p>
            </Card>
            <Card>
                 <Users className="w-8 h-8 text-mmc-green mb-3"/>
                <h3 className="font-display font-bold text-lg mb-1">Suporte Dedicado</h3>
                <p>Conte com nossa equipe de suporte para tirar dúvidas, receber dicas e otimizar suas estratégias de venda.</p>
            </Card>
             <Card>
                <Globe className="w-8 h-8 text-mmc-green mb-3"/>
                <h3 className="font-display font-bold text-lg mb-1">Cookie de 30 dias</h3>
                <p>Se o cliente comprar em até 30 dias após clicar no seu link, a comissão ainda é sua. Mais chances de lucrar!</p>
            </Card>
        </div>
    </motion.div>
);

const FAQSlide = () => {
    const faqs = [
        { q: "Como funciona o rastreamento das vendas?", a: "Nosso sistema utiliza cookies para rastrear as vendas. Quando um cliente clica no seu link, um cookie de 30 dias é armazenado no navegador dele, garantindo sua comissão." },
        { q: "Qual o valor mínimo para solicitar o pagamento?", a: "O valor mínimo para resgate das comissões é de R$100,00." },
        { q: "Como e quando são feitos os pagamentos?", a: "Os pagamentos são processados mensalmente, via transferência bancária ou PIX, após a solicitação em seu painel." },
        { q: "Há algum custo para se tornar um afiliado?", a: "Não! O cadastro no nosso programa é 100% gratuito. Você só tem a ganhar." },
    ];
    const [expanded, setExpanded] = useState(null);

    return (
        <motion.div variants={contentVariants} className="max-w-4xl mx-auto p-4">
            <motion.div variants={itemVariants} className="text-center mb-12">
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h1>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
                {faqs.map((faq, i) => (
                    <Card key={i} className="p-0 overflow-hidden">
                        <motion.button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left">
                            <h3 className="font-display text-base sm:text-lg font-semibold text-dark-gray">{faq.q}</h3>
                            <motion.div animate={{ rotate: expanded === i ? 45 : 0 }} className="flex-shrink-0 ml-4">
                                <Plus className="w-6 h-6 text-mmc-green"/>
                            </motion.div>
                        </motion.button>
                        <AnimatePresence>
                            {expanded === i && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                                    <p className="px-6 pb-6 pt-0 text-dark-gray/80">{faq.a}</p>
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
    <motion.div variants={contentVariants} className="text-center max-w-3xl mx-auto p-4">
        <motion.div variants={itemVariants} className="w-24 h-24 bg-mmc-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Star className="w-12 h-12" fill="currentColor"/>
        </motion.div>
        <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Seja um Afiliado</motion.h1>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-light-gray mb-12">Comece sua jornada como afiliado MMC Receptivo hoje mesmo. O cadastro é rápido, fácil e gratuito.</motion.p>
        
        <motion.div variants={itemVariants}>
            <motion.a 
                href="https://mmcreceptivo.com.br/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-mmc-gold text-dark-gray px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
                QUERO ME CADASTRAR AGORA
            </motion.a>
        </motion.div>
    </motion.div>
);

// --- SLIDE COMPONENTS MAPPING (CORRECTED) ---
const slideComponents = {
  CoverSlide, IntroSlide, WhyMmcSlide, DestinationsSlide, HowItWorksDashboardSlide, 
  ProductTiersDashboard, JoinUsCycleSlide, SupportSlide, FAQSlide, CtaSlide,
};

// --- MAIN PRESENTATION COMPONENT ---
export default function MmcPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 12000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);
  
  const CurrentSlideComponent = slideComponents[slides[currentSlide].component] || CoverSlide;

  return (
    <div id="main-container" className="min-h-screen bg-dark-gray text-white font-sans overflow-hidden">
      <div className="relative h-screen flex flex-col">
        
        <div className="absolute inset-0">
            <AnimatePresence>
                <motion.div
                    key={slides[currentSlide].id}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeInOut' } }}
                    exit={{ opacity: 0 }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-br from-mmc-green/80 via-dark-gray/80 to-black/95"></div>
        </div>
        
        <div className="relative z-10 flex-grow flex items-center justify-center overflow-y-auto p-4 md:p-8">
          <div className="w-full max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <CurrentSlideComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- UI Controls --- */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-black/30 backdrop-blur-md rounded-full p-2 px-3 sm:px-4 text-xs sm:text-sm border border-white/10">
            <span>{currentSlide + 1} / {slides.length}</span>
        </div>
        
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
          <button 
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="bg-black/30 backdrop-blur-md rounded-full p-2 hover:bg-white/20 transition-colors flex items-center space-x-2 px-3 border border-white/10"
          >
            {isAutoPlay ? <Pause size={16}/> : <Play size={16}/>}
            <span className='hidden sm:inline text-sm'>{isAutoPlay ? "Pausar" : "Auto"}</span>
          </button>
        </div>

        <div className="relative z-20 mt-auto flex-shrink-0">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 bg-black/30 backdrop-blur-md rounded-full p-2 border border-white/10 mx-auto my-4 w-fit">
              <button onClick={prevSlide} className="p-2 rounded-full hover:bg-white/20 transition-colors"><ChevronLeft size={20} /></button>
              <div className="flex space-x-1.5 sm:space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-mmc-gold scale-125' : 'bg-light-gray/70 hover:bg-white'}`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="p-2 rounded-full hover:bg-white/20 transition-colors"><ChevronRight size={20} /></button>
            </div>
        </div>

      </div>
    </div>
  );
}
