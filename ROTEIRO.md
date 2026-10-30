# Roteiro de apresentação

12 slides · 4 por integrante · aproximadamente 20–25 minutos, conforme o ritmo.

## Slide 1 — Da informação à decisão.

**Inteligência de negócios**



Imagine um gerente que precisa decidir o que comprar para a próxima semana. Se ele olhar apenas para a prateleira, terá uma visão limitada. Se reunir vendas, estoque e prazo dos fornecedores, poderá justificar melhor sua escolha. É essa passagem de registros dispersos para uma visão organizada que guia nossa apresentação.

Nossa exposição está dividida em três partes: primeiro, os fundamentos da inteligência de negócios; depois, a gestão da informação; por fim, os bancos de dados e uma demonstração prática. Não estamos estudando apenas um programa de computador, mas todo o caminho que torna uma decisão mais bem informada.

PARA APROFUNDAR
Investigar como dados podem apoiar decisões gerenciais. Ao final, devemos conseguir diferenciar dados e informação, reconhecer critérios de qualidade e explicar como tabelas e consultas alimentam uma análise.

O trabalho segue um único caso: um supermercado precisa planejar compras sem provocar falta de produtos nem excesso de estoque. A decisão depende de vendas, saldo disponível, preço, custo e prazo de entrega.

PERGUNTA POSSÍVEL
Por que usar um mesmo caso?
Porque ele mostra como os três temas se conectam em uma situação concreta.

SUGESTÃO PARA APRESENTAR
Uma forma de abrir a apresentação é perguntar: “Como vocês decidiriam quais produtos comprar para uma loja?” Ouça uma resposta e conecte com a necessidade de dados. Nosso objetivo é explicar o raciocínio e mostrar que o sistema ajuda, mas a decisão continua dependendo das pessoas.

**Ideia central:** Dados só geram valor quando respondem a uma pergunta.

---

## Slide 2 — O mesmo fato. Três níveis de valor.

**Inteligência de negócios**

O contexto transforma um registro em informação útil.

Podemos pensar em três perguntas: o que foi registrado, o que isso significa e o que podemos fazer com esse entendimento? O número 120, sem produto, período ou unidade de medida, informa muito pouco. Quando sabemos que representa vendas de arroz em uma semana e comparamos com outra semana, ele se torna útil.

Mesmo assim, a interpretação depende do contexto. Uma promoção pode explicar o crescimento, e a semana seguinte pode voltar ao normal. Por isso, conhecimento envolve relacionar o resultado com a experiência e com outras informações. Mais dados não substituem uma pergunta bem formulada.

PARA APROFUNDAR
Para comparar números, precisamos fixar produto, período e unidade de medida. Um crescimento de vendas pode refletir uma promoção, uma mudança de preço ou uma alteração no cadastro; o número sozinho não identifica a causa.

Aumento absoluto: 120 − 80 = 40 unidades. Aumento relativo: 40 ÷ 80 × 100 = 50%. O percentual usa a primeira semana como base. Uma alta de 50% seguida de uma queda de 50% não retorna ao valor inicial.

PERGUNTA POSSÍVEL
Informação e conhecimento são a mesma coisa?
Não. Informação organiza e contextualiza registros; conhecimento envolve interpretação, experiência e aplicação.

SUGESTÃO PARA APRESENTAR
Para exemplificar fora do supermercado, pense nas notas de uma turma. Uma nota é um dado; a média por disciplina é uma informação; identificar dificuldades e planejar uma revisão usa essa informação para orientar uma ação. O exemplo mostra que o conceito também aparece fora das empresas.

**Ideia central:** Registro + contexto + interpretação = apoio à ação.

---

## Slide 3 — BI: responder perguntas com dados.

**Inteligência de negócios**

Do entendimento do negócio à escolha dos indicadores.

Um gestor pode perguntar quais produtos estão vendendo menos, em qual unidade ocorreu uma queda ou se a meta mensal foi atingida. O BI organiza o acesso a essas respostas. Um dashboard é um painel que reúne indicadores; já o processo de BI inclui definir o problema, preparar os dados, analisar e acompanhar o que aconteceu depois da decisão.

