/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  period: string;
  organization: string;
  location: string;
  description: string[];
  techStack: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string; // e.g. "Web Development", "Data Science", "Data Analytics"
  description: string[];
  skillsLearned: string[];
  certificateUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Certification {
  title: string;
  provider: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}
