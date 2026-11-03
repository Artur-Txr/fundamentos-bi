# Roteiro de apresentação

**15 telas.** Artur: 1–4; João Henrique: 5–10; Pedro Mafra: 11–15. Estudo de caso: supermercado fictício.

## 1. Abertura

Artur Teixeira · SLIDE 1 / 15
TEMPO SUGERIDO: 0 min 55 s

FALA SUGERIDA
Bom dia, pessoal. Eu sou Artur Teixeira e vou apresentar este trabalho com João Henrique e Pedro Mafra. O tema é fundamentos da inteligência de negócios, com foco na gestão da informação e dos bancos de dados.

Vamos acompanhar o exemplo de um supermercado fictício para mostrar como vendas e estoque podem ser organizados e analisados para apoiar decisões. A ilustração da capa representa esse caminho: as fontes geram os registros, a integração reúne os dados e a análise apresenta uma visão do negócio.

Eu apresento os conceitos de BI, os indicadores e o processo de análise. Depois, João Henrique explica a gestão da informação e Pedro Mafra apresenta os bancos de dados e a aplicação prática.

O QUE MOSTRAR NA TELA
Apresente os integrantes e a ilustração conceitual da capa.

TRANSIÇÃO
A seguir, vamos apresentar o BI aplicado ao supermercado.

---

## 2. BI na prática

Artur Teixeira · SLIDE 2 / 15
TEMPO SUGERIDO: 1 min 40 s

FALA SUGERIDA
BI é a sigla de Business Intelligence, que significa Inteligência de Negócios. Ele reúne processos, métodos e ferramentas para analisar os dados da empresa e apoiar decisões.

No nosso supermercado fictício, esse trabalho começa reunindo os registros. As vendas mostram o que saiu, o estoque mostra o que ainda está disponível e os preços e custos ajudam a avaliar o resultado. Relacionar essas fontes permite uma visão mais completa do negócio.

Depois vem a análise. A equipe compara produtos e períodos para identificar diferenças. Essas diferenças precisam ser interpretadas com contexto, porque um aumento nas vendas pode estar relacionado a uma promoção, por exemplo.

A última atividade é agir e acompanhar. A análise ajuda a planejar as compras e avaliar as promoções. Depois da ação, a empresa verifica os resultados e faz ajustes.

No nosso caso, o objetivo é comprar de acordo com a demanda, reduzir faltas e excessos e avaliar o resultado das vendas. O painel apresenta essas informações de forma visual, mas o trabalho de BI também inclui preparar os dados e acompanhar as decisões.

O QUE MOSTRAR NA TELA
Siga os cartões Reunir, Analisar e Agir e acompanhar. Conclua com a aplicação no supermercado e o papel do painel.

TRANSIÇÃO
A seguir, o exemplo do arroz vai mostrar como os registros se transformam em informação e indicadores.

---

## 3. Dados e indicadores

Artur Teixeira · SLIDE 3 / 15
TEMPO SUGERIDO: 2 min 0 s

FALA SUGERIDA
Para entender essa análise, vamos acompanhar o exemplo do arroz. O dado é o registro de um fato: foram vendidas 120 unidades na segunda semana.

Quando comparamos esse registro com as 80 unidades da primeira semana, temos uma informação: as vendas aumentaram 50%. Foram 40 unidades a mais em relação às 80 iniciais.

O conhecimento aparece na interpretação. A equipe considera a promoção, o estoque e o prazo do fornecedor antes de planejar a próxima compra. O aumento mostra uma mudança, mas não explica sua causa sozinho.

Abaixo estão os três indicadores utilizados no trabalho. O volume mostra quantas unidades foram vendidas. A receita mostra o valor das vendas: multiplicamos a quantidade pelo preço de cada item e somamos os valores. O resultado bruto desconta da receita o custo de aquisição dos produtos vendidos.

Esses indicadores precisam ser observados em conjunto. Uma promoção pode aumentar a quantidade vendida e reduzir o resultado bruto. Esse resultado simplificado também não é o lucro líquido, porque ainda existem outros valores a considerar, como as demais despesas.

Quando um indicador está ligado a um objetivo relevante, ele pode ser usado como KPI, ou indicador-chave de desempenho. Para comparar os resultados, a empresa precisa manter os mesmos critérios de cálculo.

