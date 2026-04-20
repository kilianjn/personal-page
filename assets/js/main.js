/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

	// Theme toggle
		function toggleTheme() {
			const body = document.body;
			body.classList.toggle('light-mode');
			const isLight = body.classList.contains('light-mode');
			localStorage.setItem('theme', isLight ? 'light' : 'dark');
			document.getElementById('theme-toggle').textContent = isLight ? '☀️' : '🌙';
		}

		// Initialize theme
		const savedTheme = localStorage.getItem('theme') || 'dark';
		if (savedTheme === 'light') {
			document.body.classList.add('light-mode');
			document.getElementById('theme-toggle').textContent = '☀️';
		} else {
			document.getElementById('theme-toggle').textContent = '🌙';
		}

		// Theme toggle event
		document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

	// Language switching
		const translations = {
			en: {
				title: "Kilian's home(page)",
				headerTitle: "<strong>Kilian Jain</strong><br />Physics | 3D-printing | Programming<br />Plus random stuff.",
				welcome: "Welcome!",
				niceToMeet: "Nice to meet you.",
				intro: "I am a clinical physicist working with Magnetic Resonance Imaging at the Uppsala University Hospital (Akademiska Sjukhuset). Born and raised in Bochum, Germany where I received my BSc and MSc in Physics, I decided to move to Sweden in early 2023.<br/>With a deep technical background I have accumulated a particular set of skills over the years ranging from Scientific Programming, App Development, Deep Knowledge of MRI, Analytical Problem Solving to finishing a bottle of beer in the most efficient way. When posed a problem I value creative thinking and a hands-on approach when tackling it. <br/>My leisure is filled with tons of different and sometimes even random stuff; be my guest and take a look. Find my CV down below ;)",
				fullCV: "Full CV",
				recentWork: "Recent Work",
				work1Title: "3D-printing",
				work1Desc: "An invaluable tool in my arsenal has become the art of 3D-modelling and printing. Coming up with an idea, turning it into bits and finally producing a corresponding piece of matter has transformed so many problems into interesting hobby projects and made me aware of how big the problem-space one can tackle really is.",
				work2Title: "Brazilian Jiu Jitsu",
				work2Desc: "Proud athlete and dipping my toes into competitions, and yes, I won that match",
				work3Title: "Sewing",
				work3Desc: "Making clothes while exploring my inner grandma",
				work4Title: "My masters project",
				work4Desc: "Combining two things I like, playing around with multi million dollar MRIs, 3D printing and coming up with analysis tool for the images, check it out on <a href=\"https://github.com/kilianjn/orqa\">Github</a>",
				work5Title: "Swedish Sauna Aufguss Championship",
				work5Desc: "Got to participate in the first Swedish Championship (SM) in classic Aufguss. It was a great time and I placed in the upper half which I can live with as a hobbyist sauna guru",
				backToStart: "Back to Start",
				footerText: "Made with <3 with help from <a href=\"http://html5up.net\">HTML5 UP</a>"
			},
			de: {
				title: "Kilians Homepage",
				headerTitle: "<strong>Kilian Jain</strong><br />Physik | 3D-Druck | Programmieren<br />Plus zufällige Sachen.",
				welcome: "Willkommen!",
				niceToMeet: "Schön dich kennenzulernen.",
				intro: "Ich bin ein klinischer Physiker, der mit Magnetresonanztomographie am Universitätsklinikum Uppsala (Akademiska Sjukhuset) arbeitet. Geboren und aufgewachsen in Bochum, Deutschland, wo ich meinen BSc und MSc in Physik erhalten habe, habe ich mich entschieden, Anfang 2023 nach Schweden zu ziehen.<br/>Mit einem tiefen technischen Hintergrund habe ich im Laufe der Jahre eine Reihe von Fähigkeiten angesammelt, von wissenschaftlicher Programmierung, App-Entwicklung, tiefem Wissen über MRT, analytischer Problemlösung bis hin zum effizienten Leeren einer Bierflasche. Wenn ich mit einem Problem konfrontiert bin, schätze ich kreatives Denken und einen praktischen Ansatz bei der Bewältigung. <br/>Meine Freizeit ist voller verschiedener und manchmal sogar zufälliger Dinge; sei mein Gast und schau es dir an. Meinen CV findest du unten ;)",
				fullCV: "Vollständiger Lebenslauf",
				recentWork: "Aktuelle Arbeiten",
				work1Title: "3D-Druck",
				work1Desc: "Eine unschätzbare Waffe in meinem Arsenal ist die Kunst des 3D-Modellierens und Druckens geworden. Eine Idee zu haben, sie in Bits umzuwandeln und schließlich ein entsprechendes Stück Materie zu produzieren, hat so viele Probleme in interessante Hobbyprojekte verwandelt und mich darüber bewusst gemacht, wie groß der Problemraum ist, den man wirklich angehen kann.",
				work2Title: "Brasilianisches Jiu Jitsu",
				work2Desc: "Stolzer Athlet und tauche meine Zehen in Wettkämpfe, und ja, ich habe diesen Kampf gewonnen",
				work3Title: "Nähen",
				work3Desc: "Kleidung machen, während ich meine innere Oma erkunde",
				work4Title: "Mein Masterprojekt",
				work4Desc: "Zwei Dinge kombinieren, die ich mag, mit Multimillionen-Dollar-MRTs herumspielen, 3D-Druck und ein Analysetool für die Bilder entwickeln, schau es dir auf <a href=\"https://github.com/kilianjn/orqa\">Github</a> an",
				work5Title: "Schwedische Sauna-Aufguss-Meisterschaft",
				work5Desc: "Ich durfte an der ersten schwedischen Meisterschaft (SM) im klassischen Aufguss teilnehmen. Es war eine großartige Zeit und ich habe mich in der oberen Hälfte platziert, was ich als Hobby-Sauna-Guru akzeptieren kann",
				backToStart: "Zurück zum Anfang",
				footerText: "Gemacht mit <3 mit Hilfe von <a href=\"http://html5up.net\">HTML5 UP</a>"
			},
			sv: {
				title: "Kilians hemsida",
				headerTitle: "<strong>Kilian Jain</strong><br />Fysik | 3D-utskrift | Programmering<br />Plus random saker.",
				welcome: "Välkommen!",
				niceToMeet: "Trevligt att träffas.",
				intro: "Jag är en klinisk fysiker som arbetar med magnetresonanstomografi på Akademiska sjukhuset i Uppsala. Född och uppvuxen i Bochum, Tyskland där jag fick min BSc och MSc i fysik, bestämde jag mig för att flytta till Sverige i början av 2023.<br/>Med en djup teknisk bakgrund har jag samlat på mig en rad färdigheter genom åren från vetenskaplig programmering, apputveckling, djup kunskap om MRT, analytisk problemlösning till att tömma en ölflaska på det mest effektiva sättet. När jag ställs inför ett problem värdesätter jag kreativt tänkande och en praktisk approach när jag tacklar det. <br/>Min fritid är fylld av massor av olika och ibland till och med slumpmässiga saker; var min gäst och ta en titt. Hitta mitt CV nedan ;)",
				fullCV: "Fullständigt CV",
				recentWork: "Senaste arbetet",
				work1Title: "3D-utskrift",
				work1Desc: "Ett ovärderligt verktyg i mitt arsenal har blivit konsten att 3D-modellera och skriva ut. Att komma på en idé, förvandla den till bitar och slutligen producera ett motsvarande stycke materia har förvandlat så många problem till intressanta hobbyprojekt och gjort mig medveten om hur stort problemområdet man verkligen kan tackla är.",
				work2Title: "Brasiliansk Jiu Jitsu",
				work2Desc: "Stolt atlet och doppar tårna i tävlingar, och ja, jag vann den matchen",
				work3Title: "Sömnad",
				work3Desc: "Gör kläder medan jag utforskar min inre mormor",
				work4Title: "Mitt masterprojekt",
				work4Desc: "Kombinera två saker jag gillar, leka med multimiljoners MRT, 3D-utskrift och komma på analysverktyg för bilderna, kolla in det på <a href=\"https://github.com/kilianjn/orqa\">Github</a>",
				work5Title: "Svenska Sauna Aufguss Mästerskapet",
				work5Desc: "Fick delta i det första svenska mästerskapet (SM) i klassisk Aufguss. Det var en fantastisk tid och jag placerade mig i den övre halvan vilket jag kan leva med som hobby-sauna-guru",
				backToStart: "Tillbaka till början",
				footerText: "Gjort med <3 med hjälp från <a href=\"http://html5up.net\">HTML5 UP</a>"
			}
		};

		function setLanguage(lang) {
			document.title = translations[lang].title;
			document.getElementById('header-title').innerHTML = translations[lang].headerTitle;
			document.getElementById('welcome').textContent = translations[lang].welcome;
			document.getElementById('nice-to-meet').textContent = translations[lang].niceToMeet;
			document.getElementById('intro').innerHTML = translations[lang].intro;
			document.getElementById('full-cv').textContent = translations[lang].fullCV;
			document.getElementById('recent-work').textContent = translations[lang].recentWork;
			document.getElementById('work1-title').textContent = translations[lang].work1Title;
			document.getElementById('work1-desc').innerHTML = translations[lang].work1Desc;
			document.getElementById('work2-title').textContent = translations[lang].work2Title;
			document.getElementById('work2-desc').textContent = translations[lang].work2Desc;
			document.getElementById('work3-title').textContent = translations[lang].work3Title;
			document.getElementById('work3-desc').textContent = translations[lang].work3Desc;
			document.getElementById('work4-title').textContent = translations[lang].work4Title;
			document.getElementById('work4-desc').innerHTML = translations[lang].work4Desc;
			document.getElementById('work5-title').textContent = translations[lang].work5Title;
			document.getElementById('work5-desc').textContent = translations[lang].work5Desc;
			document.getElementById('back-to-start').textContent = translations[lang].backToStart;
			document.getElementById('footer-text').innerHTML = translations[lang].footerText;
			localStorage.setItem('selectedLanguage', lang);
		}

		// Initialize language
		const savedLang = localStorage.getItem('selectedLanguage') || 'en';
		document.getElementById('lang-select').value = savedLang;
		setLanguage(savedLang);

		// Language selector event
		document.getElementById('lang-select').addEventListener('change', function() {
			setLanguage(this.value);
		});

})(jQuery);