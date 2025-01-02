const VideoPage = () => {
    return (
      <div>
        <video
          src="/assets/video/temoignage.webm" // Chemin relatif depuis le dossier public
          autoPlay
          loop
          muted
          controls
          style={{ width: '100%', height: '100%' }}
        >
        </video>
      </div>
    );
  };
  
  export default VideoPage;
  