<section id="proposta">
  <div class="container">
    <div class="row">
      <div class="cadastro">
        <!--h3>Fique sempre informado e receba em primeira mão nossa oportunidades. <strong>Cadastre-se agora mesmo!</strong></h3-->
        <?php //print render($page['footer']); 
        ?>
        <a href="https://megamidiagroup.com.br/portaltradeassai/user/register"><img src="<?php print base_path() . path_to_theme() . '/' ?>img/banner-footer2.png" /></a>
        <a href="https://megamidiagroup.com.br/portaltradeassai/user/register" class="btn">
          Clique aqui
        </a>
      </div>
      <div class="proposta">
        <div class="cta">
          <h3><strong>Solicite uma proposta</strong> para nossa equipe comercial</h3>
          <a href="https://web.whatsapp.com/send?phone=5511994447587&text=Olá" class="btn" target="_blank">Tenho Interesse</a>

        </div>
      </div>
    </div>
  </div>
</section>

<section id="carrossel-noticias">
  <div class="container">
    <?php print views_embed_view('noticias', 'carrossel'); ?>
  </div>
</section>