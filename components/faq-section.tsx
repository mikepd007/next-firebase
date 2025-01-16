import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "What is Prompter?",
    answer: "Prompter is a Chrome extension designed to help users improve their prompts when interacting with AI tools. It makes AI conversations more effective by guiding you to ask better questions and get the results you need."
  },
  {
    question: "Who is Prompter for?",
    answer: "Prompter is for anyone who uses AI tools—whether you're a content creator, developer, researcher, or analyst. It simplifies prompt creation for all experience levels, making AI interactions more productive."
  },
  {
    question: "How does Prompter work?",
    answer: "Prompter suggests real-time improvements to your AI prompts, helping you frame questions more effectively and streamline conversations. It's integrated directly into the chat tools you use, so there's no additional setup required."
  },
  {
    question: "Do I need to be an AI expert to use Prompter?",
    answer: "No, Prompter is designed to be user-friendly and guide you through the process, even if you're new to AI. It helps you ask better questions without needing advanced knowledge of prompt engineering."
  },
  {
    question: "How does Prompter improve my AI results?",
    answer: "Prompter optimizes your prompts in real-time, helping you ask more focused questions and avoid unproductive back-and-forth conversations, leading to clearer, more accurate results."
  },
  {
    question: "Is there a free version of Prompter?",
    answer: "Yes, Prompter offers a free version with basic features. For more advanced capabilities and higher usage limits, we also offer a premium subscription."
  }
];

export function FAQSection() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">FAQs</h2>
        <h3 className="text-3xl font-bold tracking-tight">
          What is Prompter and who is it for?
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Card key={index} className="bg-card/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 