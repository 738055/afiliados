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
        className={`bg-white/90 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-dark-gray ${className}`}
    >
        {children}
    </motion.div>
);

// --- SLIDE COMPONENTS DEFINITION ---

const CoverSlide = () => (
    <motion.div variants={contentVariants} className="text-center flex flex-col items-center justify-center h-full">
        <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl font-bold text-white leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>Programa de Afiliados</motion.h1>
        <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl font-extrabold text-mmc-green mt-2">MMC RECEPTIVO</motion.h2>
        <motion.div variants={itemVariants} className="w-24 h-1 bg-mmc-green my-8 rounded-full" />
        <motion.p variants={itemVariants} className="max-w-3xl text-lg md:text-xl text-light-gray" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>Indique experiências turísticas incríveis e ganhe comissões a cada venda.</motion.p>
    </motion.div>
);

const IntroSlide = () => (
    <motion.div variants={contentVariants} className="text-center max-w-4xl mx-auto">
        <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Seja um Parceiro de Sucesso MMC</motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-light-gray mb-4">A <span className="font-semibold text-mmc-green">MMC Receptivo</span>, especialista em criar momentos inesquecíveis nos principais destinos do Brasil, convida você para uma parceria de crescimento mútuo.</motion.p>
        <motion.p variants={itemVariants} className="text-lg text-light-gray">Transforme sua influência e suas indicações em uma fonte de renda, oferecendo o melhor do turismo nacional.</motion.p>
    </motion.div>
);

