"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const MessengerChat = () => {
  return (
    <FacebookProvider appId="238792998887533" chatSupport>
      <CustomChat pageId="100443455067967"  />
    </FacebookProvider>
  );
};

export default MessengerChat;