Também precisamos definir os indicadores com cuidado. Faturamento mostra o valor das vendas; lucro depende também de custos e despesas. Uma empresa pode vender mais e ganhar menos. O indicador deve refletir o objetivo que se deseja avaliar, evitando conclusões baseadas em um único número.

PARA APROFUNDAR
Um KPI é um indicador associado a um objetivo relevante. Precisa de definição, fórmula, fonte, periodicidade e responsável. Um total de vendas sem período ou critério de cálculo dificulta a avaliação.

Para avaliar uma promoção, compare quantidade, receita e resultado bruto. Para acompanhar atendimento ao cliente, avalie também a disponibilidade dos produtos. Um único indicador pode esconder uma piora em outra dimensão.

PERGUNTA POSSÍVEL
BI é apenas um painel?
Não. O painel é uma forma de visualizar resultados de um processo que também envolve integração, preparação e análise.

SUGESTÃO PARA APRESENTAR
Antes de falar nos indicadores, leia a definição de BI em linguagem simples: usar dados para compreender o negócio e apoiar decisões. Depois mostre que as perguntas mudam conforme o objetivo: vender mais, reduzir faltas ou melhorar resultado. É por isso que a seleção de métricas vem depois da pergunta.

**Ideia central:** Uma métrica precisa de definição, objetivo e contexto.

---

## Slide 4 — Da venda registrada à ação do gestor.

**Inteligência de negócios**

Uma análise confiável começa antes do gráfico.

Na integração, dados de diferentes sistemas precisam conversar: o código de um produto no caixa deve corresponder ao usado no estoque. Na preparação, podemos padronizar datas, corrigir categorias e investigar registros duplicados. Isso evita comparar informações que parecem iguais, mas foram registradas de formas diferentes.

Depois, o histórico permite comparar períodos. A equipe usa o painel para decidir e observa o resultado da ação, fechando um ciclo de melhoria. Uma compra planejada pode reduzir a falta de produtos, mas isso deve ser medido. Agora, João Henrique vai explicar por que a gestão da informação é essencial para esse processo.

PARA APROFUNDAR
ETL significa extrair, transformar e carregar. Em ELT, a carga ocorre antes da transformação. A escolha depende da arquitetura; o ponto comum é definir regras de qualidade e integração.

Uma base operacional registra vendas do dia a dia. Uma base analítica pode reunir o histórico de diversas fontes para comparar períodos, produtos e lojas. A decisão é acompanhada para verificar se atingiu o objetivo.

PERGUNTA POSSÍVEL
Toda empresa precisa de um data warehouse?
Não. É uma arquitetura útil em determinados contextos, mas um projeto menor pode começar com uma estrutura mais simples.

SUGESTÃO PARA APRESENTAR
Na prática, integração também exige acertar identificadores: o mesmo código precisa se referir ao mesmo produto nas diferentes fontes. Documentar a transformação permite explicar de onde veio um número apresentado no painel.

**Ideia central:** A decisão fecha um ciclo: preparar, analisar, agir e medir.

---

## Slide 5 — Informação útil exige organização.

**Gestão da informação**

Pessoas, processos e tecnologia trabalham juntos.

A gestão da informação busca dar sentido e utilidade ao que a organização conhece e registra. Pessoas precisam saber suas responsabilidades; processos precisam definir como cadastrar e atualizar; a tecnologia precisa apoiar a recuperação e o compartilhamento. Se um desses elementos falhar, a informação perde valor.

Pense em dois setores que calculam vendas de maneiras diferentes: um desconta devoluções e outro não. Ambos podem executar suas fórmulas corretamente e chegar a resultados incompatíveis. Um dicionário de dados, com definições dos campos e indicadores, ajuda a criar uma linguagem comum e evita discussões sobre qual número usar.

PARA APROFUNDAR
Governança estabelece políticas, responsabilidades e critérios. A gestão executa rotinas de coleta, organização, acesso e uso. Um dicionário de dados ajuda a documentar significado, formato e origem dos campos.

Exemplo de definição: quantidade_vendida = soma das unidades registradas no período, considerando a regra adotada para cancelamentos e devoluções. Essa definição deve ser compartilhada pelos setores.