O QUE MOSTRAR NA TELA
Acompanhe os três cartões na ordem. Depois explique os três indicadores e a mensagem de leitura em conjunto. O termo KPI aparece em Conceitos.

TRANSIÇÃO
Agora vamos acompanhar o caminho desses registros até a decisão.

---

## 4. Da fonte à decisão

Artur Teixeira · SLIDE 4 / 15
TEMPO SUGERIDO: 2 min 0 s

FALA SUGERIDA
Esta tela mostra o caminho de uma venda até a decisão em cinco etapas.

Tudo começa nas fontes. O caixa registra a venda e o controle de estoque informa o saldo disponível.

Na preparação, os registros são conferidos e relacionados. A empresa padroniza os campos, identifica o mesmo produto nas fontes e verifica duplicidades.

Depois, o histórico permite guardar e comparar os registros de diferentes semanas e produtos.

Na análise, esses registros são consultados para acompanhar volume, receita e resultado bruto, os indicadores que acabamos de apresentar.

Na ação, o supermercado utiliza a análise para planejar a compra e acompanha o resultado para fazer ajustes.

Os dois blocos abaixo apresentam termos usados nesse processo. ETL significa extrair, transformar e carregar os dados. Em ELT, a carga ocorre antes da transformação. A escolha depende da estrutura adotada. Um data warehouse é uma base voltada à análise histórica e pode reunir diferentes fontes.

Para esse caminho funcionar, a informação precisa ter regras, responsáveis e qualidade. Isso conecta os fundamentos de BI à gestão da informação.

O QUE MOSTRAR NA TELA
Revele as cinco etapas uma por vez. Depois explique os dois termos técnicos e conclua com a ligação à gestão da informação.

TRANSIÇÃO
João Henrique vai continuar explicando como pessoas, processos e tecnologia cuidam da informação ao longo desse processo.

---

## 5. Gestão da informação

João Henrique · SLIDE 5 / 15
TEMPO SUGERIDO: 1 min 20 s

FALA SUGERIDA
Agora vamos falar sobre gestão da informação. Não basta uma empresa ter muitos registros: eles precisam estar organizados, ter significado e chegar a quem precisa utilizá-los. Isso depende da combinação entre pessoas, processos e tecnologia.

As pessoas definem o uso e a responsabilidade pela informação. Os processos estabelecem como cadastrar, validar, atualizar e compartilhar. A tecnologia oferece os recursos para executar essas atividades.

Também precisamos distinguir governança e gestão. A governança define regras e responsabilidades; a gestão coloca essas regras em prática. Por exemplo: a regra pode exigir categoria em todo cadastro de produto. A rotina de cadastro verifica o preenchimento e encaminha a correção quando necessário.

Um dicionário de dados ajuda a documentar o significado dos campos e indicadores. Assim, expressões como venda líquida e estoque disponível podem ser interpretadas da mesma forma entre os setores.

O QUE MOSTRAR NA TELA
Siga os três cartões e use a regra de categoria obrigatória para explicar governança e gestão. Aponte a referência ao dicionário de dados no texto inferior.

TRANSIÇÃO
Esse cuidado acompanha a informação ao longo de todo o seu ciclo de vida.

---

## 6. Ciclo de vida

João Henrique · SLIDE 6 / 15
TEMPO SUGERIDO: 1 min 15 s

FALA SUGERIDA
A informação percorre um ciclo, desde a coleta até sua revisão. Na coleta, registramos o fato com os campos necessários, como produto, quantidade, data e preço. Na organização, classificamos e relacionamos esses registros.

O armazenamento preserva os dados e controla o acesso. Na utilização, as pessoas consultam o histórico para responder a perguntas e planejar ações. Na revisão, verificamos a necessidade de atualizar, arquivar ou descartar informações, conforme os critérios e as regras aplicáveis.

Essas etapas precisam de responsáveis. Alguém registra, alguém verifica e alguém define quem pode consultar. A qualidade e a proteção não acontecem só no fim.

Um exemplo importante é o preço: o cadastro pode ser atualizado hoje, mas isso não deve alterar o preço praticado em uma venda antiga. Cuidar da informação também significa preservar o contexto histórico.

O QUE MOSTRAR NA TELA
Percorra as cinco etapas do ciclo. Ao chegar à revisão, explique a diferença entre atualizar um cadastro e preservar uma transação passada.

