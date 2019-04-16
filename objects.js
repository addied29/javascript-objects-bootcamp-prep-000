var playlist = {artist:"title"}

function updatePlaylist(playlist,artist,title){
  return Object.assign({},playlist,{[artist]:title})
}
