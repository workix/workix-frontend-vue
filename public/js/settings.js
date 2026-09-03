(function($) {
	"use strict";

	$(document).ready(function() {

		// Esconde o loader assim que a view atual terminou de montar.
		// Não usamos $(window).load() porque esse evento nativo só dispara uma
		// vez por carregamento real de página: como a navegação agora é feita
		// via rotas com hash (sem reload), ele nunca dispararia de novo nas
		// trocas de página seguintes, deixando o loader preso na tela.
		$("#loader").fadeOut("slow");

		$('#index-modal').modal('show');

		// Este arquivo é re-injetado (nova <script> tag) a cada troca de rota,
		// já que cada view chama isso no seu created(). Isso é necessário para
		// os plugins que dependem de elementos recriados pelo Vue a cada view
		// (carrosséis, sliders, botões "+ Adicionar"). Só que $(window) e
		// $(document) persistem durante toda a sessão SPA: se os handlers
		// abaixo fossem religados a cada navegação, eles se acumulariam
		// indefinidamente e cada scroll/resize passaria a disparar múltiplas
		// animações concorrentes sobre os mesmos elementos, deixando o layout
		// "torto"/tremido só depois de navegar (um F5 zera tudo e mascara o
		// problema). Por isso esses handlers globais só são ligados uma vez.
		var isFirstGlobalInit = !window.__wxGlobalHandlersBound;
		window.__wxGlobalHandlersBound = true;

		// ====================================================================

		// Header scroll function

		if (isFirstGlobalInit) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll > 50) {
					$("#header-background").slideDown(300);
				} else {
					$("#header-background").slideUp(300);
				}
			});
		}

		// ====================================================================

		// Flex Menu
		//
		// No modo off-canvas o flexMenu envolve TODO o conteúdo do <body> em
		// .fm-outer > .fm-inner a cada init. Só que o <body> persiste durante
		// toda a sessão SPA, enquanto a .menu é recriada pelo Vue a cada view —
		// então, sem desfazer o wrapper anterior, cada navegação empilhava mais
		// um par de wrappers e o conteúdo saía do lugar/descentralizado. Só
		// voltava ao normal ao abrir e fechar o menu, porque a animação de
		// fechar reseta left:0 em todos os .fm-inner acumulados. Desfazemos o
		// wrapper anterior para que exista sempre um único par.
		$('body > .fm-outer > .fm-inner').children().unwrap().unwrap();

		$('.menu').flexMenu({
			breakpoint: 3000,
			responsivePattern: 'off-canvas',
			animationSpeed: 300
		});

		$(".fm-button").click(function(){
			if($("header").css('left') == '0px'){
				$("header").stop().animate({left:'240px'},300);
			};
			if($("header").css('left') == '240px'){
				$("header").stop().animate({left:'0px'},300);
			};
		 });

		// ====================================================================

		// Searchbox

		if ($(document).width() > 480) {

			$("#searchbox").css({
				'opacity': '0',
				'position': 'relative',
				'top': '0',
				'width': '0'
			});

			$("#search a").click(function(){

				if($("#searchbox").css('opacity') == '0'){
					$("#searchbox").stop().animate({
						opacity: '1',
						position: 'relative',
						top:'0',
						width:'200px'
					},300);
				};

				if($("#searchbox").css('opacity') == '1'){
					$("#searchbox").stop().animate({
						opacity: '0',
						position: 'relative',
						top:'0',
						width:'0px'
					},300);
				};

			});

		}

		// Searchbox for smartphones

		else {

			$("#searchbox").css({
				'opacity': '0',
				'position': 'absolute',
				'top': '-62px',
				'width': '100%'
			});

			$("#search a").click(function(){

				if($("#searchbox").css('opacity') == '0'){
					$("#searchbox").stop().animate({
						position: 'absolute',
						top:'50px',
						opacity: '1',
						width:'100%'
					},300);
				};

				if($("#searchbox").css('opacity') == '1'){
					$("#searchbox").stop().animate({
						position: 'absolute',
						top:'-62px',
						opacity: '0',
						width:'100%'
					},300);
				};

			});

		}

		if (isFirstGlobalInit) {
			$(window).resize(function() {

				if ($(document).width() > 480) {

					$("#searchbox").css({
						'opacity': '0',
						'position': 'relative',
						'top': '0',
						'width': '0'
					});

					$("#search a").click(function(){

						if($("#searchbox").css('opacity') == '0'){
							$("#searchbox").stop().animate({
								opacity: '1',
								position: 'relative',
								top:'0',
								width:'200px'
							},300);
						};

						if($("#searchbox").css('opacity') == '1'){
							$("#searchbox").stop().animate({
								opacity: '0',
								position: 'relative',
								top:'0',
								width:'0px'
							},300);
						};

					});

				}

				// Searchbox for smartphones

				else {

					$("#searchbox").css({
						'opacity': '0',
						'position': 'absolute',
						'top': '-62px',
						'width': '100%'
					});

					$("#search a").click(function(){

						if($("#searchbox").css('opacity') == '0'){
							$("#searchbox").stop().animate({
								position: 'absolute',
								top:'50px',
								opacity: '1',
								width:'100%'
							},300);
						};

						if($("#searchbox").css('opacity') == '1'){
							$("#searchbox").stop().animate({
								position: 'absolute',
								top:'-62px',
								opacity: '0',
								width:'100%'
							},300);
						};

					});

				}

			});
		}

		// ====================================================================

		// Slider

		$('#slider').css({'height': (($(window).height()-0))+'px'});
		if (isFirstGlobalInit) {
			$(window).resize(function(){
				$('#slider').css({'height': (($(window).height()-0))+'px'});
			});
		}

		var Page = (function() {

			var $navArrows = $( '#nav-arrows' ),
				$nav = $( '#nav-dots > span' ),
				slitslider = $( '#slider' ).slitslider( {
					onBeforeChange : function( slide, pos ) {

						$nav.removeClass( 'nav-dot-current' );
						$nav.eq( pos ).addClass( 'nav-dot-current' );

					}
				} ),

				init = function() {

					initEvents();
					
				},
				initEvents = function() {

					// add navigation events
					$navArrows.children( ':last' ).on( 'click', function() {

						slitslider.next();
						return false;

					} );

					$navArrows.children( ':first' ).on( 'click', function() {
						
						slitslider.previous();
						return false;

					} );

					$nav.each( function( i ) {
					
						$( this ).on( 'click', function( event ) {
							
							var $dot = $( this );
							
							if( !slitslider.isActive() ) {

								$nav.removeClass( 'nav-dot-current' );
								$dot.addClass( 'nav-dot-current' );
							
							}
							
							slitslider.jump( i + 1 );
							return false;
						
						} );
						
					} );

				};

				return { init : init };

		})();

		Page.init();

		// ====================================================================

		// Jobs

		$("#more-jobs").click(function(){
			$(this).toggleClass('on');
			$('.hidden-job').toggle(0);
		 });

		// ====================================================================

		// Carousels, Counterup e Fancybox
		//
		// Esses plugins montam a estrutura (ou leem o valor) a partir do
		// conteúdo já existente no momento em que são chamados. Como os dados
		// desses widgets (depoimentos, equipe, posts, estatísticas, galeria)
		// vêm de chamadas assíncronas do Vue (mock/API), inicializá-los
		// imediatamente pode rodar antes desse conteúdo ser renderizado,
		// deixando o carrossel "empilhado" ou o contador zerado. Um pequeno
		// atraso dá tempo do Vue terminar de renderizar antes do plugin ler o DOM.
		//
		// Se o usuário navegar para outra rota antes desses 500ms (o tempo de
		// um toque na navegação, bem comum), o timer da view ANTERIOR ainda
		// está pendente e dispara owlCarousel() sobre os elementos da view
		// NOVA (que já tem seu próprio timer agendado) — dois inits
		// concorrentes no mesmo carrossel corrompem a estrutura montada pelo
		// plugin (fica com 0 itens/stage vazio) até um F5 recarregar do zero.
		// Por isso cancelamos qualquer timer pendente antes de agendar o novo.
		if (window.__wxCarouselInitTimer) {
			clearTimeout(window.__wxCarouselInitTimer);
		}
		window.__wxCarouselInitTimer = setTimeout(function() {

			$("#blog .owl-carousel").owlCarousel({
				margin: 20,
				loop: true,
				dots: false,
				nav: true,
				navText: ['<i class="fa fa-arrow-left fa-2x"></i>','<i class="fa fa-arrow-right fa-2x"></i>'],
				responsive:{
					0:{
						items:1
					},
					767:{
						items:2
					}
				}
			});

			$("#testimonials .owl-carousel").owlCarousel({
				items: 1,
				loop: true,
				margin: 50,
				dots: false,
				autoplay: true,
				autoplaySpeed: 1500,
				nav: false
			});

			$("#clients .owl-carousel").owlCarousel({
				items: 5,
				margin: 50,
				loop: true,
				dots: false,
				nav: true,
				navText: ['<i class="fa fa-arrow-left fa-2x"></i>','<i class="fa fa-arrow-right fa-2x"></i>'],
				responsive:{
					0:{
						items:1
					},
					481:{
						items:2
					},
					767:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:6
					}
				}
			});


			// Counterup

			$('.number').counterUp({
				delay: 10, // the delay time in ms
				time: 1000 // the speed time in ms
			});

			// Fancybox (galeria de imagens da postagem do blog)

			$('.fancybox').fancybox({
				openEffect: 'none'
			});

		}, 500);

		// ====================================================================

		// Form Sliders

		$('#salary').noUiSlider({
			start: [1500,9000],
			connect: true,
			step: 100,
			range: {
				'min': 0,
				'max': 20000
			},
			format: wNumb({
				decimals: 0,
				thousand: '.',
				prefix: 'R$ '
			})
		});

		$("#salary").Link('lower').to($("#salary-field-lower"));
		$("#salary").Link('upper').to($("#salary-field-upper"));


		// ====================================================================

		// Bootstrap Wysiwyg

		$('.textarea').wysihtml5({
			toolbar: {
				"font-styles": false,
				"blockquote": false,
				"image": false,
				"fa": true
			}
		});
		
		// ====================================================================

		// Flickr Feed

		$('#flickr').jflickrfeed({
			limit: 9,
			qstrings: {
				id: '89775615@N00'
			},
			itemTemplate: 
			'<li>' +
				'<a href="{{image_b}}" class="fancybox" rel="gallery"><img src="{{image_s}}" alt="{{title}}" /></a>' +
			'</li>'
		});

		// ====================================================================

		// Register & Login

		$(".link-login").click(function () {
			$("#login").fadeIn(300);
			$("body").addClass("no-scroll");
		});

			$("#login .close").click(function () {
				$("#login").fadeOut(300);
				$("body").removeClass("no-scroll");
			});

		$(".link-register").click(function () {
			$("#register").fadeIn(300);
			$("body").addClass("no-scroll");
		});

			$("#register .close").click(function () {
				$("#register").fadeOut(300);
				$("body").removeClass("no-scroll");
			});

		// ====================================================================

		// Accordion

		function toggleChevron(e) {
	    $(e.target)
			.prev('.panel-heading')
			.find("i.indicator")
			.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
		}
		$('#accordion').on('hidden.bs.collapse', toggleChevron);
		$('#accordion').on('shown.bs.collapse', toggleChevron);

		// ====================================================================

		// Adding rows in forms

		// 1. Adding social networks

		var NewSocialNetwork='<div class="row social-network"><div class="col-sm-6"><div class="form-group" id="resume-social-network-group"><label for="resume-social-network">Rede Social</label><select  class="form-control" id="resume-social-network"><option>Escolha uma rede social</option><option>Facebook</option><option>Twitter</option><option>Instagram</option><option>LinkedIn</option><option>GitHub</option><option>Outra</option></select></div></div><div class="col-sm-6"><div class="form-group" id="resume-social-network-url-group"><label for="resume-social-network-url">URL</label><input type="text" class="form-control" id="resume-social-network-url" placeholder="http://"></div></div></div><div class="row"><div class="col-sm-12"><hr class="dashed"></div></div>'

		$("#add-social-network").click(function(){
			$(this).parent().parent().parent().before(NewSocialNetwork);
		});

		// 2. Adding experience

		var NewExperience='<div class="row experience"><div class="col-sm-6"><div class="form-group" id="resume-employer-group"><label for="resume-employer">Empregador</label><input type="text" class="form-control" id="resume-employer" placeholder="Nome da empresa"></div></div><div class="col-sm-6"><div class="form-group" id="resume-experience-dates-group"><label for="resume-experience-dates">Data de Início/Fim</label><input type="text" class="form-control" id="resume-experience-dates" placeholder="ex.: Abril 2020 - Junho 2023"></div></div></div><div class="row"><div class="col-sm-6"><div class="form-group" id="resume-job-title-group"><label for="resume-job-title">Cargo</label><input type="text" class="form-control" id="resume-job-title" placeholder="ex.: Analista de Marketing"></div></div><div class="col-sm-6"><div class="form-group" id="resume-responsibilities-group"><label for="resume-responsibilities">Responsabilidades (Opcional)</label><input type="text" class="form-control" id="resume-responsibilities" placeholder="ex.: Gestão de campanhas digitais"></div></div></div><div class="row"><div class="col-sm-12"><hr class="dashed"></div></div>'

		$("#add-experience").click(function(){
			$(this).parent().parent().parent().before(NewExperience);
		});

		// 3. Adding education

		var NewEducation='<div class="row education"><div class="col-sm-6"><div class="form-group" id="resume-school-group"><label for="resume-school">Instituição de Ensino</label><input type="text" class="form-control" id="resume-school" placeholder="Nome da instituição e cidade"></div></div><div class="col-sm-6"><div class="form-group" id="resume-education-dates-group"><label for="resume-education-dates">Data de Início/Fim</label><input type="text" class="form-control" id="resume-education-dates" placeholder="ex.: Fevereiro 2018 - Dezembro 2022"></div></div></div><div class="row"><div class="col-sm-6"><div class="form-group" id="resume-qualifications-group"><label for="resume-qualifications">Qualificação</label><input type="text" class="form-control" id="resume-qualifications" placeholder="ex.: Bacharelado em Engenharia"></div></div><div class="col-sm-6"><div class="form-group" id="resume-notes-group"><label for="resume-notes">Observações (Opcional)</label><input type="text" class="form-control" id="resume-notes" placeholder="Alguma conquista ou destaque"></div></div></div><div class="row"><div class="col-sm-12"><hr class="dashed"></div></div>'

		$("#add-education").click(function(){
			$(this).parent().parent().parent().before(NewEducation);
		});

		// ====================================================================

		// Scroll Reveal

		window.sr = new scrollReveal({
			reset: true,
			move: '50px',
			mobile: false
        });

		// ====================================================================

	})

})(jQuery);