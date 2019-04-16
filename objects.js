var playlist = {artistName:"songTitle"}

function updatePlaylist(playlist,artistName,songTitle){
  playlist=
  return Object.assign({},playlist,{[artistName]:songTitle})
  
  updatePlaylist(playlist,'Slowdive','Alison')
}

