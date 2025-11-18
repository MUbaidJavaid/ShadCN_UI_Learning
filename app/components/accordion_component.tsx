"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
export const AccordionComponent = () => {
  return (
    <>
     <div className=" w-full max-w-2xl flex flex-col items-center justify-center bg-gradient-to-b from-slate-900/60 via-gray-900/60 to-black/60 gap-4 rounded-xl drop-shadow-lg py-12 px-10">
         <h1 className="text-3xl font-bold text-center text-white mb-8">
          ✨ Beautiful Accordion UI
        </h1>
    <div className="w-full max-w-2xl py-6 px-6 mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg space-y-6 ">
     
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b border-white/20">
          <AccordionTrigger className="text-white transition-none w-full">
            Accordion Item 1
          </AccordionTrigger>
          <AccordionContent className="text-white w-full overflow-hidden">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ex labore dolorum atque incidunt consequatur temporibus quod aspernatur esse
              voluptates ab deleniti deserunt minima repellendus reprehenderit illo delectus fugit, numquam nihil.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b border-white/20">
          <AccordionTrigger className="text-white transition-none w-full">
            Accordion Item 2
          </AccordionTrigger>
          <AccordionContent className="text-white w-full overflow-hidden">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ex labore dolorum atque incidunt consequatur temporibus quod aspernatur esse
              voluptates ab deleniti deserunt minima repellendus reprehenderit illo delectus fugit, numquam nihil.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b border-white/20">
          <AccordionTrigger className="text-white transition-none w-full">
            Accordion Item 3
          </AccordionTrigger>
          <AccordionContent className="text-white w-full overflow-hidden">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ex labore dolorum atque incidunt consequatur temporibus quod aspernatur esse
              voluptates ab deleniti deserunt minima repellendus reprehenderit illo delectus fugit, numquam nihil.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    
</div>

   
      <div className="w-full max-w-2xl">
       

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {/* Accordion Item 1 */}
          <AccordionItem
            value="item-1"
            className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-md transition-all hover:shadow-lg hover:bg-white/10"
          >
            <AccordionTrigger className="text-white text-lg font-semibold px-6 py-4 flex items-center justify-between">
              <span>🌟 Elegant Design</span>
              {/* <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" /> */}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
              Enjoy a clean and modern accordion with smooth animations, gradient effects, and soft shadows — perfect for dashboards or landing pages.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 2 */}
          <AccordionItem
            value="item-2"
            className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-md transition-all hover:shadow-lg hover:bg-white/10"
          >
            <AccordionTrigger className="text-white text-lg font-semibold px-6 py-4 flex items-center justify-between">
              <span>⚡ Smooth Animation</span>
              {/* <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" /> */}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
              This accordion uses subtle transitions and Tailwind's `transition-all` utility to make open/close actions feel silky smooth.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 3 */}
          <AccordionItem
            value="item-3"
            className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-md transition-all hover:shadow-lg hover:bg-white/10"
          >
            <AccordionTrigger className="text-white text-lg font-semibold px-6 py-4 flex items-center justify-between">
              <span>🎨 Glassmorphic Style</span>
              {/* <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" /> */}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
              Glassmorphism adds depth and modernity. You can customize the blur, gradient, and border intensity for your theme.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

    </>
  );
};
