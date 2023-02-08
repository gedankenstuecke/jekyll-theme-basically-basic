const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const lost = urlParams.get('lost')

if (lost){
    console.log('lost is present');
    fetch("https://maker.ifttt.com/trigger/ohana_lost/with/key/p4uvQXthhoI-mFbWVi2W6SlzHS-5Pro3wVVvnafnw_a", {mode: 'no-cors'}).then(
        (response) => window.location.href = '/lost/');

} else {
    console.log('lost is absent!');
}

