# Fundamentos da inteligência de negócios

Apresentação de **Artur Teixeira, João Henrique e Pedro Mafra** em 04/11/2026.

[Abrir apresentação](https://artur-txr.github.io/fundamentos-bi/?v=26#1)

## Organização

15 telas. O caso central é um **supermercado fictício**, com dados didáticos.

| Integrante | Telas | Assunto |
| --- | --- | --- |
| Artur Teixeira | 1–4 | BI, dados e informação, indicadores e processo de análise |
| João Henrique | 5–10 | Gestão da informação, ciclo de vida, qualidade e segurança |
| Pedro Mafra | 11–15 | Bancos de dados, modelo relacional, SQL, painel e conclusão |

A parte de Artur foi condensada em capa e três telas de conteúdo, com roteiro direto.

## Controles

- Setas ou Page Up/Down: navegar. Nos diagramas das telas 4, 6 e 12, as setas percorrem as etapas antes de mudar de tela.
- Home / End: capa e conclusão.
- P ou Apresentar: reduzir os controles auxiliares.
- N ou Roteiro: consultar a fala na mesma tela.
- Cores: escolher azul, claro, verde ou violeta. A preferência fica salva neste navegador.
- Índice: abrir qualquer tela diretamente.
- Menu •••: janela do apresentador, tela cheia, impressão/PDF e glossário.

## Recursos mantidos

- Tela 8: simulação de venda duplicada. Com erro: 140 unidades e R$ 3.080; corrigido: 120 unidades e R$ 2.640.
- Tela 14: comparação das semanas lado a lado, com foco opcional em cada período.
- Tela 15: conclusão ligada ao caso, referências e QR code.
- Termos destacados: definições breves.
- Diagramas: revelação por etapas ou Mostrar tudo.

## Janela do apresentador

Abra ••• → Janela do apresentador. Mantenha os slides projetados e o roteiro na sua tela. Se a janela não aparecer, use o link alternativo exibido na apresentação. As janelas precisam permanecer abertas no mesmo navegador e no mesmo domínio.

A janela mostra roteiro, próxima tela, controles e cronômetro manual. O tempo do slide reinicia ao mudar de tela. Teste a configuração das telas antes de apresentar. Em arquivos locais, as políticas do navegador podem limitar a sincronização; prefira o endereço publicado.

## Números do supermercado fictício

| Produto | Semana 1 | Semana 2 |
| --- | --- | --- |
| Arroz | 80 | 120 |
| Feijão | 60 | 75 |
| Café | 40 | 35 |

O arroz custa R$ 25 na semana 1 e R$ 22 na semana 2. O custo de aquisição é de R$ 18 em ambas. A receita passa de R$ 2.000 para R$ 2.640; o resultado bruto simplificado passa de R$ 560 para R$ 480. Despesas e tributos não foram considerados: não é lucro líquido.

O painel usa JavaScript local. A consulta SQL é ilustrativa e utiliza vendas_demo, uma tabela didática separada do modelo relacional. As respostas e interações não são enviadas a um servidor.

## Arquivos

index.html, deck.js, player.js, design.css, interactions.js, sync.js, presenter.html, presenter.js, acesso.svg, ROTEIRO.md e .nojekyll.

Abra index.html para uso offline (exceto links externos); para publicar no GitHub Pages, use main e / (root). Confira a prévia antes de imprimir ou salvar como PDF.

## Referências e créditos

- [IBM — Business intelligence](https://www.ibm.com/think/topics/business-intelligence)
- [IBM — Data management](https://www.ibm.com/think/topics/data-management)
- [IBM — Data quality](https://www.ibm.com/think/topics/data-quality)
- [PostgreSQL — Conceitos relacionais](https://www.postgresql.org/docs/current/tutorial-concepts.html)
- [PostgreSQL — Chaves estrangeiras](https://www.postgresql.org/docs/current/tutorial-fk.html)
- [PostgreSQL — Transações](https://www.postgresql.org/docs/current/tutorial-transactions.html)

O QR code foi gerado com [Project Nayuki QR Code generator](https://www.nayuki.io/page/qr-code-generator-library), sob licença MIT, e decodificado em teste independente com [jsQR](https://github.com/cozmo/jsQR). Essas bibliotecas não são carregadas pelo site.
