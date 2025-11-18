"use client";

import { Button } from "@/components/ui/button";
import { IconGitBranch } from "@tabler/icons-react";
import { AccordionComponent } from "./components/accordion_component";
import { AlertDialogComponent } from "./components/alert-dialog_comonent";
import { AlertDialogFormComponent } from "./components/AlertDialogFormComponent";


export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center gap-3 justify-center min-h-screen py-2 bg-black/80">
     <div className="w-full max-w-2xl py-6 px-6 mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg space-y-6 flex flex-wrap justify-center gap-6 drop-shadow-lg">
    <Button variant="ghost">Hello World</Button>
    <Button variant="destructive">Hello World</Button>
    <Button variant="outline">Hello World</Button>
    <Button variant="default">Hello World</Button>
    <Button variant="secondary">
        <IconGitBranch />
        Hello World
    </Button>
    <Button variant="link">Hello World</Button>
    </div>
    <AccordionComponent />
   
   <AlertDialogComponent />

   <div className="text-center text-sm text-gray-400 mt-6">
      Created with ❤️ by Shadcn UI
      <AlertDialogFormComponent />
      </div>
    </div>
    </>
  );
}
