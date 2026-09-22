import type { Locale } from "@/i18n/config";

/*
 * The career as a curriculum map. Every entry comes from Referencias/ (the CV
 * and the interview transcript, chat.txt) — never add metrics, clients or
 * roles that are not there.
 */

type Text = Record<Locale, string>;

export type LaneId = "data" | "backend" | "frontend" | "practice";
export type Status = "done" | "current" | "next";

export type Lane = { id: LaneId; prefix: string; name: Text };

export type Period = { id: number; years: string; label: Text };

export type Course = {
  code: string;
  lane: LaneId;
  period: number;
  status: Status;
  title: Text;
  org: string | Text;
  dates: string;
  syllabus: Record<Locale, string[]>;
  requires: string[];
};

export const lanes: Lane[] = [
  { id: "data", prefix: "DAD", name: { pt: "Dados", en: "Data" } },
  { id: "backend", prefix: "BCK", name: { pt: "Back-end", en: "Back-end" } },
  { id: "frontend", prefix: "FRT", name: { pt: "Front-end", en: "Front-end" } },
  {
    id: "practice",
    prefix: "FOR",
    name: { pt: "Formação e prática", en: "Education & practice" },
  },
];

export const periods: Period[] = [
  { id: 1, years: "2013–2017", label: { pt: "1º período", en: "Period 1" } },
  { id: 2, years: "2016–2020", label: { pt: "2º período", en: "Period 2" } },
  { id: 3, years: "2020–2022", label: { pt: "3º período", en: "Period 3" } },
  { id: 4, years: "2022–2024", label: { pt: "4º período", en: "Period 4" } },
  { id: 5, years: "2023–2026", label: { pt: "5º período", en: "Period 5" } },
  { id: 6, years: "2026–", label: { pt: "Em curso", en: "In progress" } },
];

/** The column the "now" marker sits in. */
export const currentPeriod = 6;

