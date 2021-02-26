export const getGifs = async ( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=V2DyUsS3dSqK8YX5SqVt5a49Oyv2zdrc&q=${ encodeURI( category )}`;
    const resp = await fetch( url );
    const  {data} = await resp.json();
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, // asi aseguramos que va traer la imagen con la ? 
        }
    })
      return gifs;
}
