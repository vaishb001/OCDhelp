// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Heart, ArrowLeft, Mail, MapPin, Calendar, Github, Linkedin, Twitter } from "lucide-react";

// const About: React.FC = () => {
//   const skills = [
//     "Coping strategies",
//     "UX for mental health",
//     "React / TypeScript",
//     "Tailwind CSS",
//     "Accessibility first",
//   ];

//   const timeline = [
//     { year: "2021", title: "Project started", desc: "Initial idea and research into OCD-friendly UX." },
//     { year: "2022", title: "MVP", desc: "Core exercises, grounding and breathing flows implemented." },
//     { year: "2023", title: "Iterate", desc: "Improved accessibility, added guidance and crisis links." },
//     { year: "2025", title: "This release", desc: "Cleaner UI, About page and small UX polish." },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-subtle">
//       <div className="container max-w-5xl mx-auto px-4 py-12 space-y-8">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-14 h-14 rounded-full bg-gradient-calm flex items-center justify-center shadow-medium">
//               <Heart className="w-6 h-6 text-primary-foreground" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-semibold">About Calm Companion</h1>
//               <p className="text-sm text-muted-foreground">A small, focused app to support momentary distress and build calmer habits.</p>
//             </div>
//           </div>
//           <Button variant="ghost" size="sm" asChild>
//             <Link to="/">
//               <ArrowLeft className="w-4 h-4 mr-2 inline" />
//               Home
//             </Link>
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-1 space-y-4">
//             <Card className="bg-card/50 backdrop-blur">
//               <CardHeader>
//                 <div className="flex items-center gap-4">
//                   <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-semibold">
//                     CC
//                   </div>
//                   <div>
//                     <CardTitle className="text-lg">Calm Companion</CardTitle>
//                     <CardDescription className="text-sm text-muted-foreground">
//                       Built with care to support brief, evidence-informed coping strategies.
//                     </CardDescription>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <MapPin className="w-4 h-4" />
//                     <span>Remote</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <Calendar className="w-4 h-4" />
//                     <span>Started 2021</span>
//                   </div>
//                   <div className="pt-2">
//                     <div className="flex gap-2">
//                       <a aria-label="GitHub" href="#" className="text-muted-foreground hover:text-foreground">
//                         <Github className="w-5 h-5" />
//                       </a>
//                       <a aria-label="LinkedIn" href="#" className="text-muted-foreground hover:text-foreground">
//                         <Linkedin className="w-5 h-5" />
//                       </a>
//                       <a aria-label="Twitter" href="#" className="text-muted-foreground hover:text-foreground">
//                         <Twitter className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>

//                   <div className="pt-3">
//                     <Button asChild size="sm" className="w-full">
//                       <a href="mailto:hello@example.com">
//                         <Mail className="w-4 h-4 mr-2 inline" />
//                         Contact
//                       </a>
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-card/50 backdrop-blur">
//               <CardHeader>
//                 <CardTitle className="text-sm">Skills & Focus</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.map((s) => (
//                     <span key={s} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="md:col-span-2 space-y-6">
//             <Card className="bg-card/50 backdrop-blur">
//               <CardContent>
//                 <h2 className="text-xl font-semibold">Why this project?</h2>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Calm Companion is focused on short, easy-to-follow micro-interventions for people who need
//                   quick support during moments of distress. The flows are short, non-judgemental, and designed
//                   to be easy to repeat.
//                 </p>

//                 <div className="pt-6">
//                   <h3 className="font-medium">Design principles</h3>
//                   <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
//                     <li>Keep interactions short and predictable</li>
//                     <li>Use calm visual language and clear affordances</li>
//                     <li>Prioritize accessibility and non-triggering copy</li>
//                   </ul>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-card/50 backdrop-blur">
//               <CardHeader>
//                 <CardTitle>Project timeline</CardTitle>
//                 <CardDescription className="text-sm text-muted-foreground">Milestones & small notes</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   {timeline.map((item) => (
//                     <div key={item.year} className="flex items-start gap-4">
//                       <div className="w-12 text-sm font-semibold text-primary">{item.year}</div>
//                       <div>
//                         <div className="font-medium">{item.title}</div>
//                         <div className="text-sm text-muted-foreground">{item.desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-card/50 backdrop-blur">
//               <CardContent>
//                 <h3 className="font-semibold">Want to help improve the app?</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Contributions, feedback, and lived-experience perspectives are welcome. If you'd like to get involved,
//                   reach out via the contact button on the left or open an issue on the repo.
//                 </p>
//                 <div className="pt-4 flex gap-3 flex-wrap">
//                   <Button asChild variant="outline" size="sm">
//                     <a href="#" rel="noopener">Contribute</a>
//                   </Button>
//                   <Button asChild size="sm">
//                     <a href="mailto:hello@example.com">Send feedback</a>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
















