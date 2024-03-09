/* import { Header } from '@/components/Header/Header'; */
import { MainTemplate } from '@/templates/MainTemplate';
import Background from '../assets/banner02.jpeg';
import photoImage from '../assets/fotoCarol-2.jpeg';
import brainImage from '../assets/vista-superior-no-conceito-de-psicologo-online.jpg';

export const Home = (): React.JSX.Element => {
  return (
    <MainTemplate>
      <div
        className="h-[1000px] py-14"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      ></div>

      <div className="absolute left-10 top-36 flex h-auto w-[500px] flex-col items-center overflow-hidden rounded-2xl bg-[#EAEAEA] p-10 opacity-75">
        <h2 className="pb-3 font-[Lora] text-xl text-[#2C5545]">
          Como posso te ajudar?
        </h2>
        <p className="pb-5 font-[Quattrocento] text-base text-[#363636]">
          Em diferentes fases da vida, todos nós nos deparamos com desafios e
          momentos difíceis. Às vezes, essas questões parecem tão complexas que
          lidar com elas sozinho se torna desafiador. Quando percebemos que algo
          está interferindo no nosso progresso em direção aos nossos sonhos,
          buscar apoio é uma excelente escolha, e é aí que a psicoterapia se
          torna relevante.
        </p>
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
          className="rounded-[40px] border-2 border-solid bg-[#2c5545] px-[1em] py-[0.3em] text-[20px] font-medium text-white"
        >
          Agende sua consulta
        </a>
      </div>

      <div className="flex justify-center bg-[#8D9E6F] py-16">
        <div className="flex max-w-5xl rounded-3xl bg-[#F8F8F8] p-[35px] ">
          <img
            className="h-[700px] rounded-md"
            src={photoImage}
            alt="Imagem da Carol"
          />
          <div>
            <div className="px-10 py-2">
              <h2 className="font-[Lora] text-2xl font-bold text-[#2c5545]">
                Sobre Carolina Nogueira
              </h2>
              <span className="font-[Quattrocento] text-base font-medium text-[#363636]">
                Psicóloga (CRP 05/72603)
              </span>
            </div>
            <div className="flex flex-col">
              <span className="px-10 py-6 font-[Quattrocento] text-base">
                Prazer, sou Carolina: Psicóloga clínica com ênfase na abordagem
                da Terapia Cognitivo Comportamental (TCC). Com dedicação e
                paixão pela psicologia, busco proporcionar um atendimento
                acolhedor e humanizado, orientando meus clientes em seus
                processos de autoconhecimento e transformação durante as sessões
                online.
              </span>
              <span className="px-10 py-6 font-[Quattrocento] text-base">
                Durante minha trajetória busquei aprofundar meu estudos sobre a
                TCC, para oferecer aos meus clientes um atendimento clínico
                eficaz e comprometido com práticas fundamentadas em evidências
                na área da psicologia. Possuo formação em Terapia Cognitivo
                Comportamental do curso da renomada Psicóloga Doutora Fernanda
                Landeiro. Além disso, ampliei meus conhecimentos no campo da
                saúde mental, focando em questões relacionadas à obesidade e
                emagrecimento, por meio do curso de formação também ministrado
                pela mesma profissional.
              </span>
              <span className="px-10 py-6 font-[Quattrocento] text-base">
                Além da atuação clínica, tenho experiência e interesse na
                psicologia social, compreendendo as dinâmicas que influenciam
                nossas interações sociais e contribuindo para um entendimento
                mais amplo das questões psicológicas.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[#EBEFE3] px-10 py-14">
        <div className="flex max-w-5xl p-[35px] ">
          <img
            className="h-[700px] w-[450px] rounded-3xl"
            src={brainImage}
            alt="Imagem de um cérebro"
          />
          <div>
            <h2 className="px-12 py-6 font-[Lora] text-2xl font-bold">
              Por que escolher a Terapia Cognitivo Comportamental?
            </h2>
            <p className="px-12 py-6 font-[Quattrocento] text-[16px] font-medium">
              O tratamento da TCC é considerado padrão-ouro para a grande
              maioria dos problemas emocionais, segundo a Associação Americana
              de Psicologia (APA). Com ela, você terá um tratamento
              personalizado de acordo com as suas necessidades individuais, com
              técnicas e recursos eficazes para o seu tratamento.
            </p>
            <p className="px-12 py-6 font-[Quattrocento] text-[16px] font-medium">
              A terapia será focada no presente e voltada para a solução de
              problemas.
            </p>
            <p className="px-12 py-6 font-[Quattrocento] text-[16px] font-medium">
              Ela será baseada em suas metas e objetivos terapêuticos
            </p>
            <p className="px-12 py-6 font-[Quattrocento] text-[16px] font-medium">
              Haverá Feedbacks de sua evolução ao longo de seu processo
              psicoterapêutico.
            </p>
          </div>
        </div>
      </div>

      <div className="box-border flex flex-col items-center bg-[#8D9E6F] px-14 py-16">
        <div>
          <h2 className="px-12 py-6 font-[Lora] text-2xl font-bold">
            Principais tratamentos
          </h2>
        </div>
        <div className="mt-3 box-border flex py-7 ">
          <div className="mr-[5.5%] box-border flex   max-w-[400px] flex-col items-center overflow-hidden rounded-lg bg-white p-7">
            <h3 className="px-12 py-6 font-[Lora] text-xl font-bold">TDAH</h3>
            <div>
              O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) é uma
              condição neurobiológica que afeta a atenção, impulsividade e
              atividade motora. A Terapia Cognitivo-Comportamental (TCC) pode
              auxiliar no tratamento do TDAH ao desenvolver estratégias práticas
              para organização, controle de impulsos, melhoria da autoestima e
              aprimoramento de habilidades sociais. A TCC também foca na
              resolução de problemas, estabelecimento de metas realistas e
              treinamento de habilidades executivas, proporcionando uma
              abordagem abrangente e personalizada para lidar com os desafios do
              TDAH.
            </div>
          </div>

          <div className="mr-[5.5%] box-border flex   max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <h3 className="px-12 py-6 font-[Lora] text-xl font-bold">
              Ansiedade
            </h3>
            <div>
              Embora a ansiedade seja uma emoção natural, torna-se preocupante
              quando prejudica as atividades diárias. Sintomas de alerta
              incluem: pensamentos acelerados, preocupações intensas, medo
              excessivo, irritabilidade, insônia, falta de ar, taquicardia, dor
              no estômago e aumento do apetite. A Terapia
              Cognitivo-Comportamental (TCC) pode ser eficaz no tratamento da
              ansiedade, focando na identificação e modificação de padrões de
              pensamento negativos, na promoção de comportamentos saudáveis e na
              implementação de técnicas de enfrentamento. A TCC ajuda os
              indivíduos a entenderem e reestruturarem pensamentos ansiosos,
              desenvolvendo estratégias práticas para enfrentar situações
              estressantes. Ao abordar cognições disfuncionais e comportamentos
              inadequados, a TCC busca aliviar os sintomas ansiosos e promover
              uma resposta mais adaptativa ao estresse.
            </div>
          </div>

          <div className="mr-[5.5%] box-border flex   max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <h3 className="px-12 py-6 font-[Lora] text-xl font-bold">
              Transtornos Depressivos
            </h3>
            <div>
              A característica compartilhada por esses transtornos é a presença
              de um humor triste, vazio ou irritável, acompanhado por alterações
              somáticas e cognitivas que impactam de forma significativa a
              capacidade de funcionamento do indivíduo. A Terapia
              Cognitivo-Comportamental (TCC) pode ser eficaz no tratamento
              desses transtornos ao focar na identificação e modificação de
              padrões de pensamento negativos, na promoção de comportamentos
              saudáveis e na melhoria do manejo emocional. A TCC ajuda os
              indivíduos a desafiar e reestruturar pensamentos depressivos,
              estabelecer metas realistas e adotar estratégias de enfrentamento
              construtivas. Ao abordar tanto os aspectos cognitivos quanto
              comportamentais, a TCC busca aliviar os sintomas depressivos e
              promover uma visão mais positiva e adaptativa da vida.
            </div>
          </div>
        </div>
        <div className="mt-3 box-border flex py-7 ">
          <div className="mr-[5.5%] box-border flex   max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <h3 className="px-12 py-6 font-[Lora] text-xl font-bold">
              Autoestima
            </h3>
            <div>
              A Terapia Cognitivo-Comportamental (TCC) pode ajudar no tratamento
              da autoestima ao: Identificar e mudar pensamentos negativos sobre
              si mesmo. Trabalhar na reestruturação de crenças limitantes.
              Explorar experiências passadas que afetam a autoimagem.
              Estabelecer metas realistas para promover sucessos graduais.
              Desenvolver habilidades sociais para lidar com críticas e melhorar
              a comunicação. Incentivar comportamentos positivos que reforcem
              uma imagem positiva. Desafiar distorções cognitivas que contribuem
              para visões negativas. Refletir sobre conquistas passadas para
              construir uma narrativa mais positiva. Assim, a TCC visa promover
              uma mudança positiva na forma como a pessoa se percebe,
              contribuindo para uma autoestima mais saudável.
            </div>
          </div>

          <div className="mr-[5.5%] box-border flex  max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <h3 className="px-12 py-6 font-[Lora] text-xl font-bold">TOC</h3>
            <div>
              O Transtorno Obsessivo-Compulsivo (TOC) pode ser caracterizado por
              pensamentos intrusivos e repetitivos (obsessões) que levam a
              comportamentos ritualísticos (compulsões) realizados para aliviar
              a ansiedade. A Terapia Cognitivo-Comportamental (TCC) desempenha
              um papel crucial no tratamento do TOC, ajudando os indivíduos a
              compreender e modificar padrões de pensamento disfuncionais,
              reduzir comportamentos compulsivos e desenvolver estratégias
              saudáveis de enfrentamento para gerenciar a ansiedade. A TCC
              proporciona ferramentas eficazes para melhorar a qualidade de vida
              de pessoas que possuem esse transtorno.
            </div>
          </div>

          <div className="mr-[5.5%] box-border flex  max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <h3 className="px-12 py-6 font-[Lora] text-xl font-bold">
              Relacionamento
            </h3>
            <div>
              A Terapia Cognitivo-Comportamental (TCC) contribui para
              relacionamentos mais saudáveis ao ajudar os indivíduos a
              identificar e modificar padrões de pensamento disfuncionais,
              promover a comunicação eficaz, desenvolver habilidades de
              resolução de conflitos, estabelecer limites saudáveis e fomentar a
              empatia. Ao abordar crenças negativas, comportamentos prejudiciais
              e promover mudanças construtivas, a TCC fortalece as relações
              interpessoais, proporcionando ferramentas para construir e manter
              vínculos positivos e satisfatórios.
            </div>
          </div>
        </div>
      </div>

      <div className="box-border flex flex-col items-center bg-[#EBEFE3] px-14 py-16">
        <h2 className="px-12 py-6 font-[Lora] text-2xl font-bold">
          Depoimentos
        </h2>

        <div className="mt-3 box-border flex py-7">
          <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-hidden rounded-lg bg-white p-7">
            <p>
              Obrigado por me ajudar e também ajudar inúmeras pessoas, você é
              necessária para esse mundinho, você faz ele muito melhor!
            </p>
          </div>

          <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <p>
              Você é uma profissional incrível e sensacional, eu amo sua energia
              e como você trasnmite algo bom!
            </p>
          </div>

          <div className="mr-[5.5%] box-border flex max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <p>
              Estou verdadeiramente grato por sua ajuda em minha jornada de
              autoconhecimento e cura. Obrigado por ser uma luz em meu caminho.
            </p>
          </div>
        </div>
        <div className="mt-3 box-border flex py-7 ">
          <div className="mr-[5.5%] box-border flex   max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <div>
              Muito obrigada por toda a ajuda que vocẽ tem me dado. Suas
              técnicas e conselhos são como um braço para a alma. Obrigado por
              ser essa psicóloga tão incrível!
            </div>
          </div>
          <div className="mr-[5.5%] box-border flex  max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <div>
              Gostaria de dizer o quanto sou grato por todas as nossas sessões
              de terapia. Você consegue transformar até os momentos confusos em
              algo mais leve e compreensível. Se hoje consigo entender e lidar
              melhor com as minhas emoções é graças as nossas sessões. Você é
              demais!
            </div>
          </div>
          <div className="mr-[5.5%] box-border flex  max-w-[400px] flex-col items-center overflow-auto rounded-lg bg-white p-7">
            <div>
              Minha ansiedade melhorou muito depois que começamos a terapia,
              isso me choca até hoje, muito obrigada mesmo por tudo que fez por
              mim!
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};
