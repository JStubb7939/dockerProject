var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max || 5,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: true
    },
    success: (result) => callback(result.items),
    dataType: 'json'
  });
};

window.searchYouTube = searchYouTube;
