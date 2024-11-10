import { inPerson } from "../../templates/InPerson";
import { virtual } from "../../templates/Virtual";
import settings from "../../settings.json";

export const submitEventForm = async (data, type) => {
  let markdown;
  switch (type) {
    case "In-Person":
      markdown = await inPerson(data);
      break;
    case "Virtual":
      markdown = await virtual(data);
      break;

    default:
      break;
  }

  const title = `[${type} Event] ${
    type === "In-Person" ? data.nameIP : data.nameVI
  }`;

  const response = await fetch(`${settings.API_BASE_URL}/auth/github`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: markdown,
      type: "event-badging",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return await response.json();
};
