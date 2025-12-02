import React from 'react';
import { Container, GridBlock, SectionHeader } from './components/Layout';
import { Button, CodeWindow } from './components/UI';
import { Download, BrainCircuit, Share2, LayoutTemplate, Github, Feather } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-12 bg-nexus-cream overflow-hidden">
      
      {/* Profile Icon */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden bg-white shadow-sm">
           <img 
            src="https://picsum.photos/id/64/200/200" 
            alt="Profile" 
            className="w-full h-full object-cover opacity-90" 
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Author Name Style */}
        <p className="font-serif text-xl md:text-2xl text-nexus-ink mb-2 tracking-wide">
          Graph of Thought
        </p>

        {/* Title Style - Matching the Red from the book */}
        <h1 className="font-serif text-7xl md:text-9xl text-nexus-red mb-8 tracking-tight font-bold">
          GotIdeas
        </h1>
        
        {/* Bird Illustration Area */}
        <div className="my-6 md:my-8 flex justify-center">
            <div className="relative group">
              {/* Removed turquoise glow, added subtle warm shadow */}
              <div className="absolute -inset-4 bg-orange-100 rounded-full opacity-0 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1544605963-7fd8548325a7?q=80&w=600&auto=format&fit=crop" 
                alt="A calm bird perched" 
                className="relative w-48 h-48 md:w-64 md:h-64 object-cover grayscale-[10%] sepia-[15%] hover:sepia-0 transition-all duration-700 mix-blend-multiply"
                style={{ filter: 'contrast(1.1) sepia(0.2)' }}
              />
            </div>
        </div>

        {/* Subtitle Style */}
        <p className="font-serif italic text-xl md:text-2xl text-nexus-ink mb-8 max-w-2xl mx-auto">
          A Brief History of Information Networks<br/>
          <span className="text-nexus-gray not-italic text-lg md:text-xl mt-2 block font-sans font-light">
            from the Stone Age to AI-assisted Reasoning
          </span>
        </p>

        <p className="font-sans text-nexus-gray mb-10 max-w-lg mx-auto leading-relaxed font-light">
          Install Graph-of-Thought based thinking workflows directly into VS Code. 
          Leverage AI not just for code, but for architecture and complex reasoning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={() => window.open('https://marketplace.visualstudio.com', '_blank')}>
            <span className="flex items-center gap-2">
              <Download size={18} />
              Install Extension
            </span>
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView()}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <Container id="features" background="dark">
      <SectionHeader 
        title="Built for Deep Thinking" 
        subtitle="GotIdeas brings structured reasoning templates into your IDE, allowing you to orchestrate complex AI workflows without leaving your code."
      />
      
      <GridBlock cols={3}>
        <div className="space-y-4 group">
          <div className="w-12 h-12 border border-nexus-ink/10 bg-white rounded-lg flex items-center justify-center text-nexus-red mb-4 shadow-sm group-hover:shadow-md transition-shadow">
            <BrainCircuit size={24} />
          </div>
          <h3 className="font-serif text-xl font-bold text-nexus-ink">Graph of Thought</h3>
          <p className="font-sans text-nexus-gray leading-relaxed font-light">
            Move beyond linear chat. Nexus enables non-linear reasoning, allowing AI to explore multiple branches of possibilities before converging on a solution.
          </p>
        </div>

        <div className="space-y-4 group">
          <div className="w-12 h-12 border border-nexus-ink/10 bg-white rounded-lg flex items-center justify-center text-nexus-red mb-4 shadow-sm group-hover:shadow-md transition-shadow">
            <LayoutTemplate size={24} />
          </div>
          <h3 className="font-serif text-xl font-bold text-nexus-ink">Template System</h3>
          <p className="font-sans text-nexus-gray leading-relaxed font-light">
            We release curated templates for Architecture Review, Bug Analysis, and System Design. Or create your own JSON-based reasoning structures.
          </p>
        </div>

        <div className="space-y-4 group">
          <div className="w-12 h-12 border border-nexus-ink/10 bg-white rounded-lg flex items-center justify-center text-nexus-red mb-4 shadow-sm group-hover:shadow-md transition-shadow">
            <Share2 size={24} />
          </div>
          <h3 className="font-serif text-xl font-bold text-nexus-ink">Team Alignment</h3>
          <p className="font-sans text-nexus-gray leading-relaxed font-light">
            Commit your thinking process. GotIdeas files (`.nexus`) live alongside your code, serving as living documentation of the decisions made by humans and AI.
          </p>
        </div>
      </GridBlock>
    </Container>
  );
};

