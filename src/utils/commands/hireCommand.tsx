import React from "react";
import AnimatedText from "../../components/AnimatedText";

export const executeHireCommand = (): React.ReactNode => {
  return (
    <div className="mt-2">
      <AnimatedText
        text={`╭─ INITIATING CONTACT PROTOCOL ─╮
Opening mail client...
Recipient: parthatharv2606@gmail.com
Subject: Job Opportunity / Collaboration
Status: Ready for transmission
╰─ MAIL CLIENT LAUNCHED ─╯`}
        className="text-green-400 whitespace-pre-line"
        speed={50}
        onComplete={() => {
          window.location.href =
            "mailto:parthatharv2606@gmail.com?subject=Job%20Opportunity%20/%20Collaboration&body=Hi%20Parth,%0A%0AI%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0ABest%20regards";
        }}
      />
    </div>
  );
};
