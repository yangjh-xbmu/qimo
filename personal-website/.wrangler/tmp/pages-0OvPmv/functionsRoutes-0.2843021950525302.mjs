import { onRequestPost as __api_chat_ts_onRequestPost } from "C:\\Users\\yangjh\\Desktop\\repos\\qimo\\personal-website\\functions\\api\\chat.ts"

export const routes = [
    {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_ts_onRequestPost],
    },
  ]