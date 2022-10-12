$(document).ready(
    $("#back").delay(300).fadeOut(500),
    // $("#back").delay(1500).remove("#back"),
$("#header").html(`<div class="container">
<h1><a class="navbar-brand" href="index.html"><img src="./img/LOGO.png" alt=""></a></h1>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link" href="about.html">關於我們</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">最新消息</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                產品介紹
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="product.html">精選冰品</a></li>
                <li><a class="dropdown-item" href="product.html">享受下午茶</a></li>
                <li><a class="dropdown-item" href="product.html">高雅甜點</a></li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="connection.html">聯絡我們</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)" onclick="openMenberSide()"><i class="fa-solid fa-user"></i></a>
        </li>
    </ul>
</div>
</div>`),
$("#banner").html(`<div class="page-banner" style="height:300px;">
<div></div>
</div>`),
$("#footer").html(`<div class="container">
<div class="row justify-content-between ">
    <div class="col-3 footer-info px-5 ">
        <h3 class="text-light">Information</h3>
        <ul class="p-0 text-light ">
            <li><i class="fa-solid fa-house"></i>0124, Munnawali Street
                Sydney, AU 302012</li>
            <li><i class="fa-solid fa-phone"></i>0141-430-3949</li>
            <li><i class="fa-solid fa-fax"></i>0141-123-4567</li>
            <li><i class="fa-regular fa-envelope"></i><a href="">support@gmail.com</a></li>
        </ul>
    </div>
    <div class="col-6 footer-center px-5 text-center">
        <img src="./img/LOGO.png" alt="">
        <p class="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
            pariatur nihil
            voluptate vero impedit repudiandae iure, repellendus beatae harum amet expedita quasi eius
           .</p>
    </div>
    <div class="col-3 footer-link px-5">
        <h3 class="text-light">Link</h3>
        <ul class="p-0">
            <li><a href="index.html"><i class="fa-regular fa-circle"></i> Home</a></li>
            <li><a href="about.html"><i class="fa-regular fa-circle"></i> About Us</a></li>
            <li><a href="news.html"><i class="fa-regular fa-circle"></i> News</a></li>
            <li><a href="product.html"><i class="fa-regular fa-circle"></i> Product</a></li>
            <li><a href="connection.html"><i class="fa-regular fa-circle"></i> Contact</a></li>
        </ul>
    </div>
</div>
</div>`))

// 會員專區側邊攔
function openMenberSide() {
    document.getElementById("MenberSide").style.width = "250px";
}
function closeMenberSide() {
    document.getElementById("MenberSide").style.width = "0";
}