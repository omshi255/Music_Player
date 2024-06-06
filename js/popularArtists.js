

// // playlist cards
function showPopularArtist() {
    let html = "";
    popularArtistsObj.forEach((element, index) => {
        console.log(element.artistName);
        
        html += `
                <div class="container1">
                 <a href="${element.songList}">
                    <img src="${element.IMG}" alt="" />
                    <p>
                        ${element.artistName}
                    </p>
                    <small>Artist</small>
                    </a>
                 </div>
                `;
    });
    let notesElm = document.getElementById("container");
    if (popularArtistsObj.length != 0) {
        notesElm.innerHTML = html;
        console.log(notesElm);
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

}
showPopularArtist()


    // <article article class="playcard" >
    //                 <div class="card__img">
    //                     <img src="${element.IMG}"
    //                         alt="">
    //                 </div>
    //                 <div class="card__info">
    //                     <span class="card__category">${element.channel}</span>
    //                     <h3 class="card__title">${element.courseName}</h3>
    //                     <span class="card__by"><a href="${element.courseLink}" target="_blank" class="card__author"
    //                             title="author">Click</a></span>
    //                 </div>
    //</article >