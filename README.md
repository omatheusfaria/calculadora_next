# Calculadora Simples em Next.js 🧮

## Descrição 📝

Este é um projeto de uma calculadora simples desenvolvida como parte da disciplina de Programação Script. A aplicação foi criada com Next.js e React, e implementa as funcionalidades básicas de uma calculadora, como operações aritméticas, manipulação de números decimais e mudança de sinal.

## Funcionalidades ✨

-   **Operações básicas:** Adição, Subtração, Multiplicação e Divisão.
-   **Limpeza:** Botão "AC" para limpar todos os dados e reiniciar a calculadora.
-   **Números decimais:** Suporte para inserção de números com ponto decimal.
-   **Troca de sinal:** Botão "+/-" para alternar entre valores positivos e negativos.
-   **Visor de expressão:** Mostra a operação que está sendo realizada.

## Tecnologias Utilizadas 💻

-   **Next.js:** Framework React para renderização no lado do servidor e geração de sites estáticos.
-   **React:** Biblioteca para construção de interfaces de usuário.
-   **CSS Modules:** Para estilização de componentes de forma modular e isolada.
-   **ESLint:** Ferramenta para linting e padronização do código.

## Como Executar o Projeto 🚀

Siga os passos abaixo para executar o projeto em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/omatheusfaria/calculadora_next.git
    cd <NOME_DO_DIRETORIO>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra [http://localhost:3000/calculator](http://localhost:3000/calculator) no seu navegador para ver a calculadora.

## Estrutura do Projeto 📂

```
/app
|-- /calculator
|   `-- page.js         # Lógica principal da calculadora
|-- /components
|   |-- Button.js       # Componente de botão reutilizável
|   |-- CalculatorUI.js # Componente que monta a UI da calculadora
|   `-- Display.js      # Componente do visor da calculadora
|-- /styles
|   `-- Calculator.module.css # Estilos da calculadora
`-- page.js             # Página inicial da aplicação
```

-   `app/calculator/page.js`: Contém todo o estado e a lógica da calculadora.
-   `app/components/`: Armazena os componentes React reutilizáveis.
-   `app/styles/`: Contém os arquivos de estilização CSS Modules.

## Autor 👨‍💻
Desenvolvido por **Matheus Faria**.  
> Projeto com fins educacionais. Desenvolvido como trabalho para a disciplina de Programação Script, ministrada pelo professor Leonardo Raiz.
