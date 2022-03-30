//from https://kevinsimper.medium.com/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf

const YoutubeVideo = ({ youtubeId }) => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};

export default YoutubeVideo;
