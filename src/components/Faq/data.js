export const eventFaqs = [
  {
    question: `What requirements are needed before I apply for a CHAOSS DEI Event Badge?`,
    answer: `To submit an application for your event/conference, you will need to have a GitHub account, as well as the information listed in the Event Badging section of the site.`,
  },
  {
    question: `Why do I need a CHAOSS DEI Event Badge?`,
    answer: `Events, projects, and organizations can apply for the DEI badge to help measure and demonstrate their commitment to DEI values and practices and inspire others to follow in their footsteps.

    CHAOSS DEI Event Submission Requirements: The application process will disply the minimum requirements for an event/conference to be able to receive a CHAOSS DEI Event badge.
    Event Submission Guidelines: The application process describes guidelines and steps on how your event can gain a CHAOSS DEI Event Badge.`,
  },
  {
    question: `What happens if my event is awarded a Pending`,
    answer: `Pending events have an opportunity to improve their badge level by altering their processes and procedures and improving the information that is available on the event website. This is a partnership with CHAOSS and event organizers can work with the badge reviewers on ideas for improvement. `,
  },
  {
    question: `If my event happens every year, can I use the badge from past events?`,
    answer: `No. We ask that you submit a new application for every separate event. We will occasionally be changing the metrics used in the application, and in some cases, there will be different questions on the application from year to year.`,
  },
  {
    question: `Where can I ask questions about Event Badging?`,
    answer: (
      <>
        If you have quesitons about Event Badging, please either
        <a
          className="faq_data_link"
          href="https://github.com/badging/badging"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          open an issue in our badging repo
        </a>{' '}
        or reach us at the{' '}
        <a
          className="faq_data_link"
          href="https://join.slack.com/t/chaoss-workspace/shared_invite/zt-28p56bayt-67TRjdA4yJWQmUd4hCzULg"
          target="_blank"
          rel="noreferrer"
        >
          community on Slack
        </a>
      </>
    ),
  },
];

export const projectFaqs = [
  {
    question: `What requirements are needed before I apply for a CHAOSS DEI Project Badge?`,
    answer: (
      <>
        To apply for a badge, you will need a DEI.md file that is publicly
        available.You can learn more about this file in the Project Badging
        section of this site.
        <ul>
          <li>
            {' '}
            Ensure your project has a public GitHub or GitLab repository where
            your DEI.md file is located or
          </li>
          <li>
            {' '}
            If you have a priviate GitHub or GitLab repository, enusre that your
            DEI.md file is available on a website or other public location.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: `How do I get a badge?`,
    answer: `To obtain a badge, simply click the 'Apply for a Badge button at the top of the site, then follow the directions from there.'`,
  },
  {
    question: `How frequently can I apply for a badge?`,
    answer: `You can apply for the project badge for any open-source project or organization annually. `,
  },

  {
    question: `Where can I ask questions about Project Badging?`,
    answer: (
      <>
        If you have quesitons about Project Badging, please either
        <a
          href="https://github.com/badging/badging"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          open an issue in our badging repo
        </a>{' '}
        or reach us at the{' '}
        <a
          href="https://join.slack.com/t/chaoss-workspace/shared_invite/zt-28p56bayt-67TRjdA4yJWQmUd4hCzULg"
          target="_blank"
          rel="noreferrer"
        >
          community on Slack
        </a>
      </>
    ),
  },
  {
    question: `What if I'm not seeing my repository when applying for a badge?`,
    answer: (
      <>
        If you are not seeing your repository during the application process,
        try clearning out your cache or trying a different browser. If that does
        not help &nbsp;
        <a href="https://github.com/badging/badging">
          open an issue in our badging repo
        </a>{' '}
        or reach us on the{' '}
        <a href="https://join.slack.com/t/chaoss-workspace/shared_invite/zt-28p56bayt-67TRjdA4yJWQmUd4hCzULg">
          community on Slack{' '}
        </a>
      </>
    ),
  },
];
