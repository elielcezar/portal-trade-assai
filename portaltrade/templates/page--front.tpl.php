<?php
include "header.tpl.php";
?>

<section id="top">
  <div class="banner">
    <img src="<?php print base_path() . path_to_theme() . '/' ?>img/banner-home-mob.jpg" class="mobile" alt="">
    <img src="<?php print base_path() . path_to_theme() . '/' ?>img/banner-home-desk.jpg" class="desktop" alt="">
  </div>
  <div class="tagline">
    <div class="container">      
      <p>As últimas notícias do varejo e <strong>as melhores oportunidades em<br/>retail media para sua marca</strong> estão aqui</p>
    </div>
  </div>
</section>
<section id="content">
  <div class="container">
    
    <?php //print $messages; ?>

    <div class="row">
      <div class="item cases">

        <a href="<?php print base_path(); ?>cases"><img src="<?php print base_path() . path_to_theme() . '/' ?>img/cases-home.jpg" alt=""></a>
        <div class="info">
          <h3>Cases</h3>
          <p>Veja como a presença estratégica da marca no ponto de venda influência no resultado de venda.</p>
          <a href="<?php print base_path(); ?>cases" class="btn">Veja mais!</a>
        </div>
      </div>
      <div class="item oportunidades">
        <a href="<?php print base_path(); ?>retail-media"><img src="<?php print base_path() . path_to_theme() . '/' ?>img/oportunidades-home.jpg" alt=""></a>
        <div class="info">
          <h3>Retail Media</h3>
          <p>Conheça as oportunidades de mídia nas lojas Assaí, destaque seu produto e potencialize suas vendas. </p>
          <a href="<?php print base_path(); ?>retail-media" class="btn">Veja mais!</a>
        </div>
      </div>
      <div class="item pordentro">
        <a href="<?php print base_path(); ?>fique-por-dentro"><img src="<?php print base_path() . path_to_theme() . '/' ?>img/pordentro-home.jpg" alt=""></a>
        <div class="info">
          <h3>Fique por Dentro</h3>
          <p>Confira as novidades do varejo e da indústria no Portal Trade Assaí</p>
          <a href="<?php print base_path(); ?>fique-por-dentro" class="btn">Veja mais!</a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include "proposta.tpl.php"; ?>

<?php
include "footer.tpl.php";
?>