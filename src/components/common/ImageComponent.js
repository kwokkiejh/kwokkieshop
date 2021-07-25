import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const ImageComponent = ({ source, imageStyle }) => {
    const [loaded, setLoaded] = React.useState(false);
    return (
        <>
            <div style={{ display: loaded ? "unset" : "none" }}>
                <img
                    onLoad={() => setLoaded(true)}
                    src={source}
                    alt="currentImage"
                    width="100%"
                    height="100%"
                    style={imageStyle}
                />
            </div>
            {!loaded && (
                <Skeleton
                    variant="rectangle"
                    animation="wave"
                    style={imageStyle}
                />
            )}
        </>
    );
};

export default ImageComponent;
