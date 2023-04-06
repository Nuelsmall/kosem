

const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");

// dropdown/filter functionality
dropDown.addEventListener("click", () => {
  dropElem.classList.toggle("showDropDown");
  console.log("Hello");
});


{/* <script type="text/javascript">
        var referenceHeight = document.querySelector('.jumbotron').offsetHeight;
        document.getElementsByTagName('body')[0].onscroll = function(){
            let scrollTop = document.querySelector('.new-search-form').getBoundingClientRect().top
    
            if(scrollTop < 7)
            {
                document.querySelector('.search-form-container.container').classList.add('static');
            }
    
            if(document.getElementsByTagName('html')[0].scrollTop < referenceHeight+50)
            {
                document.querySelector('.search-form-container.container').classList.remove('static');
    
            }
        }
    </script> */}