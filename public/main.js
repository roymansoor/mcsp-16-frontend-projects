const $body = $('body')
const $container = $('.container')


$.get('/api/projects').done(function (data) {

    console.log(data)
    cardGenerator(data);

})

function cardGenerator(data) {
    for (let i = 0; i < data.length; i++) {
        let $card = $(`    
      <div id='result-column'>
        <div class="result-card">
            <div class="result-githubName">${data[i].githubName}</div>
            <a href=${data[i].url}>
                <img class="result-image" src=${data[i].screenshot}>
            </a>
            <div class="result-author"></div>
            <div class=""></div>
      <div>
    `)
        $container.append($card);
    }
}














/*======== Welcome to the Deep ========*/
//console.log('Welcome to line 42!')