# Petiscos Bahia — Site

Cardápio digital da Petiscos Bahia, feito em **React + Vite + Tailwind CSS**.

## Estrutura de pastas

```
petiscos-bahia-site/
├── public/
│   └── images/            # Fotos dos produtos (usadas direto pelo <img>)
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Hero, Footer, seção de Contato
│   │   ├── menu/          # Card, título de categoria, seção de cardápio, modal de detalhes
│   │   ├── ui/            # Reveal (animação de scroll) e BackToTop
│   │   └── icons/         # Ícones por categoria
│   ├── data/
│   │   └── products.js    # << Edite aqui as informações de cada produto
│   ├── hooks/
│   │   └── useReveal.js   # Hook de animação ao rolar a página
│   ├── App.jsx            # Componente principal, junta tudo
│   ├── main.jsx           # Ponto de entrada do React
│   └── index.css          # Tailwind + estilos globais
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Como editar as informações de cada item

Abra `src/data/products.js`. Cada produto é um objeto assim:

```js
{
  id: "croqueta_cupim",              // precisa ser igual ao nome do arquivo em public/images
  categoria: "Bolinhos & Croquetas",
  peso: "350g",
  title: "Croqueta de Cupim",
  desc: "Feita com cupim desfiado...",
  // Campos opcionais — se não preencher, usa o texto genérico automaticamente:
  modoPreparo: "...",
  conservacao: "...",
  ingredientes: "...",
}
```

Quando você preencher `modoPreparo`, `conservacao` ou `ingredientes` de um item,
esse texto substitui automaticamente o texto genérico só naquele item (o texto
genérico padrão fica no topo do mesmo arquivo, em `GENERIC_INFO`).

## Como editar as fotos

Troque os arquivos dentro de `public/images/`, mantendo o mesmo nome (o `id`
do produto). Formatos aceitos: `.jpg`, `.png`, `.webp` (se trocar a extensão,
atualize também o `id` correspondente ou o caminho em `Card.jsx` e
`ProductModal.jsx`).

## Rodando localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou mais recente).

```bash
npm install       # instala as dependências (só precisa rodar uma vez)
npm run dev       # inicia o site em modo de desenvolvimento
```

Isso abre o site em `http://localhost:5173` — qualquer alteração salva atualiza
a página automaticamente.

Para gerar a versão de produção (arquivos finais otimizados):

```bash
npm run build     # gera a pasta dist/
npm run preview   # visualiza a versão de produção localmente
```

## Subindo para o GitHub

Dentro da pasta `petiscos-bahia-site`:

```bash
git init
git add .
git commit -m "Primeira versão do site Petiscos Bahia"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/petiscos-bahia-site.git
git push -u origin main
```

(troque `SEU_USUARIO` pelo seu usuário do GitHub — crie o repositório vazio
antes, pelo site do GitHub, sem adicionar README/gitignore por lá para evitar
conflito.)

## Publicando na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **Add New → Project**.
3. Selecione o repositório `petiscos-bahia-site`.
4. A Vercel detecta automaticamente que é um projeto Vite — não precisa mudar
   nenhuma configuração (Build Command: `vite build`, Output Directory: `dist`).
5. Clique em **Deploy**.

Pronto — a cada `git push` para o `main`, a Vercel publica a nova versão
automaticamente.
