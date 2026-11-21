import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Skeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--primary-color-blue) 25%,
    var(--lines-color) 50%,
    var(--primary-color-blue) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  display: ${(props) => (props.loaded ? "none" : "block")};
  z-index: 2;
  border-radius: inherit;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
  z-index: 1;
  border-radius: inherit;
`;

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  loading = "lazy",
  onError,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const handleError = (e) => {
    setLoaded(true);
    if (onError) onError(e);
  };

  return (
    <SkeletonContainer className={className}>
      <Skeleton loaded={loaded} />
      <StyledImage
        ref={imgRef}
        src={src}
        alt={alt}
        loaded={loaded}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={handleError}
        {...props}
      />
    </SkeletonContainer>
  );
};

export default ImageWithSkeleton;
