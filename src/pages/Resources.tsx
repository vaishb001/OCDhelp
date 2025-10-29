import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Brain, Heart, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Resources = () => {
  const topics = [
    {
      id: "what-is-ocd",
      icon: Brain,
      title: "What is OCD?",
      content: `Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by unwanted, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) that a person feels driven to perform.

These obsessions and compulsions can significantly interfere with daily activities and cause considerable distress. It's important to understand that OCD is a medical condition, not a personality trait or choice.

Common themes include: fear of contamination, need for symmetry, unwanted aggressive or taboo thoughts, and excessive doubt.`,
    },
    {
      id: "understanding-urges",
      icon: Lightbulb,
      title: "Understanding Urges",
      content: `Urges are strong impulses to perform certain behaviors. They can feel overwhelming, but they're like waves — they rise, peak, and eventually fall, even without acting on them.

This is called "urge surfing." By observing urges without judgment and resisting the impulse to act, you can learn that:
• Urges are temporary
• They naturally decrease over time
• Acting on them often makes them stronger in the long run
• You can tolerate discomfort

Think of urges as false alarms from your brain's anxiety system. They feel urgent, but they're not emergencies.`,
    },
    {
      id: "why-compassion",
      icon: Heart,
      title: "Why Self-Compassion Helps",
      content: `Self-criticism and shame often make OCD and urges worse by increasing anxiety and stress. Self-compassion means treating yourself with the same kindness you'd offer a good friend.

Research shows self-compassion helps by:
• Reducing shame and self-judgment
• Lowering stress hormones
• Increasing motivation to change (not from fear, but from care)
• Building emotional resilience

When you slip up, instead of "I'm terrible," try "This is hard, and I'm learning. Everyone struggles sometimes. What can I do to help myself right now?"`,
    },
    {
      id: "when-to-seek-help",
      icon: Users,
      title: "When to Seek Professional Help",
      content: `This app is a supportive tool, but professional help is recommended if you experience:

• Obsessions or compulsions that take up more than 1 hour per day
• Significant distress or interference with daily life, work, or relationships
• Thoughts of self-harm or suicide
• Depression, severe anxiety, or other mental health symptoms
• Urges that lead to harmful behaviors (substance abuse, self-injury, etc.)

Effective treatments for OCD include:
• Cognitive Behavioral Therapy (CBT), especially Exposure and Response Prevention (ERP)
• Medication (SSRIs) prescribed by a psychiatrist
• Support groups and peer support

Remember: Seeking help is a sign of strength and self-care.`,
    },
  ];

  const copingStrategies = [
    {
      title: "Delay and Distract",
      description: "When you feel an urge, delay acting on it for 10-15 minutes and do a distracting activity.",
    },
    {
      title: "Thought Challenging",
      description: "Question catastrophic thoughts: 'What's the evidence for this fear? What would I tell a friend?'",
    },
    {
      title: "Mindfulness",
      description: "Observe thoughts and urges without judgment, like clouds passing in the sky.",
    },
    {
      title: "Behavioral Substitution",
      description: "Replace a compulsion with a safe, harmless alternative behavior.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Resources & Education</h1>
            <p className="text-sm text-muted-foreground">Learn about OCD and coping strategies</p>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-calm flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Knowledge is Power</CardTitle>
                <CardDescription>Understanding helps reduce fear and shame</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Understanding OCD</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <AccordionItem key={topic.id} value={topic.id} className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-calm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-left">{topic.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                    {topic.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Evidence-Based Coping Strategies</CardTitle>
            <CardDescription>Techniques that research shows can help</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {copingStrategies.map((strategy) => (
                <div key={strategy.title} className="p-4 bg-muted rounded-lg space-y-2">
                  <h3 className="font-semibold">{strategy.title}</h3>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Reading & Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Books</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• "The OCD Workbook" by Bruce M. Hyman and Cherry Pedrick</li>
                <li>• "Freedom from Obsessive-Compulsive Disorder" by Jonathan Grayson</li>
                <li>• "Brain Lock" by Jeffrey M. Schwartz</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Organizations</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• International OCD Foundation (iocdf.org)</li>
                <li>• Anxiety and Depression Association of America (adaa.org)</li>
                <li>• National Institute of Mental Health (nimh.nih.gov)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              Remember: Recovery is possible. Many people with OCD lead full, meaningful lives with the right support and treatment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
