import { BlogPostCard } from './ui/blog-post-card';

const projects = [
  {
    title: "Echo - AI Desktop & Workspace Assistant",
    description: "Built a dual-purpose AI assistant combining Google Workspace automation (Classroom, Forms, Docs, Slides) with a desktop voice assistant powered by Gemini Live API. Integrated custom MCP tools for system settings control and troubleshooting via natural voice commands. Enables hands-free desktop operations and seamless Google Workspace management through conversational AI.",
    tags: ["Gemini Live API", "MCP", "Google Workspace", "Voice AI", "Desktop Assistant"],
    image: "/Framer User Content/Shape 15.svg",
    github: "https://github.com/Precision-Recall/Echo",
  },
  {
    title: "Communication Automation Assistant",
    description: "Developed a multi-channel communication system integrating Gmail, Slack, and WhatsApp. Achieved 83% accuracy on a custom BiLSTM model for Gmail classification using self-curated email data. Used Gemini 2.0 Pro for Slack and WhatsApp summarization and deployed Twilio-based call alerts for critical message escalation.",
    tags: ["Gmail", "Slack", "WhatsApp", "BiLSTM", "Gemini 2.0", "Twilio"],
    image: "/Framer User Content/Shape 15.svg",
    github: "https://github.com/vinoth-vk-16/communication-automation",
  },
  {
    title: "Developer Workflow Automation System using GenAI",
    description: "Designed a GenAI-powered system that analyzes codebases and retrieves similar PRs using Titan embeddings with PGVector on AWS Aurora. It generates detailed implementation strategies by comparing historical patterns with the active code. Evaluated 6 different LLMs to determine the most efficient model for code reasoning, latency, and contextual depth. Integrated an AWS Bedrock agent capable of extracting developer metrics, answering engineering queries, and automating tasks such as meeting scheduling and issue/PR creation.",
    tags: ["GenAI", "AWS Aurora", "PGVector", "Titan", "AWS Bedrock", "LLM"],
    image: "/Framer User Content/Shape 28.svg",
    github: "https://github.com/vinoth-vk-16/developer-workflow-automation",
  },
  {
    title: "Outreach Agentic System",
    description: "Built an outreach automation platform using LangChain and LangGraph with tool-calling agents for resume-aware cover letter generation, email summarization, automated drafting, and scheduling. Utilized LangChain's unified LLM layer to select between four available LLMs dynamically. Implemented a real-time Gmail webhook sync, ensuring the platform only displays emails sent from within the outreach workflow for focused engagement.",
    tags: ["LangChain", "LangGraph", "Gmail", "Automation", "Agents"],
    image: "/Framer User Content/Shape 42.svg",
    github: "https://github.com/vinoth-vk-16/SuperSpidey",
  },
  {
    title: "Dynamic QR-Based Attendance System",
    description: "Developed a comprehensive Flutter mobile app for secure attendance management using time-sensitive QR codes. Features biometric authentication, device binding via IMEI verification, and real-time session management. Implemented Firebase backend with role-based access control, automatic conflict detection for sessions, and manual attendance request system for exceptions.",
    tags: ["Flutter", "Firebase", "QR Codes", "Biometric Auth", "Cloud Firestore", "Mobile Scanner"],
    image: "/Framer User Content/Shape 20.svg",
    github: "https://github.com/vinoth-vk-16/Qr-attendancesystem-flutter",
  },
  {
    title: "ContentWriter - Multi-Agent AI System",
    description: "Built a comprehensive multi-agent content creation system using CrewAI framework with specialized agents for outline generation, SEO optimization, grammar verification, and content scheduling. Features a Streamlit web interface for seamless user interaction, automated keyword integration, and CSV-based content calendar management with customizable tones, audiences, and writing styles.",
    tags: ["CrewAI", "Multi-Agent", "Streamlit", "SEO", "Google GenAI", "Content Creation"],
    image: "/Framer User Content/Shape 45.svg",
    github: "https://github.com/vinoth-vk-16/ContentWriter-MultiAgent",
  },
  {
    title: "Photo Superior - AI Image Colorization",
    description: "Implemented a deep learning-based image colorization system using CNN architecture inspired by Zhang et al. (2016). Converts grayscale images to full-color RGB by predicting A and B color channels in LAB color space. Features a Gradio web interface for intuitive image upload and real-time colorization with pre-trained models achieving high-quality results.",
    tags: ["Deep Learning", "CNN", "OpenCV", "Gradio", "Image Processing", "LAB Color Space"],
    image: "/Framer User Content/Shape 35.svg",
    github: "https://github.com/vinoth-vk-16/Photo--Superior",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-scroll">
          <div className="projects-track">
            {projects.map((project, index) => (
              <div key={index} className="project-card-wrapper">
                <BlogPostCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  github={project.github}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
