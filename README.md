<div align="center">

# StudyHub 📚

**Collaborate. Learn. Succeed Together.**

</div>

## Equipe

- Fernando Ludvig (Líder)
- Cynthia Moyo
- Ganiyat Bakare
- Saul Carracelas

## Visão Geral

StudyHub é uma plataforma colaborativa para estudantes e mentores co-criarem jornadas de aprendizado. O objetivo é centralizar grupos de estudo, conteúdos curados, metas compartilhadas e comunicação em tempo real para que equipes acadêmicas mantenham ritmo e transparência em suas entregas.

## Principais Recursos

1. Painel unificado com indicadores de progresso.  
2. Gerenciamento de grupos com membros, reuniões e objetivos.  
3. Agenda inteligente sincronizada com calendários externos.  
4. Chat contextual por grupo e tópico de estudo.  
5. Biblioteca de materiais com versionamento e filtros.  
6. Trilha personalizada de atividades para cada equipe.  
7. Sistema de metas, checkpoints e feedback contínuo.  
8. Relatórios automatizados de participação e desempenho.  
9. Notificações configuráveis por canal e prioridade.  
10. Gamificação com conquistas, rankings e selo de destaque.  
11. Perfis colaborativos com disponibilidade e habilidades.  
12. Integrações com ferramentas acadêmicas e produtividade.

## Tema de Design

- **Paleta:** Primário `#2563EB`, primário escuro `#1E40AF`, primário claro `#3B82F6`, acento `#7C3AED`, suporte (sucesso `#10B981`, aviso `#F59E0B`, erro `#EF4444`), base neutra `#F9FAFB` a `#111827`.  
- **Tipografia:** Inter (sem serifa), títulos em peso 600/700, corpo em 400/500.  
- **Estilo:** Layout com espaçamentos progressivos (4/8/16/24/32 px), cantos arredondados de 8 px, sombras suaves e gradientes leves sobre fundos claros.  
- **Componentes:** Baseados em padrões shadcn/ui, com hierarquia visual clara, contrastes aprovados pelo OWASP e foco em acessibilidade (WCAG AA).

## Stack Tecnológica

- Next.js 14+ (App Router)  
- TypeScript  
- Tailwind CSS v4  
- PostgreSQL  
- Prisma  
- Clerk/Auth0 (autenticação)

## Estrutura do Projeto

```
wdd430-project/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── groups/
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/
│   │   └── hello/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Sidebar.tsx
├── lib/
│   ├── types.ts
│   └── utils.ts
├── public/
│   └── logo.svg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
└── README.md
```

## Primeiros Passos

1. **Instalar dependências**
   ```bash
   npm install
   ```
2. **Executar ambiente de desenvolvimento**
   ```bash
   npm run dev
   ```
3. **Acessar no navegador**
   ```
   http://localhost:3000
   ```

## Fluxo de Desenvolvimento

- Branch principal protegida; use branches de feature.  
- Pull requests acompanhadas por revisão cruzada.  
- Execução de `npm run lint` antes de cada PR.  
- Deploy contínuo via Vercel e integração com PostgreSQL gerenciado.  
- Monitoramento de segurança seguindo OWASP Top 10 em toda nova funcionalidade.

## Cronograma do Projeto

| Semana | Entregas principais |
| ------ | ------------------- |
| 1 | Descoberta, requisitos e definição de personas |
| 2 | Protótipos de interface e validação com stakeholders |
| 3 | Implementação do MVP colaborativo e integrações base |
| 4 | Testes, ajustes de performance e entrega final |

## Planejamento e Acompanhamento

- Quadro do projeto: [GitHub Project Board](https://github.com/users/fernandoludvig/projects/3/views/1)  
- Reuniões semanais de sincronização e retrospectiva.  
- Documentação contínua no repositório e registro de decisões arquiteturais.

---

**Pronto para colaborar?** Clone o repositório, configure o ambiente e compartilhe insights com o time StudyHub.

