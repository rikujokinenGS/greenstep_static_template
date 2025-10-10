<?php
    if (isset($argv[1])) {
        $tmpl = explode('=', $argv[1])[1];
        $file = __DIR__.'/src/'.$tmpl;
                
        include __DIR__.'/src/header.php';
        echo PHP_EOL;
        include file_exists($file) ? $file : __DIR__.'/src/404.php';
        echo PHP_EOL;
        include __DIR__.'/src/footer.php';    
    }
?>