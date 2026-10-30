# Roteiro de apresentação — versão para ensaio

**Artur Teixeira, João Henrique e Pedro Mafra** · 18 slides · 6 por integrante.

As falas são sugestões: ensaiem, entendam os conceitos e adaptem as palavras ao jeito de vocês. O tempo abaixo é uma referência, não um cronômetro obrigatório. No site, abra Roteiro ou pressione N; a fala acompanha o slide selecionado. O roteiro aparece na mesma tela da apresentação.

| Integrante | Slides | Tempo sugerido |
| --- | --- | --- |
| Artur Teixeira | 1–6 | 7 min 25 s |
| João Henrique | 7–12 | 7 min 45 s |
| Pedro Mafra | 13–18 | 9 min |

**Total sugerido: 24 min 10 s**, sem contar perguntas e pausas adicionais. Confirmem o tempo disponível com o professor.

## Antes de apresentar

- Ensaiar as trocas de fala nos slides 6 e 12.
- No slide 16, começar pela Semana 1 e depois selecionar a Semana 2.
- Distinguir unidades, receita, resultado bruto e lucro líquido.
- Lembrar que o supermercado e seus números são fictícios.
- Se o tempo for menor, resumir exemplos complementares e manter conceito, exemplo central e conclusão.

---

## Slide 1 — Abertura

**Artur Teixeira · 0 min 50 s**

### Fala sugerida

Bom dia, pessoal. Eu sou Artur Teixeira e vou apresentar este trabalho com João Henrique e Pedro Mafra. Nosso tema é fundamentos da inteligência de negócios, com foco na gestão da informação e dos bancos de dados.

A ideia central é entender como os registros de uma empresa podem ajudar a tomar decisões. A ilustração da capa resume esse caminho: temos fontes como vendas e estoque, uma estrutura que organiza os dados e uma análise que ajuda a compreender o negócio.

Para tornar o assunto mais concreto, vamos acompanhar o exemplo fictício de um supermercado. Eu começo pelos conceitos de BI e pelos indicadores; João Henrique explica a gestão da informação; e Pedro Mafra apresenta os bancos de dados e a análise prática.

### O que mostrar na tela

Apresente os três integrantes. Aponte na ilustração as fontes na parte inferior, a integração no centro e o painel no alto. Ela é conceitual; não contém resultados reais.

### Transição

Vamos começar pela decisão que esse supermercado precisa tomar.

---

## Slide 2 — A pergunta de negócio

**Artur Teixeira · 1 min 10 s**

### Fala sugerida

Antes de pensar em um sistema ou em um gráfico, precisamos definir qual problema queremos resolver. No nosso exemplo, a pergunta é: como o supermercado pode comprar melhor?

O primeiro objetivo é evitar a falta de produtos. Se o cliente procura arroz e não encontra, a loja pode perder a venda. O segundo é controlar o excesso: comprar além da demanda ocupa espaço e pode provocar perdas. O terceiro é avaliar o resultado, porque vender mais unidades não significa necessariamente ganhar mais.

Esses objetivos precisam ser analisados juntos. Olhar só para o produto que mais vendeu pode levar a uma compra desnecessária, caso ainda exista bastante estoque. Por isso, precisamos combinar histórico de vendas, saldo disponível, preço, custo e prazo de entrega. A pergunta de negócio orienta quais dados serão úteis.

### O que mostrar na tela

Percorra os três cartões: falta, excesso e resultado. Relacione a pergunta de cada cartão com uma decisão do gerente.

### Transição

Para responder a essas perguntas, precisamos primeiro distinguir dado, informação e conhecimento.

---

## Slide 3 — Dados e informação

**Artur Teixeira · 1 min 10 s**

### Fala sugerida

Esses três conceitos estão relacionados, mas representam coisas diferentes. Dado é o registro de um fato. Aqui, o registro é que foram vendidas 120 unidades de arroz na semana dois.