/// ...existing code...
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  ArrowLeft,
  Mail,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const About: React.FC = () => {
  const skills = [
    " Python ",
    " Hindi (Native) ",
    " Spanish (Learning) ",
    " Writing ",
    " Psychology "
  ];

  const timeline = [
    {
      year: "Research Project ",
      title: "Mental Health and Political Polarisation among Youth",
      desc: "Conducted an independent study exploring the psychological and social impact of polarisation on youth mental health. Developed analytical and data interpretation skills.",
    },
    {
      year: "Research Project",
      title: "Comforting Myths",
      desc: "How cultural belief systems give false gratification and shape behaviour.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-5xl mx-auto px-4 py-12 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-calm flex items-center justify-center shadow-medium">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Vaishnavi Bhadana - Psychology</h1>
              <p className="text-sm text-muted-foreground">
                Fortis Noida — Psychology Intern | Community Outreach Volunteer on child welfare.
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2 inline" />
              Home
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  {/* <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-semibold">
                    VB
                  </div> */}
                  <div>
                    <CardTitle className="text-lg">About Vaishnavi</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Independent Researcher — Mental Health and Political Polarisation among Youth
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Based in Ghaziabad, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Humanities - Class of 2026</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex gap-2">
                      <a aria-label="GitHub" href="#" className="text-muted-foreground hover:text-foreground">
                        <Github className="w-5 h-5" />
                      </a>
                      <a aria-label="LinkedIn" href="https://linkedin.com/in/vaishnavibhadana" className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="w-5 h-5" />
                        <span></span>
                      </a>
                      {/* <a aria-label="Twitter" href="#" className="text-muted-foreground hover:text-foreground">
                        <Twitter className="w-5 h-5" />
                      </a> */}
                    </div>
                  </div>

                  <div className="pt-3">
                    <Button asChild size="sm" className="w-full">
                      <a href="mailto:vaishnavibhadana2@gmail.com">
                        <Mail className="w-4 h-4 mr-2 inline" />
                        Contact
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-sm">Skills & Focus</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl font-semibold">About & Interests</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm a student who enjoys building web apps that are simple, accessible, and helpful.
                  My work balances frontend engineering with user research — I prototype quickly, test with real users,
                  and iterate based on feedback. Current interests: inclusive design for mental health, performant frontends, and developer tooling.
                </p>

                <div className="pt-6">
                  <h3 className="font-medium">Projects & Experience</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                    <li>
                      Research Project - Mental Health and Political Polarisation among Youth
                      - Conducted an independent study exploring the psychological and social impact of polarisation on youth mental health. Developed analytical and data interpretation skills
                    </li>
                    <li>
                      Companion App — Founder
                      - A self help tool for people with OCD.

                    </li>
                    <li>
                      Fortis Noida — Psychology Intern
                      - Studied psychological disorders, diagnostic processes, and therapeutic treatments under expert supervision.

                    </li>
                    <li>
                      Anagh Foundation — Volunteer
                      - Supported community outreach programs focused on child welfare and education.

                    </li>
                    <li>
                      Paws and effect – Founder
                      -Created and manage an Instagram platform dedicated to helping stray animals find shelter and care.

                    </li>
                    <li>
                      Paws and effect – Founder
                      -Created and manage an Instagram platform dedicated to helping stray animals find shelter and care.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader className="p-4 md:p-6">
                <CardTitle>Education & Timeline</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Selected milestones</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-3">
                  {timeline.map((item) => (
                    <div key={item.year} className="flex items-start gap-4">
                      <div className="w-12 text-sm font-semibold text-primary">{item.year}</div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold">Want to connect or collaborate?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm open to internships, research help, and collaboration on Psychology projects. Reach out via email.
                </p>
                <div className="pt-4 flex gap-3 flex-wrap">

                  <Button asChild size="sm">
                    <a href="mailto:vaishnavibhadana2@gmail.com">Email</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
// ...existing code...