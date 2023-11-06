import Gallery from "../GALLERY/Gallery";

// Video imports
import PatientManagement from "../../assets/videos/JAVA-2.mp4";
import FrontendChallenge from "../../assets/videos/FRONTEND-CHALLENGE.mp4";
import Portfolio from "../../assets/videos/PORTFOLIO.mp4";

// ProjectData type - used to define the data type of the projectData array
export type ProjectData = {
  title: string;
  tech: string;
  description: string;
  url: string;
};

// CodeWork component - renders the Gallery component and passes in the projectData array
function CodeWork() {
  
  const projectData = [
    {
      title: "Portfolio Website",
      tech: "React, Typescript",
      description:
      "By the time I had gotten to building my own website, I had learned a lot about standard HTML, CSS and JavaScript, and also some JavaScript frameworks such as Angular and React. In particular, I was really enjoying React and was also attracted to the idea of a more secure and heavily typed version of JavaScript (TypeScript), so I decided I would build my website using both React and TypeScript. This project had a lot more challenges compared to anything I had met previously, such as building the image carousel and getting the dropdown menu to slide correctly, but overall, it was a really satisfying and educational experience as I did not use any pre-built components like I had in previous projects - I built everything from scratch.",
      url: Portfolio
    },
    {
      title: "Frontend Challenge",
      tech: "HTML, CSS, JavaScript",
      description:
      "This was a Frontend Challenge from Frontendmentor.io. You are provided with some screenshots of how the landing page should look and also provided is some acceptance criteria such as hover and focus states for links and buttons, different screen size dimensions, and how the slider behaves and looks. The idea is to get your version as close as possible to the given example. You can use what ever technology you like; I decided to use standard HTML, CSS and JavaScript as this was earlier on in my Frontend Development journey and I wanted to get the basics down. The styling was slightly challenging at first but after I did a bit of research, I came across the idea of using a CSS Reset, which cleared all default styles and made my own styling a lot easier. Another main focus for this project was the use of CSS variables",
      url: FrontendChallenge
    },
    {
      title: "Patient Management Software",
      tech: "Java, MySQL",
      description:
        "The software was built to allow hospital administration staff to input patient data, have the patient assigned to the appropriate department and doctors, and keep track of the patient and their data as they move through their stages of care. For this project, I had no access to the Patient class that would be used for testing. The Patient class would implement a Patient interface with specific functionality and that interface was all I had access to. To work around this, I created a mock Patient class according to the available interface and then created a CurrentPatient class that would extend the Patient class - this would allow me to create the software prototype and also allow the next developer to easily plug in the originally unavailable Patient class for their own testing and development",
      url: PatientManagement
    }
  ];

  return <Gallery dataType="video" media={projectData} />;
} // end of CodeWork component

export default CodeWork;
