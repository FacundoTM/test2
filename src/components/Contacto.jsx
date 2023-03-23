export function Contacto() {
  return (
    <div class="slider" id="contact">
      <h1 class="contact">Contact</h1>
      <h3>
        You can contact me here, or via{" "}
        <a class="header a" href="https://www.linkedin.com/in/facundojs/">
          LinkedIn
        </a>
      </h3>
      <br />
      <br />

      <form action="">
        <input
          disabled
          type="text"
          id="fname"
          name="firstname"
          placeholder="Full name"
        />
        <textarea
          disabled
          id="subject"
          name="subject"
          placeholder="Your message!"
        ></textarea>
        <input class="sum" type="submit" disabled value="Submit" />
      </form>

      <br />
      <br />
    </div>
  );
}
