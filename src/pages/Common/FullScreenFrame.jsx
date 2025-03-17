import React from "react";

const FullScreenIframe = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="http://localhost:3000/track-complaints"
        style={styles.iframe}
        frameBorder="0"
        scrolling="no"
        title="Track Complaints"
      />
    </div>
  );
};

const styles = {
  container: {
    position: "absolute", // Makes the div occupy the entire screen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden", // Prevents scrolling on the parent div
    margin: 0,
    padding: 0,
  },
  iframe: {
    width: "100%", // Makes the iframe occupy the full width of the parent div
    height: "100%", // Makes the iframe occupy the full height of the parent div
    border: "none", // Removes the border
    display: "block", // Ensures the iframe is displayed as a block element
  },
};

export default FullScreenIframe;
