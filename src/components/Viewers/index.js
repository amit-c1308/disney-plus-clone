import { ViewerContainer, ViewerItem } from "./Viewers.style";

const Viewers = (props) => {
  return (
    <ViewerContainer>
      <ViewerItem>
        <img src="/images/viewers-disney.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </ViewerItem>
      <ViewerItem>
        <img src="/images/viewers-pixar.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </ViewerItem>
      <ViewerItem>
        <img src="/images/viewers-marvel.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </ViewerItem>
      <ViewerItem>
        <img src="/images/viewers-starwars.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </ViewerItem>
      <ViewerItem>
        <img src="/images/viewers-national.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </ViewerItem>
    </ViewerContainer>
  );
};

export default Viewers;
