<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../../Style/bootstrap.min.css">
    <link rel="stylesheet" href="../../Style/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        session_start();
        ob_start();
    ?>
    <nav class="navUser shadow bg-primary bg-gradient">
        <div class="title">
            <h4 class="text-light"><b>CaracaSoftware</b></h4>
        </div>
        <div class="options list-group gap-3 mt-5">
            <a class="list-group-item-primary list-group-item-action text-light opt_user" href="">
                <div class="row">
                    <div class="col-1 ms-2" >
                        <img class="text-light img_nav" src="../../Style/icons/user.svg" alt="">
                    </div>
                    <div class="col" >
                        My Profile
                    </div>
                </div>                
            </a>
            <a class="list-group-item-primary list-group-item-action text-light opt_user" href="">
                <div class="row">
                    <div class="col-1 ms-2" >
                        <img class="text-light img_nav" src="../../Style/icons/myProjects.svg" alt="">
                    </div>
                    <div class="col" >
                        Projects
                    </div>
                </div>                
            </a>
        </div>
    </nav>
    
    <div class="user_info">
            <div class="bg-primary bg-gradient user_data user_data_container shadow">
                <div class="img_user">
                    <img src="../../Style/icons/user-circle.svg" alt="">
                </div>
                <div class="text_user">
                    <h5 class="mt-1 text-light"><?php echo $_SESSION['name'].' '. $_SESSION['lastName']?></h5>
                </div>
            </div>
    </div>
</body>
</html>