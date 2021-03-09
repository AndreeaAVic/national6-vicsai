console.log('JavaScript - AJAX');
console.log('CRUD operation - create');

const articleListHtml = document.querySelector('.article-list');

document.getElementById('get-data').addEventListener('click', getData);


function getData() {
    fetch('https://simple-json-server-scit.herokuapp.com/posts')
        .then(handleFetchResponse)
        .then(useJSONResponse);
}


function handleFetchResponse(response) {
    console.log('response', response);
    return response.json();
}


function useJSONResponse(json) {
    console.log(json);
    renderArticles(json);
}


function renderArticles(articleList) {
    articleListHtml.innerText = '';

    for (const articleData of articleList) {
       console.log(articleData);
       renderArticle(articleData); 
       getDataComments(articleData.id);
    }
}


function renderArticle(articleData) {
    const article = document.createElement('div');
    const articleTitle = document.createElement('h3');
    const articleContent = document.createElement('p');

    article.appendChild(articleTitle);
    article.appendChild(articleContent);

    articleListHtml.appendChild(article);

    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;

    const commentsList = document.createElement('div');
    commentsList.classList.add('comments-list');
    
    article.appendChild(commentsList);
}


function getDataComments(dataParam) {
    fetch('https://simple-json-server-scit.herokuapp.com/comments?postId=' + dataParam)
        .then(handleFetchComment)
        .then(useJSONComm);
}


function handleFetchComment(response) {
    console.log(response);
    return response.json();
}


function useJSONComm(json) {
    console.log(json);
    renderComments(json);
}


function renderComments(commentsDataList) {
    for (const commentData of commentsDataList) {
        renderComment(commentData);
    }
}


function renderComment(commentData) {
    const divElemList = document.querySelectorAll('.comments-list');
    
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.style.paddingLeft = '20px';
    const commentUser = document.createElement('h4');
    commentUser.classList.add('comment-user');
    const commentContent = document.createElement('p');
    commentContent.classList.add('comment-content');

    divElemList[commentData.postId].appendChild(comment);
    comment.appendChild(commentUser);
    comment.appendChild(commentContent);

    commentUser.innerText = commentData.username;
    commentContent.innerText = commentData.content;
}
