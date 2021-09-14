(function() {
    document.querySelectorAll('.loadTab').forEach(function(tabButton){
        tabButton.addEventListener('click', function(event){
            document.querySelectorAll('.tab-slide').forEach(function(tabSlide){
                tabSlide.style.left = "-100%";
                tabSlide.classList.remove('tab-active');
            });
            document.querySelectorAll('.loadTab').forEach(function(tabActiveButton){
                tabActiveButton.classList.remove('active');
            });
            tabButton.classList.add('active');
            let targetTab = document.getElementById(this.dataset.tab);
            setTimeout(function () {
                targetTab.classList.add("tab-active");
                targetTab.style.left = "0";
            },500);
        });
    });

    /* url detector */
    let href = window.location.href;
    let baseURL = href + '/';
    let slugs = href.replace(baseURL,'');
    let slugArr = slugs.split("/");
    if( slugArr.includes("#demo") ) {

        document.querySelectorAll('.tab-slide').forEach(function(tabSlide){
            tabSlide.style.left = "-100%";
            tabSlide.classList.remove('tab-active');
        });
        document.querySelectorAll('.loadTab').forEach(function(tabActiveButton){
            tabActiveButton.classList.remove('active');
        });
        document.getElementById("demo").classList.add('active');
        let targetTab = document.getElementById("demo-part");
        setTimeout(function () {
            targetTab.classList.add("tab-active");
            targetTab.style.left = "0";
        },500);
   
    }


    


})();