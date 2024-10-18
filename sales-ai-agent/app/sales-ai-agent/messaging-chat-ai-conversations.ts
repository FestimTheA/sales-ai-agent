import type {MessagingChatMessageProps} from "./data";

const messagingChatAIConversations: MessagingChatMessageProps[] = [
  {
    avatar:
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg",
    message:
      "Create a campaign",
    name: "You",
  },
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png",
    message:
      "Campaign Name: Pilot, Campaign Note: Hi Agon, My name is Festim, and I'm the CEO of The Office."
      ,
    name: "The Office",
    isRTL: true,
  },
  {
    avatar:
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg",
    message: "Thank you!",
    name: "You",
  },
];

export default messagingChatAIConversations;
