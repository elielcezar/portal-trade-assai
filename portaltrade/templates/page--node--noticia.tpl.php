<?php
  include "header.tpl.php";
?>

<div id="main" class="noticia">

  <section id="top">
    <div class="banner">
      <img src="<?php print base_path() . path_to_theme() . '/' ?>img/banner-noticia.jpg" alt="">
    </div>   
  </section>

  <?php print $messages; ?>
     
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>

  <article>
    <div class="container">      
        <div class="header">
        <?php print views_embed_view('topo_noticia'); ?>
        </div>    

        <div class="content">
          <?php print render($page['content']); ?> 
        </div>

        <div class="sidebar">
          
          <?php include "sidebar.tpl.php"; ?>
          
        </div>
    </div>
  </article>

</div>

<?php
  include "footer.tpl.php";
?>