const CodeSection = () => {
  const exampleCode = `{
  "template": "architectural-decision",
  "version": "1.0",
  "steps": [
    {
      "id": "context",
      "prompt": "Analyze the current project structure in @src/."
    },
    {
      "id": "alternatives",
      "type": "diverge",
      "branches": 3,
      "instruction": "Propose 3 different state management patterns."
    },
    {
      "id": "decision",
      "type": "converge",
      "inputs": ["alternatives"],
      "instruction": "Evaluate pros/cons and recommend the best fit."
    }
  ]
}`;

  return (
    <Container background="cream">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1">
          <SectionHeader 
            title="Declarative Workflows" 
            subtitle="Define how you want the AI to think. Structure your problem-solving process using simple JSON templates."
          />
          <ul className="space-y-6 mt-8 font-sans text-nexus-ink">
            <li className="flex items-start gap-4">
              <span className="text-nexus-red font-bold text-xl mt-[-4px]">•</span>
              <span className="font-light"><strong>Context Aware:</strong> Automatically pulls relevant files from your workspace.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-nexus-red font-bold text-xl mt-[-4px]">•</span>
              <span className="font-light"><strong>Visualizations:</strong> Generates mermaid.js charts of the thought process within VS Code.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-nexus-red font-bold text-xl mt-[-4px]">•</span>
              <span className="font-light"><strong>Extensible:</strong> Write your own templates or download from the community registry.</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full max-w-xl">
          <div className="relative">
             <div className="absolute -inset-2 bg-nexus-red rounded-lg opacity-10 blur-xl"></div>
             <CodeWindow fileName="decision-matrix.nexus" code={exampleCode} />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Testimonials = () => {
  return (
    <Container background="light" className="border-t border-gray-200">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl font-bold mb-4 text-nexus-ink">Join the New Era</h2>
        <p className="text-nexus-gray font-light">Empowering developers to think bigger.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {/* Card 1 */}
         <div className="bg-nexus-cream p-8 rounded-none border border-gray-200 hover:border-nexus-red/30 transition-colors">
            <p className="font-serif italic text-nexus-ink mb-6">"Nexus changed how I approach system design. It's like having a senior architect pair programming with me, but focusing on the 'why' instead of just the 'how'."</p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/id/32/100/100" className="w-10 h-10 rounded-full object-cover grayscale" alt="User" />
              <div>
                <p className="font-bold text-sm text-nexus-ink">Sarah Chen</p>
                <p className="text-xs text-nexus-gray">Staff Engineer @ TechFlow</p>
              </div>
            </div>
         </div>

         {/* Card 2 */}
         <div className="bg-nexus-cream p-8 rounded-none border border-gray-200 hover:border-nexus-red/30 transition-colors">
            <p className="font-serif italic text-nexus-ink mb-6">"The ability to template my debugging process and have the AI follow a strict GoT workflow has saved me hours of rabbit-hole diving."</p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/id/64/100/100" className="w-10 h-10 rounded-full object-cover grayscale" alt="User" />
              <div>
                <p className="font-bold text-sm text-nexus-ink">Marcus O'Reilly</p>
                <p className="text-xs text-nexus-gray">Backend Lead</p>
              </div>
            </div>
         </div>

         {/* Card 3 */}
         <div className="bg-nexus-cream p-8 rounded-none border border-gray-200 hover:border-nexus-red/30 transition-colors">
            <p className="font-serif italic text-nexus-ink mb-6">"Finally, an AI tool that respects the complexity of software engineering. It doesn't just guess; it reasons."</p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/id/91/100/100" className="w-10 h-10 rounded-full object-cover grayscale" alt="User" />
              <div>
                <p className="font-bold text-sm text-nexus-ink">Elena Rodriguez</p>
                <p className="text-xs text-nexus-gray">Open Source Maintainer</p>
              </div>
            </div>
         </div>
      </div>
    </Container>
  )
}

const Footer = () => {
  return (
    <footer className="bg-nexus-ink text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
             <Feather className="text-nexus-red" />
             <span className="font-serif text-2xl font-bold">Nexus</span>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Nexus Extension. Open Source.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-gray-400 hover:text-nexus-red transition-colors font-sans text-sm tracking-wide uppercase">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-nexus-red transition-colors font-sans text-sm tracking-wide uppercase">
            Docs
          </a>
           <a href="#" className="text-gray-400 hover:text-nexus-red transition-colors font-sans text-sm tracking-wide uppercase">
            Templates
          </a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-nexus-cream text-nexus-ink selection:bg-nexus-red selection:text-white">
      <Hero />
      <Features />
      <CodeSection />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;