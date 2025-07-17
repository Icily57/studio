'use server';
/**
 * @fileOverview An AI agent that imports a portfolio from a file.
 *
 * - importPortfolio - A function that handles the portfolio import process.
 * - ImportPortfolioInput - The input type for the importPortfolio function.
 * - ImportPortfolioOutput - The return type for the importPortfolio function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ProjectSchema = z.object({
  id: z.string().describe('A unique identifier for the project.'),
  name: z.string().describe('The name of the project.'),
  description: z.string().describe('A brief description of the project.'),
  imageUrl: z
    .string()
    .describe(
      'A placeholder image URL for the project. Use "https://placehold.co/400x300.png" and add a data-ai-hint attribute with relevant keywords based on the project.'
    ),
  link: z.string().describe('A URL to the project, or "#" if not available.'),
});

const ExperienceSchema = z.object({
    id: z.string().describe('A unique identifier for the experience.'),
    title: z.string().describe('The job title.'),
    company: z.string().describe('The name of the company.'),
    date: z.string().describe('The start and end dates of the employment (e.g., "2020 - Present").'),
    description: z.string().describe('A brief description of the role and accomplishments.'),
});

const EducationSchema = z.object({
    id: z.string().describe('A unique identifier for the education entry.'),
    institution: z.string().describe('The name of the educational institution.'),
    degree: z.string().describe('The degree or certificate obtained.'),
    date: z.string().describe('The start and end dates of the education (e.g., "2014 - 2018").'),
    description: z.string().describe('Any relevant details, like honors or focus of study.'),
});

const AwardSchema = z.object({
    id: z.string().describe('A unique identifier for the award entry.'),
    name: z.string().describe('The name of the award or certification.'),
    issuer: z.string().describe('The organization that issued the award.'),
    date: z.string().describe('The date the award was received.'),
    description: z.string().describe('A brief description of the award.'),
});


const ImportPortfolioInputSchema = z.object({
  fileDataUri: z
    .string()
    .describe(
      "A portfolio file (PDF, DOC, PNG, JPG) as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ImportPortfolioInput = z.infer<typeof ImportPortfolioInputSchema>;

const ImportPortfolioOutputSchema = z.object({
  name: z.string().describe("The full name of the portfolio owner."),
  title: z.string().describe("The professional title of the portfolio owner."),
  avatarUrl: z.string().describe("A placeholder image URL for the avatar. Use 'https://placehold.co/128x128.png' with a 'user avatar' data-ai-hint."),
  about: z.string().describe("A professional summary about the portfolio owner."),
  skills: z.array(z.string()).describe("A list of key skills."),
  projects: z.array(ProjectSchema).describe("A list of up to 4 key projects."),
  experience: z.array(ExperienceSchema).describe("A list of professional work experiences."),
  education: z.array(EducationSchema).describe("A list of academic qualifications."),
  awards: z.array(AwardSchema).describe("A list of awards and certifications."),
  contact: z.object({
    email: z.string().describe("Contact email address."),
    phone: z.string().describe("Contact phone number."),
    linkedin: z.string().describe("LinkedIn profile URL or username."),
    github: z.string().describe("GitHub profile URL or username."),
  }),
});
export type ImportPortfolioOutput = z.infer<typeof ImportPortfolioOutputSchema>;


export async function importPortfolio(input: ImportPortfolioInput): Promise<ImportPortfolioOutput> {
  return importPortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'importPortfolioPrompt',
  input: { schema: ImportPortfolioInputSchema },
  output: { schema: ImportPortfolioOutputSchema },
  prompt: `You are an expert portfolio analyst. Your task is to analyze the provided file (which could be a PDF, DOC, or image) and extract structured information to populate a new portfolio.

Analyze the document provided via the data URI. If it's an image, perform OCR to read the text. Extract the following information and return it in a valid JSON format.

File:
{{media url=fileDataUri}}

- Extract the person's full name and professional title.
- Write a professional "About Me" summary based on the content.
- List the key skills mentioned.
- Identify up to 4 main projects. For each project, provide a name, a brief description, a placeholder image URL ('https://placehold.co/400x300.png' with a relevant data-ai-hint), and a link if available (use '#' if not).
- Extract work experience, education history, and any awards or certifications.
- Extract contact information: email, phone, LinkedIn, and GitHub. If a piece of contact information is not present, return an empty string for it.
- For the avatar, use 'https://placehold.co/128x128.png' with the data-ai-hint "user avatar".`,
});

const importPortfolioFlow = ai.defineFlow(
  {
    name: 'importPortfolioFlow',
    inputSchema: ImportPortfolioInputSchema,
    outputSchema: ImportPortfolioOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('AI failed to generate portfolio from the provided file.');
    }
    return output;
  }
);
