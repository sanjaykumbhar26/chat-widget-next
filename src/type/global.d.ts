declare global {
  interface Window {
    botpressWebChat?: {
      init: (config: {
        botId: string;
        hostUrl: string;
        enableReset?: boolean;
        showBotAvatar?: boolean;
        showCloseButton?: boolean;
        botName?: string;
      }) => void;
    };
  }
}

export {};