const WhyMmcSlide = () => (
    <motion.div variants={contentVariants} className="text-center">
        <motion.h1 variants={itemVariants} className="font-display text-4xl font-bold text-white mb-4">Por que escolher a MMC?</motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-light-gray mb-12">Credibilidade, qualidade e uma parceria que valoriza seu trabalho.</motion.p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
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
    <motion.div variants={contentVariants} className="text-center">
        <motion.h1 variants={itemVariants} className="font-display text-4xl font-bold text-white mb-4">Destinos Incríveis para Promover</motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-light-gray mb-12">Divulgue experiências nos locais mais desejados do Brasil.</motion.p>
        <div className="grid md:grid-cols-3 gap-8">
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
            <motion.div variants={itemVariants} whileHover={{y: -10, scale: 1.03}} className="relative rounded-xl overflow-hidden group shadow-2xl">
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
    const centralPoint = { x: 300, y: 225 };
    const radiusX = 280;
    const radiusY = 180;
    const steps = [
        { icon: PenSquare, title: "Cadastre-se" },
        { icon: LinkIcon, title: "Receba seu Link" },
        { icon: Users, title: "Divulgue" },
        { icon: BarChart2, title: "Acompanhe" },
        { icon: DollarSign, title: "Receba" },
    ].map((step, i, arr) => {
        const angle = (i / arr.length) * 2 * Math.PI - Math.PI / 2;
        return { ...step, x: centralPoint.x + Math.cos(angle) * radiusX, y: centralPoint.y + Math.sin(angle) * radiusY };
    });

    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: i => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.7, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: i * 0.7, duration: 0.01 }
            }
        })
    };

    return (
        <motion.div variants={contentVariants} className="text-center">
            <motion.h1 variants={itemVariants} className="font-display text-4xl font-bold text-white mb-12">O Ciclo de Sucesso do Afiliado</motion.h1>
            <div className="relative w-full h-96 flex items-center justify-center">
                <svg className="absolute w-full h-full" viewBox="0 0 600 450">
                    <g>
                        {steps.map((step, i) => {
                            const prevStep = steps[i - 1] || { x: centralPoint.x, y: centralPoint.y };
                            return (
                             <motion.path
                                key={i}
                                d={`M ${prevStep.x} ${prevStep.y} L ${step.x} ${step.y}`}
                                fill="none"
                                stroke="#28a745"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                variants={pathVariants}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                             />
                            )
                        })}
                    </g>
                </svg>

                <motion.div variants={itemVariants} className="absolute w-56 h-56 bg-white/10 rounded-full flex flex-col items-center justify-center text-center backdrop-blur-sm border border-white/20">
                    <Users className="w-12 h-12 text-mmc-green mb-2"/>
                    <h3 className="font-display text-2xl font-bold text-white">VOCÊ</h3>
                    <p className="text-light-gray/80">Nosso Parceiro</p>
                </motion.div>

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.7 }}
                        style={{ x: step.x - centralPoint.x, y: step.y - centralPoint.y }}
                    >
                        <div className="w-24 h-24 bg-mmc-green/80 backdrop-blur-sm text-white rounded-full flex flex-col items-center justify-center text-center p-2 border-2 border-white/50">
                            <step.icon size={28}/>
                            <p className="text-xs font-semibold mt-1">{step.title}</p>
                        </div>
                    </motion.div>
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
        <motion.div variants={contentVariants} className="text-center">
            <motion.h1 variants={itemVariants} className="font-display text-4xl font-bold text-white mb-4">Simulador de Comissão por Produto</motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-light-gray mb-8">Adicione produtos de cada nível para simular sua comissão estimada.</motion.p>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tiers.map((tier, tierIndex) => (
                        <Card key={tier.name} className="flex flex-col">
                            <div className="flex items-center mb-4">
                                <tier.icon className={`w-8 h-8 mr-3 ${tier.color}`} />
                                <h3 className={`font-display text-2xl font-bold ${tier.color}`}>{tier.name} - {tier.commissionRate * 100}%</h3>
                            </div>
                            <div className="space-y-3">
                                {tier.products.map((product, productIndex) => (
                                    <div key={product.id} className="flex items-center justify-between text-sm">
                                        <div>
                                            <p className="font-semibold">{product.name}</p>
                                            <p className="text-dark-gray/60">R$ {product.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
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
                        <Card className="h-full flex flex-col justify-center bg-mmc-green text-mmc-green">
                            <p className="font-display font-semibold text-xl">Comissão Total Estimada</p>
                            <p className="font-display text-6xl font-extrabold my-2">
                                R$ <CountUp end={totalCommission} duration={0.5} separator="." decimal="," decimals={2} preserveValue />
                            </p>
                            <p className="text-xs opacity-80 mt-2">Este é um valor simulado. A comissão final dependerá dos produtos vendidos.</p>
                        </Card>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};





const JoinUsCycleSlide = () => {
    const items = [
        { 
            icon: Send, 
            title: "Venda com a gente", 
            desc: "Compartilhe experiências e ganhe comissões",
            position: "top-1/2 -translate-y-1/2 right-0" // Direita
        },
        { 
            icon: TrendingUp, 
            title: "Cresça com a gente", 
            desc: "Evolua e aumente seus ganhos",
            position: "bottom-0 left-1/2 -translate-x-1/2" // Baixo
        },
        { 
            icon: Handshake, 
            title: "Transforme vidas", 
            desc: "Proporcione experiências inesquecíveis",
            position: "top-1/2 -translate-y-1/2 left-0" // Esquerda
        },
    ];
    
    const centerItem = { 
        icon: MapPin, 
        title: "Viaje com a gente", 
        desc: "Conheça nossos produtos e destinos" 
    };

    const CenterIcon = centerItem.icon;

    return (
        <motion.div variants={contentVariants} className="text-center">
            <motion.h1 variants={itemVariants} className="font-display text-4xl font-bold text-white mb-16">
                Junte-se a Nós!
            </motion.h1>
            <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center" style={{ height: '400px' }}>

                {/* Item Central */}
                <motion.div variants={itemVariants} className="absolute text-center z-10">
                     <CenterIcon className="w-16 h-16 text-mmc-green mx-auto"/>
                     <h3 className="font-display text-2xl font-bold text-white mt-2">{centerItem.title}</h3>
                     <p className="text-light-gray/80 text-sm max-w-[220px]">{centerItem.desc}</p>
                </motion.div>

                {/* Itens ao Redor */}
                {items.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                        <motion.div 
                            key={item.title}
                            variants={itemVariants}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className={`absolute ${item.position}`}
                        >
                            <div className="flex items-center space-x-4 w-64 text-left">
                                <ItemIcon className="w-12 h-12 text-mmc-green flex-shrink-0"/>
                                <div>
                                   <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                                   <p className="text-light-gray/80">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    );
}

const SupportSlide = () => (
    <motion.div variants={contentVariants} className="text-center max-w-4xl mx-auto">
        <motion.h1 variants={itemVariants} className="font-display text-4xl font-bold text-white mb-4">Ferramentas e Suporte para Você</motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-light-gray mb-12">Nós oferecemos tudo o que você precisa para decolar.</motion.p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
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
        <motion.div variants={contentVariants} className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
                <h1 className="font-display text-4xl font-bold text-white mb-4">Perguntas Frequentes</h1>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
                {faqs.map((faq, i) => (
                    <Card key={i} className="p-0 overflow-hidden">
                        <motion.button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left">
                            <h3 className="font-display text-lg font-semibold text-dark-gray">{faq.q}</h3>
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
    <motion.div variants={contentVariants} className="text-center max-w-3xl mx-auto">
        <motion.div variants={itemVariants} className="w-24 h-24 bg-mmc-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Star className="w-12 h-12" fill="currentColor"/>
        </motion.div>
        <motion.h1 variants={itemVariants} className="font-display text-5xl font-bold text-white mb-6">Junte-se ao nosso time!</motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-light-gray mb-12">Comece sua jornada como afiliado MMC Receptivo hoje mesmo. O cadastro é rápido, fácil e gratuito.</motion.p>
        
        <motion.div variants={itemVariants}>
            <motion.a 
                href="https://mmcreceptivo.com.br/afiliados"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-mmc-gold text-dark-gray px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
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
      <div className="relative h-screen">
        
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
        
        <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-8">
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
        <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-md rounded-full p-2 px-4 text-sm border border-white/10">
            <span>{currentSlide + 1} / {slides.length}</span>
        </div>
        
        <div className="absolute top-6 left-6 z-20">
          <button 
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="bg-black/30 backdrop-blur-md rounded-full p-2 hover:bg-white/20 transition-colors flex items-center space-x-2 px-3 border border-white/10"
          >
            {isAutoPlay ? <Pause size={16}/> : <Play size={16}/>}
            <span className='text-sm'>{isAutoPlay ? "Pausar" : "Auto"}</span>
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4 bg-black/30 backdrop-blur-md rounded-full p-2 border border-white/10">
          <button onClick={prevSlide} className="p-2 rounded-full hover:bg-white/20 transition-colors"><ChevronLeft size={20} /></button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-mmc-gold scale-125' : 'bg-light-gray/70 hover:bg-white'}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full hover:bg-white/20 transition-colors"><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  );
}
