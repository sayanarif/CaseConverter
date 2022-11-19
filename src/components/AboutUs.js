import React from "react";

export default function AboutUs(props) {
  return (
    <>
      <div className={`py-5 text-${props.mode === "light" ? "dark" : "light"}`}>
        <p>
          This Project is done by <strong>Md Ariful ISlam</strong>
        </p>
        <p>
          Md Ariful Islam completed his Master's in Computer Science from
          Jahangirnagar University. Also completed his Bachelor in Electronics
          and Communication Engineering(ECE) from the Institute of Science and
          Technology(IST). He is currently working as a Mid. Frontend Developer
          at American Best IT since 2021. He is Previously Working Digicon
          Technologies Limited as a Junior Programmer. He has experience in Web
          Design, Development, Solutions, and Integrations. He has specified
          various languages like C, Java, PHP, Javascript, HTML, CSS, Bootstrap,
          WordPress Etc. He has 2 years of experience.
        </p>
        <p>
          He is an energetic and quick learner. He adopts new skills and
          technology very soon. He loves to take on challenges with a
          must-can-do-it attitude. He was born in Chandpur. He completed his SSC
          and HSC from there. He is a friendly, fun-loving, good-minded, travel
          freak, smart, and emotionally intelligent.
        </p>
      </div>
    </>
  );
}
