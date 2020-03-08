$(document).ready(() => {

    function createCard(element, even) {
        if (even) {
            var template = `<section class="row tm-section tm-mb-30">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div class="tm-flex-center p-5">
                <div class="tm-flex-center tm-flex-col">
                  <h2 class="tm-align-left fs-18px">${element.name}</h2>
                  <p class="fs-15px">${element.description}</p>
                  <a href="${element.url}" target="_blank" class="btn btn-primary">En savoir plus</a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0 text-center overflow-hidden" id="whole_img">
              <img src="img/${element.image}" alt="Image" class="img-fluid custom-img"/>
              <a href="img/${element.image}" class="hover-glass"><img src="img/search.png" class="ico-glass"/></a>
            </div>
          </section>`;
        } else {
            var template = `<section class="row tm-section tm-mb-30">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0 text-center overflow-hidden" id="whole_img">
              <img src="img/${element.image}" alt="Image" class="img-fluid custom-img"/>
              <a href="img/${element.image}" class="hover-glass"><img src="img/search.png" class="ico-glass"/></a>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div class="tm-flex-center p-5">
                <div class="tm-flex-center tm-flex-col">
                  <h2 class="tm-align-left fs-18px">${element.name}</h2>
                  <p class="fs-15px">${element.description}</p>
                  <a href="${element.url}" target="_blank" class="btn btn-primary">En savoir plus</a>
                </div>
              </div>
            </div>
          </section>`;
        }
        
      $('#work').append(template);
    }

    function shuffleData(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    $.ajax({
        url: "websites.json",
    }).done(function (data) {
        shuffleData(data);
        $.each(data, function(index, element) {
            createCard(element, (index % 2 == 0));
        });
    });

});