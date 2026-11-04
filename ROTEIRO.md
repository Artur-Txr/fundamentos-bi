# Roteiro de apresentação

12 telas · Artur Teixeira 1–4 · João Henrique 5–8 · Pedro Mafra 9–12.

## 1. Abertura

Artur Teixeira · SLIDE 1 / 12
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

Artur Teixeira · SLIDE 2 / 12
TEMPO SUGERIDO: 1 min 20 s

FALA SUGERIDA
BI significa Business Intelligence, ou Inteligência de Negócios. Ele combina dados e análise para ajudar a empresa a decidir com mais fundamento.

No supermercado fictício do trabalho, o primeiro passo é conhecer a situação. A equipe reúne as vendas, o saldo do estoque, os preços e os custos. Assim, consegue comparar o que saiu com o que ainda está disponível.

Depois, é preciso entender o resultado. Uma promoção pode aumentar as vendas, mas o preço e o custo também influenciam o valor que sobra. Por isso, a quantidade vendida não deve ser analisada sozinha.

Com essa informação, a equipe pode planejar a reposição considerando a demanda, o estoque e o prazo do fornecedor. Depois da decisão, acompanha o resultado e faz ajustes.

O objetivo é evitar a falta de produtos, reduzir o excesso de estoque e avaliar o resultado das vendas.

O QUE MOSTRAR NA TELA
Defina BI, acompanhe os três cartões e conclua com os objetivos do supermercado.

TRANSIÇÃO
Agora vamos conhecer os indicadores e aplicar um KPI ao nosso exemplo.

---

## 3. Indicadores e KPI

Artur Teixeira · SLIDE 3 / 12
TEMPO SUGERIDO: 1 min 30 s

FALA SUGERIDA
Indicadores são medidas usadas para acompanhar o desempenho. Aqui temos três: volume, receita e resultado bruto.

Volume é a quantidade vendida. No arroz, passou de 80 para 120 unidades, um aumento de 50%.

Receita é o valor das vendas. Na segunda semana, foram 120 unidades a 22 reais, totalizando 2.640 reais.

O resultado bruto desconta o custo dos produtos vendidos. Cada unidade custou 18 reais ao supermercado. O custo das 120 unidades foi de 2.160 reais. Descontando da receita, restam 480 reais. Esse valor ainda não é o lucro líquido.

KPI significa indicador-chave de desempenho. É uma medida escolhida para acompanhar um objetivo importante e verificar o avanço em relação a uma meta. No supermercado, o resultado bruto semanal pode ser usado como KPI para acompanhar o retorno das vendas.

O QUE MOSTRAR NA TELA
Defina indicador, explique os três cartões e seus cálculos e conclua com o significado de KPI no bloco destacado.

TRANSIÇÃO
A próxima tela mostra o caminho dos dados que permite calcular e acompanhar esses indicadores.

---

## 4. Da fonte à decisão

Artur Teixeira · SLIDE 4 / 12
TEMPO SUGERIDO: 2 min 15 s

FALA SUGERIDA
Os registros passam pelas cinco etapas mostradas no alto: fontes, preparação, histórico, análise e ação. No supermercado, isso significa reunir as vendas e o estoque, conferir os dados, guardar o histórico, calcular os indicadores e usar a análise para ajustar compras ou promoções.

ETL e ELT são duas formas de organizar a busca, a preparação e a carga dos dados. Extrair é buscar os registros na origem. Transformar é prepará-los, por exemplo, padronizando códigos e formatos. Carregar é colocar os dados na base de destino.

No ETL, a preparação acontece antes da carga. No supermercado, buscamos as vendas e o estoque, padronizamos os códigos dos produtos e carregamos os dados já preparados na base de análise.

No ELT, a carga vem antes da preparação. Primeiro colocamos os registros na base de destino. Depois, dentro dela, relacionamos os produtos e corrigimos os formatos. A diferença está na ordem e no local da preparação. São alternativas; não é necessário usar as duas em sequência.