PERGUNTA POSSÍVEL
Quem é responsável pela informação?
A responsabilidade é compartilhada: a área de negócio define o significado e o uso; equipes técnicas apoiam sistemas, segurança e manutenção.

SUGESTÃO PARA APRESENTAR
Explique a diferença entre governança e gestão com um exemplo. A regra diz que nenhum produto entra sem categoria; a rotina de cadastro verifica e aplica essa exigência. A primeira estabelece a responsabilidade; a segunda executa o procedimento.

**Ideia central:** Governança define regras e quem responde por elas.

---

## Slide 6 — O ciclo de vida da informação.

**Gestão da informação**

Da coleta à revisão, cada etapa exige cuidado.

No caixa, a coleta registra produto, quantidade, data e preço. A organização classifica a venda e relaciona o produto à sua categoria. O armazenamento preserva os registros. Na utilização, a equipe consulta o histórico para planejar reposições ou avaliar o desempenho.

Com o tempo, certas informações precisam ser corrigidas, arquivadas ou descartadas conforme os critérios da organização. Manter dados sem propósito pode dificultar buscas e ampliar o esforço de proteção. A gestão acompanha todo o ciclo: não basta coletar bem e abandonar os registros depois.

PARA APROFUNDAR
Cada etapa do ciclo deve ter finalidade e critérios. Na coleta, verificar campos obrigatórios; na organização, classificar; no armazenamento, preservar; no uso, controlar acesso; na revisão, corrigir e avaliar retenção.

Um cadastro antigo pode exigir atualização sem perder o histórico das transações. Alterar o preço atual de um produto não deve reescrever o preço praticado em uma venda passada.

PERGUNTA POSSÍVEL
Guardar mais dados sempre é melhor?
Não. Sem finalidade e organização, o acúmulo aumenta a dificuldade de localizar, manter e proteger a informação.

SUGESTÃO PARA APRESENTAR
O ciclo de vida não é apenas uma sequência técnica. Em cada fase alguém precisa assumir uma responsabilidade: quem registra, quem verifica, quem autoriza acesso e quem revisa a necessidade de manter a informação. Isso evita que o registro seja abandonado depois da coleta.

**Ideia central:** A qualidade precisa acompanhar todo o ciclo de vida.

---

## Slide 7 — Qualidade começa na origem.

**Gestão da informação**

A confiança na análise depende da qualidade dos registros.

Considere uma venda registrada duas vezes. O total será maior que a venda real, e o gestor poderá interpretar que a demanda aumentou. Outro problema aparece quando o estoque usa caixas e o relatório interpreta unidades: os dados existem, mas a comparação está errada.

Para reduzir esses problemas, a organização pode exigir campos essenciais, validar formatos, usar identificadores únicos e acompanhar atualizações. Também deve investigar a origem dos erros para evitar que se repitam. A frequência necessária depende da decisão: um relatório anual e uma reposição imediata não exigem a mesma atualização.

PARA APROFUNDAR
Qualidade precisa ser observável. É possível acompanhar a proporção de campos preenchidos, a quantidade de duplicidades e o tempo desde a última atualização. Os limites aceitáveis dependem do uso.

Se 8 de 200 cadastros não têm categoria, a incompletude nesse campo é 4%. O indicador revela um problema, mas a equipe ainda precisa identificar a causa e corrigir o processo de cadastro.

PERGUNTA POSSÍVEL
Um dado válido pode estar errado?
Sim. Uma data pode respeitar o formato exigido e representar o dia incorreto. Validade e precisão são critérios diferentes.

SUGESTÃO PARA APRESENTAR
Não trate todo número negativo como erro automaticamente. Ele pode representar uma devolução. A qualidade depende de conhecer o significado do registro e a regra do processo. O exemplo de 8 cadastros sem categoria em um total de 200 mostra como transformar uma falha em indicador observável.

**Ideia central:** Corrigir a origem do erro é melhor que repetir o ajuste.

---

## Slide 8 — Proteger e conseguir recuperar.

**Gestão da informação**

Proteger os dados também significa conseguir recuperá-los.

