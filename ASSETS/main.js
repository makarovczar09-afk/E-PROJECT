document.getElementById("navbar").innerHTML=`
<div class="container" id="navbar">
<div class="row">
<div class="col-12" id="firstlink">
<a href="index.html">
<img src="ASSETS/IMAGES/ChatGPT Image Dec 16, 2025, 06_23_05 PM.png" alt="Cellinfo.co Logo" style="height:40px; vertical-align: middle;">
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