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

  //$('.view-display-id-content .tab_block').hide();

 /*
  $("#nid-32 .col-2 ul").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });

  $("#nid-33 .col-2 ul").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });

  $("#nid-34 .col-2 ul").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });

  $("#nid-35 .col-2 ul").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });

  $("#nid-36 .col-2 ul").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });*/

  $('.view-display-id-content .tab_block').each(function() {

    var itemId = $(this).attr('id');
    console.log('#'+itemId + '.col-2 ul');

    $('#'+itemId + ' .col-2 ul').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoPlay: true
    });     
   
  }); 


  $('.view-display-id-tabs ul li a').on('click', function (e) {    
    var curTabContentId = $(this).attr('href');
    $(this).parents('.view-display-id-tabs').find('ul li a').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.tab_block_main').find('.view-display-id-content .tab_block').removeClass('active');
    $(curTabContentId).addClass("active");    
    e.preventDefault();
  });

  $('.tab_block_main ul li:nth-child(1) a').click();


  /* cadastro de usuario */
  $('.messages').insertBefore('#user-register-form');

  var optionsCPF =  {
    onKeyPress: function(cep, e, field, options) {
      var masks = ['000.000.000-000', '00.000.000/0000-00'];
      var mask = (cep.length>14) ? masks[1] : masks[0];
      $('#edit-field-cpf-und-0-value').mask(mask, options);
  }};
  $('#edit-field-cpf-und-0-value').mask('000.000.000-000', optionsCPF);

  var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  spOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
  };
  $('#edit-field-telefone-cadastro-und-0-value').mask(SPMaskBehavior, spOptions);


  if($('body').hasClass('.logged-in')){
    $('#block-views-nome-usuario-block-1').appendTo('nav ul.menu');
  }

});
