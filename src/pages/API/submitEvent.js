import { inPerson } from '../../templates/InPerson';
import { virtual } from '../../templates/Virtual';
import settings from '../../settings.json';

export const submitEventForm = async (data, type) => {
 let markdown;
 const isInPerson = type === 'In-Person';
 const nameKey = isInPerson ? 'nameIP' : 'nameVI';
 const preferredNameKey = isInPerson ? 'preferredNameIP' : 'preferredNameVI';
 
 // Use preferred name if provided, otherwise use the event name
 const displayName = data[preferredNameKey]?.trim() || data[nameKey];
 
 switch (type) {
  case 'In-Person':
   markdown = await inPerson(data);
   break;
  case 'Virtual':
   markdown = await virtual(data);
   break;
  default:
   break;
 }

 const title = `[${type} Event] ${displayName}`;

 const response = await fetch(`${settings.API_BASE_URL}/auth/github`, {
  method: 'POST',
  body: JSON.stringify({
   title: title,
   body: markdown,
   type: 'event-badging',
   preferredName: displayName, // Include preferred name in the request
  }),
  headers: {
   'Content-type': 'application/json; charset=UTF-8',
  },
 });

 return await response.json();
};
