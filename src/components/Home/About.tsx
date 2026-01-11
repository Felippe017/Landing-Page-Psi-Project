

import { motion } from 'framer-motion';
import photoImage from '../../assets/photo4.jpeg';

export const About = () => {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#fafafa] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16"
        >
          {/* Image Section */}
          <div className="relative w-full max-w-[450px] shrink-0 lg:w-1/2">
            <div className="absolute -inset-4 rotate-3 rounded-3xl bg-[#2C5545]/10" />
            <img
              className="relative h-[400px] w-full rounded-2xl object-cover shadow-2xl lg:h-[600px]"
              src={photoImage}
              alt="Carolina Nogueira"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <div>
              <h2 className="font-[Lora] text-3xl font-bold text-[#2C5545] lg:text-4xl">
                Sobre Carolina Nogueira
              </h2>
              <span className="mt-2 block font-[Quattrocento] text-lg font-medium text-[#8D9E6F]">
                Psicóloga (CRP 05/72603)
              </span>
            </div>

            <div className="space-y-4 font-[Quattrocento] text-base leading-relaxed text-[#5a5a5a] lg:text-lg">
              <p>
                Prazer, sou Carolina: Psicóloga clínica com ênfase na abordagem da
                Terapia Cognitivo Comportamental (TCC). Com dedicação e paixão pela
                psicologia, busco proporcionar um atendimento acolhedor e
                humanizado, orientando meus clientes em seus processos de
                autoconhecimento e transformação durante as sessões online.
              </p>
              <p>
                Durante minha trajetória busquei aprofundar meu estudos sobre a
                TCC, para oferecer aos meus clientes um atendimento clínico eficaz
                e comprometido com práticas fundamentadas em evidências na área da
                psicologia.
              </p>
              <p>
                Possuo formação em Terapia Cognitivo Comportamental do curso da
                renomada Psicóloga Doutora Fernanda Landeiro e atualmente sou
                pós-graduanda em Terapia Cognitivo-Comportamental pela PUC-RS.
                Além disso, ampliei meus conhecimentos no campo da saúde mental,
                focando em questões relacionadas à obesidade e emagrecimento.
              </p>
              <p>
                Além da atuação clínica, tenho experiência e interesse na
                psicologia social, compreendendo as dinâmicas que influenciam
                nossas interações sociais e contribuindo para um entendimento mais
                amplo das questões psicológicas.
              </p>
            </div>
            
            {/* Signature or decorative element could go here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
