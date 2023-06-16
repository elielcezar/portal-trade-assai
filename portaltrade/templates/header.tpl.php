<!--a class="menuBtn">
      <span class="lines"></span>
</a-->
<div class="menu-mobile">
  <div class="mainContainer">
    <nav></nav>
  </div>
</div>

<header>
  <div class="container">


    <nav class="nav">

      <div class="logo">
        <a href="<?php print base_path(); ?>"><img src="<?php print base_path() . path_to_theme() . '/' ?>img/logo-portal-trade.png" alt=""></a>
      </div>

      <?php print render($page['header']); ?>

      <!--ul class="menu-1">
        <li>
          <a href="<?php print base_path(); ?>fique-por-dentro">Fique por Dentro</a>
        </li>
        <li>
          <a href="<?php print base_path(); ?>oportunidades">Oportunidades</a>
        </li>
      </ul>
      <ul class="menu-2">
        <li>
          <a href="<?php print base_path(); ?>cases">Cases</a>
        </li>               
        <li>
          <a href="<?php print base_path(); ?>user/register" class="cadastro">Cadastre-se</a>
        </li>
        <li>
          <a href="<?php print base_path(); ?>user" class="login">Login</a>
        </li>
      </ul-->
    </nav>

  </div>
</header>

<?php //print render($page['header']); 
?>