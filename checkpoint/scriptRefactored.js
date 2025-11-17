const createForm = document.getElementById("add_form");
createForm.addEventListener('click', function () {

    const imageUrl = document.getElementById("image_url").value.trim();
    const getInputValueTitle = document.getElementById('title').value.trim();
    const getInputValueDescription = document.getElementById('description').value.trim();
    const getInputValueDate = document.getElementById('date').value;
    const getInputValueArea = document.getElementById('area').value.trim();

    if (imageUrl && getInputValueTitle && getInputValueDescription && getInputValueDate && getInputValueArea) {

        const getElementTemplate = document.getElementById('article-template');
        const cloneElementTemplate = getElementTemplate.content.cloneNode(true);


        const dateObj = new Date(getInputValueDate);
        const dateFormatted = dateObj.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        cloneElementTemplate.querySelector('.article-image').src = imageUrl;
        cloneElementTemplate.querySelector('.article-image').alt = getInputValueTitle;
        cloneElementTemplate.querySelector('.article-title').textContent = getInputValueTitle;
        cloneElementTemplate.querySelector('.article-description').textContent = getInputValueDescription;
        cloneElementTemplate.querySelector('.article-date').textContent = dateFormatted;
        cloneElementTemplate.querySelector('.article-area').textContent = getInputValueArea;

        document.getElementById('articles-container').appendChild(cloneElementTemplate);

        document.getElementById("image_url").value = "";
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("date").value = "";
        document.getElementById("area").value = "";

    }
    else {
        alert("Please complete all inputs");
    }

})