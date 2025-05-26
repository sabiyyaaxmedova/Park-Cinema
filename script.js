const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next'
    }
});
// zeynal
async function getData(){
    let res = await fetch('https://parkcinema-data-eta.vercel.app/landing')
    let data = await res.json()
    return data;
}

const cards = document.getElementById('cards-div')
async function showCards(){
    data = await getData()
    data.map( item => {
        cards.innerHTML += `
                <div class="card relative bg-green-500 w-[90vw] h-[100vh] md:w-[20vw] md:h-[70vh] rounded-2xl mx-auto md:mx-4 text-white">
                    <img class="hover:scale-102 duration-300 w-[90vw] h-[100vh] md:w-[20vw] md:h-[70vh] rounded-2xl" src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75" alt="movie" />
                    <div id="card-text" class="absolute bottom-0 p-5 w-[100%]">
                        <p class="font-bold text-2xl">${item.name}</p>
                        <p>${item.year}</p>
                        <p>${item.ageLimit}</p>
                    </div>
                </div>`
    })
}
showCards()
