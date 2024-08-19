import { useState } from "react";

export function CardComponent(props) {
  /*
  const [name, setName] = useState("");
  const [descriptiion, setDescription] = useState("");
  const [socials, setButton] = useState({});
  const [interests, setInterests] = useState([]);
  */

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.name}>props.name</h2>
        <p style={styles.description}>props.description</p>
      </div>
      <div style={styles.socialMedia}>
        {props.socialmedia.map((handles) => {
          for (social_media in handles) {
            return (
              <a href={handles[social_media]} style={styles.socialButton}>
                {social_media}
              </a>
            );
          }
        })}
      </div>
      <div style={styles.interests}>
        <h3 style={styles.interestsTitle}>Interests</h3>
        <ul style={styles.interestsList}>
          {props.interests.map((interest) => {
            return <li>{interest}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "320px",
    padding: "25px",
    margin: "20px auto",
    backgroundColor: "#242424",
    color: "#ffffff",
    border: "1px solid #333",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  },
  header: {
    marginBottom: "25px",
    textAlign: "center",
  },
  name: {
    margin: "0 0 10px 0",
  },
  description: {
    margin: "0",
    color: "#aaaaaa",
  },
  socialMedia: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "25px",
  },
  socialButton: {
    padding: "12px 18px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#0073b1",
    transition: "background-color 0.3s, transform 0.3s",
  },
  socialButtonHover: {
    backgroundColor: "#005582",
    transform: "translateY(-2px)",
  },
  interests: {
    textAlign: "center",
    padding: "0 20px", // Add padding to the sides
  },
  interestsTitle: {
    marginBottom: "-5px",
    fontSize: "20px",
    textAlign: "center",
  },
  interestsList: {
    listStyleType: "disc",
    paddingLeft: "20px", // Wider padding to make the list appear fuller
    textAlign: "center", // Align text to the left within the centered list
    display: "inline-block",
    fontSize: "20px",
  },
};
