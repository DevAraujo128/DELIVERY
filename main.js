const cardapio = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ2VyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFtYnVyZ2VyfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFtYnVyZ2VyfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1713330801172-03f8d1c0dde7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
];


function createCard(card) {
  return `
            <li>
                <img src="${card.image}" alt="">
                <span class="badge">Mais vendido</span>
                <h3>Burger Clássico</h3>
                <p>Pão com hambúrguer, queijo e alface</p>
                <strong>R$ 29,90</strong>
                <a href="#" class="btn">Pedir</a>
            </li>
    `;
}

function renderCards(cards) {
    const grid = document.querySelector(".menu-grid");

    grid.innerHTML = cards.map(createCard).join("");
}

function init() {
    document.addEventListener("DOMContentLoaded", ()=> {
        renderCards(cardapio);
    })
}

init();