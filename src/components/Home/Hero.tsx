

import { motion } from 'framer-motion';
import Background from '../../assets/new-banner.jpg'; // Path adjusted based on new location
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind classes
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden pt-28 pb-10 lg:min-h-[1000px] lg:flex-row lg:items-start lg:justify-start lg:py-0">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed" 
                style={{
                    backgroundImage: `url(${Background})`,
                }}
            >
                <div className="absolute inset-0 bg-black/10" /> 
            </div>

            {/* Content Card */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "relative z-10 mx-auto flex w-[90%] max-w-[500px] flex-col items-center rounded-2xl bg-[#EAEAEA]/90 p-6 shadow-2xl backdrop-blur-sm sm:p-8",
                    "lg:mx-0 lg:ml-[15%] lg:mt-[25vh] lg:items-start" 
                )}
            >
                <h2 className="pb-3 text-center font-[Lora] text-2xl font-bold text-[#2C5545] lg:text-3xl">
                    Como posso te ajudar?
                </h2>
                <div className="pb-6 text-center font-[Quattrocento] text-base leading-relaxed text-[#363636] lg:text-left lg:text-lg">
                    <p className="mb-4">
                        A psicoterapia pode auxiliar você a gerenciar suas emoções, aprimorar
                        sua autoimagem, desenvolver um autoconhecimento, aperfeiçoar a forma
                        como se expressa e também, te ajudar a alcançar seus objetivos e
                        metas, se conectando com o que verdadeiramente importa em sua vida. Eu
                        enxergo esse processo como um presente que você concede a si mesmo,
                        proporcionando benefícios não apenas para sua vida pessoal, mas também
                        para seus relacionamentos com as pessoas que você ama. Estou aqui para
                        auxiliá-lo(a) durante esse processo de aprimoramento da sua saúde
                        mental e promoção do seu bem-estar.
                    </p>
                    <p>
                        Faço esse convite a você, agende um horário e inicie a sua jornada de
                        autocuidado. Estou ansiosa para recebê-lo(a).
                    </p>
                </div>
               
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                    <a
                        href="https://api.whatsapp.com/send?phone=5521992183064&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Psicoterapia!%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center rounded-full bg-[#2c5545] px-6 py-3 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-[#1e3b30] hover:shadow-lg"
                    >
                        Agende sua consulta
                    </a>
                    <a
                        href="https://www.instagram.com/psicarolnogueirs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center rounded-full border-2 border-[#2c5545] px-6 py-3 text-lg font-medium text-[#2c5545] transition-all hover:scale-105 hover:bg-[#2c5545] hover:text-white hover:shadow-lg"
                    >
                        Meu Instagram
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
