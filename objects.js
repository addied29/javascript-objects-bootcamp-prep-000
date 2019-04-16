var playlist = {artistName:"songTitle"}

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle
  return Object.assign({},playlist,{[artistName]:songTitle})
  
}

