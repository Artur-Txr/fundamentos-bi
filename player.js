'use strict';
const $=id=>document.getElementById(id);
const presenters=['Artur Teixeira','João Henrique','Pedro Mafra'];
const initials=['AT','JH','PM'];
const allowedThemes=['midnight','paper','forest','violet'];
let current=0,notesOpen=false;
try{const saved=localStorage.getItem('bi-theme');if(allowedThemes.includes(saved))document.documentElement.dataset.theme=saved;}catch{}
function selectedIndex(){const n=Number(location.hash.slice(1));return Number.isInteger(n)&&n>=1?Math.min(n,deck.length)-1:0;}
function setTheme(theme){if(!allowedThemes.includes(theme))return;document.documentElement.dataset.theme=theme;try{localStorage.setItem('bi-theme',theme);}catch{}document.querySelectorAll('[data-theme]').forEach(b=>{if(b.tagName==='BUTTON')b.setAttribute('aria-pressed',String(b.dataset.theme===theme));});$('theme-picker').open=false;publishState();}
function supportBlock(s){if(!s.support)return '';return '<section class="support-section" aria-label="Explicação e aplicação">'+s.support.map(x=>'<article><h3>'+x.title+'</h3><p>'+x.text+'</p></article>').join('')+'</section>';}
function render(){current=selectedIndex();const s=deck[current];const isCover=current===0;
$('stage').innerHTML=isCover?`<section class="slide cover" aria-label="Slide 1">${s.body}</section>`:`<section class="slide" aria-label="Slide ${current+1}"><div class="slide-heading"><span class="overline">${String(s.id).padStart(2,'0')} / ${s.label}</span><span class="slide-chapter">${String(s.speaker+1).padStart(2,'0')}</span></div><h1 class="slide-title">${s.title}</h1><p class="slide-intro">${s.intro}</p>${termBlock(s)}<div class="slide-body">${s.body}</div>${supportBlock(s)}</section>`;
if(isCover)$('cover-people').textContent=presenters.join(' / ');
$('chapter-label').innerHTML=`<span class="chapter-dot"></span> CAPÍTULO 0${s.speaker+1} <b>/</b> ${s.chapter}`;
$('presenter-name').textContent=presenters[s.speaker];$('avatar').textContent=initials[s.speaker];$('presenter-range').textContent=`${deck.filter(x=>x.speaker===s.speaker).findIndex(x=>x.id===s.id)+1} de ${deck.filter(x=>x.speaker===s.speaker).length} slides · ${s.chapter}`;
$('page-count').innerHTML=`<strong>${String(current+1).padStart(2,'0')}</strong><span>/ ${deck.length}</span>`;
$('prev').disabled=current===0;$('next').disabled=current===deck.length-1;
$('reading-progress').style.width=`${(current+1)/deck.length*100}%`;
$('chapter-progress').innerHTML=['Inteligência de negócios','Gestão da informação','Banco de dados'].map((label,i)=>`<button data-chapter="${i}" class="${i===s.speaker?'active':''}" aria-label="Ir para ${label}"><span>${String(i+1).padStart(2,'0')}</span>${label}</button>`).join('');
$('chapter-progress').querySelectorAll('button').forEach(b=>b.onclick=()=>go(deck.findIndex(x=>x.speaker===Number(b.dataset.chapter))));
$('speaker-notes').hidden=!notesOpen;$('notes-title').textContent=`${presenters[s.speaker]} · ${s.label}`;$('notes-text').textContent=s.notes;
$('notes-button').setAttribute('aria-pressed',String(notesOpen));
$('index-list').querySelectorAll('[data-slide]').forEach(b=>b.setAttribute('aria-current',Number(b.dataset.slide)===current?'step':'false'));
if($('period')){$('period').addEventListener('change',updateDemo);updateDemo();}
document.title=`${current+1}/${deck.length} · Fundamentos de BI`;setupInteractions();
}
function go(n){const index=Math.max(0,Math.min(deck.length-1,n));location.hash=String(index+1);window.scrollTo({top:0,behavior:'instant'});}
function updateDemo(){const p=Number($('period').value),values=[[80,60,40],[120,75,35]][p];
$('chart').innerHTML=values.map((value,i)=>`<div class="bar"><span>${['Arroz','Feijão','Café'][i]}</span><div class="bar-track"><i style="width:${value/120*100}%"></i></div><strong>${value}</strong></div>`).join('');
$('metric').textContent=p?'+50%':'80 un.';$('insight').textContent=p?'40 unidades a mais que na semana de referência.':'Base para comparar a semana de promoção.';
const qty=values[0],price=p?22:25,cost=18,money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
$('finance').innerHTML=[['Preço do arroz',money(price),'por unidade'],['Receita do arroz',money(qty*price),p?'+32% sobre a semana 1':'80 × R$ 25'],['Resultado bruto',money(qty*(price-cost)),p?'−14,3% sobre a semana 1':'80 × (R$ 25 − R$ 18)']].map(x=>`<article><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></article>`).join('');
}
function toggleNotes(){if(document.body.classList.contains('presentation-mode'))return;notesOpen=!notesOpen;render();}
function togglePresentation(){const active=document.body.classList.toggle('presentation-mode');if(active){notesOpen=false;render();const more=document.querySelector('.more');if(more)more.open=false;$('presenter-launch-status').hidden=true;}$('present-button').setAttribute('aria-pressed',String(active));$('present-button').firstChild.textContent=active?'Sair ':'Apresentar ';}
async function toggleFullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{alert('Use F11 ou a opção de tela cheia do navegador.');}}
$('prev').onclick=retreat;$('next').onclick=advance;$('notes-button').onclick=toggleNotes;$('notes-close').onclick=()=>{notesOpen=false;render();};$('present-button').onclick=togglePresentation;$('full-button').onclick=toggleFullscreen;
$('index-list').innerHTML=[0,1,2].map(c=>`<section><h3>0${c+1} / ${deck.find(x=>x.speaker===c).chapter}<small>${presenters[c]}</small></h3>${deck.filter(x=>x.speaker===c).map(s=>`<button data-slide="${s.id-1}"><span>${String(s.id).padStart(2,'0')}</span>${s.label}<i>↗</i></button>`).join('')}</section>`).join('');
$('index-list').querySelectorAll('button').forEach(b=>b.onclick=()=>{go(Number(b.dataset.slide));$('index-dialog').close();});
$('presenter-open').onclick=openPresenter;
$('index-open').onclick=()=>$('index-dialog').showModal();$('index-close').onclick=()=>$('index-dialog').close();
const glossary=[['BI','Business Intelligence: processos, métodos e ferramentas para analisar dados e apoiar decisões.'],['KPI','Indicador associado a um objetivo relevante, com definição e critério de acompanhamento.'],['Dashboard','Painel que reúne indicadores e visualizações.'],['ETL / ELT','Fluxos de extração, transformação e carga; a ordem da transformação difere.'],['Data warehouse','Base organizada para análise histórica, que pode integrar diferentes fontes.'],['Governança','Políticas e responsabilidades que orientam o uso dos dados e da informação.'],['SGBD','Software que permite definir, consultar e administrar bancos de dados.'],['PK / FK','Chave primária identifica uma linha; chave estrangeira referencia um registro relacionado.'],['SQL','Linguagem usada para definir, consultar e manipular dados em sistemas que a suportam.'],['Transação','Conjunto de operações tratado como uma unidade para preservar regras do sistema.'],['Receita','Valor das vendas no critério adotado. No caso, quantidade multiplicada pelo preço.'],['Resultado bruto','No caso didático, receita menos custo de aquisição; não é lucro líquido.']];
$('glossary-list').innerHTML=glossary.map(x=>`<article><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('');$('glossary-open').onclick=()=>$('glossary-dialog').showModal();$('glossary-close').onclick=()=>$('glossary-dialog').close();
document.querySelectorAll('button[data-theme]').forEach(b=>b.onclick=()=>setTheme(b.dataset.theme));
window.addEventListener('hashchange',render);
document.addEventListener('keydown',e=>{if($('index-dialog').open||$('glossary-dialog').open||['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;if(['ArrowRight','PageDown'].includes(e.key)||(e.key===' '&&!['BUTTON','SUMMARY','A'].includes(document.activeElement.tagName))){e.preventDefault();advance();}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();retreat();}if(e.key==='Home'){e.preventDefault();go(0);}if(e.key==='End'){e.preventDefault();go(deck.length-1);}if(e.key.toLowerCase()==='n')toggleNotes();if(e.key.toLowerCase()==='p')togglePresentation();if(e.key.toLowerCase()==='f')toggleFullscreen();});
window.addEventListener('beforeprint',()=>{$('stage').innerHTML=deck.map((s,i)=>`<section class="slide print-slide"><span class="overline">${s.id} / ${s.chapter} · ${presenters[s.speaker]}</span><h1 class="slide-title">${s.title}</h1><p class="slide-intro">${s.intro}</p>${i===0?`<p>${presenters.join(' · ')}</p>`:s.body}<div class="print-notes">${s.notes.replaceAll('\n','<br>')}</div></section>`).join('');if($('error-rows'))renderQuality();if($('week-comparison'))renderWeeks();});window.addEventListener('afterprint',render);$('print-button').onclick=()=>window.print();
setTheme(document.documentElement.dataset.theme);render();window.scrollTo({top:0,behavior:'instant'});

