

// // playlist cards
function popularAlbums() {
    let html = "";
    popularAlbumsObj.forEach((element, index) => {
        // console.log(element.artistName);

        html += `
                <div class="AlbumsCard">
                    <a href="${element.link}">
                        <img
                            src="${element.IMG}"
                            alt=""
                            style="width: 200px; height: 200px; border-radius: 10px"
                        />
                        <p>${element.albumName}</p>
                        <small>${element.artistsName}</small>
                    </a>
                 </div>
                `;
    });
    let albumCard = document.getElementById("card-template");
    if (popularAlbumsObj.length != 0) {
        albumCard.innerHTML = html;
        // console.log(albumCard);
    } else {
        albumCard.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

}
popularAlbums()


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