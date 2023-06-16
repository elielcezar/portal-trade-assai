<?php
  include "header.tpl.php";
?>
<section class="content">

  <div class="tagline">
    <div class="container">
    <p>Conheça as oportunidades de mídia nas lojas Assaí, destaque seu produto e potencialize suas vendas.</p>
    </div>
  </div>

  <div class="container">
    <?php print $messages; ?> 

    <?php if (!empty($tabs)): ?>
    <?php print render($tabs); ?>
    <?php endif; ?>

    <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>

    <?php print render($page['content']); ?>
    

    <div class="veja-mais">
      <h2>Confira outras <strong>oportunidades</strong></h2>
      <?php print views_embed_view('oportunidades'); ?>
    </div>


  </div>

</section>

<?php include "proposta.tpl.php"; ?>

<?php
  include "footer.tpl.php";
?>