export const courses: Course[] = [
  // — Dados / Data
  {
    code: "DAD101",
    lane: "data",
    period: 1,
    status: "done",
    title: { pt: "SQL e modelagem relacional", en: "SQL & relational modeling" },
    org: "Real Jurídica Assessoria",
    dates: "11/2013 – 10/2017",
    syllabus: {
      pt: [
        "Quase quatro anos dedicados só a dados: da modelagem ER à criação, manutenção e otimização de bancos e consultas SQL.",
        "Desenvolvi e otimizei consultas SQL e estruturas de dados normalizadas. SQL continua no meu dia a dia como desenvolvedor.",
      ],
      en: [
        "Almost four years devoted entirely to data: from ER modeling to building, maintaining and tuning databases and SQL queries.",
        "Wrote and optimized SQL queries and normalized data structures. SQL is still part of my daily work as a developer.",
      ],
    },
    requires: [],
  },
  {
    code: "DAD102",
    lane: "data",
    period: 1,
    status: "done",
    title: { pt: "Pipelines de ETL com Pentaho", en: "ETL pipelines with Pentaho" },
    org: "Real Jurídica Assessoria",
    dates: "11/2013 – 10/2017",
    syllabus: {
      pt: [
        "Construí fluxos e pipelines de ETL automatizados com Pentaho Spoon.",
        "Criei dashboards operacionais e relatórios gerenciais com Excel e Tableau para decisões orientadas por dados.",
      ],
      en: [
        "Built automated ETL flows and pipelines with Pentaho Spoon.",
        "Built operational dashboards and management reports in Excel and Tableau to support data-driven decisions.",
      ],
    },
    requires: [],
  },
  {
    code: "DAD203",
    lane: "data",
    period: 2,
    status: "done",
    title: { pt: "Stored procedures e relatórios", en: "Stored procedures & reports" },
    org: "Lego Sistemas",
    dates: "11/2019 – 05/2020",
    syllabus: {
      pt: ["Modelei dados relacionais, otimizei consultas SQL e criei stored procedures e relatórios operacionais."],
      en: ["Modeled relational data, optimized SQL queries and built stored procedures and operational reports."],
    },
    requires: ["DAD101"],
  },
  {
    code: "DAD504",
    lane: "data",
    period: 5,
    status: "done",
    title: { pt: "Observabilidade com Elasticsearch e Kibana", en: "Observability with Elasticsearch & Kibana" },
    org: "Akna",
    dates: "04/2023 – 08/2026",
    syllabus: {
      pt: ["Instrumentação e monitoramento de aplicações com Elasticsearch e Kibana."],
      en: ["Instrumented and monitored applications with Elasticsearch and Kibana."],
    },
    requires: ["DAD102", "DAD203"],
  },

  // — Back-end
  {
    code: "BCK201",
    lane: "backend",
    period: 2,
    status: "done",
    title: { pt: "Serviços em PHP e Node.js", en: "PHP & Node.js services" },
    org: "Lego Sistemas",
    dates: "07/2018 – 05/2020",
    syllabus: {
      pt: [
        "Projetei e desenvolvi serviços back-end em PHP e Node.js.",
        "Comecei como estagiário full-stack e fui efetivado como desenvolvedor.",
      ],
      en: [
        "Designed and built back-end services in PHP and Node.js.",
        "Started as a full-stack intern and was hired as a developer.",
      ],
    },
    requires: ["DAD101"],
  },
  {
    code: "BCK302",
    lane: "backend",
    period: 3,
    status: "done",
    title: { pt: "Back-end com Java e Spring Boot", en: "Back-end with Java & Spring Boot" },
    org: "Indra · GoiásPrev",
    dates: "02/2021 – 05/2021",
    syllabus: {
      pt: [
        "Alocado na GoiásPrev, apoiei o back-end do módulo de Prova de Vida em Java com Spring Boot.",
        "Arquitetura em camadas (controller, service, repository), injeção de dependência, JPA/Hibernate e endpoints REST, com integração a APIs e serviços externos.",
      ],
      en: [
        "Placed at GoiásPrev, I supported the back-end of the proof-of-life module in Java with Spring Boot.",
        "Layered architecture (controller, service, repository), dependency injection, JPA/Hibernate and REST endpoints, integrating APIs and external services.",
      ],
    },
    requires: ["BCK201"],
  },
  {
    code: "BCK303",
    lane: "backend",
    period: 3,
    status: "done",
    title: { pt: "Apoio ao back-end em Java e Spring Boot", en: "Back-end support in Java & Spring Boot" },
    org: "Catskillet",
    dates: "05/2021 – 07/2022",
    syllabus: {
      pt: ["Apesar de atuar no front-end, apoiava o desenvolvimento do back-end em Java e Spring Boot junto ao dev dedicado ao back-end."],
      en: ["Although my role was front-end, I supported back-end development in Java and Spring Boot alongside the team's back-end developer."],
    },
    requires: ["BCK201"],
  },
  {
    code: "BCK503",
    lane: "backend",
    period: 5,
    status: "done",
    title: { pt: "APIs e integrações em PHP e C#/.NET", en: "APIs & integrations in PHP and C#/.NET" },
    org: "Akna",
    dates: "04/2023 – 08/2026",
    syllabus: {
      pt: [
        "Desenvolvi e integrei APIs e soluções full-stack com PHP e C#/.NET.",
        "Integrações e consumo de serviços externos, com mensageria em RabbitMQ, nos produtos da Akna e do grupo HiPlatform.",
      ],
      en: [
        "Built and integrated APIs and full-stack solutions with PHP and C#/.NET.",
        "Integrated and consumed external services, with RabbitMQ messaging, across Akna and HiPlatform group products.",
      ],
    },
    requires: ["BCK201", "BCK302", "BCK303", "DAD203"],
  },
  {
    code: "BCK505",
    lane: "backend",
    period: 5,
    status: "done",
    title: { pt: "Postmortem: disparos de WhatsApp", en: "Postmortem: WhatsApp dispatch" },
    org: "Akna",
    dates: "2023 – 2026",
    syllabus: {
      pt: [
        "No produto de disparo em massa de WhatsApp, um ajuste feito com base numa versão desatualizada da documentação da API do broker travou os disparos em produção por cerca de 3 horas.",
        "Como o fluxo passava por filas no RabbitMQ, nenhuma mensagem foi perdida. Acionado pelo suporte, apliquei o rollback, analisei a causa e escrevi o relatório técnico que o suporte usou com os clientes.",
        "O que mudou: monitoramento com logs para detectar falhas parecidas, um ambiente de homologação espelhando a produção e um protocolo de testes que entrou no ciclo de desenvolvimento.",
      ],
      en: [
        "On the bulk WhatsApp messaging product, a change based on an outdated version of the broker's API docs stalled production dispatches for about 3 hours.",
        "Because the flow ran through RabbitMQ queues, no message was lost. Called in by support, I rolled back, analyzed the root cause and wrote the technical report support used with customers.",
        "What changed: log-based monitoring to catch similar failures, a staging environment mirroring production, and a testing protocol that became part of the development cycle.",
      ],
    },
    requires: [],
  },
  {
    code: "BCK506",
    lane: "backend",
    period: 5,
    status: "done",
    title: { pt: "Bug em consumo de stream num sistema desconhecido", en: "Stream-consumer bug in an unfamiliar system" },
    org: "HiPlatform · Social",
    dates: "2023 – 2026",
    syllabus: {
      pt: [
        "O produto Social, de outra empresa do grupo HiPlatform, parou de consumir alguns tipos de dados do stream de um fornecedor. O projeto não tinha time dedicado e usava uma tecnologia que eu não conhecia.",
        "Com outro dev na mesma situação, dividimos os serviços entre nós e mapeamos a arquitetura documentando cada descoberta, até achar o serviço com defeito.",
        "Corrigimos o problema e instrumentamos logs de monitoramento no Kibana.",
      ],
      en: [
        "Social, a product from another HiPlatform group company, stopped consuming some data types from a vendor's stream. The project had no dedicated team and used a stack I didn't know.",
        "With another developer in the same situation, we split the services between us and mapped the architecture, documenting every finding, until we found the faulty service.",
        "We fixed the issue and instrumented monitoring logs in Kibana.",
      ],
    },
    requires: [],
  },
  {
    code: "BCK604",
    lane: "backend",
    period: 6,
    status: "current",
    title: { pt: "Foco técnico: Java e Spring Boot", en: "Technical focus: Java & Spring Boot" },
    org: { pt: "Formação contínua", en: "Continuous learning" },
    dates: "2026 –",
    syllabus: {
      pt: [
        "Minha direção técnica é consolidar Java e Spring Boot como stack principal, a partir da experiência na Indra (GoiásPrev) e na Catskillet.",
        "Em foco: APIs REST com arquitetura em camadas, JPA/Hibernate, mensageria com RabbitMQ, Clean Architecture e SOLID.",
        "A experiência com C#/.NET na Akna se traduz diretamente: é o mesmo trabalho de APIs, integrações e dados.",
      ],
      en: [
        "My technical direction is to make Java and Spring Boot my main stack, building on my experience at Indra (GoiásPrev) and Catskillet.",
        "In focus: REST APIs with a layered architecture, JPA/Hibernate, RabbitMQ messaging, Clean Architecture and SOLID.",
        "My C#/.NET experience at Akna carries straight over: it's the same work on APIs, integrations and data.",
      ],
    },
    requires: ["BCK503"],
  },
  {
    code: "BCK605",
    lane: "backend",
    period: 6,
    status: "next",
    title: { pt: "Busco posição Full-Stack ou Back-end", en: "Seeking a Full-Stack or Back-end role" },
    org: { pt: "Aberto a propostas", en: "Open to offers" },
    dates: "—",
    syllabus: {
      pt: [
        "Próximo passo: uma posição de nível pleno, Full-Stack ou Back-end, de preferência com Java e Spring Boot.",
        "Onde contribuo: APIs, integrações e dados, com a visão de produto de quem também constrói o front-end, e com disposição para seguir aprendendo com o time.",
      ],
      en: [
        "Next step: a mid-level Full-Stack or Back-end role, ideally with Java and Spring Boot.",
        "Where I add value: APIs, integrations and data, with the product view of someone who also builds the front-end, and a real drive to keep learning with the team.",
      ],
    },
    requires: ["BCK604", "BCK505", "BCK506", "DAD504"],
  },

  // — Front-end
  {
    code: "FRT201",
    lane: "frontend",
    period: 2,
    status: "done",
    title: { pt: "Interfaces com Angular, jQuery e Bootstrap", en: "UIs with Angular, jQuery & Bootstrap" },
    org: "Lego Sistemas",
    dates: "11/2019 – 05/2020",
    syllabus: {
      pt: ["Desenvolvi interfaces web com Angular, JavaScript, jQuery, Bootstrap, HTML5 e CSS3."],
      en: ["Built web interfaces with Angular, JavaScript, jQuery, Bootstrap, HTML5 and CSS3."],
    },
    requires: [],
  },
  {
    code: "FRT302",
    lane: "frontend",
    period: 3,
    status: "done",
    title: { pt: "React a partir do Figma e React Native", en: "React from Figma specs & React Native" },
    org: "Maleta do Engenheiro",
    dates: "05/2020 – 03/2021",
    syllabus: {
      pt: [
        "Construí interfaces responsivas em React a partir de especificações de UI/UX no Figma, integrando APIs.",
        "Desenvolvi funcionalidades mobile multiplataforma com React Native, consistentes com a experiência web.",
      ],
      en: [
        "Built responsive React interfaces from UI/UX specs in Figma, integrating APIs.",
        "Built cross-platform mobile features with React Native, consistent with the web experience.",
      ],
    },
    requires: ["FRT201"],
  },
  {
    code: "FRT303",
    lane: "frontend",
    period: 3,
    status: "done",
    title: { pt: "Prova de Vida da GoiásPrev", en: "GoiásPrev proof-of-life module" },
    org: "Indra",
    dates: "02/2021 – 05/2021",
    syllabus: {
      pt: [
        "Front-end com React e Angular, com consumo de APIs e serviços externos.",
        "Desenvolvi o módulo de Prova de Vida para aposentados e pensionistas da GoiásPrev, integrado ao Portal Expresso do governo de Goiás.",
      ],
      en: [
        "Front-end in React and Angular, consuming APIs and external services.",
        "Built the proof-of-life module for GoiásPrev retirees and pensioners, embedded in the Goiás government's Portal Expresso.",
      ],
    },
    requires: ["FRT201"],
  },
  {
    code: "FRT304",
    lane: "frontend",
    period: 3,
    status: "done",
    title: { pt: "Portais com React e Angular", en: "Customer portals in React & Angular" },
    org: "Catskillet",
    dates: "05/2021 – 07/2022",
    syllabus: {
      pt: [
        "Desenvolvi portais web dinâmicos voltados ao cliente com React, Angular e jQuery, integrando dados por APIs REST.",
        "Organizava, refinava e desenvolvia as features do front-end de ponta a ponta.",
      ],
      en: [
        "Built dynamic customer-facing web portals with React, Angular and jQuery, integrating data through REST APIs.",
        "Organized, refined and built front-end features end to end.",
      ],
    },
    requires: ["FRT201"],
  },
  {
    code: "FRT405",
    lane: "frontend",
    period: 4,
    status: "done",
    title: { pt: "Telas responsivas com foco em desempenho", en: "Responsive, performance-minded UIs" },
    org: "Akna",
    dates: "07/2022 – 03/2023",
    syllabus: {
      pt: [
        "Desenvolvi e otimizei telas responsivas com React e Angular, com foco em desempenho e experiência do usuário.",
        "Colaborei com back-end e produto em integrações de API e fluxos de dados confiáveis.",
      ],
      en: [
        "Built and optimized responsive screens in React and Angular, focused on performance and user experience.",
        "Worked with back-end and product on API integrations and reliable data flows.",
      ],
    },
    requires: ["FRT302", "FRT303", "FRT304"],
  },
  {
    code: "FRT506",
    lane: "frontend",
    period: 5,
    status: "done",
    title: { pt: "Full-stack com AngularJS e React", en: "Full-stack with AngularJS & React" },
    org: "Akna",
    dates: "04/2023 – 08/2026",
    syllabus: {
      pt: ["Liderei a manutenção e a entrega de novas funcionalidades em aplicações web escaláveis, apoiando o fluxo de trabalho da equipe."],
      en: ["Led maintenance and delivery of new features in scalable web applications, supporting the team's workflow."],
    },
    requires: ["FRT405"],
  },

  // — Formação e prática / Education & practice
  {
    code: "FOR201",
    lane: "practice",
    period: 2,
    status: "done",
    title: { pt: "Bacharelado em Sistemas de Informação", en: "B.Sc. in Information Systems" },
    org: "Universidade Estadual de Goiás (UEG)",
    dates: "2016 – 2019",
    syllabus: { pt: ["Graduação concluída."], en: ["Degree completed."] },
    requires: [],
  },
  {
    code: "FOR302",
    lane: "practice",
    period: 3,
    status: "done",
    title: { pt: "Requisitos e planejamento", en: "Requirements & planning" },
    org: "Catskillet",
    dates: "05/2021 – 07/2022",
    syllabus: {
      pt: ["Fiz levantamento de requisitos e liderei a definição, o refinamento, o planejamento e a gestão de tarefas de engenharia."],
      en: ["Gathered requirements and led the definition, refinement, planning and tracking of engineering tasks."],
    },
    requires: ["FOR201"],
  },
  {
    code: "FOR403",
    lane: "practice",
    period: 4,
    status: "done",
    title: { pt: "Pós em Desenvolvimento Full Stack", en: "Postgrad in Full-Stack Development" },
    org: "IGTI",
    dates: "2022 – 2023",
    syllabus: { pt: ["Pós-graduação lato sensu concluída."], en: ["Postgraduate specialization completed."] },
    requires: ["FOR201"],
  },
  {
    code: "FOR404",
    lane: "practice",
    period: 4,
    status: "done",
    title: { pt: "Professor de Prática de Programação", en: "Lecturer in Programming Practice" },
    org: "Universidade de Rio Verde (UniRV)",
    dates: "08/2023 – 01/2024",
    syllabus: {
      pt: [
        "Ministrei Prática de Programação I, II e III com Java e Informática Básica para Agricultura.",
        "Orientei alunos em lógica, orientação a objetos, estruturas de dados e algoritmos de ordenação.",
      ],
      en: [
        "Taught Programming Practice I, II and III in Java, and Basic Computing for Agriculture.",
        "Mentored students in logic, object orientation, data structures and sorting algorithms.",
      ],
    },
    requires: ["FOR201"],
  },
  {
    code: "FOR505",
    lane: "practice",
    period: 5,
    status: "done",
    title: { pt: "Scrum, refinamento e Azure DevOps", en: "Scrum, refinement & Azure DevOps" },
    org: "Akna",
    dates: "04/2023 – 08/2026",
    syllabus: {
      pt: [
        "Analisei requisitos técnicos, desenhei soluções e refinei histórias com equipes multidisciplinares usando Scrum, Jira e Azure DevOps.",
        "Dailies curtas às 9h, sprints mensais com review e retrospectiva. Como a sprint era longa, eu puxava sessões de planejamento e refinamento quando o time precisava.",
        "Git Flow, com branches de produção e desenvolvimento e prefixos de commit (feature, bugfix, hotfix). Em projetos com um padrão próprio, sigo o padrão do time.",
      ],
      en: [
        "Analyzed technical requirements, designed solutions and refined user stories with cross-functional teams using Scrum, Jira and Azure DevOps.",
        "Short 9 a.m. dailies and monthly sprints with review and retrospective. Because sprints were long, I ran planning and refinement sessions whenever the team needed them.",
        "Git Flow, with production and development branches and commit prefixes (feature, bugfix, hotfix). On projects with their own convention, I follow the team's.",
      ],
    },
    requires: ["FOR302"],
  },
  {
    code: "FOR606",
    lane: "practice",
    period: 6,
    status: "current",
    title: { pt: "Pós em Engenharia de Software em IA Aplicada", en: "Postgrad in Software Engineering for Applied AI" },
    org: "UNIPDS",
    dates: "04/2026 – 07/2027",
    syllabus: {
      pt: ["Cursando, com foco em Inteligência Artificial, LLMs e RAG."],
      en: ["In progress, focused on Artificial Intelligence, LLMs and RAG."],
    },
    requires: ["FOR403"],
  },
];

/** The chain that leads to the back-end role, lit by "Highlight back-end route". */
export const backendRoute = [
  "DAD101",
  "DAD102",
  "DAD203",
  "BCK201",
  "BCK302",
  "BCK303",
  "BCK503",
  "BCK505",
  "BCK506",
  "DAD504",
  "BCK604",
  "BCK605",
];

export const defaultCourse = "BCK605";

export const orgName = (org: Course["org"], lang: Locale) =>
  typeof org === "string" ? org : org[lang];
