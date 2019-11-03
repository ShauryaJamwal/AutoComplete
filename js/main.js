const search = document.getElementById('search');
const matchlist = document.getElementById('matchlist');

const searchData = async serachText =>{
    const res = await fetch('../data/data.json');
    const data = await res.json();
    console.log(data)

    let matches = data.filter(state=>{
        const regex = new RegExp(`^${serachText}`,'gi');

        return state.name.match(regex) || state.abbr.match(regex)
    })

    if(serachText.length === 0){
        matches = [];
        matchlist.innerHTML = '';

    }

    outPutHtml(matches);
    console.log(matches);
}

const outPutHtml = matches =>{

    if(matches.length>0){
        const html = matches.map(match=>`
        <div class="card card-body mb-1"
            <h4>
            ${match.name}

            (${match.abbr})
            <span class="text-primary">
                ${match.capital}
            </span>
            <small>
                Lat: ${match.lat} / Long: ${match.long} 
            </small>
            </h4>
        `).join('');

        matchlist.innerHTML = html
    }

}


search.addEventListener('input',()=>searchData(search.value));