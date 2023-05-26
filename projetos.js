
    /* JS do menu lateral */
    const tabs = document.querySelectorAll(".projeto");
    const tabBtns = document.querySelectorAll(".botao");

    const tab_Nav = function (tabBtnClick) {
        tabBtns.forEach((tabBtn) => {
            tabBtn.classList.remove("active");
        });

        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });

        tabBtns[tabBtnClick].classList.add("active");
        tabs[tabBtnClick].classList.add("active");
    }

    tabBtns.forEach((tabBtn, i) => {
        tabBtn.addEventListener("click", () => {
            tab_Nav(i);
        });
    });

    /* Swiper Projeto 1 */
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    /* Swiper Projeto 2 */
    var swiper = new Swiper(".mySwip", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 140,
            modifier: 1,
            slideShadows: true,
        },
    });

    /* JS Projeto 5 - Dark and Light Mode */
    const body = document.querySelector('.layoutCinco');
    document.querySelector('.layoutCinco .toggle').onclick = function () {
        body.classList.toggle('light')
    }

    /* JS Projeto 8 - Heroes - Resposive Website */
	let imgBx = document.querySelectorAll('.imgBx');
	imgBx.forEach(popup => popup.addEventListener('click', () =>{
		popup.classList.toggle('active')
	}))

	function toggleMenu(){
	    var menuToggle = document.querySelector('.cabecalho .toggle');
	    var navigation = document.querySelector('.navigation');
	    menuToggle.classList.toggle('active');
	    navigation.classList.toggle('active');
	}
    
    /* JS Projeto 9 - Fruits - Website Image Slider */
	// menu toggle
	let menuToggle = document.querySelector('header .toggle');
	let navgate = document.querySelector('.navgate');
	menuToggle.onclick = function() {
		menuToggle.classList.toggle('ativo');
		navgate.classList.toggle('ativo');
	}
	// trocar imagens
	function imgSlider(todas) {
		document.querySelector('.frutas').src = todas;
	}
	// trocar imagens
	function trocarBgColor(cor) {
		const bg = document.querySelector('.bg');
		bg.style.background = cor;
	}
	// adicionando classe active a thumb selecionada
	let el = document.querySelectorAll('.thumb li');
	for (let i = 0; i < el.length; i++) {
		el[i].onclick = function() {
			var c = 0;
			while (c < el.length) {
				el[c++].className = 'check';
			}
			el[i].className = 'check ativo';
		}
	}