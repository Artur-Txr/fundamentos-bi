# Fundamentos da inteligência de negócios

Apresentação de **Artur Teixeira, João Henrique e Pedro Mafra**, em 04/11/2026.

[Abrir apresentação](https://artur-txr.github.io/fundamentos-bi/)

## Organização

18 slides, com 6 para cada integrante:

| Integrante | Slides | Conteúdo |
| --- | --- | --- |
| Artur Teixeira | 1–6 | Abertura, problema de negócio, dados e informação, BI, indicadores e processo |
| João Henrique | 7–12 | Gestão da informação, ciclo de vida, qualidade, erros, segurança e boas práticas |
| Pedro Mafra | 13–18 | Bancos de dados, modelo relacional, SQL, painel, decisão e conclusão |

A duração depende do ensaio. Como ponto de partida, reservem cerca de 20–30 minutos e ajustem ao tempo do professor. O [ROTEIRO.md](ROTEIRO.md) reúne as falas de cada slide.

## Design e temas

Quatro temas: Azul noturno, Claro editorial, Verde profundo e Violeta. Use **Cores** no topo para trocar; a preferência fica salva neste navegador. Todos os temas preservam o conteúdo e os cálculos.

A nova capa usa uma ilustração conceitual de integração de fontes. O desenho não representa dados estatísticos.

## Usar

- Setas ou Page Up/Down: navegar.
- Home / End: capa e último slide.
- P ou Apresentar: ampliar a área útil e reduzir controles auxiliares.
- N ou Roteiro: consultar a fala na mesma tela. Feche antes da projeção se não quiser mostrar o roteiro ao público.
- F: tela cheia; F11 é uma alternativa do navegador.
- Índice: saltar para qualquer slide.
- Menu •••: tela cheia, impressão/PDF e glossário.
- Escape: fechar os diálogos.

Para usar offline, abra index.html no navegador. Os links das fontes precisam de internet. Não há dependências externas nem banco de dados conectado.

## Caso fictício

| Produto | Semana 1 | Semana 2 |
| --- | --- | --- |
| Arroz | 80 | 120 |
| Feijão | 60 | 75 |
| Café | 40 | 35 |

O preço do arroz muda de R$ 25 para R$ 22; o custo de aquisição permanece em R$ 18 por unidade. A receita passa de R$ 2.000 para R$ 2.640 (+32%). O resultado bruto simplificado passa de R$ 560 para R$ 480 (−14,3%). Despesas e tributos não foram considerados: não é lucro líquido.

O painel é calculado localmente em JavaScript. A consulta SQL é ilustrativa e utiliza vendas_demo, uma tabela didática separada do modelo relacional apresentado. Os números não são dados de uma empresa real.

## Arquivos e publicação

- index.html: estrutura da página.
- deck.js: conteúdo dos 18 slides e falas.
- player.js: navegação, temas, diálogos e painel.
- design.css: identidade visual, responsividade e impressão.
- ROTEIRO.md: material de ensaio.
- .nojekyll: publicação estática.

No GitHub Pages, use a branch main e a pasta / (root). A prévia de impressão depende do navegador; confira a paginação antes de salvar como PDF.

## Referências

- [IBM — Business intelligence](https://www.ibm.com/think/topics/business-intelligence)
- [IBM — Data management](https://www.ibm.com/think/topics/data-management)
- [IBM — Data quality](https://www.ibm.com/think/topics/data-quality)
- [PostgreSQL — Conceitos relacionais](https://www.postgresql.org/docs/current/tutorial-concepts.html)
- [PostgreSQL — Chaves estrangeiras](https://www.postgresql.org/docs/current/tutorial-fk.html)
- [PostgreSQL — Transações](https://www.postgresql.org/docs/current/tutorial-transactions.html)
## Capa e conteúdo ampliados

A capa utiliza uma ilustração vetorial de painel analítico, integração e fontes de dados, adaptada aos quatro temas. O desenho é conceitual e não representa dados reais.

Os slides de conteúdo incluem blocos de explicação e aplicação visíveis. O exemplo da promoção também mostra que, ao preço de R$ 22 e custo de aquisição de R$ 18, seriam necessárias 140 unidades para igualar o resultado bruto simplificado de R$ 560 da semana de referência. O cálculo não inclui despesas e tributos.
## Roteiro por tela

O roteiro foi reescrito para acompanhar os 18 slides. Cada tela inclui fala sugerida, indicação do que mostrar e transição. Há tempos de referência por slide e integrante, totalizando aproximadamente 24 minutos, sem perguntas adicionais. O slide 16 orienta começar pela Semana 1 e depois mudar para a Semana 2. As falas podem ser adaptadas durante o ensaio.
