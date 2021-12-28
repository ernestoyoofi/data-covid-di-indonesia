function ShowHome()
{
 document.getElementById("home").style.display ="inline";
 document.getElementById("berita").style.display = "none";
 document.getElementById("tentang").style.display = "none"; 
 document.getElementById("title-pages").innerHTML = "Data Covid Di Indonesia | Beranda";
document.getElementById("btn-home").innerHTML = "Home <i class='fa fa-home fs-10'></i>";
 document.getElementById("btn-home").style.backgroundColor = "#04AA6D";
 document.getElementById("btn-news").style.backgroundColor = "#333";
 document.getElementById("btn-about").style.backgroundColor = "#333";
}
function ShowBerita()
{
 document.getElementById("home").style.display ="none";
 document.getElementById("berita").style.display = "inline";
 document.getElementById("tentang").style.display = "none";
  document.getElementById("title-pages").innerHTML = "Data Covid Di Indonesia | Berita";
 document.getElementById("btn-home").innerHTML = "Home <i class='fa fa-caret-left fs-10'></i>";
 document.getElementById("btn-home").style.backgroundColor = "#333";
 document.getElementById("btn-news").style.backgroundColor = "#04AA6D";
 document.getElementById("btn-about").style.backgroundColor = "#333";
}
function ShowTentang()
{
 document.getElementById("home").style.display ="none";
 document.getElementById("berita").style.display = "none";
 document.getElementById("tentang").style.display = "inline";
  document.getElementById("title-pages").innerHTML = "Data Covid Di Indonesia | Tentang";
document.getElementById("btn-home").innerHTML = "Home <i class='fa fa-caret-left fs-10'></i>";
 document.getElementById("btn-home").style.backgroundColor = "#333";
 document.getElementById("btn-news").style.backgroundColor = "#333";
 document.getElementById("btn-about").style.backgroundColor = "#04AA6D";
}
