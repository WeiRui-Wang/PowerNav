if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        myInitCode();
    });
}

function myInitCode() {

        console.log("Test!");


        Array.prototype.forEach.call(document.querySelectorAll('a[href][class*="nav"], section[class*="bar"] a[href], div[class*="nav"] a[href], li a[href]'), function (element) {
            element.style.background = "green";
        })
        //
        // var a = document.getElementsByTagName("nav");
        // a
        //
        // .style.background = "pink")
        // console.log(abc);
        // abc.body.style.background = "pink";

}