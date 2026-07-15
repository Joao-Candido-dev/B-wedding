# Convite de Casamento — Brenda & Edivaldo 💍

Site estático (HTML, CSS e JavaScript puro, sem dependências) para o convite
de casamento. Funciona offline, é responsivo e não usa nenhum backend.

## Estrutura do projeto

```
convite-brenda-edivaldo/
├── index.html      → página do envelope (capa, "toque para abrir")
├── convite.html     → página principal com todas as informações
├── style.css        → todo o visual (cores, fontes, animações, responsivo)
├── script.js         → interação do envelope, contagem regressiva, links
└── assets/
    ├── casal1.jpg    → foto usada na seção "galeria"
    └── casal2.jpg    → foto usada no topo (hero) da página principal
```

## Como visualizar agora (VS Code Live Server)

1. Extraia a pasta `convite-brenda-edivaldo` em qualquer lugar do seu PC.
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server** (se ainda não tiver).
4. Clique com o botão direito em `index.html` → **"Open with Live Server"**.
5. O navegador vai abrir já no envelope. Clique nele para ir ao convite.

## O que falta você preencher

Abra o arquivo `script.js` e procure pela linha no topo:

```js
const LINK_LISTA_DE_PRESENTES = "#"; // <-- coloque aqui o link da lista
```

Troque o `"#"` pelo link real da lista de presentes (Google Forms, loja,
Pix, o que vocês decidirem) entre aspas. Exemplo:

```js
const LINK_LISTA_DE_PRESENTES = "https://www.casasbahia.com.br/lista-presentes/seulink";
```

Os links do mapa da **cerimônia** e da **recepção** já estão configurados
dentro de `convite.html` (procure por `cartao-botao` se quiser trocar depois).

## Como publicar gratuitamente no GitHub Pages

1. Crie uma conta no [GitHub](https://github.com) (se ainda não tiver).
2. Crie um repositório novo, por exemplo `convite-brenda-edivaldo`
   (pode ser público).
3. Suba os arquivos desta pasta para o repositório. Duas formas:
   - **Pelo site do GitHub**: abra o repositório → "Add file" → "Upload files"
     → arraste todos os arquivos e a pasta `assets` → "Commit changes".
   - **Pelo terminal**, dentro da pasta do projeto:
     ```bash
     git init
     git add .
     git commit -m "Convite de casamento Brenda e Edivaldo"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/convite-brenda-edivaldo.git
     git push -u origin main
     ```
4. No repositório, vá em **Settings → Pages**.
5. Em "Source", selecione a branch `main` e a pasta `/ (root)`. Salve.
6. Em alguns minutos o site estará disponível em:
   `https://SEU-USUARIO.github.io/convite-brenda-edivaldo/`
7. Esse é o link que vocês podem compartilhar com os convidados. 💌

## Detalhes técnicos

- **Sem frameworks**: HTML/CSS/JS puro, carrega instantaneamente.
- **Contagem regressiva** real até 19/12/2026 às 16h30 (horário de Brasília),
  calculada em `script.js`.
- **Responsivo**: testado mentalmente para celular (a partir de 320px),
  tablet e desktop — os cartões de informação viram coluna única em telas
  estreitas, e as fontes usam `clamp()` para se ajustar ao tamanho da tela.
- **Acessibilidade**: contraste adequado, foco visível ao navegar por
  teclado, e respeita a preferência do sistema por "menos movimento"
  (`prefers-reduced-motion`).
- **Paleta de cores**: extraída do ensaio fotográfico do casal — verde‑musgo
  escuro do bambuzal, turquesa do vestido e dourado de cerimônia, em
  degradê.
