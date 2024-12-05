import { MainTemplate } from '@/templates/MainTemplate';
import Background from '../assets/banner_carol.svg';
import photoImage from '../assets/photo4.jpeg';
import creatorTcc from '../assets/photo1.jpeg';

export const Home = (): React.JSX.Element => {
  return (
    <MainTemplate>
      <div
        className="h-[1000px]"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      ></div>

      <div className="absolute inset-x-10 top-28 flex flex-col items-center overflow-hidden rounded-2xl bg-[#EAEAEA] p-10 opacity-75 lg:left-[15%] lg:top-[25%] lg:w-[500px]">
        <h2 className="pb-3 text-center font-[Lora] text-xl text-[#2C5545]">
          Como posso te ajudar?
        </h2>
        <p className="pb-5 font-[Quattrocento] text-base text-[#363636]">
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
        <p className="pb-5 font-[Quattrocento] text-base text-[#363636]">
          Faço esse convite a você, agende um horário e inicie a sua jornada de
          autocuidado. Estou ansiosa para recebê-lo(a).
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5521992183064&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Psicoterapia!%20"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-[40px] border-2 border-solid bg-[#2c5545] px-[1em] py-[0.3em] text-[20px] font-medium text-white"
        >
          Agende sua consulta
        </a>
        <a
          href="https://www.instagram.com/psicarolnogueirs/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 whitespace-nowrap rounded-[40px] border-2 border-solid bg-[#2c5545] px-[1em] py-[0.3em] text-[20px] font-medium text-white lg:mt-3"
        >
          Meu Instagram
        </a>
      </div>

      <div
        id="sobre"
        className="flex justify-center py-8 lg:bg-[#8D9E6F] lg:py-16"
      >
        <div className="flex max-w-5xl flex-col rounded-3xl bg-[#F8F8F8] p-4 shadow-2xl lg:flex-row lg:p-[35px]">
          <img
            className="mb-4 h-[400px] w-full rounded-3xl object-cover shadow-2xl lg:mb-0 lg:mr-6 lg:h-[700px] lg:w-[450px]"
            src={photoImage}
            alt="Imagem da Carol"
          />
          <div className="flex flex-col justify-center">
            <div className="px-4 py-2 lg:px-0">
              <h2 className="text-center font-[Lora] text-2xl font-bold text-[#2c5545] lg:text-left">
                Sobre Carolina Nogueira
              </h2>
              <span className="block text-center font-[Quattrocento] text-base font-medium text-[#363636] lg:inline-block lg:text-left">
                Psicóloga (CRP 05/72603)
              </span>
            </div>
            <div className="flex flex-col">
              <span className="px-4 py-2 font-[Quattrocento] text-base lg:px-0">
                Prazer, sou Carolina: Psicóloga clínica com ênfase na abordagem
                da Terapia Cognitivo Comportamental (TCC). Com dedicação e
                paixão pela psicologia, busco proporcionar um atendimento
                acolhedor e humanizado, orientando meus clientes em seus
                processos de autoconhecimento e transformação durante as sessões
                online.
              </span>
              <span className="px-4 py-2 font-[Quattrocento] text-base lg:px-0">
                Durante minha trajetória busquei aprofundar meu estudos sobre a
                TCC, para oferecer aos meus clientes um atendimento clínico
                eficaz e comprometido com práticas fundamentadas em evidências
                na área da psicologia. Possuo formação em Terapia Cognitivo
                Comportamental do curso da renomada Psicóloga Doutora Fernanda
                Landeiro. Além disso, ampliei meus conhecimentos no campo da
                saúde mental, focando em questões relacionadas à obesidade e
                emagrecimento.
              </span>
              <span className="px-4 py-2 font-[Quattrocento] text-base lg:px-0">
                Além da atuação clínica, tenho experiência e interesse na
                psicologia social, compreendendo as dinâmicas que influenciam
                nossas interações sociais e contribuindo para um entendimento
                mais amplo das questões psicológicas.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="tcc"
        className="flex justify-center bg-[#EBEFE3] px-4 py-14 lg:px-10"
      >
        <div className="flex max-w-5xl flex-col p-4 lg:flex-row lg:p-[35px]">
          <img
            className="mb-4 h-[400px] w-full rounded-3xl object-cover shadow-2xl lg:mb-0 lg:mr-6 lg:h-[700px] lg:w-[450px]"
            src={creatorTcc}
            alt="Imagem criador Tcc"
          />
          <div className="flex flex-col justify-center">
            <h2 className="px-4 py-6 text-center font-[Lora] text-2xl font-bold lg:px-0 lg:text-left">
              Por que escolher a Terapia Cognitivo Comportamental?
            </h2>
            <p className="px-4 py-2 font-[Quattrocento] text-[16px] font-medium lg:px-0">
              O tratamento da TCC é considerado padrão-ouro para a grande
              maioria dos problemas emocionais, segundo a Associação Americana
              de Psicologia (APA). Com ela, você terá um tratamento
              personalizado de acordo com as suas necessidades individuais, com
              técnicas e recursos eficazes para o seu tratamento.
            </p>
            <p className="px-4 py-2 font-[Quattrocento] text-[16px] font-medium lg:px-0">
              A terapia será focada no presente e voltada para a solução de
              problemas.
            </p>
            <p className="px-4 py-2 font-[Quattrocento] text-[16px] font-medium lg:px-0">
              Ela será baseada em suas metas e objetivos terapêuticos.
            </p>
            <p className="px-4 py-2 font-[Quattrocento] text-[16px] font-medium lg:px-0">
              Haverá Feedbacks de sua evolução ao longo de seu processo
              psicoterapêutico.
            </p>
          </div>
        </div>
      </div>

      <div
        id="tratamentos"
        className="box-border bg-[#8D9E6F] px-4 py-16 lg:px-14"
      >
        <div>
          <h2 className="px-4 py-6 text-center font-[Lora] text-2xl font-bold lg:px-12 lg:text-center">
            Principais tratamentos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-12">
          <div className="mt-3 box-border flex py-7 lg:justify-center">
            <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-2xl">
              <h3 className="px-12 py-6 text-center font-[Lora] text-xl font-bold lg:text-left">
                TDAH
              </h3>
              <div>
                O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) é uma
                condição neurobiológica que afeta a atenção, impulsividade e
                atividade motora. A Terapia Cognitivo-Comportamental (TCC) pode
                auxiliar no tratamento do TDAH ao desenvolver estratégias
                práticas para organização, controle de impulsos, melhoria da
                autoestima e aprimoramento de habilidades sociais. A TCC também
                foca na resolução de problemas, estabelecimento de metas
                realistas e treinamento de habilidades executivas,
                proporcionando uma abordagem abrangente e personalizada para
                lidar com os desafios do TDAH.
              </div>
            </div>
          </div>
          <div className="mt-3 box-border flex py-7 lg:justify-center">
            <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-2xl">
              <h3 className="px-12 py-6 text-center font-[Lora] text-xl font-bold lg:text-left">
                Ansiedade
              </h3>
              <div>
                Embora a ansiedade seja uma emoção natural, torna-se preocupante
                quando prejudica as atividades diárias. Sintomas de alerta
                incluem: pensamentos acelerados; preocupações intensas; medo
                excessivo; irritabilidade; insônia; falta de ar; taquicardia;
                dor no estômago e aumento do apetite; A Terapia
                Cognitivo-Comportamental (TCC) pode ser eficaz no tratamento da
                ansiedade, focando na identificação e modificação de padrões de
                pensamento negativos, na promoção de comportamentos saudáveis e
                na implementação de técnicas de enfrentamento. A TCC ajuda os
                indivíduos a entenderem e reestruturarem pensamentos ansiosos,
                desenvolvendo estratégias práticas para enfrentar situações
                estressantes. Ao abordar cognições disfuncionais e
                comportamentos inadequados, a TCC busca aliviar os sintomas
                ansiosos e promover uma resposta mais adaptativa ao estresse.
              </div>
            </div>
          </div>
          <div className="mt-3 box-border flex py-7 lg:justify-center">
            <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-2xl">
              <h3 className="px-12 py-6 text-center font-[Lora] text-xl font-bold lg:text-left">
                Transtornos Depressivos
              </h3>
              <div>
                A característica compartilhada por esses transtornos é a
                presença de um humor triste, vazio ou irritável, acompanhado por
                alterações somáticas e cognitivas que impactam de forma
                significativa a capacidade de funcionamento do indivíduo. A
                Terapia Cognitivo-Comportamental (TCC) pode ser eficaz no
                tratamento desses transtornos ao focar na identificação e
                modificação de padrões de pensamento negativos, na promoção de
                comportamentos saudáveis e na melhoria do manejo emocional. A
                TCC ajuda os indivíduos a desafiar e reestruturar pensamentos
                depressivos, estabelecer metas realistas e adotar estratégias de
                enfrentamento construtivas. Ao abordar tanto os aspectos
                cognitivos quanto comportamentais, a TCC busca aliviar os
                sintomas depressivos e promover uma visão mais positiva e
                adaptativa da vida.
              </div>
            </div>
          </div>
          <div className="mt-3 box-border flex py-7 lg:justify-center">
            <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-2xl">
              <h3 className="px-12 py-6 text-center font-[Lora] text-xl font-bold lg:text-left">
                Autoestima
              </h3>
              <div>
                A Terapia Cognitivo-Comportamental (TCC) pode ajudar no
                tratamento da autoestima ao: Identificar e mudar pensamentos
                negativos sobre si mesmo; <br /> Trabalhar na reestruturação de
                crenças limitantes;
                <br /> Explorar experiências passadas que afetam a autoimagem;
                <br /> Estabelecer metas realistas para promover sucessos
                graduais;
                <br /> Desenvolver habilidades sociais para lidar com críticas e
                melhorar a comunicação;
                <br /> Incentivar comportamentos positivos que reforcem uma
                imagem positiva;
                <br /> Desafiar distorções cognitivas que contribuem para visões
                negativas;
                <br /> Refletir sobre conquistas passadas para construir uma
                narrativa mais positiva;
                <br />
                Assim, a TCC visa promover uma mudança positiva na forma como a
                pessoa se percebe, contribuindo para uma autoestima mais
                saudável.
              </div>
            </div>
          </div>
          <div className="mt-3 box-border flex py-7 lg:justify-center">
            <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-2xl">
              <h3 className="px-12 py-6 text-center font-[Lora] text-xl font-bold lg:text-left">
                TOC
              </h3>
              <div>
                O Transtorno Obsessivo-Compulsivo (TOC) pode ser caracterizado
                por pensamentos intrusivos e repetitivos (obsessões) que levam a
                comportamentos ritualísticos (compulsões) realizados para
                aliviar a ansiedade. A Terapia Cognitivo-Comportamental (TCC)
                desempenha um papel crucial no tratamento do TOC, ajudando os
                indivíduos a compreender e modificar padrões de pensamento
                disfuncionais, reduzir comportamentos compulsivos e desenvolver
                estratégias saudáveis de enfrentamento para gerenciar a
                ansiedade. A TCC proporciona ferramentas eficazes para melhorar
                a qualidade de vida de pessoas que possuem esse transtorno.
              </div>
            </div>
          </div>
          <div className="mt-3 box-border flex py-7 lg:justify-center">
            <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-2xl">
              <h3 className="px-12 py-6 text-center font-[Lora] text-xl font-bold lg:text-left">
                Relacionamento
              </h3>
              <div>
                A Terapia Cognitivo-Comportamental (TCC) contribui para
                relacionamentos mais saudáveis ao ajudar os indivíduos a
                identificar e modificar padrões de pensamento disfuncionais,
                promover a comunicação eficaz, desenvolver habilidades de
                resolução de conflitos, estabelecer limites saudáveis e fomentar
                a empatia. Ao abordar crenças negativas, comportamentos
                prejudiciais e promover mudanças construtivas, a TCC fortalece
                as relações interpessoais, proporcionando ferramentas para
                construir e manter vínculos positivos e satisfatórios.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="depoimentos"
        className="box-border bg-[#EBEFE3] px-4 py-16 lg:px-14"
      >
        <h2 className="px-4 py-6 text-center font-[Lora] text-2xl font-bold lg:px-12 lg:text-center">
          Depoimentos
        </h2>

        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-12">
          <div className="box-border flex flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-xl">
            <p>
              Obrigado por me ajudar e também ajudar inúmeras pessoas, você é
              necessária para esse mundinho, você faz ele muito melhor!
            </p>
          </div>

          <div className="box-border flex flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-xl">
            <p>
              Você é uma profissional incrível e sensacional, eu amo sua energia
              e como você trasnmite algo bom!
            </p>
          </div>
          <div className="box-border flex flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-xl">
            <p>
              Estou verdadeiramente grato por sua ajuda em minha jornada de
              autoconhecimento e cura. Obrigado por ser uma luz em meu caminho.
            </p>
          </div>
          <div className="box-border flex flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-xl">
            <p>
              Muito obrigada por toda a ajuda que vocẽ tem me dado. Suas
              técnicas e conselhos são como um braço para a alma. Obrigado por
              ser essa psicóloga tão incrível!
            </p>
          </div>
          <div className="box-border flex flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-xl">
            <p>
              Gostaria de dizer o quanto sou grato por todas as nossas sessões
              de terapia. Você consegue transformar até os momentos confusos em
              algo mais leve e compreensível. Se hoje consigo entender e lidar
              melhor com as minhas emoções é graças as nossas sessões. Você é
              demais!
            </p>
          </div>
          <div className="box-border flex flex-col items-center overflow-hidden rounded-lg bg-white p-7 shadow-xl">
            <p>
              Minha ansiedade melhorou muito depois que começamos a terapia,
              isso me choca até hoje, muito obrigada mesmo por tudo que fez por
              mim!
            </p>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};
