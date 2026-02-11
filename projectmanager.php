<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Style/bootstrap.min.css">
    <link rel="stylesheet" href="Style/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 <nav class="fixed-top navbar navbar-expand bg-primary pb-2 pt-0" style="height:72px">
        <a href="index.html" class="mb-2 mt-2 ms-2 p-0"><h1 class="text-light mt-2 mb-0">CaracaSoftware</h1></a>
        <ul class=" list-group list-group-horizontal ms-auto mt-3">
        <h5 class="list-group-item border-0 bg-primary text-light">
            Welcome <b><?php session_start();ob_start();echo $_SESSION['name'].' '.$_SESSION['lastName'];?></b>
        </h5>
    </nav>
               
  
</body>
</html>