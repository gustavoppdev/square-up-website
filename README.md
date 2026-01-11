<div align="center">

# SquareUp

### Digital Product Agency

_Uma agência de produtos digitais especializada em engenharia web e mobile de alta performance._

#### [Link da demo](https://squareup-ten.vercel.app)

---

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📐 Design

Este projeto foi desenvolvido a partir de um design profissional criado no Figma:

**[Praha](https://www.figma.com/@praha)** — [Link do Design](https://www.figma.com/community/file/1305400086109606332/digital-agency-company-website-ui-design-template-in-dark-theme-free-editable)

## ✨ Sobre o Projeto

**SquareUp** é uma plataforma que representa uma agência digital fictícia com foco em:

- **Performance**: Otimização com Server Components e Next.js 16.
- **Internacionalização**: Suporte completo para múltiplos idiomas (`en`, `pt`) via `next-intl`.
- **SEO**: Metadata e OpenGraph dinâmicos
- **Type Safety**: TypeScript
- **UI/UX**: Design system com Tailwind CSS 4, shadcn/ui e Radix UI

## 🛠️ Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui · next-intl

## ✨ Destaques

- Internacionalização completa (i18n) com rotas dinâmicas e traduzidas a partir do idioma
- SEO otimizado com metadata dinâmica
- Design system acessível (WCAG)
- Layout fluido para Mobile, Tablet e Desktop.
- Type safety completo

## 🏗️ Estrutura do Projeto

```
src/
├── app/[locale]/          # Rotas internacionalizadas
│   ├── layout.tsx         # Layout root + metadata
│   ├── globals.css        # Design tokens CSS
│   └── [rota]/
│       ├── page.tsx       # Página da rota
│       └── components/    # Componentes específicos desta página
├── components/            # Componentes reutilizáveis globais
│   ├── layout/            # Header, Footer, Navbar
│   ├── sections/          # Seções compartilhadas
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilitários
├── i18n/                  # Configuração next-intl
├── constants/             # Dados estáticos
└── types/                 # TypeScript definitions
```

## 🚀 Getting Started

### Pré-requisitos

- Node.js 20+
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gustavoppdev/square-up.git

# Entre no diretório
cd square-up

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor local
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 👨‍💻 Autor

**Gustavo Henrique**

Desenvolvedor Front-end especializado em React, Next.js e arquiteturas modernas. Este projeto demonstra habilidades em:

- Arquitetura de aplicações escaláveis
- Performance e otimizações
- Design systems e componentização
- Type safety e qualidade de código
- SEO e acessibilidade
- Internacionalização

---

<div align="center">

**[⬆ Voltar ao topo](#squareup)**

Feito com ❤️ e TypeScript

</div>
