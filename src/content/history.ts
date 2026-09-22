import type { Locale } from "@/i18n/config";
import type { LaneId } from "./curriculum";

/* The transcript: job titles exactly as on the CV (Referencias/). */

type Text = Record<Locale, string>;

export type Role = { role: Text; org: string; dates: string; place: string; lanes: LaneId[] };

export const roles: Role[] = [
  {
    role: { pt: "Analista de Desenvolvimento Full Stack", en: "Full Stack Development Analyst" },
    org: "Akna · HiPlatform",
    dates: "04/2023 – 08/2026",
    place: "Brasil",
    lanes: ["backend", "frontend", "data", "practice"],
  },
  {
    role: { pt: "Professor de Ensino Superior", en: "University Lecturer" },
    org: "Universidade de Rio Verde (UniRV)",
    dates: "08/2023 – 01/2024",
    place: "Rio Verde, GO",
    lanes: ["practice"],
  },
  {
    role: { pt: "Analista de Desenvolvimento Front-End Sênior", en: "Senior Front-End Development Analyst" },
    org: "Akna · HiPlatform",
    dates: "07/2022 – 03/2023",
    place: "Brasil",
    lanes: ["frontend"],
  },
  {
    role: { pt: "Analista de Desenvolvimento de Sistemas Front-End", en: "Front-End Systems Development Analyst" },
    org: "Catskillet",
    dates: "05/2021 – 07/2022",
    place: "Brasil",
    lanes: ["frontend", "practice"],
  },
  {
    role: { pt: "Analista de Desenvolvimento de Sistemas", en: "Systems Development Analyst" },
    org: "Indra",
    dates: "02/2021 – 05/2021",
    place: "Brasil",
    lanes: ["frontend", "backend"],
  },
  {
    role: { pt: "Desenvolvedor Front-End", en: "Front-End Developer" },
    org: "Maleta do Engenheiro",
    dates: "05/2020 – 03/2021",
    place: "Brasil",
    lanes: ["frontend"],
  },
  {
    role: { pt: "Desenvolvedor de Sistemas Full Stack", en: "Full Stack Systems Developer" },
    org: "Lego Sistemas",
    dates: "11/2019 – 05/2020",
    place: "Rio Verde, GO",
    lanes: ["backend", "frontend", "data"],
  },
  {
    role: { pt: "Estagiário — Desenvolvedor de Sistemas Full Stack", en: "Intern — Full Stack Systems Developer" },
    org: "Lego Sistemas",
    dates: "07/2018 – 10/2019",
    place: "Brasil",
    lanes: ["backend", "frontend"],
  },
  {
    role: { pt: "Analista MIS/GTI", en: "MIS/IT Analyst" },
    org: "Real Jurídica Assessoria",
    dates: "11/2013 – 10/2017",
    place: "Rio Verde, GO",
    lanes: ["data"],
  },
];

export const education: { title: Text; org: string; dates: string }[] = [
  {
    title: { pt: "Pós-Graduação em Engenharia de Software em IA Aplicada (cursando)", en: "Postgrad in Software Engineering for Applied AI (in progress)" },
    org: "UNIPDS",
    dates: "04/2026 – 07/2027",
  },
  {
    title: { pt: "Pós-Graduação Lato Sensu em Desenvolvimento Full Stack", en: "Postgraduate Specialization in Full-Stack Development" },
    org: "IGTI",
    dates: "2022 – 2023",
  },
  {
    title: { pt: "Bacharelado em Sistemas de Informação", en: "B.Sc. in Information Systems" },
    org: "Universidade Estadual de Goiás (UEG)",
    dates: "2016 – 2019",
  },
];

export const certifications: Text[] = [
  { pt: "Desenvolvedor Angular", en: "Angular Developer" },
  { pt: "Elementos customizados em Angular (componentes, diretivas e pipes)", en: "Custom elements in Angular (components, directives and pipes)" },
  { pt: "Formulários em Angular", en: "Angular Forms" },
  { pt: "Programação C#", en: "C# Programming" },
  { pt: "Workshop de Arquitetura SOLID", en: "SOLID Architecture Workshop" },
];

export const contact = {
  email: "gustavob68@gmail.com",
  linkedin: "https://www.linkedin.com/in/gustavobcardoso/",
  whatsapp: "https://wa.me/5564992572114",
  phoneDisplay: "+55 (64) 99257-2114",
  cv: "/cv/gustavo-borges-cardoso-cv.pdf",
};
