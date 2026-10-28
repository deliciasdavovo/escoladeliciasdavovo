/* Escola da Casa · Dois modos para Atendimento que acolhe
   Leitura vertical (colaborador) + slides horizontais (gestor).
   Conteúdo editorial derivado do treinamento de 16 páginas.
   Não altera o progresso nem as etapas Praticar/Conferir. */
(function () {
  'use strict';
  const pages = [
    {label:'BOAS-VINDAS AO MÓDULO', title:'Atendimento que acolhe',lead:'Um jeito mais atento, claro e humano de atender na padaria.',blocks:[['BOM DIA!','Atender bem não é fazer um discurso. É perceber o cliente, compreender o pedido e ajudar com segurança.']]},
    {label:'A PRIMEIRA IMPRESSÃO',title:'O cliente chegou. E agora?',lead:'O atendimento começa antes de alguém escolher um produto.',blocks:[['UMA CENA COMUM','Um cliente entra, olha a vitrine e procura alguém com os olhos. Antes de pedir, ele precisa perceber que foi notado.'],['A IDEIA CENTRAL','Ser acolhedor não é falar muito. É demonstrar atenção com atitudes simples, mesmo quando o balcão está cheio.']]},
    {label:'01 · PERCEBER',title:'Primeiro, perceba.',lead:'Reconhecer quem chegou já faz parte do atendimento.',blocks:[['NA PRÁTICA','Levante o olhar, cumprimente e mostre que percebeu a presença da pessoa. Você não precisa interromper bruscamente outro pedido.'],['EVITE','“Espera aí.” — dito sem olhar, sem indicar o que vai acontecer.'],['PREFIRA','“Bom dia! Estou finalizando este pedido e já vou te atender.”']]},
    {label:'02 · ESCUTAR',title:'Depois, escute.',lead:'Uma boa pergunta costuma evitar vários problemas.',blocks:[['NA PRÁTICA','Deixe a pessoa terminar o pedido. Entenda se ela precisa de rapidez, de ajuda para escolher ou de informações para uma encomenda.'],['NO BALCÃO','Se alguém disser “quero uma torta”, confirme o sabor e a quantidade antes de separar o produto.'],['LEMBRE-SE','Ouvir primeiro é mais rápido do que corrigir depois.']]},
    {label:'03 · ORIENTAR',title:'Por fim, oriente.',lead:'Acolher também é ajudar o cliente a decidir.',blocks:[['NA PRÁTICA','Explique as opções disponíveis e apresente apenas o que faz sentido para aquele pedido.'],['SE VOCÊ NÃO SOUBER','Diga: “Vou conferir essa informação para te responder corretamente.”'],['POR QUE IMPORTA?','Uma informação confirmada transmite confiança. Uma resposta inventada pode gerar erro e insatisfação.']]},
    {label:'A JORNADA DO ATENDIMENTO · PARTE 1',title:'Os primeiros três passos.',lead:'Uma sequência para pensar, não um roteiro para decorar.',blocks:[['1 · PERCEBER','Cumprimente e reconheça quem chegou.'],['2 · OUVIR','Deixe a pessoa explicar o que procura.'],['3 · COMPREENDER','Confirme quantidade, sabor, tamanho ou ocasião quando essas informações forem necessárias.']]},
    {label:'A JORNADA DO ATENDIMENTO · PARTE 2',title:'Os três passos seguintes.',lead:'Depois de entender o pedido, conduza até o final.',blocks:[['4 · ORIENTAR','Mostre opções que realmente atendam à necessidade.'],['5 · CONFIRMAR','Repita as informações importantes para evitar enganos.'],['6 · FINALIZAR','Explique pagamento, retirada, entrega ou o próximo passo do pedido.']]},
    {label:'UM EXEMPLO COMPLETO',title:'Uma torta, três perguntas.',lead:'Repare como poucas perguntas evitam um pedido errado.',blocks:[['CLIENTE','“Queria uma torta para levar.”'],['ATENDENTE','“Para quantas pessoas? Prefere frango ou presunto?”'],['CLIENTE','“Frango, para quatro pessoas.”'],['ATENDENTE','“Vou conferir o tamanho e o valor antes de separar.”']]},
    {label:'CONHECIMENTO DOS PRODUTOS',title:'Quem conhece ajuda a escolher.',lead:'Não basta apontar a vitrine: é importante saber explicar.',blocks:[['O QUE É?','Saiba explicar o produto, seu recheio, sabor e tamanho. Consulte a ficha quando necessário.'],['COMO É VENDIDO?','Confira se o preço é por unidade, por peso, por fatia ou por encomenda.'],['ESTÁ DISPONÍVEL?','Verifique vitrine, reposição confirmada e possibilidade de encomenda.']]},
    {label:'INFORMAÇÃO SEGURA',title:'Não adivinhe. Confira.',lead:'Especialmente quando a dúvida envolve ingredientes.',blocks:[['UMA FRASE ÚTIL','“Vou conferir antes de te responder.”'],['INGREDIENTES E ALERGÊNICOS','Consulte a ficha oficial do produto ou o responsável. Não suponha que um produto não contém determinado ingrediente.'],['PREÇOS E PRAZOS','Confirme valor, unidade de venda, disponibilidade e prazo antes de informar ao cliente.']]},
    {label:'PRODUTO ESGOTADO',title:'Acabou o produto. Não a orientação.',lead:'A resposta pode ser verdadeira sem encerrar a conversa.',blocks:[['1 · CONFIRA','Verifique se há reposição confirmada ou outra unidade disponível.'],['2 · EXPLIQUE','Comunique a falta do produto sem prometer um prazo desconhecido.'],['3 · OFEREÇA','Mostre uma alternativa adequada ou explique a possibilidade de encomenda.']]},
    {label:'PRODUTO ESGOTADO · SITUAÇÃO REAL',title:'Duas formas de responder.',lead:'O mesmo problema pode gerar experiências diferentes.',blocks:[['RESPOSTA QUE ENCERRA','“A torta de frango acabou.”'],['RESPOSTA QUE ORIENTA','“Vou conferir se teremos reposição. Se não houver, posso mostrar outras opções ou verificar uma encomenda.”'],['PENSE NISSO','Cliente pede 20 mini salgados para hoje. Não há essa quantidade pronta. Como você responderia?']]},
    {label:'HORÁRIOS DE PICO',title:'A pressa não pode virar confusão.',lead:'Quando a loja enche, pequenos cuidados fazem diferença.',blocks:[['RECONHEÇA A ESPERA','Se estiver ocupado, faça um contato breve e indique que atenderá em seguida.'],['ORGANIZE A SEQUÊNCIA','Siga a ordem e os procedimentos da loja. Acompanhe mesas, comandas e pedidos.'],['LEMBRE-SE','Acolher não exige parar tudo. Exige não esquecer ninguém.']]},
    {label:'HORÁRIOS DE PICO · CONTINUAÇÃO',title:'Confirme e comunique.',lead:'O cuidado com os detalhes evita refazer pedidos.',blocks:[['CONFIRME ANTES DE PASSAR','Repita quantidades, sabores e destino do pedido.'],['PEÇA AJUDA COM CLAREZA','Quando um colega assumir uma tarefa, conte o que já foi feito e o que ainda falta.'],['SE HOUVER ATRASO','Verifique a situação antes de informar qualquer previsão. Explique o próximo passo.']]},
    {label:'IMPREVISTOS',title:'Resolver é melhor do que justificar.',lead:'O importante é entender o ocorrido e encaminhar a solução.',blocks:[['PEDIDO DIFERENTE','Confira a comanda e o que o cliente solicitou. Corrija conforme o procedimento da loja.'],['DEMORA NA CAFETERIA','Verifique o andamento e atualize o cliente sem inventar um tempo de espera.'],['CLIENTE INSATISFEITO','Ouça, confira o ocorrido e, se necessário, chame o responsável. Não culpe colegas.']]},
    {label:'O PADRÃO DA VOVÓ',title:'O que levamos para o balcão.',lead:'Seis hábitos para praticar em todos os atendimentos.',blocks:[['EU PERCEBO · EU ESCUTO','Reconheço quem chegou e ouço antes de responder.'],['EU CONFIRMO · EU ORIENTO','Reviso os detalhes do pedido e apresento opções adequadas.'],['EU NÃO INVENTO · EU RESOLVO','Confiro ingredientes, preço e prazo. Peço ajuda e acompanho.']]}
  ];
  const slides = [
    {tag:'ABERTURA',title:'Atendimento que acolhe',lead:'Não é um discurso decorado. É atenção, clareza e segurança.',points:['O cliente precisa ser percebido.','O pedido precisa ser compreendido.','A orientação precisa ser confiável.'],ask:'O que faz você se sentir bem atendido?',note:'Peça que a equipe cite exemplos concretos de atendimentos que já viveu, como cliente.'},
    {tag:'ANTES DO PEDIDO',title:'O atendimento começa no olhar.',lead:'O cliente chega, olha a vitrine e procura alguém.',points:['Reconheça quem entrou.','Mesmo ocupado, sinalize que percebeu.','Não é necessário interromper um pedido em andamento.'],ask:'Como reconhecer quem chegou sem abandonar quem já está sendo atendido?',note:'Demonstre uma abordagem curta. Evite exigir frases decoradas.'},
    {tag:'TRÊS ATITUDES',title:'Perceber. Escutar. Orientar.',lead:'Três ações simples para conduzir melhor a conversa.',points:['Perceber: cumprimentar e demonstrar atenção.','Escutar: deixar o cliente explicar o que precisa.','Orientar: apresentar alternativas que realmente ajudem.'],ask:'Em qual dessas três atitudes costumamos falhar nos horários de pico?',note:'Converse com a equipe sobre o que é atenção, e não apenas simpatia.'},
    {tag:'SEIS PASSOS',title:'Do primeiro contato à finalização.',lead:'Uma ordem de raciocínio, não uma fala para decorar.',points:['1 Perceber · 2 Ouvir · 3 Compreender','4 Orientar · 5 Confirmar · 6 Finalizar','Antes de finalizar, verifique os detalhes que podem gerar erro.'],ask:'Qual passo evita mais retrabalho na nossa rotina?',note:'Peça que apontem onde o balcão, a cafeteria e o caixa precisam trocar informações.'},
    {tag:'EXEMPLO DO BALCÃO',title:'“Queria uma torta para levar.”',lead:'A pergunta certa pode evitar o pedido errado.',points:['Qual sabor?','Para quantas pessoas?','Qual tamanho, disponibilidade e valor confirmados?'],ask:'O que pode dar errado se separarmos a primeira torta sem perguntar nada?',note:'Faça uma simulação entre duas pessoas: uma cliente e outra atendente.'},
    {tag:'CONHECER O PRODUTO',title:'Quem conhece consegue orientar.',lead:'O funcionário não precisa saber tudo de memória; precisa saber onde conferir.',points:['Recheio, sabor e tamanho.','Preço por unidade, peso, fatia ou encomenda.','Disponibilidade e prazo confirmados.'],ask:'Que informação do cardápio precisamos consultar com mais frequência?',note:'Mostre a ficha de um produto real da vitrine. Reforce que ingredientes e alergênicos não podem ser adivinhados.'},
    {tag:'QUANDO NÃO SABEMOS',title:'“Vou conferir antes de responder.”',lead:'Informação confirmada cria confiança. Informação inventada cria problemas.',points:['Nunca suponha ingredientes ou alergênicos.','Não prometa reposição ou prazo incerto.','Consulte a ficha ou o responsável.'],ask:'Como responder quando o cliente precisa de certeza sobre um ingrediente?',note:'Use um exemplo de alergia alimentar e ressalte a importância do procedimento oficial.'},
    {tag:'PRODUTO ESGOTADO',title:'Acabou o produto. Não a orientação.',lead:'A resposta pode ser verdadeira e ainda assim ajudar.',points:['Conferir se haverá reposição.','Explicar sem prometer o que não foi confirmado.','Oferecer uma alternativa adequada ou encomenda.'],ask:'O cliente pede 20 mini salgados para hoje, mas não há essa quantidade pronta. E agora?',note:'Peça duas respostas: uma que encerra a conversa e outra que oferece uma solução possível.'},
    {tag:'HORÁRIO DE PICO',title:'Rapidez não pode virar confusão.',lead:'O fluxo precisa ser organizado mesmo quando o balcão está cheio.',points:['Reconheça a espera.','Confira comandas, quantidades e destino.','Ao repassar, diga o que foi feito e o que falta.'],ask:'Como impedir que um pedido se perca na passagem entre balcão, chapa e caixa?',note:'Explore situações de sábado e dos horários de maior movimento.'},
    {tag:'QUANDO ALGO DÁ ERRADO',title:'Resolver é melhor do que justificar.',lead:'Não culpar o colega; ouvir, conferir e encaminhar.',points:['Pedido errado: confira e corrija conforme o procedimento.','Demora: verifique antes de informar um prazo.','Insatisfação: escute e chame o responsável quando preciso.'],ask:'Qual é o primeiro passo ao receber uma reclamação?',note:'Faça uma simulação breve. Oriente a equipe a nunca inventar prazos de espera.'},
    {tag:'ENCERRAMENTO',title:'O padrão da Vovó no balcão.',lead:'Seis hábitos para praticar todos os dias.',points:['Perceber e escutar.','Confirmar e orientar.','Não inventar e resolver.'],ask:'Qual atitude você vai praticar no próximo atendimento?',note:'Encerre com uma tarefa real acompanhada: cada funcionário realiza um atendimento e recebe feedback.'}
  ];

  let readerPage = 0;
  let slidePage = 0;
  let notesVisible = false;
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const style = document.createElement('style');
  style.textContent = String.raw`
.sd-mode-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.sd-mode-button{font-family:"Inter",Arial,sans-serif;border:1px solid #b6cdbd;padding:12px 16px;background:#fff;color:#22523b;border-radius:11px;font-size:14px;font-weight:750}
.sd-mode-strong{background:#27533e;color:#fff;border-color:#27533e}
.sd-reader{font-family:"Inter",Arial,sans-serif;color:#284638}
.sd-reader-intro h3{font-family:"Lora",Georgia,serif;font-size:29px;letter-spacing:-.025em;margin:8px 0}
.sd-reader-intro p{font-size:17px!important;line-height:1.6!important}
.sd-reader-progress{height:6px;background:#e5ebdf;margin:18px 0;border-radius:6px;overflow:hidden}
.sd-reader-progress>div{width:6%;height:100%;background:#2a684b;transition:width .2s}
.sd-page{border:1px solid #e5dfd1;background:#fffaf0;padding:clamp(23px,4vw,42px);min-height:430px;box-shadow:0 10px 26px #273f2920;border-radius:12px}
.sd-page-top{display:flex;justify-content:space-between;gap:10px;color:#637a68;font-weight:750;font-size:10px;letter-spacing:.05em}
.sd-page-label{color:#aa684a;font-size:12px;font-weight:800;letter-spacing:.12em;margin:38px 0 12px;text-transform:uppercase}
.sd-page h3{font-family:"Lora",Georgia,serif;color:#26523a;font-size:clamp(31px,4.8vw,39px);line-height:1.17;letter-spacing:-.02em;margin:0 0 15px}
.sd-page .sd-lead{font-size:20px!important;line-height:1.54!important;color:#475d4b!important;margin:0 0 24px!important}
.sd-blocks{display:grid;gap:13px}
.sd-block{padding:15px 17px;background:#f1f3e9;border-left:4px solid #668a6d;border-radius:4px}
.sd-block:nth-child(even){background:#f9eee6;border-color:#c28968}
.sd-block h4{font-size:12px;letter-spacing:.08em;color:#395c45;margin:0 0 7px;font-weight:850}
.sd-block p{font-size:19px!important;line-height:1.52!important;margin:0!important;color:#273e32!important}
.sd-page-sign{font-size:10px;font-weight:850;letter-spacing:.12em;color:#9b967d;margin-top:30px}
.sd-reader-nav{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:16px}
.sd-reader-nav strong{font-size:13px;color:#526d58;white-space:nowrap}
.sd-nav-button{min-height:48px;border:1px solid #b8cbbc;background:#fff;color:#24523d;border-radius:9px;padding:10px 13px;font-size:14px;font-weight:800}
.sd-nav-primary{background:#28543e;color:#fff}
.sd-nav-button:disabled{opacity:.3;cursor:not-allowed}
.sd-reader-finish{background:#e7f0e5;margin-top:17px;padding:20px;border-radius:10px}
.sd-reader-finish[hidden]{display:none}
.sd-reader-finish strong{font-size:19px}
.sd-reader-finish p{font-size:17px!important;line-height:1.5}
.sd-reader-foot{font-size:13px!important;color:#788378!important;line-height:1.6!important}
.sd-slide-overlay{position:fixed;inset:0;z-index:9999;background:#1e352a;overflow:auto;padding:15px;display:none;flex-direction:column;align-items:center;gap:11px;font-family:"Inter",Arial,sans-serif}
.sd-slide-overlay.is-visible{display:flex}
.sd-slide-toolbar,.sd-slide-bottom{display:flex;align-items:center;justify-content:space-between;gap:13px;color:#e9f1e8;width:min(1220px,100%)}
.sd-slide-toolbar{font-size:11px;font-weight:800;letter-spacing:.06em}
.sd-toolbar-actions{display:flex;gap:8px;flex-wrap:wrap}
.sd-toolbar-actions button,.sd-slide-bottom button{border:1px solid #b8c6b5;background:#f8f6ed;color:#254b38;border-radius:7px;padding:10px 12px;font-size:12px;font-weight:800}
.sd-slide-bottom button:disabled{opacity:.35}
.sd-slide-canvas{width:min(1220px,100%);aspect-ratio:16/9;background:#fcfaf2;padding:clamp(22px,3.4vw,49px);display:flex;flex-direction:column;justify-content:space-between;border-radius:3px;min-height:525px}
.sd-slide-meta,.sd-slide-foot{display:flex;justify-content:space-between;gap:12px;font-size:12px;color:#7b8d7b;letter-spacing:.08em;font-weight:850}
.sd-slide-inner{width:100%;max-width:1040px;margin:auto 0}
.sd-slide-inner h2{font-family:"Lora",Georgia,serif;font-size:clamp(36px,5vw,66px);color:#28543d;letter-spacing:-.04em;line-height:1.13;margin:0 0 15px}
.sd-slide-lead{font-size:clamp(18px,2vw,25px);line-height:1.4;color:#617362;margin:0 0 27px;max-width:900px}
.sd-slide-points{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.sd-slide-points>div{background:#edf1e5;border-left:5px solid #55866d;padding:19px;min-height:118px;display:flex;flex-direction:column;gap:13px}
.sd-slide-points span{color:#b67952;font-size:12px;font-weight:900}
.sd-slide-points strong{color:#2d4c38;font-size:clamp(17px,1.75vw,23px);line-height:1.32}
.sd-slide-question{margin-top:25px;border-top:1px solid #d7ded4;padding-top:17px}
.sd-slide-question span{font-size:11px;font-weight:900;color:#ad724d;letter-spacing:.08em}
.sd-slide-question p{font-family:"Lora",Georgia,serif;font-size:clamp(20px,2.4vw,30px);color:#314d39;margin:8px 0}
.sd-slide-note{width:min(1220px,100%);padding:18px 23px;background:#f2e6cf;color:#3d4a35;border-radius:5px}
.sd-slide-note strong{font-size:11px;color:#805d40;letter-spacing:.09em}
.sd-slide-note p{font-size:17px;line-height:1.5;margin:6px 0 0}
.sd-slide-bottom{padding:2px 0 8px;font-size:12px}
@media(max-width:700px){
 .sd-mode-actions{flex-direction:column}
 .sd-mode-button{width:100%;min-height:48px}
 .sd-page{min-height:0;padding:22px 19px}
 .sd-page-label{margin-top:27px}
 .sd-page h3{font-size:32px}
 .sd-page .sd-lead{font-size:20px!important}
 .sd-block p{font-size:20px!important}
 .sd-reader-nav{gap:6px}
 .sd-nav-button{font-size:12px;padding:8px;min-width:0}
 .sd-slide-canvas{min-height:600px;aspect-ratio:auto}
 .sd-slide-points{grid-template-columns:1fr}
 .sd-slide-points>div{min-height:0;padding:12px}
 .sd-slide-inner h2{font-size:35px}
 .sd-toolbar-actions button{font-size:11px;padding:8px}
 .sd-slide-toolbar{align-items:flex-start;flex-direction:column}
 .sd-slide-bottom>span{display:none}
}
`;
  style.textContent = style.textContent.replace(/^@STYLE@|@STYLE@$/g,'');
  document.head.appendChild(style);

  function showReader() {
    const host = document.getElementById('sdReaderPage');
    if (!host) return;
    const item = pages[readerPage];
    host.innerHTML = '<article class="sd-page">' +
      '<div class="sd-page-top"><span>ESCOLA DA CASA · DELÍCIAS DA VOVÓ</span><span>'+String(readerPage+1).padStart(2,'0')+' / 16</span></div>' +
      '<div class="sd-page-label">'+esc(item.label)+'</div>' +
      '<h3>'+esc(item.title)+'</h3><p class="sd-lead">'+esc(item.lead)+'</p>' +
      '<div class="sd-blocks">'+item.blocks.map(b=>'<section class="sd-block"><h4>'+esc(b[0])+'</h4><p>'+esc(b[1])+'</p></section>').join('')+'</div>' +
      '<div class="sd-page-sign">PAIXÃO EM SERVIR!</div></article>';
    const counter = document.getElementById('sdReaderCounter');
    if(counter) counter.textContent = String(readerPage+1).padStart(2,'0')+' de '+pages.length;
    const prev = document.getElementById('sdReaderPrev'), next = document.getElementById('sdReaderNext');
    if(prev) prev.disabled = readerPage===0;
    if(next) {next.textContent = readerPage===pages.length-1?'Concluir leitura ✓':'Próxima página →';}
    const progress = document.getElementById('sdReaderProgress');
    if(progress) progress.style.width = ((readerPage+1)/pages.length*100)+'%';
    const finish = document.getElementById('sdReaderFinish');
    if(finish) finish.hidden = readerPage!==pages.length-1;
  }
  function shiftReader(direction) {
    if(direction>0 && readerPage===pages.length-1) { moveStage(1); return; }
    readerPage = Math.min(pages.length-1, Math.max(0, readerPage+direction));
    showReader();
    const article=document.querySelector('#sdReaderPage .sd-page');
    if(article) article.scrollIntoView({behavior:'smooth',block:'start'});
  }

  const renderBeforeModes = renderModal;
  renderModal = function() {
    renderBeforeModes();
    if (!currentCourse || currentCourse.id !== 'service') return;
    const header=document.getElementById('modalHead');
    if(header && !header.querySelector('.sd-mode-actions')){
      header.insertAdjacentHTML('beforeend',
        '<div class="sd-mode-actions"><button type="button" id="sdReadMode" class="sd-mode-button" aria-label="Abrir leitura do funcionário">▤ Leitura no celular</button><button type="button" id="sdManagerMode" class="sd-mode-button sd-mode-strong" aria-label="Abrir slides para o gestor">▣ Slides do gestor</button></div>');
      document.getElementById('sdReadMode').addEventListener('click',()=>{currentLesson=0;currentStage=0;renderModal()});
      document.getElementById('sdManagerMode').addEventListener('click',openSlides);
    }
    if(currentStage!==0 || currentLesson!==0) return;
    const target=document.querySelector('#modalBody .learning-stage');
    if(!target) return;
    target.innerHTML =
      '<div class="sd-reader"><div class="sd-reader-intro"><span class="lesson-kicker">ETAPA 01 · ENTENDER</span><h3 id="serviceReaderTitle">Leia no seu ritmo.</h3><p>16 páginas, letras grandes e exemplos reais da padaria. Avance sem precisar baixar um arquivo.</p></div>' +
      '<div class="sd-reader-progress"><div id="sdReaderProgress"></div></div>' +
      '<div id="sdReaderPage" aria-live="polite"></div>' +
      '<div class="sd-reader-nav"><button type="button" id="sdReaderPrev" class="sd-nav-button">← Anterior</button><strong id="sdReaderCounter"></strong><button type="button" id="sdReaderNext" class="sd-nav-button sd-nav-primary">Próxima página →</button></div>' +
      '<div id="sdReaderFinish" class="sd-reader-finish" hidden><strong>Você chegou ao final da leitura!</strong><p>Agora é hora de observar, testar e praticar no balcão com a equipe.</p><button type="button" id="sdGoPractice" class="action">Ir para Praticar →</button></div>' +
      '<p class="sd-reader-foot">O material permanece disponível para consulta. Na etapa seguinte, pratique com o acompanhamento de um responsável.</p></div>';
    showReader();
    document.getElementById('sdReaderPrev').addEventListener('click',()=>shiftReader(-1));
    document.getElementById('sdReaderNext').addEventListener('click',()=>shiftReader(1));
    document.getElementById('sdGoPractice').addEventListener('click',()=>moveStage(1));
    const frame=document.getElementById('sdReaderPage');
    let startX=null,startY=null;
    frame.addEventListener('touchstart',e=>{if(e.touches.length===1){startX=e.touches[0].clientX;startY=e.touches[0].clientY;}},{passive:true});
    frame.addEventListener('touchend',e=>{if(startX===null||e.changedTouches.length!==1)return;const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;startX=null;if(Math.abs(dx)>85&&Math.abs(dx)>Math.abs(dy)*1.5)shiftReader(dx<0?1:-1);},{passive:true});
  };
  const previousOpen = openCourse;
  openCourse = function(id) { if(id==='service') readerPage=0; return previousOpen(id); };

  const overlay=document.createElement('div');
  overlay.className='sd-slide-overlay';
  overlay.id='sdSlideOverlay';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-label','Apresentação do gestor: Atendimento que acolhe');
  overlay.hidden=true;
  document.body.appendChild(overlay);
  function drawSlides(){
    const s=slides[slidePage];
    overlay.innerHTML =
      '<div class="sd-slide-toolbar"><span>ESCOLA DA CASA · APRESENTAÇÃO DO GESTOR</span><div class="sd-toolbar-actions"><button type="button" id="sdNotesToggle" aria-pressed="'+notesVisible+'">Notas do gestor '+(notesVisible?'✓':'')+'</button><button type="button" id="sdFullscreen">Tela cheia ⛶</button><button type="button" id="sdSlideClose" aria-label="Fechar slides">Fechar ×</button></div></div>' +
      '<main class="sd-slide-canvas" aria-live="polite"><div class="sd-slide-meta"><span>DELÍCIAS DA VOVÓ</span><span>'+esc(s.tag)+'</span></div><div class="sd-slide-inner"><h2>'+esc(s.title)+'</h2><p class="sd-slide-lead">'+esc(s.lead)+'</p><div class="sd-slide-points">'+s.points.map((p,i)=>'<div><span>0'+(i+1)+'</span><strong>'+esc(p)+'</strong></div>').join('')+'</div><section class="sd-slide-question"><span>PARA CONVERSAR COM A EQUIPE</span><p>'+esc(s.ask)+'</p></section></div><div class="sd-slide-foot"><span>PAIXÃO EM SERVIR!</span><span>'+String(slidePage+1).padStart(2,'0')+' / '+slides.length+'</span></div></main>' +
      (notesVisible?'<aside class="sd-slide-note"><strong>NOTA PARA O GESTOR</strong><p>'+esc(s.note)+'</p></aside>':'') +
      '<div class="sd-slide-bottom"><button type="button" id="sdSlidePrev" '+(slidePage===0?'disabled':'')+'>← Anterior</button><span>Use ← → no teclado para navegar</span><button type="button" id="sdSlideNext" '+(slidePage===slides.length-1?'disabled':'')+'>Próximo →</button></div>';
    document.getElementById('sdSlideClose').addEventListener('click',closeSlides);
    document.getElementById('sdNotesToggle').addEventListener('click',()=>{notesVisible=!notesVisible;drawSlides()});
    document.getElementById('sdSlidePrev').addEventListener('click',()=>moveSlide(-1));
    document.getElementById('sdSlideNext').addEventListener('click',()=>moveSlide(1));
    document.getElementById('sdFullscreen').addEventListener('click',()=>{
      if(document.fullscreenElement){document.exitFullscreen?.();return;}
      if(overlay.requestFullscreen) overlay.requestFullscreen().catch(()=>{});
    });
  }
  function moveSlide(delta){slidePage=Math.max(0,Math.min(slides.length-1,slidePage+delta));drawSlides();}
  function keySlides(e){
    if(overlay.hidden)return;
    if(e.key==='Escape'){closeSlides();}
    else if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();moveSlide(1);}
    else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();moveSlide(-1);}
  }
  function openSlides(){
    slidePage=0;notesVisible=false;overlay.hidden=false;
    overlay.classList.add('is-visible');
    document.body.style.overflow='hidden';
    document.addEventListener('keydown',keySlides);
    drawSlides();
    document.getElementById('sdSlideClose').focus();
  }
  function closeSlides(){
    if(document.fullscreenElement===overlay)document.exitFullscreen?.();
    overlay.classList.remove('is-visible');overlay.hidden=true;
    document.removeEventListener('keydown',keySlides);
    document.body.style.overflow=document.getElementById('modal')?.classList.contains('open')?'hidden':'';
  }
})();
