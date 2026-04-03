document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".martyr-card");

  const visibleCountEl = document.getElementById("visibleCount");
  const totalCountEl = document.getElementById("totalCount");

  if (!searchInput) {
    console.error("searchInput not found");
    return;
  }

  const totalCards = cards.length;
  if (totalCountEl) totalCountEl.textContent = totalCards;

  const index = [];

  cards.forEach(card => {
    const nameEl = card.querySelector(".name");
    const tagEls = card.querySelectorAll(".tag");

    const name = nameEl ? nameEl.textContent.toLowerCase() : "";
    const tags = Array.from(tagEls)
                      .map(tag => tag.textContent.toLowerCase())
                      .join(" ");

    index.push({
      element: card,
      text: name + " " + tags
    });
  });

  function updateSearch(query) {

    let visibleCounter = 0;

    index.forEach(item => {
      if (item.text.includes(query)) {
        item.element.style.display = "";
        visibleCounter++;
      } else {
        item.element.style.display = "none";
      }
    });

    if (visibleCountEl) visibleCountEl.textContent = visibleCounter;
  }

  updateSearch("");

  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    updateSearch(query);
  });

});
