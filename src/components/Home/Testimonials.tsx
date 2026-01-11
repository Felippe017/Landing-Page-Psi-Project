

import { motion } from 'framer-motion';

const testimonials = [
  "Obrigado por me ajudar e também ajudar inúmeras pessoas, você é necessária para esse mundinho, você faz ele muito melhor!",
  "Você é uma profissional incrível e sensacional, eu amo sua energia e como você trasnmite algo bom!",
  "Estou verdadeiramente grato por sua ajuda em minha jornada de autoconhecimento e cura. Obrigado por ser uma luz em meu caminho.",
  "Muito obrigada por toda a ajuda que vocẽ tem me dado. Suas técnicas e conselhos são como um braço para a alma. Obrigado por ser essa psicóloga tão incrível!",
  "Gostaria de dizer o quanto sou grato por todas as nossas sessões de terapia. Você consegue transformar até os momentos confusos em algo mais leve e compreensível. Se hoje consigo entender e lidar melhor com as minhas emoções é graças as nossas sessões. Você é demais!",
  "Minha ansiedade melhorou muito depois que começamos a terapia, isso me choca até hoje, muito obrigada mesmo por tudo que fez por mim!"
];

export const Testimonials = () => {
    return (
        <section id="depoimentos" className="bg-[#EBEFE3] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="font-[Lora] text-3xl font-bold text-[#2C5545] lg:text-4xl">
                        Depoimentos
                    </h2>
                     <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#2C5545]" />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
                        >
                            <div className="mb-4 text-4xl text-[#8D9E6F]">❝</div>
                            <p className="font-[Quattrocento] text-sm italic leading-relaxed text-[#555]">
                                "{text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