TRANSIÇÃO
Mas como avaliar se esses registros são adequados para a análise? Para isso, usamos critérios de qualidade.

REVELAÇÃO POR ETAPAS
A primeira etapa aparece ao abrir a tela. Use Próxima etapa ou a seta para a direita para apresentar as partes seguintes. Mostrar tudo revela o diagrama completo. Após a última etapa, a seta avança para o slide seguinte.

---

## 7. Qualidade dos dados

João Henrique · SLIDE 7 / 15
TEMPO SUGERIDO: 1 min 25 s

FALA SUGERIDA
Qualidade dos dados significa avaliar se eles são adequados ao uso pretendido. Neste slide temos seis perguntas. Precisão verifica se o valor corresponde ao fato real. Completude avalia se os campos necessários foram preenchidos. Consistência verifica se as fontes usam definições compatíveis.

Validade pergunta se o registro respeita as regras. Unicidade verifica duplicidades. Atualidade avalia se a informação foi atualizada na frequência necessária à decisão.

Esses critérios são diferentes. Uma data pode ter formato válido, mas representar o dia errado. Da mesma forma, uma base atualizada diariamente pode servir a um relatório mensal e ainda ser insuficiente para uma decisão que exige estoque imediato.

Por isso, qualidade não é apenas um número ou um formato correto. Ela depende de entender o processo, o significado do registro e a necessidade de quem vai usar a informação.

O QUE MOSTRAR NA TELA
Explique as seis perguntas em ordem, sem ler apenas os títulos. Dê destaque à diferença entre validade e precisão e ao exemplo da frequência de atualização.

TRANSIÇÃO
Vamos ver agora como uma falha pode ser medida e como ela afeta uma decisão.

---

## 8. Do erro à consequência

João Henrique · SLIDE 8 / 15
TEMPO SUGERIDO: 1 min 30 s

FALA SUGERIDA
Agora podemos observar o efeito de uma duplicidade. A tabela reúne três registros fictícios de venda de arroz. A linha V203, de vinte unidades, aparece repetida. Se o relatório somar tudo, chegaremos a cento e quarenta unidades e a uma receita aparente de três mil e oitenta reais.

Quando removemos a repetição, o total correto é de cento e vinte unidades e dois mil seiscentos e quarenta reais. A diferença é de vinte unidades e quatrocentos e quarenta reais. Ela existe no relatório, mas não representa uma nova venda.

Uma interpretação sem conferir a base poderia fazer o gerente acreditar que a demanda foi maior e comprar acima do necessário. Corrigir o relatório resolve o resultado imediato; investigar o cadastro e a integração ajuda a evitar que o erro se repita.

O QUE MOSTRAR NA TELA
Comece em Com duplicidade. Aponte V203 nas duas linhas e os totais. Clique em Dados corrigidos e compare as quantidades e a receita.

TRANSIÇÃO
Além de corretas, as informações precisam estar protegidas e disponíveis.

---

## 9. Segurança

João Henrique · SLIDE 9 / 15
TEMPO SUGERIDO: 1 min 15 s

FALA SUGERIDA
A segurança da informação envolve três objetivos complementares: confidencialidade, integridade e disponibilidade. Confidencialidade significa que apenas pessoas autorizadas acessam a informação. Integridade busca preservar registros corretos e alterações que sigam regras. Disponibilidade significa conseguir acessar a informação quando ela é necessária.

No supermercado, o operador de caixa precisa registrar vendas, mas não precisa consultar todos os dados dos funcionários. As permissões devem acompanhar a função. Contas individuais e registros de alterações também ajudam a investigar o que aconteceu.

Esses cuidados precisam de equilíbrio. Bloquear todo acesso impede o trabalho; liberar tudo aumenta a exposição. E o controle de acesso não substitui a recuperação após uma falha.

Por isso, proteção inclui tanto limitar acessos e acompanhar alterações quanto preparar a continuidade da operação.

O QUE MOSTRAR NA TELA
Explique os três cartões e use o operador de caixa como exemplo. Mostre que acesso, alterações e recuperação são cuidados diferentes.

TRANSIÇÃO
Esses princípios precisam aparecer em práticas simples que a equipe consiga executar.

---

## 10. Boas práticas

