

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const status = document.getElementById("status");


form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) return;                        // ignore empty searches

  const url = "https://commons.wikimedia.org/w/api.php?action=query" +
    "&generator=search&gsrsearch=" + encodeURIComponent(query) +
    "&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*";

  const response = await fetch(url);
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();

  const items = Object.values(data.query.pages);
  status.textContent = `Showing ${items.length} results for "${query}"`;

  render(items);                             // the function from block 3
});


function render(items) {
  const results = document.getElementById("results");
  results.innerHTML = "";                    // clear old results first

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    const img = document.createElement("img");
    img.src = item.imageinfo[0].thumburl;    // the picture
    img.alt = item.title;

    const caption = document.createElement("p");
    caption.textContent = item.title;        // the title

    card.appendChild(img);
    card.appendChild(caption);
    results.appendChild(card);               // add card to the grid
  });
}