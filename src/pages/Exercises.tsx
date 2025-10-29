import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Play, Pause, Wind, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Exercises = () => {
  const [activeExercise, setActiveExercise] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const exercises = [
    {
      id: "breathing",
      title: "Box Breathing",
      description: "4-4-6 breathing pattern to calm your nervous system",
      duration: "5 minutes",
      icon: Wind,
      color: "from-secondary to-success",
      steps: [
        "Find a comfortable seated position",
        "Breathe IN slowly through your nose for 4 counts",
        "HOLD your breath for 4 counts",
        "Breathe OUT slowly through your mouth for 6 counts",
        "Repeat this cycle 8 times",
        "Notice how your body feels more relaxed",
      ],
    },
    {
      id: "grounding",
      title: "5-4-3-2-1 Grounding",
      description: "Sensory technique to bring you into the present moment",
      duration: "7 minutes",
      icon: Eye,
      color: "from-primary to-accent",
      steps: [
        "Take a deep breath and look around you",
        "Name 5 things you can SEE around you",
        "Name 4 things you can TOUCH near you",
        "Name 3 things you can HEAR right now",
        "Name 2 things you can SMELL (or like to smell)",
        "Name 1 thing you can TASTE (or recently tasted)",
        "Take another deep breath. You're here. You're present.",
      ],
    },
    {
      id: "muscle",
      title: "Progressive Muscle Relaxation",
      description: "Tense and release to ease physical tension",
      duration: "6 minutes",
      icon: Sparkles,
      color: "from-accent to-primary",
      steps: [
        "Sit or lie down in a comfortable position",
        "Tense your FEET for 5 seconds, then release. Notice the relaxation.",
        "Tense your LEGS for 5 seconds, then release",
        "Tense your STOMACH for 5 seconds, then release",
        "Tense your HANDS into fists for 5 seconds, then release",
        "Tense your SHOULDERS up to your ears for 5 seconds, then release",
        "Tense your FACE (scrunch it up) for 5 seconds, then release",
        "Take a deep breath. Feel the relaxation throughout your body.",
      ],
    },
  ];

  const startExercise = (exerciseId: string) => {
    setActiveExercise(exerciseId);
    setStep(0);
    setIsPlaying(true);
  };

  const nextStep = () => {
    const exercise = exercises.find((e) => e.id === activeExercise);
    if (exercise && step < exercise.steps.length - 1) {
      setStep(step + 1);
    } else {
      completeExercise();
    }
  };

  const completeExercise = () => {
    setActiveExercise(null);
    setStep(0);
    setIsPlaying(false);
  };

  const currentExercise = exercises.find((e) => e.id === activeExercise);
  const progress = currentExercise ? ((step + 1) / currentExercise.steps.length) * 100 : 0;

  if (activeExercise && currentExercise) {
    const Icon = currentExercise.icon;
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-large">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="sm" onClick={completeExercise}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit
              </Button>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${currentExercise.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <CardTitle>{currentExercise.title}</CardTitle>
            <Progress value={progress} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Step {step + 1} of {currentExercise.steps.length}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-12 space-y-4">
              <p className="text-2xl font-medium leading-relaxed">{currentExercise.steps[step]}</p>
            </div>
            <Button onClick={nextStep} className="w-full" size="lg">
              {step < currentExercise.steps.length - 1 ? "Next Step" : "Complete Exercise"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold">Grounding Exercises</h1>
            <p className="text-sm text-muted-foreground">Quick calming techniques for difficult moments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => {
            const Icon = exercise.icon;
            return (
              <Card key={exercise.id} className="hover:shadow-medium transition-all">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exercise.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{exercise.title}</CardTitle>
                  <CardDescription>{exercise.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{exercise.duration}</span>
                    </div>
                    <Button onClick={() => startExercise(exercise.id)} className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Start Exercise
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Tips for best results:</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Find a quiet, comfortable space where you won't be interrupted</li>
                <li>• Practice these exercises regularly, not just during crises</li>
                <li>• It's normal if your mind wanders — gently bring it back</li>
                <li>• There's no "perfect" way to do these; what matters is trying</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Exercises;
