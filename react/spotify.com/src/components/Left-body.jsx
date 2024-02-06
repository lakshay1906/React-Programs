function Left_body(){
    return (
        <>
        <div class="left-body">
        <div class="upper-left">
          <ul class="upper-left-li">
            <li class="home"><i class="fa-solid fa-house home-svg"></i>Home</li>
            <li class="search">
              <i class="fa-solid fa-magnifying-glass search-svg"></i>Search
            </li>
          </ul>
        </div>
        <div class="lower-left">
          <div class="lib-nav">
            <div class="left-lib-nav">
              <i class="fa-solid fa-book book-svg"></i>
              <h1>Your Library</h1>
            </div>
            <div class="right-lib-nav">
              <i class="fa-solid fa-plus plus-svg"></i>
              <i class="fa-solid fa-arrow-right right-arrow-svg"></i>
            </div>
          </div>
          <div class="boxes">
            <div class="box1">
              <h2>Create your first playlist</h2>
              <h3>It's easy, we'll help you</h3>
              <button class="create-playlist">Open playlist</button>
            </div>
            <div class="box2">
              <h2>Let's find some podcasts to follow</h2>
              <h3>We'll keep you updated on new episodes</h3>
              <button class="browse-podcasts">Browse podcasts</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Left_body;