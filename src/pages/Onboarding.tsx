import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Heart } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [age, setAge] = useState("");
  const [consent, setConsent] = useState(false);
  const [trustedContact, setTrustedContact] = useState("");
  const [trustedName, setTrustedName] = useState("");

  const handleContinue = () => {
    if (step === 1 && (!age || parseInt(age) < 13)) {
      return;
    }
    if (step === 2 && !consent) {
      return;
    }
    if (step === 3) {
      localStorage.setItem("ocd-onboarding-complete", "true");
      if (trustedContact) {
        localStorage.setItem("trusted-contact", JSON.stringify({ name: trustedName, phone: trustedContact }));
      }
      navigate("/");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-large">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full bg-gradient-calm flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Welcome to Calm Companion</CardTitle>
          <CardDescription>A supportive space for managing OCD and Urges</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> This app is not a substitute for professional mental health care. If you're in crisis, please contact emergency services immediately.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-2">
                <Label htmlFor="age">What is your age?</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="13"
                  required
                />
                {age && parseInt(age) < 13 && (
                  <p className="text-sm text-destructive">You must be at least 13 years old to use this app. Please seek help from a parent or guardian.</p>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-3 text-sm">
                <p className="font-semibold">Please understand:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>This app provides informational support only</li>
                  <li>It is not a replacement for therapy or medical treatment</li>
                  <li>If you're experiencing a mental health emergency, call emergency services or a crisis helpline</li>
                  <li>Your data is stored locally on your device for privacy</li>
                </ul>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  I understand that this app is for informational purposes only and does not replace professional mental health care. I agree to use this app responsibly.
                </Label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-center space-y-2 mb-4">
                <h3 className="font-semibold">Add a Trusted Contact (Optional)</h3>
                <p className="text-sm text-muted-foreground">
                  Someone you can reach out to during difficult moments
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="trustedName">Name</Label>
                <Input
                  id="trustedName"
                  placeholder="e.g., Mom, Best friend"
                  value={trustedName}
                  onChange={(e) => setTrustedName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="trustedContact">Phone Number</Label>
                <Input
                  id="trustedContact"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={trustedContact}
                  onChange={(e) => setTrustedContact(e.target.value)}
                />
              </div>
              
              <p className="text-xs text-muted-foreground">
                This information stays on your device. You can update it anytime in settings.
              </p>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            <Button
              onClick={handleContinue}
              disabled={
                (step === 1 && (!age || parseInt(age) < 13)) ||
                (step === 2 && !consent)
              }
              className="ml-auto"
            >
              {step === 3 ? "Get Started" : "Continue"}
            </Button>
          </div>
          
          <div className="flex justify-center gap-2 pt-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-2 rounded-full transition-all ${
                  s === step ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
