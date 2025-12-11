
document.getElementById('searchBtn').addEventListener('click', function(){
const q = document.getElementById('searchInput').value.trim();
if(!q) alert('Please enter a search term');
else alert('Searching for: ' + q);
});


// Shop button: simple demo behaviour
document.getElementById('shopBtn').addEventListener('click', function(){
alert('Welcome to the shop — (this is a static demo).');
});


// small accessibility: enter to search
document.getElementById('searchInput').addEventListener('keydown', function(e){
if(e.key === 'Enter') document.getElementById('searchBtn').click();
});