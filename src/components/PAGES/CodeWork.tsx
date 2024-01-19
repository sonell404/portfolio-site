import Gallery from "../GALLERY/Gallery";

// Video imports
import EmployeeAdmin from "../../assets/videos/JAVA-4.mp4";
import StudentManager from "../../assets/videos/JAVA-3.mp4";
import PatientManagement from "../../assets/videos/JAVA-2.mp4";
import FrontendChallenge from "../../assets/videos/FRONTEND-CHALLENGE.mp4";
import Portfolio from "../../assets/videos/PORTFOLIO.mp4";
import AllCityRecords from "../../assets/videos/AC-WORDPRESS.mp4";

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
      title: "All City Records",
      tech: "WordPress (PHP, HTML, CSS, JavaScript)",
      description:
      "All City Records is a record label based in Dublin, Ireland. They wanted a website that would allow them to showcase their artists and their music, as well as a place where they could sell their merchandise. I built this website using WordPress as it was a requirement from the client. I used a pre-built theme and then styled and customised it to the clients needs. I also used a number of plugins to add functionality to the website, a shop, and a contact form. I also used a plugin to allow the client to easily update the website themselves. I also used a plugin to allow the client to easily update the website themselves.",
      url: AllCityRecords
    },
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
    },
    {
      title: "Student Data Software",
      tech: "Java",
      description:
      "A simple piece of software designed to allow the user to enter student data and save it to a file which is automatically placed in the users home directory. The user can either create a new file or write to an already existing file. The second option is to read from a file - this option will prompt the user to place the file to be read in the correct directory, where it will then be read and automatically, a status and error file will be generated. The status file will contain re-formatted student data as well as a workload rating based on the number of courses the student is enrolled in which is calculated by the program",
      url: StudentManager
    },
    {
      title: "Employee Admin Software",
      tech: "Java",
      description:
      "An employee administration program that allows the user to create a company, add employee data to that company, list a selection or all of the employees in the created company, and return the total number of employees in the company. The program also has some default behaviour where a default company is created with a list 3 default employees. Each employee object is given an employee number which automatically increments with each new entry. Employees created by the user are stored in an ArrayList, allowing the staff of any created company to grow and shrink dynamically.",
      url: EmployeeAdmin
    }
  ];

  return <Gallery dataType="video" media={projectData} />;
} // end of CodeWork component

export default CodeWork;
