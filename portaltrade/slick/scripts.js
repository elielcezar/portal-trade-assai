jQuery(document).ready(function () {
  const w = $(window).width();
  const h = $(window).height();

  /* botão do menu */
  $(".menuBtn").click(function () {
    $(this).toggleClass("act");
    if ($(this).hasClass("act")) {
      $(".menu").addClass("act");
    } else {
      $(".menu").removeClass("act");
    }
  });

  $(".view-display-id-carrossel .view-content").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".node-type-oportunidade .view-oportunidades .view-content").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });  

  /*$(".view-cases .view-content").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });*/

  /* modal login */
  $("a.login").click(function () {
    $("#login").addClass("active");
  });
  $(".container-login a.btn.close").click(function () {
    $("#login").removeClass("active");
  });

  /* modal cadastro */
  /*$("a.cadastro").click(function (e) {
    e.preventDefault();
    $("#cadastro").addClass("active");
  });
  $(".container-cadastro a.btn.close").click(function () {
    $("#cadastro").removeClass("active");
  });
  $("#cadastro").on("click", function (e) {
    if (e.currentTarget === e.target) {
      $(this).removeClass("active");
    }
  });*/

  /* modal carrossel cases */
  /*if ($("body").hasClass("page-node-6")) {
    $(".view-cases .logo").on("click", function () {
      var itemCase = $(this).parent().find(".case");
      itemCase.clone(true, true).insertAfter("footer").addClass("case-clone");
    });
    $(".case").on("click", function (e) {
      if (e.currentTarget === e.target) {
        $(this).remove();
      }
    });
    $(".case a.close").on("click", function () {
      $(this).parents(".case").remove();
    });
  }*/

  /* modal acoes */
  if ($("body").hasClass("page-node-11")) {
    $(".view-acoes .capa").on("click", function () {
      var itemCase = $(this).parent().find(".acao");
      itemCase.clone(true).insertAfter("footer").addClass("acao-clone");
    });
    $(".acao").on("click", function (e) {
      if (e.currentTarget === e.target) {
        $(this).remove();
      }
    });
    $(".acao a.close").on("click", function () {
      $(this).parents(".acao").remove();
    });

    /* carrossel */
    /*$(".container-acao .item-list ul").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    });*/
  }

  /*var hash = window.location.hash;
  if (hash) {
    alert("teste");
  }*/

  /* tabs */
  $(document).on('click', '.tab_block_main ul li a', function (e) {
    var curTabContentId = $(this).attr('href');
    $(this).parents('.tab_block_main').find('ul li a').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.tab_block_main').find('.view-display-id-content .tab_block').removeClass('active');
    $(curTabContentId).addClass("active");
    $(curTabContentId + 'col-2 ul').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
    e.preventDefault();
  });

  /*$('.view-display-id-content .col-2 ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });*/
  
  $('.tab_block_main ul li:nth-child(1) a').click();


});
