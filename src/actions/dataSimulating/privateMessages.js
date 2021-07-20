import {PRIVATEMESSAGES} from '../../constants'

const alexGaulet = [{isMe: true, message: 'Salut'}, {isMe: false, message: "Salut, t'es qui?"}, {isMe: false, message: "et je vois qu'on vient du même collège"},{isMe: true, message: "Bah je t'ai vue dans le collège et je t'ai trouvé jolie"}]
const marvinGaulet = [{isMe: true, message: 'Tu fais quoi demain?'}, {isMe: false, message: "Pas grand-chose et toi?"}, {isMe: true, message: "viens on va à la salle!"},{isMe: false, message: "ok je suis chaud!"}]
const enzoRiki = [{isMe: false, message: "Stylé ta moto!"}, {isMe: true, message: "Ou tu l'as acheté?"}, {isMe: true, message: "Sur Paris"},{isMe: false, message: "Ok, Merci"}]

const initialStatePrivateMessages = {
    alexGaulet,
    marvinGaulet,
    enzoRiki
};

export const statePrivateMessages = {
    type: PRIVATEMESSAGES.initialStatePrivateMessages, state: initialStatePrivateMessages
}
