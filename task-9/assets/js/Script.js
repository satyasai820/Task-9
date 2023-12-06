var swiper;
    let x = JSON.parse(card);
    let percentage;
    let btn="";
    function myfun(status){     
        let hcontent = "";
        x.map((item) =>{
            if(item.status === status){ 
                if(item.status == 'Avaliable'){
                    document.getElementById("hname").innerHTML = "Avaliable items"
                    btn = `<button type="button" class="btn btn-success ">Order Now</button>`
                }
                else if(item.status == 'upComing'){
                    document.getElementById("hname").innerHTML = "Up-Coming Items"
                    btn = `<button type="button" class="btn btn-warning ">Coming Soon</button>`
                }
                else if(item.status == 'Missed'){
                    document.getElementById("hname").innerHTML = "Out of stock"
                    btn = `<button type="button" class="btn btn-danger ">Out Of Stock</button>`;
                }

              //percentage function
                function per(price,dis){
                    let disscount=Math.floor(price*(dis/100));
                    let rs = price - disscount;
                    return rs;
                  }

                  //rating loop
                 let Rating ="";
                 for (let i = 1; i <= 5; i++) {
                    if (i <= item.rate) {
                      Rating += '<span class="fa fa-star checked"></span>';
                    } else {
                      Rating += '<span class="fa fa-star"></span>';
                    }
                  }  

                  //card data
                hcontent +=` 
                            <div class="swiper-slide">
                            <div class="card text-center"  >
                                        <img src="${item.img}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${item.name}</h5>
                                            <p class="card-text"> <span class="fw-bold fs-4">₹${per(item.price,item.dis)}</span> ₹<span class="text-decoration-line-through">${item.price}</span> <span class="text-success fw-bold" >${item.dis}%off</span></p>
                                            <p>${Rating}</p>
                                            <p class="text-center">${btn}</p>
                                        </div>
                                        <div class="card-footer border-0 bg-white text-center">    
                                    </div>
                                    </div>
                                </div>`
            }         
        });
       document.getElementById("hi").innerHTML = hcontent;
        
       if(swiper){
        swiper.destroy(true,true);
       }

      //  swiper start
        swiper = new Swiper(".mySwiper", {
        slidesPerView: 5 ,
        spaceBetween: 30,
       
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            319: {
              slidesPerView: 1,
              spaceBetween:10,
            },
            426: {
              slidesPerView: 2,
              spaceBetween:20,
    
    
            },
    
    
            769: {
              slidesPerView: 3,
              spaceBetween:30,
    
    
            },
            1025: {
              slidesPerView: 5,
              spaceBetween:20,
    
    
            },
    
            },
      });

    
       
      
    }
   