Quando comparamos esse registro com as 80 unidades da semana um, passamos a ter uma informação: houve aumento de 40 unidades, equivalente a 50%. O cálculo usa a primeira semana como base: a diferença de 40 dividida por 80, multiplicada por cem.

O conhecimento aparece na interpretação. O gerente relaciona esse aumento com a promoção, o estoque e o prazo do fornecedor para avaliar o que fazer. Isso exige contexto e experiência.

A comparação revela uma mudança, mas não explica sua causa sozinha. Se houve uma promoção, por exemplo, o aumento pode não continuar na semana seguinte. Por isso, registrar, comparar e interpretar são etapas diferentes.

### O que mostrar na tela

Siga a ordem dos três cartões. Aponte o cálculo de 50% e explique que a base é 80, não 120.

### Transição

É justamente nessa transformação dos dados em apoio à decisão que entra o BI.

---

## Slide 4 — O que é BI

**Artur Teixeira · 1 min 20 s**

### Fala sugerida

BI é a sigla de Business Intelligence, ou Inteligência de Negócios. Podemos resumir como o uso dos dados da empresa para compreender o desempenho e tomar decisões mais bem fundamentadas.

Ele envolve três atividades que aparecem nos cartões. Primeiro, compreender o que aconteceu: comparar vendas por período, produto ou loja. Depois, investigar as diferenças para levantar hipóteses. Por fim, acompanhar se a ação adotada trouxe o resultado esperado.

É comum associar BI apenas a um painel de gráficos, mas o painel é uma forma de apresentar a análise. Antes dele, alguém precisa definir a pergunta, reunir fontes, preparar dados e estabelecer os critérios de cálculo.

Imagine que uma loja vende menos que outra. O BI ajuda a explorar estoque, mix de produtos e período, mas a diferença não prova automaticamente uma causa. A análise apoia o julgamento do gestor, que conhece o processo e precisa verificar as hipóteses.

### O que mostrar na tela

Comece pela definição destacada. Depois explique os cartões Compreender, Investigar e Acompanhar. Use o exemplo das duas lojas para conectar os textos inferiores.

### Transição

Para acompanhar esse desempenho, precisamos escolher os indicadores adequados.

---

## Slide 5 — Indicadores

**Artur Teixeira · 1 min 30 s**

### Fala sugerida

Um indicador é uma medida que ajuda a acompanhar uma situação. Quando ele está associado a um objetivo importante do negócio, pode ser usado como KPI, ou indicador-chave de desempenho.

Neste trabalho usamos três medidas. Volume indica quantas unidades foram vendidas. Receita representa o valor dessas vendas, calculado pela quantidade multiplicada pelo preço. O resultado bruto do nosso exemplo desconta o custo de aquisição dos produtos da receita.

Essas medidas não são equivalentes. Uma promoção pode aumentar a quantidade vendida, mas reduzir o valor que resta por unidade. Por isso, não basta olhar apenas para o volume. Também é importante lembrar que o resultado bruto mostrado aqui não é lucro líquido: despesas e tributos não foram considerados.

Para que o indicador seja confiável, todos precisam conhecer a fórmula, a fonte, o período e o responsável. Também é necessário combinar como serão tratadas devoluções e vendas canceladas, para evitar comparações entre números calculados de formas diferentes.

### O que mostrar na tela

Aponte cada fórmula. Enfatize a diferença entre volume, receita e resultado bruto. O exemplo com valores será demonstrado por Pedro Mafra nos slides 16 e 17.

### Transição

Agora vamos ver o caminho que os registros percorrem até se tornarem esses indicadores.

---

## Slide 6 — Da fonte à decisão

**Artur Teixeira · 1 min 25 s**

### Fala sugerida

O gráfico é o resultado de um processo que começa nas fontes. No supermercado, podemos ter registros do caixa, do cadastro de produtos e do estoque. Para analisar essas informações em conjunto, precisamos relacionar o mesmo produto nas diferentes fontes.

Na preparação, verificamos formatos, duplicidades e regras. ETL significa extrair, transformar e carregar. Em ELT, a carga ocorre antes da transformação. A ordem depende da arquitetura adotada.

