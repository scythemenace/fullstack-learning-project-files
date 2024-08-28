export function CardComponent(props) {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [socials, setButton] = useState({});
  // const [interests, setInterests] = useState([]);
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.description}</p>

      {props.socialmedia.map((handles, index) => {
        for (let social_media in handles) {
          return (
            <a
              key={`${social_media.title}_${index}`}
              href={handles[social_media]}
            >
              {social_media}
            </a>
          );
        }
      })}
      <h3>Interests</h3>
      <ul>
        {props.interests.map((interest, index) => {
          return <li key={`${interest}_${index}`}>{interest}</li>;
        })}
      </ul>
    </>
  );
}
