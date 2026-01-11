

import { motion } from 'framer-motion';

const treatments = [
  {
    title: "TDAH",
    description: "O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) é uma condição neurobiológica que afeta a atenção, impulsividade e atividade motora. A Terapia Cognitivo-Comportamental (TCC) pode auxiliar no tratamento do TDAH ao desenvolver estratégias práticas para organização, controle de impulsos, melhoria da autoestima e aprimoramento de habilidades sociais. A TCC também foca na resolução de problemas, estabelecimento de metas realistas e treinamento de habilidades executivas, proporcionando uma abordagem abrangente e personalizada para lidar com os desafios do TDAH."
  },
  {
    title: "Ansiedade",
    description: "Embora a ansiedade seja uma emoção natural, torna-se preocupante quando prejudica as atividades diárias. Sintomas de alerta incluem: pensamentos acelerados; preocupações intensas; medo excessivo; irritabilidade; insônia; falta de ar; taquicardia; dor no estômago e aumento do apetite; A Terapia Cognitivo-Comportamental (TCC) pode ser eficaz no tratamento da ansiedade, focando na identificação e modificação de padrões de pensamento negativos, na promoção de comportamentos saudáveis e na implementação de técnicas de enfrentamento. A TCC ajuda os indivíduos a entenderem e reestruturarem pensamentos ansiosos, desenvolvendo estratégias práticas para enfrentar situações estressantes. Ao abordar cognições disfuncionais e comportamentos inadequados, a TCC busca aliviar os sintomas ansiosos e promover uma resposta mais adaptativa ao estresse."
  },
  {
    title: "Transtornos Depressivos",
    description: "A característica compartilhada por esses transtornos é a presença de um humor triste, vazio ou irritável, acompanhado por alterações somáticas e cognitivas que impactam de forma significativa a capacidade de funcionamento do indivíduo. A Terapia Cognitivo-Comportamental (TCC) pode ser eficaz no tratamento desses transtornos ao focar na identificação e modificação de padrões de pensamento negativos, na promoção de comportamentos saudáveis e na melhoria do manejo emocional. A TCC ajuda os indivíduos a desafiar e reestruturar pensamentos depressivos, estabelecer metas realistas e adotar estratégias de enfrentamento construtivas. Ao abordar tanto os aspectos cognitivos quanto comportamentais, a TCC busca aliviar os sintomas depressivos e promover uma visão mais positiva e adaptativa da vida."
  },
  {
    title: "Autoestima",
    description: (
      <>
        A Terapia Cognitivo-Comportamental (TCC) pode ajudar no tratamento da autoestima ao: Identificar e mudar pensamentos negativos sobre si mesmo; <br /> Trabalhar na reestruturação de crenças limitantes; <br /> Explorar experiências passadas que afetam a autoimagem; <br /> Estabelecer metas realistas para promover sucessos graduais; <br /> Desenvolver habilidades sociais para lidar com críticas e melhorar a comunicação; <br /> Incentivar comportamentos positivos que reforcem uma imagem positiva; <br /> Desafiar distorções cognitivas que contribuem para visões negativas; <br /> Refletir sobre conquistas passadas para construir uma narrativa mais positiva; <br /> Assim, a TCC visa promover uma mudança positiva na forma como a pessoa se percebe, contribuindo para uma autoestima mais saudável.
      </>
    )
  },
  {
    title: "TOC",
    description: "O Transtorno Obsessivo-Compulsivo (TOC) pode ser caracterizado por pensamentos intrusivos e repetitivos (obsessões) que levam a comportamentos ritualísticos (compulsões) realizados para aliviar a ansiedade. A Terapia Cognitivo-Comportamental (TCC) desempenha um papel crucial no tratamento do TOC, ajudando os indivíduos a compreender e modificar padrões de pensamento disfuncionais, reduzir comportamentos compulsivos e desenvolver estratégias saudáveis de enfrentamento para gerenciar a ansiedade. A TCC proporciona ferramentas eficazes para melhorar a qualidade de vida de pessoas que possuem esse transtorno."
  },
  {
    title: "Relacionamento",
    description: "A Terapia Cognitivo-Comportamental (TCC) contribui para relacionamentos mais saudáveis ao ajudar os indivíduos a identificar e modificar padrões de pensamento disfuncionais, promover a comunicação eficaz, desenvolver habilidades de resolução de conflitos, estabelecer limites saudáveis e fomentar a empatia. Ao abordar crenças negativas, comportamentos prejudiciais e promover mudanças construtivas, a TCC fortalece as relações interpessoais, proporcionando ferramentas para construir e manter vínculos positivos e satisfatórios."
  }
];

export const Treatments = () => {
    return (
        <section id="tratamentos" className="bg-[#8D9E6F] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="font-[Lora] text-3xl font-bold text-white lg:text-4xl">
                        Principais tratamentos
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 rounded bg-white" />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {treatments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="flex flex-col rounded-xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl"
                        >
                            <h3 className="mb-4 text-center font-[Lora] text-xl font-bold text-[#2C5545] lg:text-left">
                                {item.title}
                            </h3>
                            <p className="font-[Quattrocento] text-sm leading-relaxed text-[#5a5a5a] lg:text-base">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
