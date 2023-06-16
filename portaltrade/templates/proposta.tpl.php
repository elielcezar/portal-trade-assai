<section id="proposta">
  <div class="container">
    <div class="row">
      <div class="cadastro">
        <h3>Fique sempre informado e receba em primeira mão nossa oportunidades. <strong>Cadastre-se agora mesmo!</strong></h3>
        <?php print render($page['footer']); ?>
      </div>
      <div class="proposta">
        <div class="cta">
          <h3><strong>Solicite uma proposta</strong> para nossa equipe comercial</h3>
          <a href="mailto:leonardo.reis@megamidia.com.br" class="btn" target="_blank">Tenho Interesse</a>

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
