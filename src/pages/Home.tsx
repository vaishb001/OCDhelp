import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, BookOpen, MessageSquare, Heart, Wind, Eye, Sparkles, ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ChatBot } from "@/components/ChatBot";

const Home = () => {
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);
  const [currentActivity, setCurrentActivity] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showActivity, setShowActivity] = useState(false);
  const [activityStep, setActivityStep] = useState(0);

  const exerciseData = {
    "Grounding: 5-4-3-2-1": {
      steps: [
        "Take a deep breath and look around you",
        "Name 5 things you can SEE around you",
        "Name 4 things you can TOUCH near you",
        "Name 3 things you can HEAR right now",
        "Name 2 things you can SMELL (or like to smell)",
        "Name 1 thing you can TASTE (or recently tasted)",
        "Take another deep breath. You're here. You're present.",
      ],
      icon: Eye,
      isChat: false,
    },
    "Box Breathing": {
      steps: [
        "Find a comfortable seated position",
        "Breathe IN slowly through your nose for 4 counts",
        "HOLD your breath for 4 counts",
        "Breathe OUT slowly through your mouth for 6 counts",
        "Repeat this cycle 8 times",
        "Notice how your body feels more relaxed",
      ],
      icon: Wind,
      isChat: false,
    },
    "Progressive Muscle Relaxation": {
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
      icon: Sparkles,
      isChat: false,
    },
    "Thought Labeler": {
      steps: [],
      icon: MessageSquare,
      isChat: true,
    },
  };

  const situations = [
    { id: "intrusive", label: "Having intrusive thoughts", activity: "Grounding: 5-4-3-2-1" },
    { id: "urge", label: "Feeling an urge to check or repeat", activity: "Box Breathing" },
    { id: "anxious", label: "Feeling anxious or overwhelmed", activity: "Grounding: 5-4-3-2-1" },
    { id: "restless", label: "Feeling restless or agitated", activity: "Progressive Muscle Relaxation" },
    { id: "compulsion", label: "Fighting a compulsion right now", activity: "Thought Labeler" },
    { id: "calm", label: "Just want to practice staying calm", activity: "Box Breathing" },
  ];

  const activities = [
    { id: "grounding", label: "Grounding", icon: Eye, activity: "Grounding: 5-4-3-2-1" },
    { id: "thought", label: "Thought Labeler", icon: MessageSquare, activity: "Thought Labeler" },
    { id: "breathing", label: "Box Breathing", icon: Wind, activity: "Box Breathing" },
  ];

  const handleSituationSelect = (situationId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedSituation(situationId);
      const situation = situations.find(s => s.id === situationId);
      setCurrentActivity(situation?.activity || null);
      setShowActivity(false);
      setActivityStep(0);
      setIsTransitioning(false);
    }, 300);
  };

  const handleQuickStart = () => {
    if (currentActivity) {
      const exerciseInfo = exerciseData[currentActivity as keyof typeof exerciseData];
      if (exerciseInfo?.isChat) {
        window.location.href = "/chat";
        return;
      }
      setIsTransitioning(true);
      setTimeout(() => {
        setShowActivity(true);
        setActivityStep(0);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleNextStep = () => {
    if (currentActivity) {
      const exerciseInfo = exerciseData[currentActivity as keyof typeof exerciseData];
      if (exerciseInfo && activityStep < exerciseInfo.steps.length - 1) {
        setActivityStep(activityStep + 1);
      } else {
        handleCompleteActivity();
      }
    }
  };

  const handleCompleteActivity = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowActivity(false);
      setActivityStep(0);
      setIsTransitioning(false);
    }, 300);
  };

  const currentExercise = currentActivity ? exerciseData[currentActivity as keyof typeof exerciseData] : null;
  const progress = currentExercise && !currentExercise.isChat ? ((activityStep + 1) / currentExercise.steps.length) * 100 : 0;

  const staticFeatures = [
    {
      icon: Phone,
      title: "Crisis Help",
      description: "Helplines & emergency contacts",
      link: "/crisis",
      gradient: "from-destructive to-warning",
    },
    {
      icon: BookOpen,
      title: "Resources",
      description: "Learn about OCD and coping strategies",
      link: "/resources",
      gradient: "from-success to-secondary",
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Share your experience with us",
      link: "/feedback",
      gradient: "from-warning to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <ChatBot />
      <div className="container max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4 pt-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-calm flex items-center justify-center shadow-medium">
              <Heart className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-calm bg-clip-text text-transparent">
            Calm Companion
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A safe space to manage urges, find calm, and build healthier patterns. You're not alone.
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {!selectedSituation ? (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">What best describes your current situation?</h2>
                    <p className="text-muted-foreground">
                      Your answer helps suggest a gentle next step. You can always pick a different activity.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {situations.map((situation) => (
                      <Button
                        key={situation.id}
                        variant="outline"
                        className="h-auto py-4 px-6 text-left justify-start hover:bg-primary/5 hover:border-primary/50"
                        onClick={() => handleSituationSelect(situation.id)}
                      >
                        {situation.label}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : showActivity && currentExercise && !currentExercise.isChat ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" onClick={handleCompleteActivity}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Exit
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      Step {activityStep + 1} of {currentExercise.steps.length}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-center">{currentActivity}</h3>
                    <Progress value={progress} className="h-2" />
                  </div>
                  <div className="text-center py-12 space-y-4">
                    <p className="text-2xl font-medium leading-relaxed">{currentExercise.steps[activityStep]}</p>
                  </div>
                  <Button onClick={handleNextStep} className="w-full" size="lg">
                    {activityStep < currentExercise.steps.length - 1 ? "Next Step" : "Complete Exercise"}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4" />
                      Suggested for you
                    </div>
                    <h3 className="text-3xl font-semibold text-primary">{currentActivity}</h3>
                    <Button size="lg" className="w-full md:w-auto" onClick={handleQuickStart}>
                      Quick Start
                    </Button>
                  </div>
                  
                  <div className="pt-6 border-t space-y-4">
                    <p className="text-center text-sm text-muted-foreground">Or pick an activity manually:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {activities.map((activity) => {
                        const Icon = activity.icon;
                        const exerciseInfo = exerciseData[activity.activity as keyof typeof exerciseData];
                        return (
                          <Button
                            key={activity.id}
                            variant="outline"
                            className="h-auto py-4 flex-col gap-2 hover:bg-primary/5"
                            onClick={() => {
                              setCurrentActivity(activity.activity);
                              if (exerciseInfo?.isChat) {
                                window.location.href = "/chat";
                              } else {
                                setIsTransitioning(true);
                                setTimeout(() => {
                                  setShowActivity(true);
                                  setActivityStep(0);
                                  setIsTransitioning(false);
                                }, 300);
                              }
                            }}
                          >
                            <Icon className="w-5 h-5" />
                            <span>{activity.label}</span>
                          </Button>
                        );
                      })}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => handleSituationSelect("")}
                    >
                      ← Back to situations
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staticFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.title} to={feature.link}>
                <Card className="h-full hover:shadow-large transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-lg">Need immediate support?</h3>
                <p className="text-sm text-muted-foreground">
                  If you're in crisis or experiencing severe distress, please reach out for help right away.
                </p>
              </div>
              <Button asChild size="lg" variant="destructive">
                <Link to="/crisis">Get Help Now</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground space-y-1 pb-8">
          <p>⚠️ This app is not a substitute for professional mental health care</p>
          <p>For emergencies, call your local emergency number immediately</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
