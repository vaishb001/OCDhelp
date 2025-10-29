import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Feedback = () => {
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    
    const feedbackData = {
      rating,
      feedback,
      timestamp: new Date().toISOString(),
    };
    
    // Create mailto link with feedback data
    const mailtoLink = `mailto:abc@gmail.com?subject=App Feedback&body=Rating: ${rating}%0D%0A%0D%0AFeedback: ${feedback}%0D%0A%0D%0ATimestamp: ${new Date().toISOString()}`;
    
    // Open email client
    window.location.href = mailtoLink;
    const existingFeedback = localStorage.getItem("ocd-feedback") || "[]";
    const feedbackArray = JSON.parse(existingFeedback);
    feedbackArray.push(feedbackData);
    localStorage.setItem("ocd-feedback", JSON.stringify(feedbackArray));

    setSubmitted(true);
    toast({
      title: "Thank you for your feedback! 💙",
      description: "Your input helps us improve this app for everyone.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <Card className="w-full max-w-lg text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-calm flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle>Thank You!</CardTitle>
            <CardDescription>Your feedback has been received</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We appreciate you taking the time to share your experience. Your feedback helps make this app better for everyone.
            </p>
            <Button asChild className="w-full">
              <Link to="/">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Feedback</h1>
            <p className="text-sm text-muted-foreground">Help us improve this app</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Share Your Experience</CardTitle>
            <CardDescription>
              Your anonymous feedback helps us understand what's working and what needs improvement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label>How able do you feel to resist urges right now? (1 = not at all, 7 = very able)</Label>
                <RadioGroup value={rating} onValueChange={setRating}>
                  <div className="flex justify-between gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <div key={num} className="flex flex-col items-center gap-2">
                        <RadioGroupItem value={num.toString()} id={`rating-${num}`} />
                        <Label htmlFor={`rating-${num}`} className="text-xs cursor-pointer">
                          {num}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Tell us about your experience (optional)</Label>
                <Textarea
                  id="feedback"
                  placeholder="What helped? What felt off? Any suggestions?"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={6}
                />
              </div>

              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p className="text-sm font-semibold">Privacy Notice</p>
                <p className="text-xs text-muted-foreground">
                  Your feedback is stored anonymously on your device. We do not collect personal information.
                  This data may be used for research purposes to improve mental health support tools.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={!rating}>
                <Send className="w-4 h-4 mr-2" />
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Questions we're exploring:</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Which features are most helpful during difficult moments?</li>
                <li>• What could make the app more supportive?</li>
                <li>• Are there any features that feel confusing or unhelpful?</li>
                <li>• What would you like to see added?</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
