import { loremIpsum } from 'lorem-ipsum';
import faker from 'faker';

export function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export function generateMessage(prevMessageCreatedAt) {
  let owner;
  if (randomInt(2) === 1) {
    owner = false;
  } else {
    owner = true;
  }

  let randomDate
  if(prevMessageCreatedAt) {
    randomDate = Date.now() - randomInt(Date.now() - prevMessageCreatedAt)
  } else {
    randomDate = 1400000000000 + randomInt(Date.now() - 1400000000000) //From which date start generate messages
  }

  return {text: loremIpsum(1), owner, createdAt: randomDate}
}

export function generateChat(id, avatarLink) {
  let messages = [];
  for (let i = 0; i < 20; i++) {
    const message = generateMessage( messages[messages.length - 1] ? messages[messages.length - 1].createdAt : undefined)
    messages = [...messages, message]
  }
  return {id, user: {id, fullName: faker.name.findName(), avatar: avatarLink}, messages}
}