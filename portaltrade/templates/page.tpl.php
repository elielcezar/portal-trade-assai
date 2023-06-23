<?php
  include "header.tpl.php";
?>
<section id="content">

  <?php print $messages; ?>

  
  
  

  <?php if (!empty($tabs)): ?>
  <?php print render($tabs); ?>
  <?php endif; ?>

  <?php print render($page['content']); ?>

</section>

<?php include "proposta.tpl.php"; ?>

<?php
  include "footer.tpl.php";
?>