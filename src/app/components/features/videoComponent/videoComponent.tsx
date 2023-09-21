import React from "react";
import "./styles.scss";
declare interface VideoUrlObject {
  type: string;
  url: string;
}
declare interface VideoUrlsProp {
  videoUrl: string | VideoUrlObject[];
}
function VideoComponent(props: VideoUrlsProp) {
  const { videoUrl } = props;

  return (
    <div className="video-bg">
      <video width="1280" height="720" autoPlay muted preload="none" loop>
        {typeof videoUrl === "string" ? (
          <source src={videoUrl} type="video/mp4" />
        ) : (
          videoUrl.map((item: VideoUrlObject) => {
            return <source key={item.url} src={item.url} type={item.type} />;
          })
        )}
      </video>
    </div>
  );
}

export default VideoComponent;