Em seguida, o histórico organizado permite comparar períodos. Um data warehouse é uma base voltada à análise, que pode reunir informações de diferentes fontes. Nem todo projeto precisa de uma estrutura desse tamanho, mas a ideia é manter os dados adequados ao uso.

Depois vêm a análise, a ação e o acompanhamento. Se o gerente altera a reposição, deve verificar se a falta de produtos diminuiu. Esse ciclo precisa de informações bem gerenciadas.

### O que mostrar na tela

Percorra as cinco etapas da esquerda para a direita. Explique ETL/ELT e data warehouse sem ficar apenas na leitura das siglas.

### Transição

Até aqui vimos o que queremos fazer com os dados. Agora o João Henrique vai explicar como cuidar da informação para que esse processo funcione.

---

## Slide 7 — Gestão da informação

**João Henrique · 1 min 20 s**

### Fala sugerida

Agora vamos falar sobre gestão da informação. Não basta uma empresa ter muitos registros: eles precisam estar organizados, ter significado e chegar a quem precisa utilizá-los. Isso depende da combinação entre pessoas, processos e tecnologia.

As pessoas definem o uso e a responsabilidade pela informação. Os processos estabelecem como cadastrar, validar, atualizar e compartilhar. A tecnologia oferece os recursos para executar essas atividades.

Também precisamos distinguir governança e gestão. A governança define regras e responsabilidades; a gestão coloca essas regras em prática. Por exemplo: a regra pode exigir categoria em todo cadastro de produto. A rotina de cadastro verifica o preenchimento e encaminha a correção quando necessário.

Um dicionário de dados ajuda a documentar o significado dos campos e indicadores. Assim, expressões como venda líquida e estoque disponível podem ser interpretadas da mesma forma entre os setores.

### O que mostrar na tela

Siga os três cartões e use a regra de categoria obrigatória para explicar governança e gestão. Aponte a referência ao dicionário de dados no texto inferior.

### Transição

Esse cuidado acompanha a informação ao longo de todo o seu ciclo de vida.

---

## Slide 8 — Ciclo de vida

**João Henrique · 1 min 15 s**

### Fala sugerida

A informação percorre um ciclo, desde a coleta até sua revisão. Na coleta, registramos o fato com os campos necessários, como produto, quantidade, data e preço. Na organização, classificamos e relacionamos esses registros.

O armazenamento preserva os dados e controla o acesso. Na utilização, as pessoas consultam o histórico para responder a perguntas e planejar ações. Na revisão, verificamos a necessidade de atualizar, arquivar ou descartar informações, conforme os critérios e as regras aplicáveis.

Essas etapas precisam de responsáveis. Alguém registra, alguém verifica e alguém define quem pode consultar. A qualidade e a proteção não acontecem só no fim.

Um exemplo importante é o preço: o cadastro pode ser atualizado hoje, mas isso não deve alterar o preço praticado em uma venda antiga. Cuidar da informação também significa preservar o contexto histórico.

### O que mostrar na tela

Percorra as cinco etapas do ciclo. Ao chegar à revisão, explique a diferença entre atualizar um cadastro e preservar uma transação passada.

### Transição

Mas como avaliar se esses registros são adequados para a análise? Para isso, usamos critérios de qualidade.

---

## Slide 9 — Qualidade dos dados

**João Henrique · 1 min 25 s**

### Fala sugerida

Qualidade dos dados significa avaliar se eles são adequados ao uso pretendido. Neste slide temos seis perguntas. Precisão verifica se o valor corresponde ao fato real. Completude avalia se os campos necessários foram preenchidos. Consistência verifica se as fontes usam definições compatíveis.

Validade pergunta se o registro respeita as regras. Unicidade verifica duplicidades. Atualidade avalia se a informação foi atualizada na frequência necessária à decisão.

