let changeTheamaLight = document.querySelector(".active-thema");
let changeTheamaDark = document.querySelector(".passive-thema");

let changeThema = function () {
  changeTheamaLight.addEventListener("click", () => {
    changeTheamaLight.classList.add("active-thema");
    changeTheamaLight.classList.remove("passive-thema");
    changeTheamaDark.classList.add("passive-thema");
  });

  changeTheamaDark.addEventListener("click", () => {
    changeTheamaDark.classList.add("active-thema");
    changeTheamaDark.classList.remove("passive-thema");
    changeTheamaLight.classList.add("passive-thema");
  });
};
changeThema();



//Verileri çekmek için fetch kullanın

//!card 
fetch('http://localhost:8080/exclusive-drops')
  .then(response => response.json())
  .then(data => {
    // Verileri aldıktan sonra her bir kart için HTML içeriği oluşturun
    const cardContainer = document.querySelector('.cards');
    data.cards.forEach(card => {
      const cardHTML = `
        <div class="card">
        <div class="card-img-container">
        <img
          class="card-img"
          src="https://radiustheme.com/demo/wordpress/themes/niftric/wp-content/uploads/2022/10/product1-500x500.jpg"

          alt=""
        />
        <div class="card-img-button-container">
          <button class="card-img-hidden-button">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <button class="card-img-hidden-button">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
     
          <h3 class="card-item-name">${card.title}</h3>
          <div class="card-item-price">$${card.price}</div>
          <div class="card-user-container">
          <img
          class="card-user-img"
          src="https://radiustheme.com/demo/wordpress/themes/niftric/wp-content/uploads/2022/08/cropped-vendor2-1-150x150.jpg"
          alt=""
        />
            <span class="card-user-name">${card.username}</span>
          </div>
          <div class="stars">
            <!-- Yıldız derecelendirmesi -->
            <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          </div>
        </div>
      `;
      // Yeni kartı mevcut kartlarla birlikte ekleyin
      cardContainer.innerHTML += cardHTML;
    });
  })
  .catch(error => {
    console.error('Veri çekme sırasında bir hata oluştu:', error);
  });


//!Trend Card
fetch('http://localhost:8080/trending-explore')
.then(response => response.json())
.then(data => {
  const trendCardContainer = document.querySelector("#trend-card-container");
  data.cards.forEach(card => {
    const trendCardHTML = `
    <div class="trend-card">
    <div class="trend-card-img-container">
      <img
        class="trend-card-img"
       src="https://radiustheme.com/demo/wordpress/themes/niftric/wp-content/uploads/2022/10/product1-500x500.jpg"}"
        alt=""
      />
    </div>
    <div class="trend-card-footer">
      <div class="card-footer-content">
        <h3 class="card-item-name trend-card-name">${card.title}</h3>
        <div class="trend-card-user-container">
          <img
            class="card-user-img"
            src="${card.img}"
            alt=""
          />
          <span class="card-user-name">${card.username}</span>
        </div>
        <div class="trending-card-detail">
          <div class="card-item-price">${card.price}</div>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
        <div class="trend-card-img-button-container">
          <button class="trend-card-img-hidden-button">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <button class="trend-card-img-hidden-button">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
    
    `;
    trendCardContainer.innerHTML += trendCardHTML;
  });
})
.catch(error => {
  console.error('Veri çekme sırasında bir hata oluştu:', error);
});


//!user card
fetch('http://localhost:8080/seller-users')
.then(response => response.json())
.then(data => {
  const userCardContainer = document.querySelector(".user-container");
  data.cards.forEach(cards =>{
    const userCardHMTL = `
    <div class="user-card progress-bar ">
    <div class="user-card-img-container">
    <img
      class="user-card-img"
      src="https://radiustheme.com/demo/wordpress/themes/niftric/wp-content/uploads/2022/07/cropped-vendor1-150x150.jpg"
      alt=""
    />
  </div>
    <div class="user-card-content-container">
      <h2 class="user-text">${cards.username}</h2>
      <div class="stars">                
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
    </div>
</div>`;
userCardContainer.innerHTML += userCardHMTL;
  });
})
.catch(error => {
  console.error('Veri çekme sırasında bir hata oluştu:', error);
});

fetch('http://localhost:8080/browse-by-category')
.then(response => response.json())
.then(data => {
  const artCardContainer = document.querySelector(".square-cards");
  // Renk sınıfları
  const colorClasses = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8'];
  // Kartları ekleme döngüsü
  data.cards.forEach((card, index) =>{
    // Kartı eklerken sırayla bir renk sınıfı kullan
    const colorClass = colorClasses[index % colorClasses.length];
    const artCardHMTL = `   
    <div class="card-square ${colorClass}">
      <i class="fa-solid fa-camera"></i>
      <h3>${card}</h3>
    </div>`;
    artCardContainer.innerHTML += artCardHMTL;
  });
})
.catch(error => {
  console.error('Veri çekme sırasında bir hata oluştu:', error);
});



//!NFT Card

fetch('http://localhost:8080/create-and-sell')
.then(response => response.json())
.then(data =>  {
  const nftCardContainer = document.querySelector('.nft-card-container');
  data.cards.forEach(cards => {
    const nftCard = `  
    <div class="nft-card progress-bar">
    <i class="fa-solid fa-wallet wallet-icon"></i>
    <div class="card-content">
      <h2>${cards.title}</h2>
      <div class="nft-card-text-content">
      ${cards.text}
      </div>
    </div>
  </div>
  `;
    nftCardContainer.innerHTML += nftCard;
  })
  .catch(error => {
    console.error('Veri çekme sırasında bir hata oluştu:', error);
  });
});