Confidencialidade significa restringir o acesso a quem está autorizado. Integridade significa preservar a correção e a consistência dos registros. Disponibilidade significa permitir acesso quando a atividade precisa da informação. Esses objetivos se complementam: bloquear tudo protege o acesso, mas inviabiliza o trabalho.

No supermercado, permissões por função evitam expor informações desnecessárias. Registros de alterações ajudam a investigar um preço modificado. Backups e testes de restauração permitem preparar a recuperação após falhas. Agora, Pedro Mafra vai explicar como os bancos de dados dão estrutura a esses registros.

PARA APROFUNDAR
Permissões por função reduzem acessos desnecessários. Contas individuais e registros de alterações ajudam na responsabilização. Backup e teste de restauração fazem parte da preparação para incidentes.

Uma cópia de segurança não substitui o controle de acesso; o controle de acesso não substitui a recuperação. É necessário combinar medidas e definir quem age quando ocorre uma falha.

PERGUNTA POSSÍVEL
Ter backup garante recuperação?
Não por si só. É preciso verificar integridade das cópias, procedimentos e capacidade de restaurar os dados necessários.

SUGESTÃO PARA APRESENTAR
Os três princípios são complementares. Um arquivo inacessível para todos teria pouca utilidade para a operação. Um sistema aberto sem controle exporia os registros. A proteção deve permitir que cada função trabalhe com os acessos adequados e com capacidade de recuperação.

**Ideia central:** Proteger e recuperar são responsabilidades complementares.

---

## Slide 9 — A estrutura por trás da informação.

**Banco de dados**

A estrutura acompanha a finalidade dos dados.

O banco de dados é o conjunto organizado; o SGBD é o software que permite gerenciá-lo. Ele pode controlar permissões, executar consultas e aplicar restrições. A escolha depende do volume, do tipo de informação e das operações necessárias. Não há um modelo universalmente melhor.

Um sistema operacional de vendas registra muitas transações pequenas e frequentes. Uma análise histórica pode ler grandes volumes para comparar meses ou categorias. Essa diferença ajuda a entender por que organizações podem separar bases operacionais e analíticas. O importante é adequar a estrutura ao uso pretendido.

PARA APROFUNDAR
Uma venda pode exigir registrar os itens e atualizar o estoque. Uma transação agrupa operações que precisam ser tratadas como uma unidade: concluir o conjunto ou desfazê-lo quando necessário.

Se o sistema registra a venda e falha antes de atualizar o estoque, uma implementação sem tratamento adequado pode deixar dados inconsistentes. Transações ajudam a preservar as regras definidas pela aplicação.

PERGUNTA POSSÍVEL
Qual é a diferença entre banco e SGBD?
O banco é o conjunto organizado de dados; o SGBD é o software que permite defini-lo, consultá-lo e administrá-lo.

SUGESTÃO PARA APRESENTAR
Para explicar uma transação, use a venda e a baixa do estoque: essas alterações precisam ser coordenadas. Esse cuidado ajuda a evitar que uma parte da operação seja concluída e outra fique pendente, quebrando as regras da aplicação.

**Ideia central:** A estrutura deve acompanhar o tipo de uso.

---

## Slide 10 — Tabelas conectadas, registros consistentes.

**Banco de dados**

Tabelas relacionadas preservam a organização e o histórico.

Na tabela Produtos, cada produto recebe um identificador. Na tabela Itens de venda, esse identificador faz a ligação com o cadastro. Assim, o nome e a categoria do produto não precisam ser repetidos em cada linha de venda. Uma alteração no cadastro pode ser gerenciada de forma mais organizada.

A chave primária identifica o registro; a estrangeira estabelece a ligação. Com uma restrição adequada, o banco impede que um item aponte para um produto inexistente. Esse exemplo introduz a integridade referencial. O modelo apresentado é simplificado: uma aplicação completa também precisaria representar a venda, a data e o preço praticado.

PARA APROFUNDAR
A chave primária identifica cada linha. A chave estrangeira referencia um registro relacionado. Separar cadastros e movimentos reduz repetições e ajuda a preservar consistência; esse cuidado está ligado à normalização.

O preço de cadastro pode mudar. Por isso, o item de venda deve preservar o preço praticado na transação. O relatório histórico não deve recalcular a receita usando o preço atual do produto.