Esses critérios são diferentes. Uma data pode ter formato válido, mas representar o dia errado. Da mesma forma, uma base atualizada diariamente pode servir a um relatório mensal e ainda ser insuficiente para uma decisão que exige estoque imediato.

Por isso, qualidade não é apenas um número ou um formato correto. Ela depende de entender o processo, o significado do registro e a necessidade de quem vai usar a informação.

### O que mostrar na tela

Explique as seis perguntas em ordem, sem ler apenas os títulos. Dê destaque à diferença entre validade e precisão e ao exemplo da frequência de atualização.

### Transição

Vamos ver agora como uma falha pode ser medida e como ela afeta uma decisão.

---

## Slide 10 — Do erro à consequência

**João Henrique · 1 min 15 s**

### Fala sugerida

Neste exemplo fictício, oito de duzentos cadastros estão sem categoria. Isso corresponde a quatro por cento, calculados dividindo oito por duzentos e multiplicando por cem.

O indicador mostra a proporção do problema, mas não explica por que ele aconteceu. A equipe precisa seguir três passos: identificar a falha, investigar a origem e corrigir o processo. Preencher os oito campos resolve a situação imediata; melhorar a rotina de cadastro ajuda a evitar novos casos.

Outra falha possível é uma venda duplicada. Ela pode aumentar artificialmente o total de vendas, fazer a demanda parecer maior e levar a uma compra acima do necessário.

Também não devemos tratar todo número negativo como erro automaticamente. Ele pode representar uma devolução. Antes de corrigir, é preciso compreender a regra e o contexto do registro.

### O que mostrar na tela

Aponte o cálculo de 4%. Depois percorra Identificar, Investigar e Corrigir a origem. Relacione a venda duplicada à compra desnecessária.

### Transição

Além de corretas, essas informações precisam estar protegidas e disponíveis.

---

## Slide 11 — Segurança

**João Henrique · 1 min 15 s**

### Fala sugerida

A segurança da informação envolve três objetivos complementares: confidencialidade, integridade e disponibilidade. Confidencialidade significa que apenas pessoas autorizadas acessam a informação. Integridade busca preservar registros corretos e alterações que sigam regras. Disponibilidade significa conseguir acessar a informação quando ela é necessária.

No supermercado, o operador de caixa precisa registrar vendas, mas não precisa consultar todos os dados dos funcionários. As permissões devem acompanhar a função. Contas individuais e registros de alterações também ajudam a investigar o que aconteceu.

Esses cuidados precisam de equilíbrio. Bloquear todo acesso impede o trabalho; liberar tudo aumenta a exposição. E o controle de acesso não substitui a recuperação após uma falha.

Por isso, proteção inclui tanto limitar acessos e acompanhar alterações quanto preparar a continuidade da operação.

### O que mostrar na tela

Explique os três cartões e use o operador de caixa como exemplo. Mostre que acesso, alterações e recuperação são cuidados diferentes.

### Transição

Esses princípios precisam aparecer em práticas simples que a equipe consiga executar.

---

## Slide 12 — Boas práticas

**João Henrique · 1 min 15 s**

### Fala sugerida

Para encerrar a parte de gestão da informação, temos quatro boas práticas. A primeira é padronizar o cadastro, com código único, campos essenciais e definições compartilhadas. Isso reduz confusões como registrar o mesmo produto com nomes diferentes.

A segunda é controlar o acesso, usando contas individuais e permissões adequadas às funções. A terceira é preservar o histórico: o preço e as condições de uma venda precisam continuar representando o que aconteceu naquele momento.

A quarta é testar a recuperação. Não basta afirmar que existe backup; é necessário verificar se as cópias e os procedimentos permitem restaurar as informações necessárias.

Para que essas práticas funcionem, a organização precisa definir quem faz cada atividade, quando ela acontece e como será acompanhada. A qualidade depende de uma rotina consistente, não de uma correção isolada.

### O que mostrar na tela

Percorra as quatro práticas. Termine com backup e teste de restauração para mostrar que a recuperação deve ser verificada.

### Transição

