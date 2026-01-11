

import { motion } from 'framer-motion';
import creatorTcc from '../../assets/photo1.jpeg';

export const WhyTCC = () => {
    return (
        <section id="tcc" className="bg-[#EBEFE3] py-16 lg:py-24">
             <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
                    {/* Image Section - Reversed on Desktop for visual interest */}
                     <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-[450px] shrink-0 lg:w-1/2"
                    >
                        <img
                            className="h-[400px] w-full rounded-3xl object-cover shadow-2xl lg:h-[600px]"
                            src={creatorTcc}
                            alt="Sessão de Terapia"
                        />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-6 lg:w-1/2"
                    >
                        <h2 className="text-center font-[Lora] text-3xl font-bold text-[#2c5545] lg:text-left lg:text-4xl">
                            Por que escolher a Terapia Cognitivo Comportamental?
                        </h2>
                        
                        <div className="space-y-4 font-[Quattrocento] text-base font-medium text-[#363636] lg:text-lg">
                            <p className="rounded-xl border-l-4 border-[#2c5545] bg-white/50 p-4 shadow-sm transition-all hover:bg-white">
                                O tratamento da TCC é considerado padrão-ouro para a grande
                                maioria dos problemas emocionais, segundo a Associação Americana
                                de Psicologia (APA). Com ela, você terá um tratamento
                                personalizado de acordo com as suas necessidades individuais.
                            </p>
                            
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2c5545] text-white">✓</span>
                                    <span>Focada no presente e voltada para a solução de problemas.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2c5545] text-white">✓</span>
                                    <span>Baseada em metas e objetivos terapêuticos claros.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2c5545] text-white">✓</span>
                                    <span>Feedbacks constantes de sua evolução ao longo do processo.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
