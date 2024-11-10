// export const virtual = async(data) => {
//  return `# Virtual Event Submission

// ## Requirements
// - Event Name: ${data.nameVI}
// - Link to the Event Website: ${data.linkwebVI}
// - Provide verification that you are an event organizer: ${data.organizerVI}

// ## Event Demographics
// - [${data.EDV}] This event commits to Event Diversity and Inclusion.
//   - \`Q\` Detail the process for measuring Event Demographics.
//   - \`A\` ${data.EDV1}
//   - \`Q\` Provide an example of an opt-out option on the Event registration page if available.
//   - \`A\` ${data.EDV2}
//   - \`Q\` Provide an example of a demographics text input box on the Event registration page if available.
//   - \`A\` ${data.EDV3}

// ## Inclusive Experience at Event
// - [${data.IEEV}] This event commits to the Code of Conduct at Event.
//   - \`Q\` Provide an example of the Event Feedback page if available.
//   - \`A\` ${data.IEEV1}
//   - \`Q\` Is the event team using feedback from previous event's attendees, speakers, and volunteers to improve DEI at this event?
//   - \`A\` ${data.IEEV2}
//   - \`Q\` Does the event team plan to use feedback from this event's attendees, speakers, and volunteers to improve DEI at future events?
//   - \`A\` ${data.IEEV3}
//   - \`Q\` How can attendees learn more about accessibility at the event?
//   - \`A\` ${data.IEEV4}
//   - \`Q\` Does the event platform allow attendees to suggest future accomodations for the event?
//   - \`A\` ${data.IEEV5}
//   - \`Q\` Will the event platform be accessible to attendees and speakers after the event?
//   - \`A\` ${data.IEEV6}

// ## Time Inclusion for Virtual Events
// - [${data.TIVEV}] This event commits to Time Inclusion for Virtual Events.
//   - \`Q\` Are speakers able to pre-record their presentations, as opposed to presenting them live?
//   - \`A\` ${data.TIVEV1}
//   - \`Q\` Can attendees change video quality on the Event platform while viewing a presentation?
//   - \`A\` ${data.TIVEV2}

// ## Code of Conduct at Event
// - [${data.COCV}] This event commits to the Code of Conduct at Event.
//   - \`Q\` Is the code of conduct posted at Event venue?
//   - \`A\` ${data.COCV1}
//   - \`Q\` Provide a link for the Event Code of Conduct.
//   - \`A\` ${data.COCV2}

//  ## Diversity Access Tickets
// - [${data.DATV}] This event commits to the Diversity Access Tickets.
//   - \`Q\` How many different types of diversity access tickets are available for the event?
//   - \`A\` ${data.DATV1}
//   - \`Q\` What are the criteria for qualifying for a diversity access ticket?
//   - \`A\` ${data.DATV2}
//   - \`Q\` Provide a link to the page containing information about Diversity Access Tickets.
//   - \`A\` ${data.DATV3}

// ## Event Accessibility
// - [${data.EAV}] This event commits to Event Accessibility.
//   - \`Q\` Closed captioning is provided for this event.
//   - \`A\` ${data.EAV1}
//   - \`Q\` Other accommodations are provided, or will be provided upon request.
//   - \`A\` ${data.EAV2}
//   - \`Q\` Provide a link to the page containing information about Event Accessibility.
//   - \`A\` ${data.EAV3}
//   `;
// };

