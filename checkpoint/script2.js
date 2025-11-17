const createForm = document.getElementById("add_form");
createForm.addEventListener('click', function(){
    const getInputValueTitle = document.getElementById('title').value;
    const getInputValueDescription = document.getElementById('description').value;
    const getInputValueDate = document.getElementById('date').value;
    const getInputValueArea = document.getElementById('area').value;
    const getMainElementToInsertArticles = document.querySelector('main');


    console.log(getMainElementToInsertArticles);

    if(
        getInputValueTitle.trim() !== "" && 
        getInputValueDescription.trim() !== "" && 
        getInputValueDate !== "" && 
        getInputValueArea.trim() !== "") {

            const newArticleElement = document.createElement('article');
            const newH3Element = document.createElement('h3');
            const newParagraphElement = document.createElement('p');
            const newFooterElement = document.createElement('footer');   
            const newFooterElementParagraphDate = document.createElement('p')
            const newFooterElementParagrapArea = document.createElement('p');

            newH3Element.textContent = getInputValueTitle;
            newParagraphElement.textContent = getInputValueDescription;
            newFooterElementParagraphDate.textContent = getInputValueDate;
            newFooterElementParagrapArea.textContent = getInputValueArea;

            newArticleElement.appendChild(newH3Element);
            newArticleElement.appendChild(newParagraphElement);
            
            newFooterElement.appendChild(newFooterElementParagraphDate);
            newFooterElement.appendChild(newFooterElementParagrapArea);

            newArticleElement.appendChild(newFooterElement);

            getMainElementToInsertArticles.appendChild(newArticleElement);


            // console.log(getMainElementToInsertArticles);

            
}
else {
    alert("Pleas fill all inputs");
}

})