import bannerImage from "../../../assets/bg.jpg";
import "../../styles/Home.css";

function Banner() {
  return (
    <>
      {/* // banner html is here  */}
      <div className="banner_container">
        <div className="banner_image">
          <img loading="lazy" src={bannerImage} alt="bannerImage" />
        </div>
        {/* <div className="contentOfBanner">
          <p>hello world...</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, atque quasi! Dolore minima possimus consequatur in reprehenderit fugiat nulla saepe, aut, architecto ex debitis nam ab earum eligendi nostrum recusandae!</p>
          <button>Click</button>
        </div> */}
      </div>
    </>
  );
}

export default Banner;