export const virtual = async (data) => {
  const markdown = [
    "<h1>Virtual Event Submission</h1>",
    "",
    "<h2>Requirements</h2>",
    "<ul>",
    `<li>Event Name: ${data.nameVI}</li>`,
    `<li>Link to the Event Website: ${data.linkwebVI}</li>`,
    `<li>Provide verification that you are an event organizer: ${data.organizerVI}</li>`,
    "</ul>",
    "",
    "<h2>Event Demographics</h2>",
    "<ul>",
    `<li>[${
      data.EDV ? "x" : " "
    }] This event commits to Event Diversity and Inclusion.</li>`,
    "<li><code>Q</code> Detail the process for measuring Event Demographics.</li>",
    `<li><code>A</code> ${data.EDV1}</li>`,
    "<li><code>Q</code> Provide an example of an opt-out option on the Event registration page if available.</li>",
    `<li><code>A</code> ${data.EDV2}</li>`,
    "<li><code>Q</code> Provide an example of a demographics text input box on the Event registration page if available.</li>",
    `<li><code>A</code> ${data.EDV3}</li>`,
    "</ul>",
    "",
    "<h2>Inclusive Experience at Event</h2>",
    "<ul>",
    `<li>[${
      data.IEEV ? "x" : " "
    }] This event commits to the Code of Conduct at Event.</li>`,
    "<li><code>Q</code> Provide an example of the Event Feedback page if available.</li>",
    `<li><code>A</code> ${data.IEEV1}</li>`,
    "<li><code>Q</code> Is the event team using feedback from previous event's attendees, speakers, and volunteers to improve DEI at this event?</li>",
    `<li><code>A</code> ${data.IEEV2}</li>`,
    "<li><code>Q</code> Does the event team plan to use feedback from this event's attendees, speakers, and volunteers to improve DEI at future events?</li>",
    `<li><code>A</code> ${data.IEEV3}</li>`,
    "<li><code>Q</code> How can attendees learn more about accessibility at the event?</li>",
    `<li><code>A</code> ${data.IEEV4}</li>`,
    "<li><code>Q</code> Does the event platform allow attendees to suggest future accomodations for the event?</li>",
    `<li><code>A</code> ${data.IEEV5}</li>`,
    "<li><code>Q</code> Will the event platform be accessible to attendees and speakers after the event?</li>",
    `<li><code>A</code> ${data.IEEV6}</li>`,
    "</ul>",
    "",
    "<h2>Time Inclusion for Virtual Events</h2>",
    "<ul>",
    `<li>[${
      data.TIVEV ? "x" : " "
    }] This event commits to Time Inclusion for Virtual Events.</li>`,
    "<li><code>Q</code> Are speakers able to pre-record their presentations, as opposed to presenting them live?</li>",
    `<li><code>A</code> ${data.TIVEV1}</li>`,
    "<li><code>Q</code> Can attendees change video quality on the Event platform while viewing a presentation?</li>",
    `<li><code>A</code> ${data.TIVEV2}</li>`,
    "</ul>",
    "",
    "<h2>Code of Conduct at Event</h2>",
    "<ul>",
    `<li>[${
      data.COCV ? "x" : " "
    }] This event commits to the Code of Conduct at Event.</li>`,
    "<li><code>Q</code> Is the code of conduct posted at Event venue?</li>",
    `<li><code>A</code> ${data.COCV1}</li>`,
    "<li><code>Q</code> Provide a link for the Event Code of Conduct.</li>",
    `<li><code>A</code> ${data.COCV2}</li>`,
    "</ul>",
    "",
    "<h2>Diversity Access Tickets</h2>",
    "<ul>",
    `<li>[${
      data.DATV ? "x" : " "
    }] This event commits to the Diversity Access Tickets.</li>`,
    "<li><code>Q</code> How many different types of diversity access tickets are available for the event?</li>",
    `<li><code>A</code> ${data.DATV1}</li>`,
    "<li><code>Q</code> What are the criteria for qualifying for a diversity access ticket?</li>",
    `<li><code>A</code> ${data.DATV2}</li>`,
    "<li><code>Q</code> Provide a link to the page containing information about Diversity Access Tickets.</li>",
    `<li><code>A</code> ${data.DATV3}</li>`,
    "</ul>",
    "",
    "<h2>Event Accessibility</h2>",
    "<ul>",
    `<li>[${
      data.EAV ? "x" : " "
    }] This event commits to Event Accessibility.</li>`,
    "<li><code>Q</code> Closed captioning is provided for this event.</li>",
    `<li><code>A</code> ${data.EAV1}</li>`,
    "<li><code>Q</code> Other accommodations are provided, or will be provided upon request.</li>",
    `<li><code>A</code> ${data.EAV2}</li>`,
    "<li><code>Q</code> Provide a link to the page containing information about Event Accessibility.</li>",
    `<li><code>A</code> ${data.EAV3}</li>`,
    "</ul>",
  ].join("");

  return markdown;
};
