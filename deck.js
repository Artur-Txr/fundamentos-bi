const deck = [
  {
    "id": 1,
    "label": "Abertura",
    "title": "Dados que orientam.<br><em>Decisões que transformam.</em>",
    "intro": "Fundamentos da inteligência de negócios: gestão da informação e de banco de dados.",
    "body": "<div class=\"cover-layout\"><div class=\"cover-copy\"><div class=\"cover-tag\">INFORMAÇÃO · ESTRATÉGIA · TECNOLOGIA</div><h1>Dados que orientam.<br><em>Decisões que transformam.</em></h1><p class=\"cover-subtitle\">Fundamentos da inteligência de negócios:<br>gestão da informação e de banco de dados.</p><div class=\"cover-people\" id=\"cover-people\"></div><div class=\"cover-date\">04 NOVEMBRO 2026 <span>APRESENTAÇÃO ACADÊMICA</span></div></div><div class=\"cover-art\"><div class=\"art-top\"><span>DA ORIGEM AO INSIGHT</span><i>VISÃO CONCEITUAL</i></div><div class=\"data-orbit\"><div class=\"orbit o1\"></div><div class=\"orbit o2\"></div><div class=\"orbit o3\"></div><div class=\"core\">BI<small>BUSINESS INTELLIGENCE</small></div><span class=\"node n1\">VENDAS</span><span class=\"node n2\">ESTOQUE</span><span class=\"node n3\">CLIENTES</span><span class=\"node n4\">CUSTOS</span></div><div class=\"art-bottom\"><span>REGISTRAR</span><b>→</b><span>INTERPRETAR</span><b>→</b><span>DECIDIR</span></div></div></div>",
    "speaker": 0,
    "chapter": "Inteligência de negócios",
    "notes": "Imagine um gerente que precisa decidir o que comprar para a próxima semana. Se ele olhar apenas para a prateleira, terá uma visão limitada. Se reunir vendas, estoque e prazo dos fornecedores, poderá justificar melhor sua escolha. É essa passagem de registros dispersos para uma visão organizada que guia nossa apresentação.\n\nNossa exposição está dividida em três partes: primeiro, os fundamentos da inteligência de negócios; depois, a gestão da informação; por fim, os bancos de dados e uma demonstração prática. Não estamos estudando apenas um programa de computador, mas todo o caminho que torna uma decisão mais bem informada.\n\nPARA APROFUNDAR\nInvestigar como dados podem apoiar decisões gerenciais. Ao final, devemos conseguir diferenciar dados e informação, reconhecer critérios de qualidade e explicar como tabelas e consultas alimentam uma análise.\n\nO trabalho segue um único caso: um supermercado precisa planejar compras sem provocar falta de produtos nem excesso de estoque. A decisão depende de vendas, saldo disponível, preço, custo e prazo de entrega.\n\nPERGUNTA POSSÍVEL\nPor que usar um mesmo caso?\nPorque ele mostra como os três temas se conectam em uma situação concreta.\n\nSUGESTÃO PARA APRESENTAR\nUma forma de abrir a apresentação é perguntar: “Como vocês decidiriam quais produtos comprar para uma loja?” Ouça uma resposta e conecte com a necessidade de dados. Nosso objetivo é explicar o raciocínio e mostrar que o sistema ajuda, mas a decisão continua dependendo das pessoas.",
    "reference": [
      "IBM · Inteligência de negócios",
      "https://www.ibm.com/think/topics/business-intelligence"
    ]
  },
  {
    "id": 2,
    "label": "A pergunta de negócio",
    "title": "Comprar melhor começa<br>com a pergunta certa.",
    "intro": "Um supermercado precisa equilibrar disponibilidade, custo e desperdício.",
    "body": "<div class=\"cards cols-3\"><article><span class=\"card-index\">01</span><h3>Evitar a falta</h3><p>Produtos indisponíveis podem comprometer as vendas e a experiência do cliente.</p><div class=\"card-foot\">O que precisa ser reposto?</div></article><article><span class=\"card-index\">02</span><h3>Controlar o excesso</h3><p>Compras acima da demanda ocupam espaço e podem gerar perdas.</p><div class=\"card-foot\">Quanto faz sentido comprar?</div></article><article><span class=\"card-index\">03</span><h3>Avaliar o resultado</h3><p>Vender mais unidades não garante um resultado melhor.</p><div class=\"card-foot\">A promoção compensou?</div></article></div><div class=\"insight\"><span>NOSSO CASO</span><p>Vamos conectar registros de vendas, estoque e preço para compreender uma decisão de compra.</p></div>",
    "speaker": 0,
    "chapter": "Inteligência de negócios",
    "notes": "Nosso ponto de partida é uma pergunta de negócio: como comprar melhor? Explique que uma compra pequena demais pode deixar produtos em falta; uma compra excessiva pode provocar desperdício. As três perguntas deste slide serão respondidas em conjunto, pois disponibilidade, volume e resultado representam objetivos diferentes.\n\nO exemplo é fictício e será usado para conectar as três partes do trabalho. Antes de escolher qualquer ferramenta, precisamos definir a decisão que queremos melhorar. Dados de vendas, estoque, custo e prazo podem contribuir, mas precisam ser confiáveis e comparáveis.",
    "reference": [
      "IBM · Inteligência de negócios",
      "https://www.ibm.com/think/topics/business-intelligence"
    ]
  },
  {
    "id": 3,
    "label": "Dados e informação",
    "title": "O número é o começo.<br>O contexto dá significado.",
    "intro": "Dado, informação e conhecimento representam níveis diferentes de compreensão.",
    "body": "<div class=\"cards cols-3\"><article><span class=\"card-index\">01</span><h3>Dado</h3><p>120 unidades de arroz vendidas na semana 2.</p><div class=\"card-foot\">Registro de um fato.</div></article><article><span class=\"card-index\">02</span><h3>Informação</h3><p>Na semana 1 foram 80 unidades. O aumento foi de 50%.</p><div class=\"card-foot\">Registro organizado e comparado.</div></article><article><span class=\"card-index\">03</span><h3>Conhecimento</h3><p>A equipe interpreta promoção, estoque e prazo do fornecedor antes de decidir.</p><div class=\"card-foot\">Contexto, experiência e julgamento.</div></article></div><div class=\"insight\"><span>O CÁLCULO</span><p>(120 − 80) ÷ 80 × 100 = 50%. O percentual usa a primeira semana como referência.</p></div>",
    "speaker": 0,
    "chapter": "Inteligência de negócios",
    "notes": "Podemos pensar em três perguntas: o que foi registrado, o que isso significa e o que podemos fazer com esse entendimento? O número 120, sem produto, período ou unidade de medida, informa muito pouco. Quando sabemos que representa vendas de arroz em uma semana e comparamos com outra semana, ele se torna útil.\n\nMesmo assim, a interpretação depende do contexto. Uma promoção pode explicar o crescimento, e a semana seguinte pode voltar ao normal. Por isso, conhecimento envolve relacionar o resultado com a experiência e com outras informações. Mais dados não substituem uma pergunta bem formulada.\n\nPARA APROFUNDAR\nPara comparar números, precisamos fixar produto, período e unidade de medida. Um crescimento de vendas pode refletir uma promoção, uma mudança de preço ou uma alteração no cadastro; o número sozinho não identifica a causa.\n\nAumento absoluto: 120 − 80 = 40 unidades. Aumento relativo: 40 ÷ 80 × 100 = 50%. O percentual usa a primeira semana como base. Uma alta de 50% seguida de uma queda de 50% não retorna ao valor inicial.\n\nPERGUNTA POSSÍVEL\nInformação e conhecimento são a mesma coisa?\nNão. Informação organiza e contextualiza registros; conhecimento envolve interpretação, experiência e aplicação.\n\nSUGESTÃO PARA APRESENTAR\nPara exemplificar fora do supermercado, pense nas notas de uma turma. Uma nota é um dado; a média por disciplina é uma informação; identificar dificuldades e planejar uma revisão usa essa informação para orientar uma ação. O exemplo mostra que o conceito também aparece fora das empresas.",
    "reference": [
      "IBM · Inteligência de negócios",
      "https://www.ibm.com/think/topics/business-intelligence"
    ]
  },
  {
    "id": 4,
    "label": "O que é BI",
    "title": "Business Intelligence.<br>Inteligência de negócios.",
    "intro": "Processos, métodos e ferramentas que transformam dados em compreensão para apoiar decisões.",
    "body": "<div class=\"definition\"><span>EM UMA FRASE</span><p>Usar os dados da empresa para entender o desempenho e decidir com mais fundamento.</p></div><div class=\"cards cols-3\"><article><span class=\"card-index\">01</span><h3>Compreender</h3><p>O que aconteceu? Compare produtos, períodos e unidades.</p></article><article><span class=\"card-index\">02</span><h3>Investigar</h3><p>Onde estão as diferenças? Explore detalhes e levante hipóteses.</p></article><article><span class=\"card-index\">03</span><h3>Acompanhar</h3><p>A decisão trouxe o resultado esperado? Observe os indicadores.</p></article></div><div class=\"insight\"><span>ALÉM DO DASHBOARD</span><p>O painel apresenta resultados. O BI inclui também definir perguntas, preparar dados, analisar e acompanhar.</p></div>",
    "speaker": 0,
    "chapter": "Inteligência de negócios",
    "notes": "Um gestor pode perguntar quais produtos estão vendendo menos, em qual unidade ocorreu uma queda ou se a meta mensal foi atingida. O BI organiza o acesso a essas respostas. Um dashboard é um painel que reúne indicadores; já o processo de BI inclui definir o problema, preparar os dados, analisar e acompanhar o que aconteceu depois da decisão.\n\nTambém precisamos definir os indicadores com cuidado. Faturamento mostra o valor das vendas; lucro depende também de custos e despesas. Uma empresa pode vender mais e ganhar menos. O indicador deve refletir o objetivo que se deseja avaliar, evitando conclusões baseadas em um único número.\n\nPARA APROFUNDAR\nUm KPI é um indicador associado a um objetivo relevante. Precisa de definição, fórmula, fonte, periodicidade e responsável. Um total de vendas sem período ou critério de cálculo dificulta a avaliação.\n\nPara avaliar uma promoção, compare quantidade, receita e resultado bruto. Para acompanhar atendimento ao cliente, avalie também a disponibilidade dos produtos. Um único indicador pode esconder uma piora em outra dimensão.\n\nPERGUNTA POSSÍVEL\nBI é apenas um painel?\nNão. O painel é uma forma de visualizar resultados de um processo que também envolve integração, preparação e análise.\n\nSUGESTÃO PARA APRESENTAR\nAntes de falar nos indicadores, leia a definição de BI em linguagem simples: usar dados para compreender o negócio e apoiar decisões. Depois mostre que as perguntas mudam conforme o objetivo: vender mais, reduzir faltas ou melhorar resultado. É por isso que a seleção de métricas vem depois da pergunta.",
    "reference": [
      "IBM · Inteligência de negócios",
      "https://www.ibm.com/think/topics/business-intelligence"
    ]
  },
  {
    "id": 5,
    "label": "Indicadores",
    "title": "Uma decisão precisa<br>de mais de um indicador.",
    "intro": "A seleção das métricas depende do objetivo que a empresa quer avaliar.",
    "body": "<div class=\"cards cols-3\"><article><span class=\"card-index\">01</span><h3>Volume</h3><p>Quantas unidades foram vendidas?</p><div class=\"card-foot\">Σ quantidades</div></article><article><span class=\"card-index\">02</span><h3>Receita</h3><p>Qual foi o valor das vendas?</p><div class=\"card-foot\">Σ (quantidade × preço)</div></article><article><span class=\"card-index\">03</span><h3>Resultado bruto</h3><p>Quanto resta após o custo de aquisição dos produtos?</p><div class=\"card-foot\">receita − custo de aquisição</div></article></div><div class=\"insight\"><span>KPI</span><p>Indicador associado a um objetivo relevante. Precisa de fórmula, fonte, período e responsável. Resultado bruto não é lucro líquido.</p></div>",
    "speaker": 0,
    "chapter": "Inteligência de negócios",
    "notes": "Um indicador precisa ter uma pergunta por trás. Volume mede unidades, receita mede o valor vendido e resultado bruto, neste caso simplificado, desconta o custo de aquisição dos produtos. Nenhum desses números representa sozinho o lucro líquido.\n\nApresente as fórmulas e explique que uma promoção pode aumentar a quantidade, mas reduzir o valor que resta por unidade. Um KPI é um indicador associado a um objetivo relevante. Definir fórmula, fonte, período e responsável permite que diferentes pessoas interpretem o mesmo resultado de maneira consistente.",
    "reference": [
      "IBM · Inteligência de negócios",
      "https://www.ibm.com/think/topics/business-intelligence"
    ]
  },
  {
    "id": 6,
    "label": "Da fonte à decisão",
    "title": "Antes do gráfico,<br>existe um processo.",
    "intro": "Fontes integradas e critérios consistentes permitem comparar informações.",
    "body": "<div class=\"pipeline\"><article><b>01</b><h3>Fontes</h3><p>Caixa, cadastro e estoque.</p></article><article><b>02</b><h3>Preparação</h3><p>Padronizar, validar e integrar.</p></article><article><b>03</b><h3>Histórico</h3><p>Organizar a base analítica.</p></article><article><b>04</b><h3>Análise</h3><p>Consultar e comparar.</p></article><article><b>05</b><h3>Ação</h3><p>Decidir, medir e ajustar.</p></article></div><div class=\"split-notes\"><div><h3>ETL / ELT</h3><p>Fluxos de extração, preparação e carga. A ordem da transformação depende da arquitetura.</p></div><div><h3>Data warehouse</h3><p>Base voltada à análise histórica, que pode integrar diferentes fontes.</p></div></div>",
    "speaker": 0,
    "chapter": "Inteligência de negócios",
    "notes": "Na integração, dados de diferentes sistemas precisam conversar: o código de um produto no caixa deve corresponder ao usado no estoque. Na preparação, podemos padronizar datas, corrigir categorias e investigar registros duplicados. Isso evita comparar informações que parecem iguais, mas foram registradas de formas diferentes.\n\nDepois, o histórico permite comparar períodos. A equipe usa o painel para decidir e observa o resultado da ação, fechando um ciclo de melhoria. Uma compra planejada pode reduzir a falta de produtos, mas isso deve ser medido. Agora, João Henrique vai explicar por que a gestão da informação é essencial para esse processo.\n\nPARA APROFUNDAR\nETL significa extrair, transformar e carregar. Em ELT, a carga ocorre antes da transformação. A escolha depende da arquitetura; o ponto comum é definir regras de qualidade e integração.\n\nUma base operacional registra vendas do dia a dia. Uma base analítica pode reunir o histórico de diversas fontes para comparar períodos, produtos e lojas. A decisão é acompanhada para verificar se atingiu o objetivo.\n\nPERGUNTA POSSÍVEL\nToda empresa precisa de um data warehouse?\nNão. É uma arquitetura útil em determinados contextos, mas um projeto menor pode começar com uma estrutura mais simples.\n\nSUGESTÃO PARA APRESENTAR\nNa prática, integração também exige acertar identificadores: o mesmo código precisa se referir ao mesmo produto nas diferentes fontes. Documentar a transformação permite explicar de onde veio um número apresentado no painel.",
    "reference": [
      "IBM · Inteligência de negócios",
      "https://www.ibm.com/think/topics/business-intelligence"
    ]
  },
  {
    "id": 7,
    "label": "Gestão da informação",
    "title": "Informação útil precisa<br>de responsabilidade.",
    "intro": "Pessoas, processos e tecnologia sustentam a organização da informação.",
    "body": "<div class=\"cards cols-3\"><article><span class=\"card-index\">01</span><h3>Pessoas</h3><p>Definem significado, uso e responsabilidade pelos registros.</p><div class=\"card-foot\">Quem responde pela informação?</div></article><article><span class=\"card-index\">02</span><h3>Processos</h3><p>Orientam cadastro, validação, atualização e compartilhamento.</p><div class=\"card-foot\">Como a informação é cuidada?</div></article><article><span class=\"card-index\">03</span><h3>Tecnologia</h3><p>Permite registrar, localizar, proteger e analisar.</p><div class=\"card-foot\">Quais recursos apoiam a rotina?</div></article></div><div class=\"insight\"><span>GOVERNANÇA + GESTÃO</span><p>A governança define regras e responsabilidades. A gestão aplica essas regras nas atividades do dia a dia.</p></div>",
    "speaker": 1,
    "chapter": "Gestão da informação",
    "notes": "A gestão da informação busca dar sentido e utilidade ao que a organização conhece e registra. Pessoas precisam saber suas responsabilidades; processos precisam definir como cadastrar e atualizar; a tecnologia precisa apoiar a recuperação e o compartilhamento. Se um desses elementos falhar, a informação perde valor.\n\nPense em dois setores que calculam vendas de maneiras diferentes: um desconta devoluções e outro não. Ambos podem executar suas fórmulas corretamente e chegar a resultados incompatíveis. Um dicionário de dados, com definições dos campos e indicadores, ajuda a criar uma linguagem comum e evita discussões sobre qual número usar.\n\nPARA APROFUNDAR\nGovernança estabelece políticas, responsabilidades e critérios. A gestão executa rotinas de coleta, organização, acesso e uso. Um dicionário de dados ajuda a documentar significado, formato e origem dos campos.\n\nExemplo de definição: quantidade_vendida = soma das unidades registradas no período, considerando a regra adotada para cancelamentos e devoluções. Essa definição deve ser compartilhada pelos setores.\n\nPERGUNTA POSSÍVEL\nQuem é responsável pela informação?\nA responsabilidade é compartilhada: a área de negócio define o significado e o uso; equipes técnicas apoiam sistemas, segurança e manutenção.\n\nSUGESTÃO PARA APRESENTAR\nExplique a diferença entre governança e gestão com um exemplo. A regra diz que nenhum produto entra sem categoria; a rotina de cadastro verifica e aplica essa exigência. A primeira estabelece a responsabilidade; a segunda executa o procedimento.",
    "reference": [
      "IBM · Gestão de dados",
      "https://www.ibm.com/think/topics/data-management"
    ]
  },
  {
    "id": 8,
    "label": "Ciclo de vida",
    "title": "A informação percorre<br>um ciclo de cuidado.",
    "intro": "A qualidade e a proteção acompanham o registro desde a coleta até a revisão.",
    "body": "<div class=\"pipeline\"><article><b>01</b><h3>Coletar</h3><p>Registrar produto, quantidade, data e preço.</p></article><article><b>02</b><h3>Organizar</h3><p>Classificar e relacionar os registros.</p></article><article><b>03</b><h3>Armazenar</h3><p>Preservar o histórico e controlar acesso.</p></article><article><b>04</b><h3>Utilizar</h3><p>Consultar para responder a uma pergunta.</p></article><article><b>05</b><h3>Revisar</h3><p>Atualizar, arquivar ou descartar conforme critérios.</p></article></div><div class=\"insight\"><span>EXEMPLO</span><p>O preço atual de um produto pode mudar. O preço praticado em uma venda passada deve continuar preservado.</p></div>",
    "speaker": 1,
    "chapter": "Gestão da informação",
    "notes": "No caixa, a coleta registra produto, quantidade, data e preço. A organização classifica a venda e relaciona o produto à sua categoria. O armazenamento preserva os registros. Na utilização, a equipe consulta o histórico para planejar reposições ou avaliar o desempenho.\n\nCom o tempo, certas informações precisam ser corrigidas, arquivadas ou descartadas conforme os critérios da organização. Manter dados sem propósito pode dificultar buscas e ampliar o esforço de proteção. A gestão acompanha todo o ciclo: não basta coletar bem e abandonar os registros depois.\n\nPARA APROFUNDAR\nCada etapa do ciclo deve ter finalidade e critérios. Na coleta, verificar campos obrigatórios; na organização, classificar; no armazenamento, preservar; no uso, controlar acesso; na revisão, corrigir e avaliar retenção.\n\nUm cadastro antigo pode exigir atualização sem perder o histórico das transações. Alterar o preço atual de um produto não deve reescrever o preço praticado em uma venda passada.\n\nPERGUNTA POSSÍVEL\nGuardar mais dados sempre é melhor?\nNão. Sem finalidade e organização, o acúmulo aumenta a dificuldade de localizar, manter e proteger a informação.\n\nSUGESTÃO PARA APRESENTAR\nO ciclo de vida não é apenas uma sequência técnica. Em cada fase alguém precisa assumir uma responsabilidade: quem registra, quem verifica, quem autoriza acesso e quem revisa a necessidade de manter a informação. Isso evita que o registro seja abandonado depois da coleta.",
    "reference": [
      "IBM · Gestão de dados",
      "https://www.ibm.com/think/topics/data-management"
    ]
  },
  {
    "id": 9,
    "label": "Qualidade dos dados",
    "title": "Confiar no resultado<br>começa na origem.",
    "intro": "Seis perguntas ajudam a avaliar se os dados atendem ao uso pretendido.",
    "body": "<div class=\"quality-grid\"><article><span>01</span><div><h3>Precisão</h3><p>O valor corresponde ao fato real?</p></div></article><article><span>02</span><div><h3>Completude</h3><p>Os campos necessários estão preenchidos?</p></div></article><article><span>03</span><div><h3>Consistência</h3><p>As fontes usam as mesmas definições?</p></div></article><article><span>04</span><div><h3>Validade</h3><p>O registro respeita as regras?</p></div></article><article><span>05</span><div><h3>Unicidade</h3><p>Há registros duplicados?</p></div></article><article><span>06</span><div><h3>Atualidade</h3><p>A atualização atende à decisão?</p></div></article></div><div class=\"insight\"><span>ATENÇÃO</span><p>Um registro pode ter formato válido e estar incorreto. Qualidade depende de conhecer o significado dos dados.</p></div>",
    "speaker": 1,
    "chapter": "Gestão da informação",
    "notes": "Considere uma venda registrada duas vezes. O total será maior que a venda real, e o gestor poderá interpretar que a demanda aumentou. Outro problema aparece quando o estoque usa caixas e o relatório interpreta unidades: os dados existem, mas a comparação está errada.\n\nPara reduzir esses problemas, a organização pode exigir campos essenciais, validar formatos, usar identificadores únicos e acompanhar atualizações. Também deve investigar a origem dos erros para evitar que se repitam. A frequência necessária depende da decisão: um relatório anual e uma reposição imediata não exigem a mesma atualização.\n\nPARA APROFUNDAR\nQualidade precisa ser observável. É possível acompanhar a proporção de campos preenchidos, a quantidade de duplicidades e o tempo desde a última atualização. Os limites aceitáveis dependem do uso.\n\nSe 8 de 200 cadastros não têm categoria, a incompletude nesse campo é 4%. O indicador revela um problema, mas a equipe ainda precisa identificar a causa e corrigir o processo de cadastro.\n\nPERGUNTA POSSÍVEL\nUm dado válido pode estar errado?\nSim. Uma data pode respeitar o formato exigido e representar o dia incorreto. Validade e precisão são critérios diferentes.\n\nSUGESTÃO PARA APRESENTAR\nNão trate todo número negativo como erro automaticamente. Ele pode representar uma devolução. A qualidade depende de conhecer o significado do registro e a regra do processo. O exemplo de 8 cadastros sem categoria em um total de 200 mostra como transformar uma falha em indicador observável.",
    "reference": [
      "IBM · Qualidade de dados",
      "https://www.ibm.com/think/topics/data-quality"
    ]
  },
  {
    "id": 10,
    "label": "Do erro à consequência",
    "title": "Um pequeno erro.<br>Uma decisão distorcida.",
    "intro": "Uma venda duplicada pode superestimar a demanda e levar à compra acima do necessário.",
    "body": "<div class=\"case-split\"><div class=\"number-feature\"><span>EXEMPLO FICTÍCIO</span><strong>4<em>%</em></strong><p>8 de 200 cadastros estão sem categoria.</p><small>8 ÷ 200 × 100 = 4%</small></div><div class=\"error-list\"><article><b>01</b><div><h3>Identificar</h3><p>Monitorar campos vazios, duplicidades e atrasos de atualização.</p></div></article><article><b>02</b><div><h3>Investigar</h3><p>Entender se a falha vem do cadastro, da integração ou da regra.</p></div></article><article><b>03</b><div><h3>Corrigir a origem</h3><p>Melhorar o processo para evitar que o mesmo erro se repita.</p></div></article></div></div><div class=\"insight\"><span>CONTEXTO IMPORTA</span><p>Uma quantidade negativa pode representar devolução. A regra deve distinguir esse evento de uma venda.</p></div>",
    "speaker": 1,
    "chapter": "Gestão da informação",
    "notes": "Aqui mostramos uma forma de tornar a qualidade observável. Se oito de duzentos cadastros estão sem categoria, a incompletude nesse campo é de quatro por cento. O número identifica a dimensão do problema, mas não revela sozinho a causa.\n\nO processo precisa identificar o problema, investigar a origem e corrigir a rotina que o produziu. Uma venda duplicada pode aumentar artificialmente a demanda aparente. Não classifique todo número negativo como erro: ele pode representar uma devolução, dependendo das regras adotadas. A qualidade depende do contexto e do significado do registro.",
    "reference": [
      "IBM · Qualidade de dados",
      "https://www.ibm.com/think/topics/data-quality"
    ]
  },
  {
    "id": 11,
    "label": "Segurança",
    "title": "Proteger sem impedir<br>o trabalho das pessoas.",
    "intro": "Segurança reúne objetivos complementares para preservar o uso confiável da informação.",
    "body": "<div class=\"cards cols-3\"><article><span class=\"card-index\">01</span><h3>Confidencialidade</h3><p>Somente pessoas autorizadas acessam a informação.</p><div class=\"card-foot\">Permissões por função.</div></article><article><span class=\"card-index\">02</span><h3>Integridade</h3><p>Alterações seguem regras e podem ser verificadas.</p><div class=\"card-foot\">Validações e histórico de mudanças.</div></article><article><span class=\"card-index\">03</span><h3>Disponibilidade</h3><p>A informação pode ser acessada quando necessária.</p><div class=\"card-foot\">Continuidade e recuperação.</div></article></div><div class=\"insight\"><span>EXEMPLO</span><p>O operador de caixa precisa registrar vendas, mas não precisa acessar todos os dados dos funcionários.</p></div>",
    "speaker": 1,
    "chapter": "Gestão da informação",
    "notes": "Confidencialidade significa restringir o acesso a quem está autorizado. Integridade significa preservar a correção e a consistência dos registros. Disponibilidade significa permitir acesso quando a atividade precisa da informação. Esses objetivos se complementam: bloquear tudo protege o acesso, mas inviabiliza o trabalho.\n\nNo supermercado, permissões por função evitam expor informações desnecessárias. Registros de alterações ajudam a investigar um preço modificado. Backups e testes de restauração permitem preparar a recuperação após falhas. Agora, Pedro Mafra vai explicar como os bancos de dados dão estrutura a esses registros.\n\nPARA APROFUNDAR\nPermissões por função reduzem acessos desnecessários. Contas individuais e registros de alterações ajudam na responsabilização. Backup e teste de restauração fazem parte da preparação para incidentes.\n\nUma cópia de segurança não substitui o controle de acesso; o controle de acesso não substitui a recuperação. É necessário combinar medidas e definir quem age quando ocorre uma falha.\n\nPERGUNTA POSSÍVEL\nTer backup garante recuperação?\nNão por si só. É preciso verificar integridade das cópias, procedimentos e capacidade de restaurar os dados necessários.\n\nSUGESTÃO PARA APRESENTAR\nOs três princípios são complementares. Um arquivo inacessível para todos teria pouca utilidade para a operação. Um sistema aberto sem controle exporia os registros. A proteção deve permitir que cada função trabalhe com os acessos adequados e com capacidade de recuperação.",
    "reference": [
      "IBM · Gestão de dados",
      "https://www.ibm.com/think/topics/data-management"
    ]
  },
  {
    "id": 12,
    "label": "Boas práticas",
    "title": "Regras simples.<br>Uma rotina consistente.",
    "intro": "A organização da informação depende de práticas que possam ser executadas e verificadas.",
    "body": "<div class=\"practice-list\"><article><span>01</span><h3>Padronizar o cadastro</h3><p>Código único, campos essenciais e definições compartilhadas.</p></article><article><span>02</span><h3>Controlar os acessos</h3><p>Contas individuais e permissões adequadas às funções.</p></article><article><span>03</span><h3>Preservar o histórico</h3><p>Registrar mudanças relevantes e manter o preço das transações.</p></article><article><span>04</span><h3>Testar a recuperação</h3><p>Verificar backups, procedimentos e responsáveis.</p></article></div><div class=\"insight\"><span>LEMBRETE</span><p>Ter uma cópia de segurança não basta: a capacidade de restaurar os dados precisa ser testada.</p></div>",
    "speaker": 1,
    "chapter": "Gestão da informação",
    "notes": "Este slide transforma os conceitos em uma rotina: padronizar o cadastro, controlar os acessos, preservar o histórico e testar a recuperação. Explique uma prática de cada vez, usando o supermercado como exemplo. Um código único evita cadastros duplicados; permissões por função limitam a exposição; o preço da venda precisa permanecer histórico.\n\nO backup só é útil quando conseguimos restaurar os dados necessários. Por isso, procedimentos, cópias e responsáveis devem ser verificados. A gestão depende de rotinas que as pessoas consigam executar, acompanhar e melhorar. Em seguida, Pedro Mafra mostrará como os bancos de dados sustentam essa organização.",
    "reference": [
      "IBM · Gestão de dados",
      "https://www.ibm.com/think/topics/data-management"
    ]
  },
  {
    "id": 13,
    "label": "Banco e SGBD",
    "title": "A estrutura por trás<br>da informação.",
    "intro": "Banco de dados é o conjunto organizado. SGBD é o software que permite administrá-lo.",
    "body": "<div class=\"comparison\"><article><span>OPERAÇÃO</span><h3>Registrar o presente.</h3><p>Vendas, itens e movimentações do dia a dia. Prioriza operações frequentes e consistência.</p><blockquote>“Registrar esta compra.”</blockquote></article><article><span>ANÁLISE</span><h3>Compreender o histórico.</h3><p>Dados organizados para comparar períodos, produtos e resultados.</p><blockquote>“Comparar os últimos meses.”</blockquote></article></div><div class=\"insight\"><span>TRANSAÇÃO</span><p>Registrar os itens e atualizar o estoque são operações relacionadas. Uma transação ajuda a tratá-las como uma unidade.</p></div>",
    "speaker": 2,
    "chapter": "Banco de dados",
    "notes": "O banco de dados é o conjunto organizado; o SGBD é o software que permite gerenciá-lo. Ele pode controlar permissões, executar consultas e aplicar restrições. A escolha depende do volume, do tipo de informação e das operações necessárias. Não há um modelo universalmente melhor.\n\nUm sistema operacional de vendas registra muitas transações pequenas e frequentes. Uma análise histórica pode ler grandes volumes para comparar meses ou categorias. Essa diferença ajuda a entender por que organizações podem separar bases operacionais e analíticas. O importante é adequar a estrutura ao uso pretendido.\n\nPARA APROFUNDAR\nUma venda pode exigir registrar os itens e atualizar o estoque. Uma transação agrupa operações que precisam ser tratadas como uma unidade: concluir o conjunto ou desfazê-lo quando necessário.\n\nSe o sistema registra a venda e falha antes de atualizar o estoque, uma implementação sem tratamento adequado pode deixar dados inconsistentes. Transações ajudam a preservar as regras definidas pela aplicação.\n\nPERGUNTA POSSÍVEL\nQual é a diferença entre banco e SGBD?\nO banco é o conjunto organizado de dados; o SGBD é o software que permite defini-lo, consultá-lo e administrá-lo.\n\nSUGESTÃO PARA APRESENTAR\nPara explicar uma transação, use a venda e a baixa do estoque: essas alterações precisam ser coordenadas. Esse cuidado ajuda a evitar que uma parte da operação seja concluída e outra fique pendente, quebrando as regras da aplicação.",
    "reference": [
      "PostgreSQL · Transações",
      "https://www.postgresql.org/docs/current/tutorial-transactions.html"
    ]
  },
  {
    "id": 14,
    "label": "Modelo relacional",
    "title": "Tabelas conectadas.<br>Histórico preservado.",
    "intro": "As chaves identificam registros e estabelecem relações entre as tabelas.",
    "body": "<div class=\"schema\"><article><h3>PRODUTOS</h3><p><b>PK</b> id_produto</p><p>nome</p><p>categoria</p><p>preco_atual</p></article><span class=\"relation\">1 → N</span><article><h3>ITENS DE VENDA</h3><p><b>PK</b> id_item</p><p><b>FK</b> id_produto</p><p><b>FK</b> id_venda</p><p>quantidade</p><p>preco_praticado</p></article><span class=\"relation\">N ← 1</span><article><h3>VENDAS</h3><p><b>PK</b> id_venda</p><p>data_hora</p><p>forma_pagamento</p><p>status</p></article></div><div class=\"split-notes\"><div><h3>PK / FK</h3><p>A chave primária identifica a linha. A estrangeira referencia um registro relacionado.</p></div><div><h3>Preço histórico</h3><p>O item guarda o preço praticado. Atualizar o cadastro não deve reescrever uma venda anterior.</p></div></div>",
    "speaker": 2,
    "chapter": "Banco de dados",
    "notes": "Na tabela Produtos, cada produto recebe um identificador. Na tabela Itens de venda, esse identificador faz a ligação com o cadastro. Assim, o nome e a categoria do produto não precisam ser repetidos em cada linha de venda. Uma alteração no cadastro pode ser gerenciada de forma mais organizada.\n\nA chave primária identifica o registro; a estrangeira estabelece a ligação. Com uma restrição adequada, o banco impede que um item aponte para um produto inexistente. Esse exemplo introduz a integridade referencial. O modelo apresentado é simplificado: uma aplicação completa também precisaria representar a venda, a data e o preço praticado.\n\nPARA APROFUNDAR\nA chave primária identifica cada linha. A chave estrangeira referencia um registro relacionado. Separar cadastros e movimentos reduz repetições e ajuda a preservar consistência; esse cuidado está ligado à normalização.\n\nO preço de cadastro pode mudar. Por isso, o item de venda deve preservar o preço praticado na transação. O relatório histórico não deve recalcular a receita usando o preço atual do produto.\n\nPERGUNTA POSSÍVEL\nO que acontece com um código de produto inexistente?\nCom a restrição de chave estrangeira configurada, a inserção pode ser rejeitada para preservar a integridade referencial.\n\nSUGESTÃO PARA APRESENTAR\nPeça que a turma acompanhe as duas relações. Uma venda reúne vários itens. Um produto pode aparecer em itens de muitas vendas. Guardar o preço praticado no item preserva o histórico mesmo que o cadastro seja atualizado depois.",
    "reference": [
      "PostgreSQL · Chaves estrangeiras",
      "https://www.postgresql.org/docs/current/tutorial-fk.html"
    ]
  },
  {
    "id": 15,
    "label": "A consulta SQL",
    "title": "Uma pergunta de negócio.<br>Uma consulta estruturada.",
    "intro": "Como descobrir quais produtos tiveram mais unidades vendidas na semana 2?",
    "body": "<div class=\"sql-layout\"><pre><span>CONSULTA ILUSTRATIVA</span><code><b>SELECT</b> produto, SUM(quantidade) AS unidades\n<b>FROM</b> vendas_demo\n<b>WHERE</b> semana = 2\n<b>GROUP BY</b> produto\n<b>ORDER BY</b> unidades DESC;</code></pre><div class=\"query-result\"><span>RESULTADO ESPERADO</span><table><thead><tr><th>Produto</th><th>Unidades</th></tr></thead><tbody><tr><td>Arroz</td><td>120</td></tr><tr><td>Feijão</td><td>75</td></tr><tr><td>Café</td><td>35</td></tr></tbody></table><small>Dados fictícios · tabela didática vendas_demo.</small></div></div><div class=\"insight\"><span>COMO LER</span><p>WHERE filtra o período. GROUP BY agrupa os produtos. SUM soma as quantidades. ORDER BY organiza o ranking.</p></div>",
    "speaker": 2,
    "chapter": "Banco de dados",
    "notes": "A pergunta é: quais produtos tiveram mais unidades vendidas na semana dois? SELECT define o que será exibido; FROM indica a tabela; WHERE seleciona o período; GROUP BY agrupa os produtos; SUM soma suas quantidades; ORDER BY coloca o maior total primeiro.\n\nMostre o resultado esperado: arroz 120, feijão 75 e café 35. A tabela vendas_demo é didática e independente do modelo relacional anterior. Esta consulta é ilustrativa; o site calcula o painel seguinte em JavaScript, sem conexão com um banco real. O objetivo é explicar como registros podem ser resumidos em informação útil.",
    "reference": [
      "PostgreSQL · Conceitos relacionais",
      "https://www.postgresql.org/docs/current/tutorial-concepts.html"
    ]
  },
  {
    "id": 16,
    "label": "Painel interativo",
    "title": "Mais vendas.<br>Melhor resultado?",
    "intro": "Compare duas semanas e observe por que o volume, sozinho, não encerra a análise.",
    "body": "<div class=\"demo-heading\"><span>SUPERMERCADO / DADOS FICTÍCIOS</span><label for=\"period\">Período</label><select id=\"period\"><option value=\"1\">Semana 2 · promoção</option><option value=\"0\">Semana 1 · referência</option></select></div><div class=\"demo-grid\"><div class=\"chart-panel\"><h3>Unidades vendidas</h3><div id=\"chart\"></div><small>Mesma escala nas duas semanas.</small></div><div class=\"volume-panel\"><span>ARROZ / COMPARAÇÃO</span><strong id=\"metric\"></strong><p id=\"insight\"></p></div></div><div id=\"finance\" class=\"finance-grid\" aria-live=\"polite\"></div><p class=\"demo-footnote\">Custo de aquisição do arroz: R$ 18/unidade. Resultado bruto = receita − custo de aquisição. Despesas e tributos não considerados; não é lucro líquido.</p>",
    "speaker": 2,
    "chapter": "Banco de dados",
    "notes": "Na semana 1, o arroz teve 80 unidades vendidas. Na semana 2, foram 120: a diferença é 40, que dividida por 80 resulta em 50%. O feijão também aumentou, enquanto o café caiu. O painel permite enxergar esse comportamento rapidamente e levantar perguntas para investigar.\n\nNa consulta, SELECT define o resultado, SUM soma quantidades, WHERE filtra a semana, GROUP BY reúne os registros de cada produto e ORDER BY organiza o ranking. A consulta é ilustrativa: este site usa dados locais. Antes de aumentar a compra, o gerente deve verificar o estoque disponível, a duração da promoção, a margem e o prazo do fornecedor.\n\nPARA APROFUNDAR\nO caso agora compara também preço e custo do arroz. Na semana 1, 80 unidades a R$ 25 geram R$ 2.000 de receita. Na semana 2, 120 unidades a R$ 22 geram R$ 2.640. O custo de aquisição é de R$ 18 por unidade em ambas.\n\nResultado bruto simplificado: receita menos custo de aquisição. Ele passa de R$ 560 para R$ 480, queda de aproximadamente 14,3%, apesar da alta de 50% nas unidades. Não representa lucro líquido: despesas e tributos não foram considerados.\n\nPERGUNTA POSSÍVEL\nQual decisão o painel recomenda?\nEle apoia a investigação. Avaliar margem, duração da promoção, estoque e prazo de entrega é necessário antes de alterar a compra.\n\nSUGESTÃO PARA APRESENTAR\nApresente primeiro a semana de referência, depois a promoção. Pergunte se a alta de 50% nas unidades permite concluir que o negócio ganhou mais. Em seguida revele a receita e o resultado bruto. A surpresa ajuda a explicar por que indicadores precisam ser analisados em conjunto.",
    "reference": [
      "PostgreSQL · Conceitos relacionais",
      "https://www.postgresql.org/docs/current/tutorial-concepts.html"
    ]
  },
  {
    "id": 17,
    "label": "Da análise à decisão",
    "title": "O painel revela a mudança.<br>O contexto orienta a ação.",
    "intro": "No caso fictício, a promoção aumenta o volume e a receita, mas reduz o resultado bruto.",
    "body": "<div class=\"outcome\"><article><span>UNIDADES DE ARROZ</span><strong>+50%</strong><p>80 → 120 unidades</p></article><article><span>RECEITA DO ARROZ</span><strong>+32%</strong><p>R$ 2.000 → R$ 2.640</p></article><article class=\"warning\"><span>RESULTADO BRUTO</span><strong>−14,3%</strong><p>R$ 560 → R$ 480</p></article></div><div class=\"decision-path\"><h3>Antes de alterar a compra</h3><div><span>Estoque disponível</span><span>Duração da promoção</span><span>Validade dos produtos</span><span>Prazo do fornecedor</span></div></div><div class=\"insight\"><span>DECIDIR E MEDIR</span><p>Definir a ação, acompanhar os indicadores e verificar se a decisão atingiu o objetivo. A alta do volume não prova, por si só, o sucesso da promoção.</p></div>",
    "speaker": 2,
    "chapter": "Banco de dados",
    "notes": "Retome os três resultados da promoção. As unidades sobem cinquenta por cento; a receita sobe trinta e dois por cento; o resultado bruto simplificado cai aproximadamente quatorze vírgula três por cento. Isso acontece porque o preço do arroz caiu de vinte e cinco para vinte e dois reais, enquanto o custo de aquisição permaneceu em dezoito reais por unidade.\n\nA promoção pode ter outros objetivos, mas esses dados não permitem declarar sucesso apenas pelo volume. Antes de alterar a compra, o gestor deve avaliar saldo em estoque, duração da promoção, validade e prazo do fornecedor. A decisão deve ser acompanhada para verificar seu efeito. Nenhum número deste exemplo representa lucro líquido.",
    "reference": [
      "PostgreSQL · Conceitos relacionais",
      "https://www.postgresql.org/docs/current/tutorial-concepts.html"
    ]
  },
  {
    "id": 18,
    "label": "Conclusão",
    "title": "Organizar. Confiar.<br><em>Decidir melhor.</em>",
    "intro": "Uma decisão bem fundamentada depende de toda a cadeia, desde o registro até a interpretação.",
    "body": "<div class=\"cards cols-3\"><article><span class=\"card-index\">01</span><h3>Banco de dados</h3><p>Organiza os registros, as relações e o histórico.</p></article><article><span class=\"card-index\">02</span><h3>Gestão da informação</h3><p>Define qualidade, significado, acesso e responsabilidades.</p></article><article><span class=\"card-index\">03</span><h3>Inteligência de negócios</h3><p>Analisa o desempenho e acompanha o efeito das decisões.</p></article></div><div class=\"closing\"><span>PARA DISCUTIR</span><h3>Com o estoque desatualizado, você confiaria na recomendação de compra?</h3></div><details class=\"sources\"><summary>Referências e leituras de apoio</summary><ol><li><a target=\"_blank\" rel=\"noopener\" href=\"https://www.ibm.com/think/topics/business-intelligence\">IBM · Business intelligence</a></li><li><a target=\"_blank\" rel=\"noopener\" href=\"https://www.ibm.com/think/topics/data-management\">IBM · Data management</a></li><li><a target=\"_blank\" rel=\"noopener\" href=\"https://www.ibm.com/think/topics/data-quality\">IBM · Data quality</a></li><li><a target=\"_blank\" rel=\"noopener\" href=\"https://www.postgresql.org/docs/current/tutorial-concepts.html\">PostgreSQL · Conceitos relacionais</a></li><li><a target=\"_blank\" rel=\"noopener\" href=\"https://www.postgresql.org/docs/current/tutorial-fk.html\">PostgreSQL · Chaves estrangeiras</a></li><li><a target=\"_blank\" rel=\"noopener\" href=\"https://www.postgresql.org/docs/current/tutorial-transactions.html\">PostgreSQL · Transações</a></li></ol><small>Consultadas em 30/10/2026. Exemplos e números criados para fins didáticos.</small></details>",
    "speaker": 2,
    "chapter": "Banco de dados",
    "notes": "A mensagem central é que uma boa decisão depende de uma cadeia inteira. O banco organiza registros; a gestão garante significado, qualidade e acesso; o BI permite analisar e acompanhar resultados. Se qualquer elo falhar, um painel pode transmitir confiança sem representar bem a realidade.\n\nPara encerrar, pergunte à turma se uma recomendação de compra seria confiável com o estoque desatualizado. A resposta mostra por que não podemos avaliar apenas o gráfico final. As referências permitem aprofundar os conceitos; nossos números são fictícios e foram criados para demonstrar o raciocínio. Agradeçam e abram espaço para perguntas.\n\nPARA APROFUNDAR\nUm banco organizado não garante que os registros estejam corretos; dados corretos não garantem interpretação adequada. A confiança surge da combinação entre estrutura, qualidade, contexto e análise.\n\nUma implantação pode começar com uma pergunta de negócio bem definida, poucas fontes confiáveis e indicadores simples. Depois de medir o resultado, a equipe ajusta o processo e amplia a análise.\n\nPERGUNTA POSSÍVEL\nQual é a principal ideia do trabalho?\nDecisões melhores dependem de dados organizados, informação confiável e análise conectada a um objetivo.\n\nSUGESTÃO PARA APRESENTAR\nEncerre propondo um caminho viável: começar com uma pergunta, escolher dados confiáveis, definir métricas e acompanhar a ação. A maturidade não depende apenas do tamanho do sistema, mas da capacidade de repetir esse ciclo com consistência.",
    "reference": [
      "PostgreSQL · Conceitos relacionais",
      "https://www.postgresql.org/docs/current/tutorial-concepts.html"
    ]
  }
];