João Henrique · SLIDE 10 / 15
TEMPO SUGERIDO: 1 min 15 s

FALA SUGERIDA
Para encerrar a parte de gestão da informação, temos quatro boas práticas. A primeira é padronizar o cadastro, com código único, campos essenciais e definições compartilhadas. Isso reduz confusões como registrar o mesmo produto com nomes diferentes.

A segunda é controlar o acesso, usando contas individuais e permissões adequadas às funções. A terceira é preservar o histórico: o preço e as condições de uma venda precisam continuar representando o que aconteceu naquele momento.

A quarta é testar a recuperação. Não basta afirmar que existe backup; é necessário verificar se as cópias e os procedimentos permitem restaurar as informações necessárias.

Para que essas práticas funcionem, a organização precisa definir quem faz cada atividade, quando ela acontece e como será acompanhada. A qualidade depende de uma rotina consistente, não de uma correção isolada.

O QUE MOSTRAR NA TELA
Percorra as quatro práticas. Termine com backup e teste de restauração para mostrar que a recuperação deve ser verificada.

TRANSIÇÃO
Agora o Pedro Mafra vai mostrar como os bancos de dados dão estrutura a esses registros e como podemos consultá-los para apoiar uma análise.

---

## 11. Banco e SGBD

Pedro Mafra · SLIDE 11 / 15
TEMPO SUGERIDO: 1 min 20 s

FALA SUGERIDA
Vamos começar diferenciando banco de dados e SGBD. O banco é o conjunto organizado de registros. O SGBD, ou sistema gerenciador de banco de dados, é o software que permite definir as estruturas, consultar, atualizar e administrar esse conjunto.

O slide também compara dois usos. Na operação, registramos o presente: vendas, itens e movimentações frequentes. Na análise, usamos o histórico para comparar períodos, produtos e resultados. A estrutura precisa atender à finalidade pretendida.

Outro conceito importante é transação. Uma venda pode exigir registrar os itens e atualizar o estoque. Essas operações precisam ser coordenadas para preservar as regras do sistema. Uma transação ajuda a tratá-las como uma unidade, concluindo ou desfazendo o conjunto quando necessário.

Assim, o banco não serve apenas para guardar registros; sua organização e os recursos do gerenciador apoiam o funcionamento confiável da aplicação.

O QUE MOSTRAR NA TELA
Compare os dois blocos Operação e Análise. Use registrar a venda e dar baixa no estoque para explicar transação.

TRANSIÇÃO
No modelo relacional, essa organização aparece em tabelas que se conectam.

---

## 12. Modelo relacional

Pedro Mafra · SLIDE 12 / 15
TEMPO SUGERIDO: 1 min 30 s

FALA SUGERIDA
Neste modelo simplificado do supermercado fictício, temos três tabelas. Vou apresentá-las na ordem em que aparecem. Primeiro, Produtos guarda o cadastro, com identificador, nome, categoria e preço atual.

Depois, Itens de venda registra o produto vendido, sua quantidade e o preço praticado. Essa tabela faz a ligação entre o produto e a venda à qual ele pertence.

Por último, Vendas registra o evento da compra, com identificador, data, forma de pagamento e status. Uma venda pode ter vários itens; um produto pode aparecer em itens de muitas vendas.

A chave primária, indicada por PK, identifica cada linha. A chave estrangeira, indicada por FK, referencia um registro relacionado. Quando a restrição está configurada, ela pode impedir que um item aponte para um produto inexistente.

Também preservamos o preço praticado no item. Se o preço atual do cadastro mudar, a receita de uma venda passada não deve ser recalculada com o novo valor. Isso mantém o histórico coerente.

O QUE MOSTRAR NA TELA
Comece pela tabela Produtos, à esquerda. Ao terminar de explicar seu cadastro, clique em Próxima etapa para revelar Itens de venda, no centro. Explique a ligação com o produto e revele Vendas, à direita. Com as três tabelas visíveis, siga as duas relações 1 para N, aponte PK e FK e compare preco_atual com preco_praticado. A ordem de revelação é Produtos → Itens de venda → Vendas.

TRANSIÇÃO
Com os registros organizados, podemos fazer uma consulta para resumir as vendas.

