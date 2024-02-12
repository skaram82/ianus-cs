import { useState } from "react";

function AccordionItem({title, children}) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <h2 onClick={() => setActive(!active)}>
        <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
        <h4 class="text-primary pt-4 text-left">{title}</h4>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div className={!active ? "hidden" : ""}>
        <div className="py-5 border-b border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;