Agora o Pedro Mafra vai mostrar como os bancos de dados dão estrutura a esses registros e como podemos consultá-los para apoiar uma análise.

---

## Slide 13 — Banco e SGBD

**Pedro Mafra · 1 min 20 s**

### Fala sugerida

Vamos começar diferenciando banco de dados e SGBD. O banco é o conjunto organizado de registros. O SGBD, ou sistema gerenciador de banco de dados, é o software que permite definir as estruturas, consultar, atualizar e administrar esse conjunto.

O slide também compara dois usos. Na operação, registramos o presente: vendas, itens e movimentações frequentes. Na análise, usamos o histórico para comparar períodos, produtos e resultados. A estrutura precisa atender à finalidade pretendida.

Outro conceito importante é transação. Uma venda pode exigir registrar os itens e atualizar o estoque. Essas operações precisam ser coordenadas para preservar as regras do sistema. Uma transação ajuda a tratá-las como uma unidade, concluindo ou desfazendo o conjunto quando necessário.

Assim, o banco não serve apenas para guardar registros; sua organização e os recursos do gerenciador apoiam o funcionamento confiável da aplicação.

### O que mostrar na tela

Compare os dois blocos Operação e Análise. Use registrar a venda e dar baixa no estoque para explicar transação.

### Transição

No modelo relacional, essa organização aparece em tabelas que se conectam.

---

## Slide 14 — Modelo relacional

**Pedro Mafra · 1 min 30 s**

### Fala sugerida

Neste modelo simplificado, temos três tabelas: Produtos, Itens de venda e Vendas. Produtos guarda informações do cadastro, como nome, categoria e preço atual. Vendas registra o evento, com data, forma de pagamento e status. Itens de venda conecta cada produto à venda e guarda quantidade e preço praticado.

A relação funciona assim: uma venda pode ter vários itens, e um produto pode aparecer em itens de muitas vendas. A chave primária, indicada por PK, identifica cada linha. A chave estrangeira, indicada por FK, referencia um registro relacionado.

Quando a restrição de chave estrangeira está configurada, ela pode impedir que um item aponte para um produto inexistente.

Também preservamos o preço no item da venda. Se o preço atual do cadastro mudar, a receita de uma venda passada não deve ser recalculada usando o novo valor. Essa separação reduz repetições desnecessárias e protege o histórico.

### O que mostrar na tela

Aponte as três tabelas e siga as relações 1 para N. Mostre o campo preco_praticado e diferencie-o de preco_atual.

### Transição

Com os registros organizados, podemos fazer uma consulta para resumir as vendas.

---

## Slide 15 — A consulta SQL

**Pedro Mafra · 1 min 30 s**

### Fala sugerida

A pergunta deste slide é: quais produtos tiveram mais unidades vendidas na semana dois? A consulta transforma os registros em um resumo por produto.

SELECT indica o que será exibido: o produto e a soma das quantidades. FROM indica a tabela consultada. WHERE filtra os registros da semana dois. GROUP BY reúne as linhas de cada produto. A função SUM soma as quantidades desses grupos. Por fim, ORDER BY organiza o resultado do maior para o menor total.

À direita, vemos o resultado esperado: arroz com 120 unidades, feijão com 75 e café com 35. Esse ranking responde sobre quantidade, não sobre receita ou lucro. Para avaliar esses resultados, precisaríamos de outras informações e cálculos.

A tabela vendas_demo é didática e separada do modelo anterior. A consulta é ilustrativa; o painel do site funciona com dados locais em JavaScript, sem consultar um banco real.

### O que mostrar na tela

Leia a pergunta antes do código. Explique cada cláusula de cima para baixo e, depois, confira as três linhas do resultado.

### Transição

Agora vamos transformar esse resumo em um painel e comparar as duas semanas.

---

## Slide 16 — Painel interativo

**Pedro Mafra · 1 min 50 s**

### Fala sugerida

