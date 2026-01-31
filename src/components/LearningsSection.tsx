export const LearningsSection = () => {
  const learnings = [
    {
      title: "Code Review and Documentation Essentials",
      description: "Mastering code review best practices to catch bugs early, maintain code quality, and facilitate knowledge sharing. Effective reviews focus on small PRs, clear feedback, and ensuring maintainability before code reaches production.",
      link: "https://notebooklm.google.com/notebook/7997c3d1-53fc-442a-ab08-61761db50d5a"
    },
    {
      title: "AWS Lambda, Chalice Framework and Presigned URLs Explained",
      description: "Building serverless microservices with AWS Chalice for rapid API Gateway and Lambda deployment. Using S3 presigned URLs to grant secure, time-limited access for file uploads/downloads without exposing AWS credentials.",
      link: "https://notebooklm.google.com/notebook/fd490832-7084-41ba-bbff-dd4fef30d0a5"
    },
    {
      title: "AWS Backend Development Ecosystem Essentials",
      description: "Comprehensive guide to building scalable serverless backends using AWS Lambda, API Gateway, and DynamoDB. Understanding how these services integrate to create robust, cost-effective APIs without managing infrastructure.",
      link: "https://notebooklm.google.com/notebook/b371ba38-9be2-4649-9b7b-848296a55273"
    },
    {
      title: "Retrieval-Augmented Generation Architecture - Building RAG's with SQL/Vector DB's",
      description: "Architecting RAG systems that enhance LLM accuracy by retrieving relevant context from vector databases before generating responses. Implementing embeddings with PostgreSQL/PGVector and Pinecone for semantic search and reduced hallucinations.",
      link: "https://notebooklm.google.com/notebook/ce7894f2-5401-40b8-b8de-3073e1923bb7"
    },
    {
      title: "Google OAuth: Secure Identity and Data Integration",
      description: "Implementing Google OAuth 2.0 for secure user authentication and API authorization. Understanding scopes, access tokens, and the verification process for applications accessing sensitive user data.",
      link: "https://notebooklm.google.com/notebook/3c008a81-a77c-40c2-8bba-c1f81a9d088f"
    },
    {
      title: "AWS Bedrock: Detailed Creation and Workflow Guide",
      description: "Step-by-step guide to building AI agents on AWS Bedrock using foundation models like Claude and Titan. Understanding action groups, Lambda integrations, and agentic workflows for autonomous task execution.",
      link: "https://notebooklm.google.com/notebook/03a2d9ac-83f6-4f85-a2d0-d5898cf30e27"
    }
  ];

  return (
    <section id="learnings" className="learnings-section section">
      <div className="learnings-container">
        <h2 className="learnings-main-title">Key Learnings</h2>
        <div className="learnings-scroll-area">
          <div className="learnings-content">
            {learnings.map((learning, index) => (
              <div key={index} className="learning-item">
                <div className="learning-divider"></div>
                <div className="learning-text">
                  <h3 className="learning-heading">{learning.title}</h3>
                  <p className="learning-description">{learning.description}</p>
                  {learning.link && (
                    <a 
                      href={learning.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="learning-link"
                    >
                      View Notes →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
