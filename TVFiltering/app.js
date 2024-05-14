
const form = document.querySelector('#searchForm');
const input = document.querySelector('input');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const search = form.elements.query.value;
    const config = { params: { q: search } };
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        displayImages(res.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    form.elements.query.value = "";
});

const displayImages = (shows) => {
    const showsSection = document.querySelector('#shows');
    showsSection.innerHTML = ''; // Clear existing images
    for (let show of shows){
        if (show.show.image){
            const img = document.createElement('img');
            img.src = show.show.image.medium;
            img.classList.add('rounded', 'float-start', 'p-2', 'g-col-3');
            showsSection.appendChild(img);
        }
    }
};