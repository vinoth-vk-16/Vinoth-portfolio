import { useState } from "react";
import { Timeline } from "@/components/ui/timeline";

// Expandable content component for full-time internship
function FullTimeInternContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
        <strong>AI/ML Engineer Intern (Full-time)</strong> at{' '}
        <a href="https://surveysparrow.com/" target="_blank" rel="noopener noreferrer" className="company-link-inline">
          SurveySparrow
          <img src="/SurveySparrow Logo.svg" alt="SurveySparrow" className="company-logo-inline" />
        </a>
      </p>
      
      <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
        Built an AI-powered assessment platform that reduced GTM hiring manual effort by 60-70%. 
        Implemented real-time AI proctoring with head movement detection and instant notifications to prevent malpractice. 
        Developed automated question generation using AI templates and integrated Gemini Voice Model for communication scoring, 
        eliminating manual HR review for initial screening rounds.
      </p>

      <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
        Built production-grade rate limiting system for AI services with configurable thresholds (per second, per minute, per hour) 
        to prevent API abuse and bot-triggered attacks. Implemented safeguards that protect application stability by controlling 
        excessive API calls, preventing system crashes from malicious or unintended high-frequency requests.
      </p>

      {isExpanded && (
        <>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Worked in an AI-powered cold call simulation system where sales team members practice conversations with 
            AI prospects using advanced prompt engineering. Enhanced the audio recording system to synchronously capture 
            both streaming AI audio and system microphone input, implementing timestamp-based merging for natural-sounding 
            recordings with proper frequency alignment.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Created one-on-one live conversation system where candidates engage with AI prospects to demonstrate 
            product knowledge and sales skills, enabling realistic interview simulations.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Built unified tracking system for developer activities across GitHub and Bitbucket, providing single-view 
            work progress dashboard. Integrated AWS Bedrock agents to enable natural language queries about development metrics.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Developed Electron-based desktop application for automated meeting transcription and AI-generated note-taking, 
            eliminating manual documentation overhead. Integrated Google Auth for Calendar with verified sensitive scope access 
            through Google Verification Team approval.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Architected RAG system for product team using advanced chunking mechanisms on PRD documents. 
            Implemented Amazon Titan embeddings with Pinecone vector storage, later migrated to AWS Aurora PostgreSQL 
            for similarity search. Used Claude Sonnet 4 for response generation.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Automated PR summary generation for GitHub/Bitbucket code reviews. Built webhook-triggered system that 
            embeds PR summaries into Aurora PostgreSQL, performs similarity search on new issues, and provides 
            implementation guides with relevant PR links based on historical codebase solutions.
          </p>
        </>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 text-xs md:text-sm font-medium mt-2 transition-colors"
      >
        {isExpanded ? '← View less' : 'View more →'}
      </button>
    </div>
  );
}

export function TimelineSection() {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>AI/ML Engineer Intern (Part-time)</strong> at{' '}
            <a href="https://surveysparrow.com/" target="_blank" rel="noopener noreferrer" className="company-link-inline">
              SurveySparrow
              <img src="/SurveySparrow Logo.svg" alt="SurveySparrow" className="company-logo-inline" />
            </a>
          </p>
          
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Explored AWS Bedrock Agent Core runtime, memory management, IAM, and gateway architecture. 
            Implemented observability for agent tracing on tool calling. Built custom tools using Model Context Protocol (MCP) 
            deployed as Lambda functions, integrated via Agent Core Gateway with multiple tools for complex action execution.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Extended the assessment platform with programming language support. Containerized language-specific packages 
            into Docker images, pushed to Amazon ECR, and created Lambda functions for direct ECR access. 
            Achieved millisecond-level code compilation times across multiple programming languages with scalable architecture.
          </p>
        </div>
      ),
    },
    {
      title: "May - Nov 2025",
      content: <FullTimeInternContent />,
    },
    {
      title: "2022 - 2027",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>M.Sc. Artificial Intelligence and Machine Learning</strong>
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            Coimbatore Institute of Technology
          </p>
          
          <div className="mb-6">
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-semibold mb-2">
              Academic Focus
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              Comprehensive coursework in core machine learning, deep learning architectures. 
              Developed strong foundation in ML theory and practical implementation.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-semibold mb-2">
              Leadership & Extracurricular
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <strong>Joint Secretary, Photography Club:</strong> Organized club events, taught photography workshops, 
              and coordinated large-scale college events with cross-functional team collaboration.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <strong>Internship Coordinator:</strong> Established partnerships with multiple companies by communicating 
              with HRs and senior managers, successfully securing on-campus hiring opportunities for students.
            </p>
          </div>

          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-semibold mb-2">
              Achievements
            </p>
            <div className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              • 🏆 2nd Place at Electrino'24 Hackathon - Dynamic QR-based Attendance System (₹10,000 prize)<br/>
              • Participated in multiple 24-hour hackathons, gaining rapid prototyping and deadline-driven development experience
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
