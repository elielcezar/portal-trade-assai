<!DOCTYPE html>
<html>
  <head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">    
 
    <?php print $styles; ?>
    <?php print $scripts; ?>  
    <!-- Custom Fonts -->    
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php print base_path() . path_to_theme() .'/' ?>slick/slick.css">
    <link rel="stylesheet" href="<?php print base_path() . path_to_theme() .'/' ?>slick/slick-theme.css">    

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->    
    <script src="https://use.fontawesome.com/e3b6fded0c.js"></script>

    <script src="<?php print base_path() . path_to_theme() .'/' ?>js/vue.min.js"></script>
    

</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>


<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>




</body>
</html>
