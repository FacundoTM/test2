import logo from "../img/face.webp";
import dribble from "../img/dribbble.png";
import github from "../img/github.png";

export function Slider() {
  return (
    <div>
      <div class="slider">
        <img id="about" class="face" src={logo} alt="Facundo logo face" />
        <h1>
          Hi, i am <span>Facundo!</span>
        </h1>
        <h3>Web developer, technology lover, look my projects here! </h3>
        <div>
          <a href="https://dribbble.com/Fvcundo">
            <img width="32px" height="32px" src={dribble} alt="Dribbble" />
          </a>
          <a href="https://github.com/FacundoTM">
            <img width="32px" height="32px" src={github} alt="Github" />
          </a>
        </div>
      </div>
      <div class="PortF">
        <a href="#portfolio">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#8873EF" />
            <path
              d="M24 33L15.3397 18H32.6603L24 33ZM22.5 19.5V19H25.5V19.5H22.5Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <br />
    </div>
  );
}
