import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus, CheckCircle, Circle, Trash2, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

type Goal = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
};

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ocd-goals");
    if (stored) {
      setGoals(JSON.parse(stored));
    }
  }, []);

  const saveGoals = (updatedGoals: Goal[]) => {
    setGoals(updatedGoals);
    localStorage.setItem("ocd-goals", JSON.stringify(updatedGoals));
  };

  const addGoal = () => {
    if (!newGoal.trim()) return;

    const goal: Goal = {
      id: Date.now(),
      text: newGoal,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    saveGoals([goal, ...goals]);
    setNewGoal("");
    setShowInput(false);
    toast({
      title: "Goal added! 🎯",
      description: "Small steps lead to big changes.",
    });
  };

  const toggleGoal = (id: number) => {
    const updated = goals.map((g) =>
      g.id === id ? { ...g, completed: !g.completed } : g
    );
    saveGoals(updated);
    
    const goal = updated.find((g) => g.id === id);
    if (goal?.completed) {
      toast({
        title: "Well done! ✨",
        description: "You completed a goal. Be proud of yourself!",
      });
    }
  };

  const deleteGoal = (id: number) => {
    saveGoals(goals.filter((g) => g.id !== id));
  };

  const completedCount = goals.filter((g) => g.completed).length;

  const suggestions = [
    "Delay urge by 10 minutes",
    "Do 5-minute breathing exercise",
    "Call or text trusted person",
    "Go for a 10-minute walk",
    "Drink a glass of water mindfully",
    "Write down 3 things I'm grateful for",
    "Listen to calming music",
    "Practice grounding exercise",
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
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Micro-Goals</h1>
            <p className="text-sm text-muted-foreground">Track small, achievable steps</p>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Goals completed</p>
                <p className="text-3xl font-bold">{completedCount} / {goals.length}</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-calm flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {!showInput ? (
          <Button onClick={() => setShowInput(true)} className="w-full" size="lg">
            <Plus className="w-4 h-4 mr-2" />
            Add New Goal
          </Button>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Create a Micro-Goal</CardTitle>
              <CardDescription>
                What small step can you take in the next hour or day?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goal">Your goal</Label>
                <Input
                  id="goal"
                  placeholder="e.g., Delay urge by 10 minutes"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addGoal()}
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => setNewGoal(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={addGoal} className="flex-1">
                  Add Goal
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowInput(false);
                    setNewGoal("");
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-3">
          {goals.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center py-12">
                <Target className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  No goals yet. Add your first micro-goal to get started!
                </p>
              </CardContent>
            </Card>
          ) : (
            goals.map((goal) => (
              <Card key={goal.id} className={goal.completed ? "bg-success/5" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleGoal(goal.id)}
                      className="mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    >
                      {goal.completed ? (
                        <CheckCircle className="w-6 h-6 text-success" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </button>
                    <div className="flex-1">
                      <p
                        className={`${
                          goal.completed
                            ? "line-through text-muted-foreground"
                            : "font-medium"
                        }`}
                      >
                        {goal.text}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(goal.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteGoal(goal.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Tips for micro-goals:</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Keep goals small and specific (10-30 minutes)</li>
                <li>• Focus on delaying or distracting, not eliminating urges</li>
                <li>• Celebrate each completed goal, no matter how small</li>
                <li>• It's okay to not complete every goal — progress isn't linear</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Goals;
