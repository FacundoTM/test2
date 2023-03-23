import T from "../components/Trabajos.json"; 

export function Trabajos() {
  return (
    <div>
    {T.map((publi) => (
        <div>
            <h2>{publi.titulo}</h2>
            <h3>{publi.Descripcion}</h3>
            <img class={publi.tClass} src={publi.tIMG} alt="" />
            <h3>Visit here: <a class="header a" href={publi.link}>{publi.shortDesc}</a> </h3>
            <br />
        </div>        
    ))}
    </div>
  );
}