REVELAÇÃO POR ETAPAS
A primeira etapa aparece ao abrir a tela. Use Próxima etapa ou a seta para a direita para apresentar as partes seguintes. Mostrar tudo revela o diagrama completo. Após a última etapa, a seta avança para o slide seguinte.

---

## 13. A consulta SQL

Pedro Mafra · SLIDE 13 / 15
TEMPO SUGERIDO: 1 min 30 s

FALA SUGERIDA
A pergunta deste slide é: quais produtos tiveram mais unidades vendidas na semana dois? A consulta transforma os registros em um resumo por produto.

SELECT indica o que será exibido: o produto e a soma das quantidades. FROM indica a tabela consultada. WHERE filtra os registros da semana dois. GROUP BY reúne as linhas de cada produto. A função SUM soma as quantidades desses grupos. Por fim, ORDER BY organiza o resultado do maior para o menor total.

À direita, vemos o resultado esperado: arroz com 120 unidades, feijão com 75 e café com 35. Esse ranking responde sobre quantidade, não sobre receita ou lucro. Para avaliar esses resultados, precisaríamos de outras informações e cálculos.

A tabela vendas_demo é didática e separada do modelo anterior. A consulta é ilustrativa; o painel do site funciona com dados locais em JavaScript, sem consultar um banco real.

O QUE MOSTRAR NA TELA
Leia a pergunta antes do código. Explique cada cláusula de cima para baixo e, depois, confira as três linhas do resultado.

TRANSIÇÃO
Agora vamos transformar esse resumo em um painel e comparar as duas semanas.

---

## 14. Painel interativo

Pedro Mafra · SLIDE 14 / 15
TEMPO SUGERIDO: 1 min 50 s

FALA SUGERIDA
PARTE 1 — SEMANA DE REFERÊNCIA
Na semana um, foram vendidas 80 unidades de arroz. Cada unidade custava 25 reais, e o custo de aquisição era de 18 reais. A receita foi de 2.000 reais, calculada por 80 vezes 25. O resultado bruto simplificado foi de 560 reais: 80 unidades multiplicadas pela diferença de sete reais entre preço e custo.

PARTE 2 — SEMANA DE PROMOÇÃO
Na semana dois, o preço caiu para 22 reais e as vendas subiram para 120 unidades. Isso representa aumento de 50% no volume. A receita passou a 2.640 reais, uma alta de 32%. Mesmo assim, o resultado bruto caiu para 480 reais, porque a diferença entre preço e custo passou a ser de quatro reais por unidade.

A comparação mostra por que não podemos avaliar a promoção olhando somente para a quantidade. As despesas e os tributos não entram nesse cálculo; portanto, nenhum desses valores representa lucro líquido.

O QUE MOSTRAR NA TELA
Comece na vista Comparar. Mostre a Semana 1 no cartão esquerdo e a Semana 2 no direito. As opções de semana permitem dar foco a um período. A comparação financeira se refere apenas ao arroz; o gráfico também exibe feijão e café.

TRANSIÇÃO
A comparação mostra que vender mais não garante um resultado melhor. Vamos concluir retomando como os três fundamentos ajudam o supermercado a decidir.

---

## 15. Conclusão

Pedro Mafra · SLIDE 15 / 15
TEMPO SUGERIDO: 1 min 10 s

FALA SUGERIDA
Para concluir, os três temas deste trabalho se complementam. O banco de dados organiza os registros, as relações e o histórico. A gestão da informação cuida do significado, da qualidade, do acesso e das responsabilidades. O BI usa esses dados para analisar o desempenho e acompanhar decisões.

No estudo de caso do supermercado fictício, vimos que vender mais não significa necessariamente obter um resultado melhor. Para comprar melhor, o gerente precisa conferir vendas e estoque, analisar preço e custo, considerar validade e prazo do fornecedor e acompanhar o efeito da ação. O exemplo mostra quais informações sustentam a decisão; não determina uma quantidade de compra.

As referências estão nesta tela, e o QR code permite acessar a apresentação pelo celular, sem cadastro. Quem quiser pode consultar o material depois. Obrigado pela atenção. Podemos responder às perguntas.

O QUE MOSTRAR NA TELA
Retome os três cartões e as quatro verificações do encerramento do caso. Mostre o QR code e indique as referências antes de agradecer e abrir para perguntas.

ENCERRAMENTO
Agradecer e abrir para perguntas.