Data warehouse é uma base voltada à análise, que reúne dados de diferentes fontes e mantém o histórico. No nosso exemplo, poderia guardar vendas, custos e saldos de estoque para comparar semanas e calcular os indicadores.

Assim, seria possível comparar as 80 e 120 unidades de arroz e os resultados brutos de 560 e 480 reais. Essa estrutura é um exemplo de aplicação; a apresentação usa dados fictícios e não está conectada a um data warehouse real.

O QUE MOSTRAR NA TELA
Apresente as cinco etapas e depois siga os cartões ETL, ELT e Data warehouse. Explique que ETL e ELT são alternativas e use a comparação das semanas para ilustrar o histórico.

TRANSIÇÃO
Agora João Henrique vai apresentar a gestão da informação.

---

## 5. Gestão da informação

João Henrique · SLIDE 5 / 12
TEMPO SUGERIDO: 1 min 15 s

FALA SUGERIDA
A gestão da informação reúne pessoas, processos e tecnologia. As pessoas assumem responsabilidades. Os processos definem como registrar e conferir os dados. A tecnologia ajuda a guardar, localizar e proteger esses registros.

No supermercado, uma regra pode exigir que todo produto tenha uma categoria. A governança define essa regra e quem responde por ela. A gestão aplica a regra no cadastro e corrige os registros incompletos. Um dicionário de dados ajuda os setores a usar o mesmo significado para termos como estoque disponível.

O QUE MOSTRAR NA TELA
Acompanhe os três cartões e use a categoria obrigatória como exemplo.

TRANSIÇÃO
Agora vamos acompanhar a informação ao longo do seu ciclo de vida.

---

## 6. Ciclo de vida

João Henrique · SLIDE 6 / 12
TEMPO SUGERIDO: 1 min 15 s

FALA SUGERIDA
Na coleta, o caixa registra produto, quantidade, data e preço. Na organização, os registros são relacionados ao cadastro. No armazenamento, os dados ficam guardados com controle de acesso.

Na utilização, a equipe consulta o histórico para analisar as vendas. Na revisão, decide o que precisa ser atualizado, arquivado ou descartado conforme as regras da empresa. O preço atual do arroz pode mudar no cadastro. O preço registrado numa venda antiga deve continuar sendo o da data da compra.

O QUE MOSTRAR NA TELA
Revele as etapas em ordem e termine com o exemplo do preço histórico.

TRANSIÇÃO
Com os registros organizados, podemos verificar sua qualidade.

---

## 7. Qualidade dos dados

João Henrique · SLIDE 7 / 12
TEMPO SUGERIDO: 1 min 35 s

FALA SUGERIDA
Para conferir a qualidade, verificamos se os valores estão corretos, os campos completos, os códigos consistentes e os formatos válidos. Também verificamos se os registros estão atualizados e se cada venda aparece uma única vez.

Na tabela, a venda V203, de 20 unidades, aparece duas vezes. O total fica em 140 unidades e R$ 3.080. Ao retirar a repetição, voltamos a 120 unidades e R$ 2.640. A diferença é de 20 unidades e R$ 440. Esse erro pode fazer o gerente comprar acima do necessário. Além de corrigir os dados, a equipe precisa investigar a origem da duplicidade.

O QUE MOSTRAR NA TELA
Mostre V203 no estado com duplicidade e compare com Dados corrigidos.

TRANSIÇÃO
Além de conferir os registros, precisamos protegê-los e garantir o acesso quando necessário.

---

## 8. Segurança e boas práticas

João Henrique · SLIDE 8 / 12
TEMPO SUGERIDO: 1 min 15 s

FALA SUGERIDA
Confidencialidade é permitir acesso apenas a pessoas autorizadas. No supermercado, o caixa precisa registrar vendas, e o acesso aos dados dos funcionários fica restrito a quem trabalha com eles.

Integridade é manter registros corretos e controlar alterações. Para isso, usamos contas individuais, códigos padronizados e preservamos o preço praticado em cada venda. Disponibilidade é ter a informação acessível quando necessário. As cópias de segurança e os testes de restauração ajudam a recuperar os dados após uma falha.

