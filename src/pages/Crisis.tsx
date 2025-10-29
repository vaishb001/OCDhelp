import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageSquare, AlertTriangle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Crisis = () => {
  const emergencyContacts = [
    {
      name: "Emergency Services (India)",
      number: "112",
      description: "For immediate life-threatening emergencies",
      color: "destructive",
    },
    {
      name: "Manas mind clinic",
      number: "+91-9717175451",
      description: "Dr Manvee Chaudhary - Ghaziabad. Plot no 14, Mayur Vihar, Niti Khand 2, Indirapuram, Ghaziabad",
      color: "secondary",
    },
  ];

  const internationalHelplines = [
    { country: "USA", name: "National Suicide Prevention", number: "988" },
    { country: "UK", name: "Samaritans", number: "116 123" },
    { country: "Australia", name: "Lifeline", number: "13 11 14" },
    { country: "Canada", name: "Crisis Services Canada", number: "1-833-456-4566" },
  ];

  const trustedContact = localStorage.getItem("trusted-contact");
  const contact = trustedContact ? JSON.parse(trustedContact) : null;

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
            <h1 className="text-2xl font-bold">Crisis Help</h1>
            <p className="text-sm text-muted-foreground">Immediate support when you need it most</p>
          </div>
        </div>

        <Alert className="border-destructive/50 bg-destructive/10">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive">
            <strong>If you are in immediate danger or having thoughts of self-harm, please call emergency services (112 in India) right now.</strong>
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Emergency Helplines</h2>
          {emergencyContacts.map((contact) => (
            <Card key={contact.number} className="hover:shadow-medium transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </div>
                  <Phone className={`w-5 h-5 text-${contact.color}`} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-2xl font-bold">{contact.number}</p>
                <Button
                  className="w-full"
                  variant={contact.color as any}
                  size="lg"
                  onClick={() => (window.location.href = `tel:${contact.number}`)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {contact && (
          <Card className="bg-gradient-to-br from-success/10 to-secondary/10 border-success/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-success" />
                Your Trusted Contact
              </CardTitle>
              <CardDescription>Someone who cares about you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="text-lg font-semibold">{contact.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-lg font-semibold">{contact.phone}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="default"
                  onClick={() => (window.location.href = `tel:${contact.phone}`)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = `sms:${contact.phone}`)}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Text
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>International Helplines</CardTitle>
            <CardDescription>Crisis support around the world</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {internationalHelplines.map((helpline) => (
                <div
                  key={helpline.country}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div>
                    <p className="font-medium">{helpline.country}</p>
                    <p className="text-sm text-muted-foreground">{helpline.name}</p>
                  </div>
                  <p className="font-bold">{helpline.number}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Safety Plan Template</CardTitle>
            <CardDescription>Steps to follow during a crisis</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Recognize your warning signs (thoughts, emotions, physical sensations)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Use coping strategies: breathing exercises, grounding techniques</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>Contact someone for distraction: call a friend, text your trusted person</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>Contact professionals: call a mental health helpline</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">5.</span>
                <span>Go to a safe place: emergency room, crisis center</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">6.</span>
                <span>Call emergency services if in immediate danger: 112 (India)</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              Remember: Reaching out for help is a sign of strength, not weakness. You deserve support.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Crisis;
