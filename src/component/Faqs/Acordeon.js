import React from 'react';
import '../../style/sass/_acordeon.scss';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import ChevronDown from '../../assets/images/chevron-down.svg';

function Acordeon () {
  return (
    <>
    <Accordion allowZeroExpanded>
      <AccordionItem key="1">
        <AccordionItemHeading>
          <AccordionItemButton class="border-3 px-3 py-1">
            <h3 class=" color-white ">Item 1</h3>
            <img src={ChevronDown} class="icon-chevron"  alt="icon-chevron" width="19.5" height="18.27"/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p class="accordion__content p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. 
          </p>
          
        </AccordionItemPanel>
      </AccordionItem>
    
      <AccordionItem key="2">
        <AccordionItemHeading>
          <AccordionItemButton class="border-3 px-3 py-1">
            <h3 class=" color-white ">Item 2</h3>
            <img src={ChevronDown} class="icon-chevron"  alt="icon-chevron" width="19.5" height="18.27"/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <p class="accordion__content p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. 
          </p>
        </AccordionItemPanel>
      </AccordionItem>
   
      <AccordionItem  key="3">
        <AccordionItemHeading>
          <AccordionItemButton class="border-3 px-3 py-">
            <h3 class="  color-white ">Item 3</h3>
            <img src={ChevronDown} class="icon-chevron"  alt="icon-chevron" width="19.5" height="18.27"/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <p class="accordion__content p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. 
          </p>
        </AccordionItemPanel>
      </AccordionItem>
   
      <AccordionItem key="4">
        <AccordionItemHeading>
          <AccordionItemButton class="border-3 px-3 py-">
            <h3 class="  color-white ">Item 4</h3>
            <img src={ChevronDown} class="icon-chevron"  alt="icon-chevron" width="19.5" height="18.27"/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <p class="accordion__content p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. 
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
    </>
  );
}

export default Acordeon;