O QUE MOSTRAR NA TELA
Explique os três cartões e relacione cada objetivo a uma prática da loja.

TRANSIÇÃO
Agora Pedro Mafra vai mostrar como o banco de dados organiza os registros do supermercado.

---

## 9. Banco de dados e tabelas

Pedro Mafra · SLIDE 9 / 12
TEMPO SUGERIDO: 1 min 35 s

FALA SUGERIDA
No supermercado, o banco guarda os registros da operação, e o SGBD permite cadastrar, consultar e administrar esses registros. O exemplo mostra três tabelas relacionadas.

Produtos guarda o cadastro e o preço atual. Itens de venda registra o produto, a quantidade e o preço praticado. Vendas identifica a compra, com data, pagamento e status. Uma venda pode ter vários itens.

A chave primária, ou PK, identifica cada registro. A chave estrangeira, ou FK, liga o item ao produto e à venda. Guardar o preço praticado no item permite calcular a receita antiga mesmo quando o preço do cadastro muda.

O QUE MOSTRAR NA TELA
Revele Produtos, Itens de venda e Vendas. Aponte as chaves e os dois campos de preço.

TRANSIÇÃO
Com os dados organizados, podemos usar SQL para consultar as vendas.

---

## 10. Consulta SQL

Pedro Mafra · SLIDE 10 / 12
TEMPO SUGERIDO: 1 min 25 s

FALA SUGERIDA
SQL é uma linguagem usada para consultar bancos de dados. Aqui, queremos resumir as unidades vendidas na segunda semana. FROM indica a tabela usada. WHERE seleciona a semana 2. GROUP BY reúne os registros de cada produto, e SUM soma as quantidades. SELECT mostra o produto e seu total. ORDER BY organiza o resultado do maior para o menor.

O arroz aparece com 120 unidades, o feijão com 75 e o café com 35. Esse resultado compara volume. Receita e resultado bruto precisam de preço e custo. A tabela vendas_demo é uma tabela didática usada para mostrar a consulta.

O QUE MOSTRAR NA TELA
Acompanhe as cláusulas do código e confira os três resultados na tabela.

TRANSIÇÃO
Vamos comparar as duas semanas e observar como os indicadores mudaram.

---

## 11. Comparação das semanas

Pedro Mafra · SLIDE 11 / 12
TEMPO SUGERIDO: 1 min 30 s

FALA SUGERIDA
Na primeira semana, foram vendidas 80 unidades de arroz a R$ 25. Com custo de R$ 18 por unidade, a receita foi de R$ 2.000 e o resultado bruto foi de R$ 560.

Na segunda semana, o preço caiu para R$ 22 e foram vendidas 120 unidades. A receita subiu para R$ 2.640. O resultado bruto caiu para R$ 480, porque sobraram R$ 4 por unidade depois do custo, em vez de R$ 7.

Assim, o aumento de volume precisa ser analisado junto com preço e custo. O resultado bruto considera o custo dos produtos vendidos. O lucro líquido exige também os demais valores do resultado da empresa.

O QUE MOSTRAR NA TELA
Compare os cartões das semanas 1 e 2 e destaque a queda de R$ 560 para R$ 480.

TRANSIÇÃO
Para fechar, vamos reunir o que cada parte do trabalho acrescenta à decisão.

---

## 12. Conclusão

Pedro Mafra · SLIDE 12 / 12
TEMPO SUGERIDO: 1 min 5 s

FALA SUGERIDA
O banco de dados organiza os registros e preserva o histórico. A gestão da informação cuida da qualidade, das responsabilidades e do acesso. O BI usa esses dados para acompanhar o desempenho e orientar decisões.

No supermercado, vimos que vender mais unidades pode vir acompanhado de um resultado bruto menor. Para planejar as compras, a equipe precisa combinar vendas e estoque, considerar preço, custo e prazo de entrega e acompanhar o resultado depois da decisão. As referências e o QR code ficam disponíveis nesta tela. Obrigado pela atenção.

O QUE MOSTRAR NA TELA
Retome os três temas, destaque a conclusão do supermercado e mostre o QR code.
