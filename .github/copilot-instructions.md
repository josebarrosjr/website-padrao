# Instruções para Copilot

## Arquitetura

Este é um site estático de página única, sem framework, dependências ou etapa de compilação. `index.html` define a estrutura semântica e as seções; `css/style.css` contém tokens visuais, componentes e layout responsivo; `js/main.js` controla o menu mobile, atualiza o ano do rodapé e valida o formulário demonstrativo. Imagens ficam em `assets/images/` e a fonte local em `fonts/`.

## Comandos

- Servidor local: `python -m http.server 8000` na raiz; acessar `http://localhost:8000`.
- Build: não há etapa de build.
- Testes e lint: não há comandos nem ferramentas automatizadas configuradas. Para uma verificação focada, servir a página e conferir no navegador a alteração em `index.html`, `css/style.css` ou `js/main.js`.

## Convenções específicas

- Preserve a estrutura de página única e a correspondência entre links internos, IDs de seção e referências `aria-labelledby`.
- Ao ajustar o layout, mantenha as classes e IDs existentes: o CSS e o JavaScript selecionam elementos diretamente por esses atributos.
- O formulário apenas valida dados no navegador e apresenta texto de demonstração; não envia nem armazena informações.
- Mantenha intacta a assinatura `Site criado por` no rodapé, incluindo o link e a imagem em `assets/images/logo-dev.png`.
- O conteúdo da página é texto de exemplo. Não introduza contatos ou links externos de produção sem solicitação explícita.
