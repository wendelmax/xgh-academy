# XGH Academy

Plataforma web de aprendizado formal sobre Extreme Go Horse (XGH): da sátira às práticas produtivas para POC, MVP e entrega ágil com qualidade. Inclui material didático, certificação em níveis (Foundation, Practitioner, Expert) e validação de certificados.

## Funcionalidades

- **Páginas de conteúdo**: O que é XGH, os 22 princípios (com contraste às práticas recomendadas), POC/MVP e agilidade sustentável, com links para referências externas e diagramas.
- **Certificação**: Três níveis (XGH Foundation, Practitioner, Expert) com provas cronometradas, nota mínima e emissão de certificado com ID único. Não é permitido obter mais de um certificado por e-mail no mesmo nível.
- **Validação de certificados**: Consulta pela ID do certificado ou pela identificação do participante (e-mail ou nome).
- **Certificado em PDF**: Página de certificado com opção de download em PDF e botão para compartilhar no LinkedIn; badges do nível são exibidos no certificado.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Armazenamento de certificados

Os certificados são armazenados em **Neon** (Postgres serverless). A conexão usa uma das variáveis de ambiente: `DATABASE_URL` ou `POSTGRES_URL` (esta última é definida automaticamente pela integração Vercel + Neon).

- **Local**: Crie `.env.local` com `DATABASE_URL=postgresql://...` (connection string do Neon).
- **Vercel**: Defina `DATABASE_URL` ou `POSTGRES_URL` em Settings → Environment Variables. Se você conectou o projeto ao Neon pelo marketplace da Vercel, `POSTGRES_URL` já deve existir.

A tabela `certificates` e os índices são criados automaticamente na primeira utilização.

## Build

```bash
npm run build
npm start
```

## Tecnologias

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Neon (Postgres serverless), jsPDF.
