# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js + TypeScript + Tailwind CSS (escolha do usuário).

Hospedagem: **em aberto** (ainda não decidida). Até lá, não depender de recursos exclusivos de um provedor.

## Users

**Público principal:** recrutadores e tech leads avaliando candidatos para vagas CLT ou PJ. Eles chegam pelo link de um currículo, do LinkedIn ou de uma candidatura, normalmente com pouco tempo e comparando vários candidatos. O trabalho deles é decidir rápido se o perfil combina com a vaga e se vale chamar para uma entrevista.

## Product Purpose

Portfólio pessoal de um desenvolvedor full-stack. O site existe para transformar uma visita de recrutador ou tech lead em um convite para entrevista. Sucesso é o visitante entender em poucos segundos quem é o desenvolvedor, o que ele sabe fazer e para qual tipo de vaga ele está buscando, e então conseguir chegar à experiência e ao contato.

## Positioning

Desenvolvedor full-stack de nível **pleno** (não sênior) que está direcionando a carreira para **back-end**.

- A maior parte da experiência e do conhecimento atual está no front-end, o que é um diferencial real: ele entende o produto de ponta a ponta.
- O objetivo agora é uma vaga voltada para back-end ou full-stack com peso em back-end, de preferência com **Java e Spring Boot**, que é a stack-alvo. C#/.NET (Akna) segue como experiência real, mas não como direção declarada.
- Tom: profissional e direto, sem frases de efeito ("Sua equipe?", "a disciplina que falta").
- Ele está abertamente disposto a aprender, e isso faz parte da proposta, não é algo a esconder.

O site deve comunicar essa transição de forma honesta: força comprovada no front, direção clara para o back e o nível pleno assumido.

## Operating Context

- Visitas curtas, muitas vezes vindas de um link em candidatura, currículo ou LinkedIn, em desktop ou celular.
- Tech leads avaliam a profundidade técnica pelas ementas das caixas: o que foi feito, com qual stack e o que mudou depois (não há código público).
- Site bilíngue: **português e inglês**, com seletor de idioma, para vagas no Brasil e no exterior.

## Capabilities and Constraints

- Conteúdo em duas línguas (PT/EN), mantido em paridade.
- Seções baseadas em conteúdo real: experiência profissional, formação e contato.
- **Sem seção de projetos, de forma permanente.** Todos os projetos são privados de empresas, sem repositório ou demo públicos. O trabalho aparece como experiência (empresa, período, o que foi feito), sem links, sem código e sem detalhes confidenciais.
- Em aberto: hospedagem/deploy, canal de contato preferido e domínio.

## Evidence on Hand

- **CV** (`Referencias/CV Gustavo Borges Cardoso.pdf`, privado): cargos, empresas, datas, bullets, formação e certificações, transcritos em `src/content/`. Uma cópia pública fica em `public/cv/` (o usuário autorizou o download; ela inclui e-mail e telefone).
- **Carta de recomendação da Akna** (`Referencias/Carta de recomendação.pdf`, privada): só um trecho curto da avaliação pode ir ao ar, atribuído à empresa. CPF, RG, CNPJ, nome de quem assinou e dados do DocuSign **nunca** são publicados, e a pasta `Referencias/` está no `.gitignore`.
- **Entrevista por mensagem** (`Referencias/chat.txt`, privada): fonte de detalhes das entregas (Spring Boot na Indra e na Catskillet, postmortem do disparo de WhatsApp na Akna, bug de stream no produto Social da HiPlatform, Scrum e Git Flow na prática). Nunca publicar CPF, salário, dados da recrutadora nem o motivo da saída da Akna.
- **Contexto de empresa:** a Akna foi adquirida pela HiPlatform, e Gustavo transitava entre produtos do grupo.
- **Contato público:** e-mail, LinkedIn (`linkedin.com/in/gustavobcardoso`) e WhatsApp.
- **Não existe por natureza do trabalho:** links de repositório ou demo (projetos privados de empresas). O GitHub não aparece no site.
- **Não existe, e não deve ser inventado:** métricas de impacto, case studies com números, depoimentos além da carta, foto pessoal, logo ou marca própria.

## Product Principles

1. **Honestidade de nível.** Apresentar o perfil como pleno e em transição para back-end. Nada de linguagem de Staff+, "arquiteto de sistemas distribuídos" ou alegações de escala que não correspondem à experiência real.
2. **Evidência acima de adjetivo.** Cada competência mostrada deve apontar para um projeto, repositório, demo ou experiência concreta.
3. **Decisão rápida.** O recrutador precisa entender perfil, foco e disponibilidade logo na primeira tela, e chegar ao contato sem esforço.
4. **Curiosidade como ativo.** A vontade de aprender e o interesse por back-end aparecem como direção deliberada, demonstrada por experiências reais e estudos em curso (Java e Spring Boot, pós em IA Aplicada).
5. **Paridade bilíngue.** PT e EN têm o mesmo conteúdo e qualidade; nenhuma versão é tradução de segunda classe.
