import { useState } from 'react'
import './App.css'
import emailjs from "emailjs-com";


function Profile({onMain}){
  return(
    <>
      <div className='profile-photo'>
        <img className='profile-pic' src='./profile-image.jpg'></img>
      </div>
      <div className='name'><center>Sandip Hazra</center></div>
      <a className="profile-row" href="tel:+919907528120" style={{textDecoration: 'none', color:"inherit"}}>
        <img src='/phone.svg' alt='Phone' className="icon" />
        <span>+91 9907528120</span>
      </a>
      <a className="profile-row" href="mailto:sandiphazra301@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src="/email.svg" alt="Email" className="icon" />
        <span>sandiphazra301@gmail.com</span>
      </a>
      <a className="profile-row" >
        <img src="/birth.svg" alt="" className="icon" />
        <span>21 march 2004</span>
      </a>
      <a className="profile-row" href="https://www.google.com/maps/place/Bishnupur,+West+Bengal+722122/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src="/location.svg" alt="gmap" className="icon" />
        <span>Bishnupur , Bankura , West bengal , 722122</span>
      </a>
      <div> 
        <tr style={{gap:"15px", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <td>
          <a className='profile-row' href="https://github.com/Cyber-Sandip/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/github.svg" alt="github" className="icon" />
          </a>
          </td>
          <td>
            <a className='profile-row' href="https://www.linkedin.com/in/sandip-hazra-1487432a3" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src="/linkedin.svg" alt="linkedin" className="icon" />
            </a>
          </td>
          <td>
            <a className='profile-row' href="whatsapp://send?phone=919907528120&text=Hello" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src="/WhatsApp.svg" alt="instagram" className="icon" />
            </a> 
          </td>
        </tr>  
      </div>     
     

    
    </>
  )
}

function AboutMe(){
  return(
    <>
    <div className='c-heder'>About Me</div>
    <p className='c-paragraph'>
      Hi, I’m Sandip Hazra from Bishnupur, Bankura, West Bengal.
      I am a Computer Science B.Tech student at MIT Bishnupur, 
      passionate about building modern applications and exploring cybersecurity.

      <h3>🎓 Education</h3>
      <ul>
        <li>🏫 Madhyamik (WBBSE)</li>
        <li>🏫 Higher Secondary (WBCHSE)</li>
        <li>🎓Currently pursuing B.Tech in Computer Science</li>
      </ul>

      <h3>💻 Skills & Expertise</h3>
      <ul>
        <li>Programming Languages: Python, JavaScript,C,Java</li>
        <li>Python Programming – scripting, backend development, and problem-solving</li>
        <li>Web Development: full-stack web apps with MongoDB, Express.js, React.js, and Node.js</li>
        <li>Cybersecurity: Ethical Hacking, Network Security, System Protection</li>
        <li>Tools & Platforms: Git, GitHub, VS Code, Postman</li>
      </ul> 

      

      <h3>🚀 My Vision</h3>

      I aim to combine software development with cybersecurity to build applications that are not only powerful and scalable but also safe and secure.

      I’m always eager to learn, collaborate, and work on innovative projects that make an impact.
    </p>

    </>
  )

}



function Skills() {
  const skillData = [
    {
      title: "Python Programming",
      desc: "Strong foundation in Python for scripting, backend development, and automation.",
      icon: "/python.svg"
    },
    {
      title: "Full Stack Web Development",
      desc: "Experience in building responsive and scalable apps using MERN stack (MongoDB, Express, React, Node.js).",
      icon: "/web.svg"
    },
    {
      title: "Cyber Security",
      desc: "Knowledge of ethical hacking, secure coding, and vulnerability assessment.",
      icon: "/security.svg"
    }
  ];

  return (
    <>
      <div className="c-heder">Skills</div>
      <div className="c-paragraph">
        <p>
          I combine programming, web development, and cybersecurity expertise to
          create secure and efficient solutions. Below are my key skill areas:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {skillData.map((skill, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(145deg, rgba(40,40,40,0.9), rgba(20,20,20,0.9))",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid goldenrod",
                boxShadow:
                  "0 0 10px rgba(218,165,32,0.4), inset 0 0 10px rgba(218,165,32,0.2)",
                color: "aliceblue",
                transition: "transform 0.3s, box-shadow 0.3s",
                animation: "fadein 1s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(218,165,32,0.7), inset 0 0 12px rgba(218,165,32,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(218,165,32,0.4), inset 0 0 10px rgba(218,165,32,0.2)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 30% 30%, goldenrod, #c8b988ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 10px rgba(191, 185, 170, 0.7)",
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.title}
                    style={{ width: "35px", height: "35px", filter: "invert(1)" }}
                  />
                </div>
                <h3 style={{ color: "goldenrod", fontSize: "18px" }}>
                  {skill.title}
                </h3>
              </div>
              <p style={{ fontSize: "15px", lineHeight: "1.5" }}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


function Education() {
  const educationData = [
    {
      title: "Madhyamik Examination",
      board: "WBBSE",
      year: "Completed - 2020",
      desc: "Successfully completed secondary education under the West Bengal Board of Secondary Education.",
      icon: "🎓",
      date: "2020"
    },
    {
      title: "Higher Secondary Education",
      board: "WBCHSE",
      year: "Completed - 2022",
      desc: "Completed higher secondary education under the West Bengal Council of Higher Secondary Education.",
      icon: "📘",
      date: "2022"
    },
    {
      title: "B.Tech in Computer Science",
      board: "MAKAUT",
      year: "Pursuing - 2026",
      desc: "Currently pursuing Bachelor of Technology in Computer Science from Maulana Abul Kalam Azad University of Technology.",
      icon: "💻",
      date: "2026"
    }
  ];

  return (
    <>
      <div className="c-heder">Education</div>
      <div className="c-paragraph">
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          position: "relative",
          marginTop: "20px"
        }}>
          {/* timeline line */}
          <div style={{
            position: "absolute",
            left: "98px",
            top: "0",
            bottom: "0",
            width: "3px",
            background: "linear-gradient(to bottom, red, rgba(22, 125, 166, 0.2))",
            boxShadow: "0 0 12px goldenrod",
          }}></div>

          {educationData.map((edu, index) => (
            <div 
              key={index} 
              style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                marginBottom: "50px", 
                position: "relative" 
              }}
            >
              {/* Year */}
              <div style={{
                width: "60px",
                textAlign: "right",
                marginRight: "20px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "goldenrod",
                textShadow: "0 0 6px rgba(165, 165, 165, 0.7)"
              }}>
                {edu.date}
              </div>

              {/* Icon */}
              <div style={{
                minWidth: "40px",
                minHeight: "40px",
                borderRadius: "50%",
                background: "radial-gradient(circle, goldenrod, #d2cec2ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "black",
                marginRight: "20px",
                boxShadow: "0 0 15px rgba(170, 169, 166, 0.8)"
              }}>
                {edu.icon}
              </div>

              {/* Content */}
              <div
                style={{
                  background: "linear-gradient(145deg, rgba(30,30,30,0.95), rgba(10,10,10,0.95))",
                  borderRadius: "10px",
                  padding: "15px 20px",
                  border: "1px solid goldenrod",
                  boxShadow: "0 0 15px rgba(208, 153, 15, 0.5), inset 0 0 10px rgba(218,165,32,0.2)",
                  flex: 1,
                  animation: "fadein 1s ease",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 0 22px rgba(218,165,32,0.9), inset 0 0 12px rgba(218,165,32,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(218,165,32,0.5), inset 0 0 10px rgba(218,165,32,0.2)";
                }}
              >
                <h3 style={{ color: "goldenrod", marginBottom: "5px" }}>
                  {edu.title}
                </h3>
                <p style={{ color: "aliceblue", margin: "4px 0" }}>
                  <strong>Board/University:</strong> {edu.board}
                </p>
                <p style={{ color: "aliceblue", margin: "4px 0" }}>
                  <strong>Status:</strong> {edu.year}
                </p>
                <p style={{ color: "aliceblue", fontSize: "15px", marginTop: "6px", textAlign: "justify" }}>
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}





function Projects() {
  const projectData = [
    {
      title: "Jarvis Voice Assistant",
      year: "2025",
      desc: "A Python-based voice-controlled assistant capable of performing tasks like web search, app control, and system commands.",
      link: "https://github.com/Cyber-Sandip/"
    },
    {
      title: "Portfolio Page",
      year: "2025",
      desc: "A personal portfolio built with React.js showcasing my skills, education, and projects in a futuristic design.",
      link: "https://github.com/Cyber-Sandip/"
    },
    {
      title: "Bishnupur Travel Website",
      year: "2024",
      desc: "A tourism-based website to explore Bishnupur’s culture, temples, and history with maps and guides.",
      link: "https://github.com/Cyber-Sandip/"
    },
    {
      title: "Travel Web Page",
      year: "2024",
      desc: "A responsive travel webpage designed with HTML, CSS, and JS for trip planning and tour booking.",
      link: "https://github.com/Cyber-Sandip/"
    },
    {
      title: "Deauth Watch",
      year: "2023",
      desc: "A cybersecurity project that monitors Wi-Fi networks and detects deauthentication attacks.",
      link: "https://github.com/Cyber-Sandip/"
    },
    {
      title: "Steganography Tool",
      year: "2023",
      desc: "A tool to hide and extract secret messages inside images and audio files for secure communication.",
      link: "https://github.com/Cyber-Sandip/"
    }
  ];

  return (
    <>
      <div className="c-heder">Projects</div>
      <div className="c-paragraph">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {projectData.map((project, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(145deg, rgba(30,30,30,0.95), rgba(10,10,10,0.95))",
                borderRadius: "10px",
                padding: "15px 20px",
                border: "1px solid goldenrod",
                boxShadow: "0 0 15px rgba(218,165,32,0.5), inset 0 0 10px rgba(218,165,32,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
                animation: "fadein 1s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(218,165,32,0.9), inset 0 0 12px rgba(218,165,32,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 15px rgba(218,165,32,0.5), inset 0 0 10px rgba(218,165,32,0.2)";
              }}
            >
              <h3 style={{ color: "goldenrod", marginBottom: "6px" }}>{project.title}</h3>
              <p style={{ color: "aliceblue", fontSize: "14px" }}><strong>Year:</strong> {project.year}</p>
              <p style={{ color: "aliceblue", marginTop: "6px", textAlign: "justify" }}>{project.desc}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "6px 12px",
                  border: "1px solid goldenrod",
                  borderRadius: "6px",
                  color: "goldenrod",
                  textDecoration: "none",
                  transition: "background 0.3s, color 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "goldenrod";
                  e.target.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "goldenrod";
                }}
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}





function ContractMe() {
  const links = [
    { name: "Phone", icon: "📞", url: "tel:+919907528120", value: "+91 9907528120" },
    { name: "Email", icon: "📧", url: "mailto:sandiphazra301@gmail.com", value: "sandiphazra301@gmail.com" },
    { name: "Location", icon: "📍", url: "https://www.google.com/maps/place/Bishnupur,+West+Bengal+722122/", value: "Bishnupur, Bankura, West Bengal", newTab: true },
    { name: "GitHub", icon: "💻", url: "https://github.com/Cyber-Sandip/", value: "github.com/Cyber-Sandip", newTab: true },
    { name: "LinkedIn", icon: "🔗", url: "https://www.linkedin.com/in/sandip-hazra-1487432a3", value: "linkedin.com/in/sandip-hazra", newTab: true },
    { name: "WhatsApp", icon: "💬", url: "https://wa.me/919907528120", value: "Chat on WhatsApp", newTab: true }
  ];

  return (
    <>
      <div className="c-heder">Contact Me</div>
      <div className="c-paragraph">
        <p>Let’s connect ⚡ Reach me via direct links or social platforms below:</p>

        <div style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          fontSize: "16px"
        }}>
          {links.map((link, i) => (
            <a 
              key={i}
              href={link.url}
              target={link.newTab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "goldenrod",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                border: "1px solid goldenrod",
                borderRadius: "8px",
                background: "rgba(20,20,20,0.8)",
                boxShadow: "0 0 12px rgba(218,165,32,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e)=> {
                e.currentTarget.style.color = "black";
                e.currentTarget.style.background = "goldenrod";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(218,165,32,0.9)";
              }}
              onMouseLeave={(e)=> {
                e.currentTarget.style.color = "goldenrod";
                e.currentTarget.style.background = "rgba(20,20,20,0.8)";
                e.currentTarget.style.boxShadow = "0 0 12px rgba(218,165,32,0.4)";
              }}
            >
              <span style={{ fontSize: "20px" }}>{link.icon}</span>
              <span>{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}




function MainContener({onMain, selectedComponent}){
  return(
    <>
      <nav className='navbar'>
        <button className='nav-button' onClick={() => onMain('about')} >About Me</button>
        <button className='nav-button' onClick={() => onMain('skills')} >Skills</button>
        <button className='nav-button' onClick={() => onMain('education')} >Education</button>
        <button className='nav-button' onClick={() => onMain('projects')} >Projects</button>
        <button className='nav-button' onClick={() => onMain('contract')} >Contract Me</button>
      </nav>
      <div className='content'>       
        {selectedComponent}
      </div>
    </>
  )
}

function App() {
  const [activesection, setactivesection] = useState('about')
  let SelectComponent;
  switch(activesection){
    case 'about':
      SelectComponent = <AboutMe/>;
      break;
    case 'skills':
      SelectComponent = <Skills/>;
      break;
    case 'education':
      SelectComponent = <Education/>;
      break;
    case 'projects':
      SelectComponent = <Projects/>;
      break;
    case 'contract':
      SelectComponent = <ContractMe/>;
      break;
    default:
      SelectComponent = <AboutMe/>;
  }

  return (
    <>
      <div className='border'>
        <div className='profile-contener'>        
          <Profile/>        
        </div>
        <div className='main-contener'>        
          <MainContener onMain={setactivesection} selectedComponent={SelectComponent}/>
        </div>
      </div>
    </>
  )
}

export default App
