let filters = document.querySelectorAll(".filters span");
let items = document.querySelectorAll(".item");


filters.forEach((filter) => {
    filter.addEventListener("click", () => {

        filters.forEach((btn) => btn.classList.remove("active"));
        filter.classList.add("active");

        const category = filter.id;

        items.forEach((item) => {

            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });

    });
});
