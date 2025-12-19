document.getElementById("navbar").innerHTML=`
<div class="container" id="navbar">
<div class="row">
<div class="col-12" id="firstlink">
<a href="index.html">
<img src="ASSETS/IMAGES/ChatGPT Image Dec 17, 2025, 06_06_14 PM.png" alt="" style="height:50px; vertical-align: middle;>
</a>
<a href="index.html">Home</a>

<div class="dropdown">
<a href="" class="dropdown-toggle" id="brandsLink">Brands ▼</a>
<div class="dropdown-menu" id="brandsDropdown">
<a href="samsung.html">Samsung</a><br>
<a href="apple.html">Apple</a><br>
<a href="xiaomi.html">Xiaomi</a>
</div>
</div>

<div class="dropdown">
<a href="" class="dropdown-toggle" id="specsLink">Specs ▼</a>
<div class="dropdown-menu" id="specsDropdown">
<a href="ram.html">RAM</a><br>
<a href="storage.html">Storage</a><br>
<a href="camera.html">Camera</a>
</div>
</div>

<a href="aboutus.html">About Us</a>
<a href="contactus.html">Contact Us</a>
</div>
</div>
`
function toggleDropdown(linkId, dropdownId) {
    var link = document.getElementById(linkId);
    var dropdown = document.getElementById(dropdownId);

    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
    document.addEventListener('click', function(e) {
        if (!link.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
}

toggleDropdown('brandsLink', 'brandsDropdown');
toggleDropdown('specsLink', 'specsDropdown');
document.getElementById("mainbanner").innerHTML=`
<img class="img-fluid" src="ASSETS/IMAGES/ChatGPT Image Dec 17, 2025, 06_01_05 PM.png" alt="">
`
document.getElementById("footermain").innerHTML=`
<div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-12 col-md-6" id="footercol">
                    <h2>ABOUT US</h2>
                    <p>CellInfo is a mobile phone information and comparison website designed to help users explore mobile phones by brand, features, and specifications. Users can compare phones, view brief summaries, and download detailed feature documents for informed decision-making.</p>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-6" id="footercol">
                    <h2>QUICK LINKS</h2>
                    <h5><a href="index.html">HOME</a></h5>
                    <h5><a href="aboutus.html">ABOUT US</a></h5>
                    <h5><a href="contactus.html">CONTACT US</a></h5>
                    <a href=""></a>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-6" id="footercol">
                    <h2>POPULAR BRANDS</h2>
                    <h5><a href="apple.html">APPLE PHONES</a></h5>
                    <h5><a href="samsung.html">SAMSUNG PHONES</a></h5>
                    <h5><a href="xiaomi.html">xiaomi PHONES</a></h5>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-6" id="footercol">
                <h2>CONTACT US</h2>
                <h5>ADDRESS: A-65, ACME Co., Street no 12, New York</h5>
                <h5>PHONE NUMBER:+001-28272300</h5>
                <h5>Email Address: webmaster@cellinfo.com</h5>
                </div>
            </div>
        </div>
`