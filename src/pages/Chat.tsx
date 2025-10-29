import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
  options?: { text: string; nextStep: string }[];
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hey — I'm here if you want to talk. I'm a non-judgmental companion who can help calm urges and offer quick tools. If you're in danger, please call your local emergency number.\n\nWhat would you like help with today?",
      options: [
        { text: "I have an urge now", nextStep: "urge" },
        { text: "I need to calm down", nextStep: "calm" },
        { text: "Quick exercises", nextStep: "exercises" },
        { text: "Resources", nextStep: "resources" },
      ],
    },
  ]);

  const handleOptionClick = (option: { text: string; nextStep: string }) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: option.text,
    };

    setMessages([...messages, userMessage]);

    // Add bot response based on option
    setTimeout(() => {
      let botResponse: Message;

      switch (option.nextStep) {
        case "urge":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "Thanks for telling me. Can you tell me what kind of urge this is?",
            options: [
              { text: "Checking / Repeating", nextStep: "urge-checking" },
              { text: "Eating / Substance", nextStep: "urge-substance" },
              { text: "Compulsive scrolling", nextStep: "urge-scrolling" },
              { text: "Other", nextStep: "urge-other" },
            ],
          };
          break;

        case "urge-checking":
        case "urge-substance":
        case "urge-scrolling":
        case "urge-other":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "That's tough. Let's try something together for 5 minutes. Are you in a private/safe place?",
            options: [
              { text: "Yes, I'm safe", nextStep: "breathing-exercise" },
              { text: "Not right now", nextStep: "delay-option" },
            ],
          };
          break;

        case "breathing-exercise":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "Okay — let's breathe together.\n\n🌬️ Breathe IN for 4 seconds\n⏸️ HOLD for 4 seconds\n🌊 Breathe OUT for 6 seconds\n\nDo this 4 times. Take your time.\n\nHow do you feel now?",
            options: [
              { text: "Better", nextStep: "feeling-better" },
              { text: "Same", nextStep: "try-grounding" },
              { text: "Worse", nextStep: "need-help" },
            ],
          };
          break;

        case "feeling-better":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "That's great! Would you like to set a small goal for the next hour to help maintain this feeling? Something like 'delay the urge for 10 minutes' or 'do a distracting activity'?",
            options: [
              { text: "Yes, set a goal", nextStep: "set-goal" },
              { text: "No, I'm okay for now", nextStep: "end-positive" },
            ],
          };
          break;

        case "try-grounding":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "Let's try a grounding exercise. This can help bring you into the present moment.\n\nWould you like to try the 5-4-3-2-1 technique?",
            options: [
              { text: "Yes, let's try it", nextStep: "grounding-redirect" },
              { text: "Show me other options", nextStep: "calm" },
            ],
          };
          break;

        case "grounding-redirect":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "I'll guide you to our grounding exercises section where you can follow along with the 5-4-3-2-1 technique. Click below to continue.",
            options: [{ text: "Go to exercises", nextStep: "exercises-link" }],
          };
          break;

        case "calm":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "Choose what feels right for you:",
            options: [
              { text: "Grounding exercise", nextStep: "exercises-link" },
              { text: "Quick breathing", nextStep: "breathing-exercise" },
              { text: "Talk to trusted person", nextStep: "trusted-contact" },
            ],
          };
          break;

        case "need-help":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "I'm sorry you're feeling worse. This might be a good time to reach out for additional support. Would you like to see crisis helpline numbers or contact your trusted person?",
            options: [
              { text: "Show helplines", nextStep: "crisis-link" },
              { text: "Contact trusted person", nextStep: "trusted-contact" },
            ],
          };
          break;

        case "set-goal":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "Excellent! Head to the Micro-Goals section to set and track your goal. Small steps lead to big changes.",
            options: [{ text: "Go to goals", nextStep: "goals-link" }],
          };
          break;

        case "end-positive":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "That's wonderful. Remember, I'm always here when you need support. Take care of yourself. 💙",
            options: [{ text: "Start over", nextStep: "restart" }],
          };
          break;

        case "delay-option":
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "That's okay. When you're in a safe space, come back and we can try some exercises together. In the meantime, would you like to see some resources about managing urges?",
            options: [
              { text: "Yes, show resources", nextStep: "resources-link" },
              { text: "No, I'll come back later", nextStep: "end-positive" },
            ],
          };
          break;

        case "exercises":
        case "exercises-link":
          window.location.href = "/exercises";
          return;

        case "resources":
        case "resources-link":
          window.location.href = "/resources";
          return;

        case "crisis-link":
          window.location.href = "/crisis";
          return;

        case "goals-link":
          window.location.href = "/goals";
          return;

        case "trusted-contact":
          const contact = localStorage.getItem("trusted-contact");
          if (contact) {
            const { name, phone } = JSON.parse(contact);
            botResponse = {
              id: messages.length + 2,
              sender: "bot",
              text: `Your trusted contact is ${name}. Would you like to call them at ${phone}?`,
              options: [
                { text: "Call now", nextStep: "call-contact" },
                { text: "Maybe later", nextStep: "end-positive" },
              ],
            };
          } else {
            botResponse = {
              id: messages.length + 2,
              sender: "bot",
              text: "You haven't set up a trusted contact yet. You can add one in your settings.",
              options: [{ text: "Okay", nextStep: "end-positive" }],
            };
          }
          break;

        case "call-contact":
          const contactInfo = localStorage.getItem("trusted-contact");
          if (contactInfo) {
            const { phone } = JSON.parse(contactInfo);
            window.location.href = `tel:${phone}`;
          }
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "Opening phone dialer... Take your time. I'll be here when you need me.",
            options: [{ text: "Thank you", nextStep: "end-positive" }],
          };
          break;

        case "restart":
          setMessages([
            {
              id: 1,
              sender: "bot",
              text: "Hey — I'm here if you want to talk. I'm a non-judgmental companion who can help calm urges and offer quick tools. If you're in danger, please call your local emergency number.\n\nWhat would you like help with today?",
              options: [
                { text: "I have an urge now", nextStep: "urge" },
                { text: "I need to calm down", nextStep: "calm" },
                { text: "Quick exercises", nextStep: "exercises" },
                { text: "Resources", nextStep: "resources" },
              ],
            },
          ]);
          return;

        default:
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "I'm here to support you. What would you like to do?",
            options: [{ text: "Start over", nextStep: "restart" }],
          };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-3xl mx-auto px-4 py-6 space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Companion Chat</h1>
            <p className="text-sm text-muted-foreground">Your supportive guide</p>
          </div>
        </div>

        <div className="space-y-4 pb-24">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border"
                } rounded-2xl p-4 shadow-soft`}
              >
                {message.sender === "bot" && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-calm flex items-center justify-center">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-semibold">Companion</span>
                  </div>
                )}
                <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                {message.options && (
                  <div className="grid grid-cols-1 gap-2 mt-4">
                    {message.options.map((option, idx) => (
                      <Button
                        key={idx}
                        variant={message.sender === "user" ? "secondary" : "outline"}
                        onClick={() => handleOptionClick(option)}
                        className="w-full text-left justify-start"
                      >
                        {option.text}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