PARTE 1 — SEMANA DE REFERÊNCIA
Na semana um, foram vendidas 80 unidades de arroz. Cada unidade custava 25 reais, e o custo de aquisição era de 18 reais. A receita foi de 2.000 reais, calculada por 80 vezes 25. O resultado bruto simplificado foi de 560 reais: 80 unidades multiplicadas pela diferença de sete reais entre preço e custo.

PARTE 2 — SEMANA DE PROMOÇÃO
Na semana dois, o preço caiu para 22 reais e as vendas subiram para 120 unidades. Isso representa aumento de 50% no volume. A receita passou a 2.640 reais, uma alta de 32%. Mesmo assim, o resultado bruto caiu para 480 reais, porque a diferença entre preço e custo passou a ser de quatro reais por unidade.

A comparação mostra por que não podemos avaliar a promoção olhando somente para a quantidade. As despesas e os tributos não entram nesse cálculo; portanto, nenhum desses valores representa lucro líquido.

### O que mostrar na tela

Antes de começar, selecione “Semana 1 · referência”. Mostre quantidade, preço, receita e resultado bruto. Ao iniciar a Parte 2, mude para “Semana 2 · promoção” e mostre os valores atualizados. A comparação financeira se refere apenas ao arroz; o gráfico também exibe feijão e café.

### Transição

No próximo slide, vamos reunir as três variações e discutir como interpretar esse resultado.

---

## Slide 17 — Da análise à decisão

**Pedro Mafra · 1 min 40 s**

### Fala sugerida

Aqui temos o resumo da promoção do arroz. A quantidade vendida aumentou 50%, a receita aumentou 32% e o resultado bruto simplificado caiu aproximadamente 14,3%. O custo por unidade ficou igual, mas o preço de venda caiu.

Por isso, o aumento de volume não comprova sozinho o sucesso da promoção. Ela pode ter outros objetivos, como girar estoque ou atrair clientes, mas os dados deste caso não demonstram esses outros efeitos. Precisamos comparar o resultado com o objetivo definido.

Uma conta adicional ajuda a visualizar a diferença: a 22 reais de preço e 18 reais de custo, restam quatro reais por unidade antes das despesas e tributos. Para igualar os 560 reais de resultado bruto da primeira semana, seriam necessárias 140 unidades.

Antes de alterar a compra, o gestor também precisa verificar estoque, duração da promoção, validade e prazo do fornecedor. A ação escolhida deve ser acompanhada para avaliar seu efeito.

### O que mostrar na tela

Percorra os três percentuais. Depois aponte os quatro fatores antes da compra. Na conta das 140 unidades, explique 560 ÷ 4 = 140; trata-se de igualdade de resultado bruto, não de lucro líquido ou de ponto de equilíbrio completo da empresa.

### Transição

Esse exemplo reúne os três fundamentos que estudamos. Vamos fechar retomando essa conexão.

---

## Slide 18 — Conclusão

**Pedro Mafra · 1 min 10 s**

### Fala sugerida

Para concluir, os três temas deste trabalho se complementam. O banco de dados organiza os registros, as relações e o histórico. A gestão da informação cuida do significado, da qualidade, do acesso e das responsabilidades. O BI usa esses dados para analisar o desempenho e acompanhar decisões.

No exemplo do supermercado, vimos que uma informação isolada pode levar a uma interpretação incompleta. Vender mais não significa necessariamente obter um resultado melhor, e um painel só será útil se os registros e os critérios forem confiáveis.

A pergunta final é: com o estoque desatualizado, vocês confiariam na recomendação de compra? Isso mostra que a confiança precisa existir desde o registro até a análise.

Uma empresa pode começar com uma pergunta delimitada, fontes confiáveis e indicadores bem definidos. As referências estão disponíveis nesta tela para quem quiser consultar. Obrigado pela atenção. Podemos responder às perguntas.

### O que mostrar na tela

Retome os três cartões. Faça a pergunta final e dê alguns segundos para a turma pensar. Se necessário, abra as referências. Não há transição para outro slide.

### Encerramento

Encerramento: agradecer e abrir para perguntas.