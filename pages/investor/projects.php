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
        if(!$_SESSION['name'] || !$_SESSION['lastName']){
            header("location:../../index.php");
        }
    ?>

    <nav class="navUser shadow bg-primary bg-gradient d-flex flex-column">
        <div class="title">
            <h4 class="text-light"><b>CaracaSoftware</b></h4>
        </div>
        <div class="options list-group gap-3 mt-5">
            <a class="list-group-item-primary list-group-item-action text-light opt_user" href="#">
                <div class="row">
                    <div class="col-1 ms-2" >
                        <img class="text-light img_nav" src="../../Style/icons/user.svg" alt="">
                    </div>
                    <div class="col" >
                        My Profile
                    </div>
                </div>                
            </a>
            <a class="list-group-item-primary list-group-item-action text-light opt_user" href="projects.php">
                <div class="row">
                    <div class="col-1 ms-2" >
                        <img class="text-light img_nav" src="../../Style/icons/myProjects.svg" alt="">
                    </div>
                    <div class="col" >
                        Projects
                    </div>
                </div>                
            </a>
            <a class="list-group-item-primary list-group-item-action text-light opt_user" href="projects_vote.php">
                <div class="row">
                    <div class="col-1 ms-2" >
                        <img class="text-light img_nav" src="../../Style/icons/myProjects.svg" alt="">
                    </div>
                    <div class="col" >
                        Projects vote
                    </div>
                </div>                
            </a>
            <a href="../../index.php" class="text-decoration-none text-reset opt_user mt-auto mb-3">
                <button class="btn btn-danger w-100"> 
                        Exit
                </button>
            </a>
        </div>
    </nav>
    
    <div class="user_info">
            <div class="bg-primary bg-gradient user_data user_data_container shadow">
                <div class="img_user">
                    <img src="../../Style/icons/user-circle.svg" alt="">
                </div>
                <div class="text_user">
                    <h5 class="mt-1 text-light"><?php echo 'Investor: '.$_SESSION['name'].' '. $_SESSION['lastName']?></h5>
                </div>
            </div>
    </div>

    <main class="main_content">
        <div class="col-10">
            <input class="form-control mb-3" type="text" name="" id="searchProject" placeholder="Search . . . . . .">
        </div>
        <div class="col-10">
            <table class="table">
                <thead>
                    <tr>
                        <th class="col-2 text-center border">Title</th>
                        <th class="text-center border">Description</th>
                        <th class="col-1 text-center border">Approval date</th>
                        <th class="col-2 text-center border">Management Time</th>
                        <th class="col-1 text-center border">Priority</th>
                    </tr>
                </thead>
                <tbody id="projects">
                </tbody>
            </table>            
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-4.0.0.js" integrity="sha256-9fsHeVnKBvqh3FB2HYu7g2xseAZ5MlN6Kz/qnkASV8U=" crossorigin="anonymous"></script>
    <script type="module" src="../../JS/investor_js/projects.js"></script>
</body>
</html>