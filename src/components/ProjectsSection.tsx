import { BlogPostCard } from './ui/blog-post-card';

const projects = [
  {
    title: "Communication Automation Assistant",
    description: "Developed a multi-channel communication system integrating Gmail, Slack, and WhatsApp. Achieved 83% accuracy on a custom BiLSTM model for Gmail classification using self-curated email data. Used Gemini 2.0 Pro for Slack and WhatsApp summarization and deployed Twilio-based call alerts for critical message escalation.",
    tags: ["Gmail", "Slack", "WhatsApp", "BiLSTM", "Gemini 2.0", "Twilio"],
  },
  {
    title: "Developer Workflow Automation System using GenAI",
    description: "Designed a GenAI-powered system that analyzes codebases and retrieves similar PRs using Titan embeddings with PGVector on AWS Aurora. It generates detailed implementation strategies by comparing historical patterns with the active code. Evaluated 6 different LLMs to determine the most efficient model for code reasoning, latency, and contextual depth. Integrated an AWS Bedrock agent capable of extracting developer metrics, answering engineering queries, and automating tasks such as meeting scheduling and issue/PR creation.",
    tags: ["GenAI", "AWS Aurora", "PGVector", "Titan", "AWS Bedrock", "LLM"],
  },
  {
    title: "Outreach Agentic System",
    description: "Built an outreach automation platform using LangChain and LangGraph with tool-calling agents for resume-aware cover letter generation, email summarization, automated drafting, and scheduling. Utilized LangChain's unified LLM layer to select between four available LLMs dynamically. Implemented a real-time Gmail webhook sync, ensuring the platform only displays emails sent from within the outreach workflow for focused engagement.",
    tags: ["LangChain", "LangGraph", "Gmail", "Automation", "Agents"],
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