PERGUNTA POSSÍVEL
O que acontece com um código de produto inexistente?
Com a restrição de chave estrangeira configurada, a inserção pode ser rejeitada para preservar a integridade referencial.

SUGESTÃO PARA APRESENTAR
Peça que a turma acompanhe as duas relações. Uma venda reúne vários itens. Um produto pode aparecer em itens de muitas vendas. Guardar o preço praticado no item preserva o histórico mesmo que o cadastro seja atualizado depois.

**Ideia central:** Relações bem definidas ajudam a preservar a consistência.

---

## Slide 11 — Do banco ao painel: uma decisão em prática.

**Banco de dados**

Compare as semanas e observe volume, receita e resultado.

Na semana 1, o arroz teve 80 unidades vendidas. Na semana 2, foram 120: a diferença é 40, que dividida por 80 resulta em 50%. O feijão também aumentou, enquanto o café caiu. O painel permite enxergar esse comportamento rapidamente e levantar perguntas para investigar.

Na consulta, SELECT define o resultado, SUM soma quantidades, WHERE filtra a semana, GROUP BY reúne os registros de cada produto e ORDER BY organiza o ranking. A consulta é ilustrativa: este site usa dados locais. Antes de aumentar a compra, o gerente deve verificar o estoque disponível, a duração da promoção, a margem e o prazo do fornecedor.

PARA APROFUNDAR
O caso agora compara também preço e custo do arroz. Na semana 1, 80 unidades a R$ 25 geram R$ 2.000 de receita. Na semana 2, 120 unidades a R$ 22 geram R$ 2.640. O custo de aquisição é de R$ 18 por unidade em ambas.

Resultado bruto simplificado: receita menos custo de aquisição. Ele passa de R$ 560 para R$ 480, queda de aproximadamente 14,3%, apesar da alta de 50% nas unidades. Não representa lucro líquido: despesas e tributos não foram considerados.

PERGUNTA POSSÍVEL
Qual decisão o painel recomenda?
Ele apoia a investigação. Avaliar margem, duração da promoção, estoque e prazo de entrega é necessário antes de alterar a compra.

SUGESTÃO PARA APRESENTAR
Apresente primeiro a semana de referência, depois a promoção. Pergunte se a alta de 50% nas unidades permite concluir que o negócio ganhou mais. Em seguida revele a receita e o resultado bruto. A surpresa ajuda a explicar por que indicadores precisam ser analisados em conjunto.

**Ideia central:** O painel evidencia uma mudança; o contexto orienta a decisão.

---

## Slide 12 — A decisão começa antes do gráfico.

**Conclusão e referências**

Estrutura, confiança e análise sustentam a decisão.

A mensagem central é que uma boa decisão depende de uma cadeia inteira. O banco organiza registros; a gestão garante significado, qualidade e acesso; o BI permite analisar e acompanhar resultados. Se qualquer elo falhar, um painel pode transmitir confiança sem representar bem a realidade.

Para encerrar, pergunte à turma se uma recomendação de compra seria confiável com o estoque desatualizado. A resposta mostra por que não podemos avaliar apenas o gráfico final. As referências permitem aprofundar os conceitos; nossos números são fictícios e foram criados para demonstrar o raciocínio. Agradeçam e abram espaço para perguntas.

PARA APROFUNDAR
Um banco organizado não garante que os registros estejam corretos; dados corretos não garantem interpretação adequada. A confiança surge da combinação entre estrutura, qualidade, contexto e análise.

Uma implantação pode começar com uma pergunta de negócio bem definida, poucas fontes confiáveis e indicadores simples. Depois de medir o resultado, a equipe ajusta o processo e amplia a análise.

PERGUNTA POSSÍVEL
Qual é a principal ideia do trabalho?
Decisões melhores dependem de dados organizados, informação confiável e análise conectada a um objetivo.

SUGESTÃO PARA APRESENTAR
Encerre propondo um caminho viável: começar com uma pergunta, escolher dados confiáveis, definir métricas e acompanhar a ação. A maturidade não depende apenas do tamanho do sistema, mas da capacidade de repetir esse ciclo com consistência.

**Ideia central:** Organizar → confiar → analisar → decidir.