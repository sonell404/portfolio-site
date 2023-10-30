import Gallery from "../GALLERY/Gallery";

export type ProjectData = {
  title: string;
  tech: string;
  description: string;
  url: string;
};

function CodeWork() {
  
  const projectData = [
    {
      title: "Patient Management Software",
      tech: "Java, MySQL",
      description:
        "The software was built to allow hospital administration staff to input patient data, have the patient assigned to the appropriate department and doctors, and keep track of the patient and their data as they move through their stages of care. For this project, I had no access to the Patient class that would be used for testing. The Patient class would implement a Patient interface with specific functionality and that interface was all I had access to. To work around this, I created a mock Patient class according to the available interface and then created a CurrentPatient class that would extend the Patient class - this would allow me to create the software prototype and also allow the next developer to easily plug in the originally unavailable Patient class for their own testing and development",
      url: "/assets/videos/JAVA-2.mp4",
    }
  ];

  return <Gallery dataType="video" media={projectData} />;
}

export default CodeWork;
