"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className='mb-8' {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 pb-2 items-center relative justify-between font-medium md:text-[18px] lg:text-[20px]  transition-colors hover:text-pink-500 [&[data-state=open]>svg]:rotate-180 data-[state=open]:text-pink-500",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200 text-white' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className='overflow-hidden text-left text-sm md:text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      {...props}
    >
      <div className={cn("pb-4 pt-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
