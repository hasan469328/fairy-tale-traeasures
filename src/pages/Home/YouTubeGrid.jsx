const YouTubeGrid = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg mb-10 mt-10">
      <p className="text-5xl text-center font-bold mb-14 text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">
        Video Gallery <br /> Of Toys
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4">
          <iframe
            className="rounded-lg"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/FTjpIVeanuU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <iframe
            className="rounded-lg"
            title="YouTube video player"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/BJPEzIobO0Y"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <iframe
            className="rounded-lg"
            title="YouTube video player"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/aRaMS4WoVrI"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeGrid;
