# 💰 Controle de Gastos Pessoais - Full-Stack

Este é um sistema completo de gerenciamento financeiro que permite ao usuário registrar, categorizar e somar suas despesas em tempo real. O projeto integra uma interface de usuário responsiva, um servidor API estruturado e modelagem de banco de dados.

## 📱 Diferencial Técnico: Desenvolvimento Mobile
Todo o ecossistema deste projeto — incluindo o desenvolvimento do Front-End em React, a lógica do Back-End em Node.js e os scripts de banco de dados SQL — foi **codificado, gerenciado e publicado inteiramente através de um telefone celular**. 

Para superar as limitações físicas do aparelho e garantir a entrega do software, utilizei ferramentas de Inteligência Artificial como copiloto de produtividade e ambientes virtuais de execução na nuvem. Isso demonstra minha capacidade de adaptação, resiliência e resolução de problemas sob restrições técnicas.

## 🧰 Tecnologias Utilizadas

### Front-End
* **React.js & JavaScript (ES6):** Gerenciamento de estado para somas dinâmicas, renderização de componentes e filtros de interface.
* **HTML5 & CSS3:** Estruturação visual e estilização adaptada para telas.

### Back-End
* **Node.js & Express:** Construção de um servidor API com rotas estruturadas para o tráfego seguro de informações.
* **CORS & JSON:** Padrões de comunicação e segurança para conectar a interface ao servidor.

### Banco de Dados
* **SQL (Estrutura Relacional):** Modelagem de tabelas com chaves primárias e queries otimizadas (`SUM`, `GROUP BY`) para consolidar despesas.

## 📊 Categorias de Negócio Processadas
O sistema valida e organiza os dados financeiros em quatro categorias reais:
1. **Lazer**
2. **Transporte**
3. **Feira**
4. **Contas da Casa**

## 🗺️ Arquitetura de Rotas da API
* `POST /api/gastos` - Recebe e valida a categoria e o valor do gasto enviado pela tela, registrando no sistema.
* `GET /api/gastos/resumo` - Executa os cálculos e retorna o valor total geral somado, além do detalhamento de cada categoria mastigado para o Front-End.
