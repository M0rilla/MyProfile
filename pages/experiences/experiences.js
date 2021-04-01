import SiteLayout from "../../components/SiteLayout";
import Image from "next/image";

export default function Experiences({ skills }) {
  return (
    <SiteLayout>
      <section>
        <div className="w-screen">
          <div className="flex items-center justify-center">
            <div className="page-container">
              <div className="grid grid-cols-2 my-14">
                <div className="m-4">
                  <Image
                    className=""
                    src="/career.jpg"
                    alt="Career"
                    width={400}
                    height={250}
                  />
                </div>
                <div className="text-justify">
                  <p>Career experience</p>
                  <br />
                  <p>06/2016 – 10/2018 HELPDESK INTERN, HYUNDAI AUTOEVER</p>
                  <span>
                    Atendimento ao cliente, solução de problemas de hardware e
                    software, controle de estoque e atendimento da fila de
                    chamados ITIL.
                  </span>
                  <br />
                  <br />
                  <p>2018 – ATUAL</p>
                  <p>ANALISTA DE SUPORTE MES - PLENO, HYUNDAI AUTOEVER</p>
                  <span>
                    Responsável por solucionar problemas em servidores,
                    processos, sistemas e equipamentos relacionados ao MES
                    (Manufacturing Execution System).
                  </span>
                </div>
                <div className="text-justify m-12">
                  <p>Development Experience</p>
                  <br />
                  <span>
                    Em 2020 iniciei o desenvolvimento de um sistema WEB de
                    report diário das atividades e procedimentos realizados pelo
                    time de MES facilitando a análise e visualização de
                    informações além do controle total de acessos por
                    hierarquia. Sistema MVC usando C#, JS, HTML e CSS. Toda
                    estrutura de banco de dados (Oracle) foi criada por mim
                    contendo jobs, triggers e procedures configuradas, além do
                    controle de logs. Projeto com implementação prevista em mais
                    3 Plantas – MOBIS, Transys, Dymos além da Hyundai Motors
                  </span>
                  <p>...</p>
                </div>
                <div className="text-center">
                  <Image
                    className="exp-img"
                    src="/icon.png"
                    alt="Career"
                    width={350}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center justify-center">
            <div className="page-container">
              <div className="text-center">
                Programming Languages, Frameworks and Tools
                <div className="m-6">
                  <Image
                    className="exp-img rounded-full"
                    src="/html.png"
                    alt="HTML 5"
                    title="HTML (Structure)"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img rounded-full"
                    src="/css.png"
                    alt="CSS 3"
                    title="CSS (Structure)"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img rounded-full"
                    src="/js.png"
                    alt="Javascript"
                    title="Javascript"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img rounded-full"
                    src="/JQuery-01.jpg"
                    alt="JQuery"
                    title="Jquery"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img"
                    src="/c.png"
                    alt="CSharp"
                    title="CSharp"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img"
                    src="/git.png"
                    alt="Git"
                    title="Git"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img"
                    src="/mvc.png"
                    alt=".NET MVC"
                    title=".NET MVC"
                    width={210}
                    height={200}
                  />
                  <Image
                    className="exp-img"
                    src="/next-js.svg"
                    alt="Next.js"
                    title="Next.js"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img rounded-full"
                    src="/npm.png"
                    alt="NPM"
                    title="Node Package Manager"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img"
                    src="/bootstrap-4.svg"
                    alt="Bootstrap"
                    title="Bootstrap"
                    width={180}
                    height={200}
                  />
                  <Image
                    className="exp-img"
                    src="/tailwindcss.svg"
                    alt="Tailwind"
                    title="Tailwind"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img"
                    src="/oracle-logo-1.svg"
                    alt="Oracle"
                    title="Oracle DB"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="exp-img rounded-full"
                    src="/mysql.png"
                    alt="MySQL"
                    title="MySQL"
                    width={220}
                    height={220}
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </SiteLayout>
  );
}
