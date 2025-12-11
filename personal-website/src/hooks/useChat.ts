import { useState, useCallback } from 'react';
import { personalInfo, works, experiences, values, scholars } from '../data';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [
      {
        id: 'welcome',
        text: `你好！我是${personalInfo.name}的AI助手。我们可以聊聊关于戏剧、电影创作，或者我的作品与经历。`,
        sender: 'ai',
        timestamp: new Date(),
      }
    ],
    isLoading: false,
    error: null,
  });

  const validateTopic = (text: string): boolean => {
    // 基础关键词验证
    const keywords = [
      personalInfo.name,
      '戏剧', '影视', '电影', '导演', '编剧', '作品', '经历', '联系', '理念', '艺术',
      'drama', 'film', 'movie', 'theatre', 'theater', 'art', 'director', 'writer',
      ...works.map(w => w.title),
      ...experiences.map(e => e.title),
      ...scholars.map(s => s.name),
    ];
    
    // 添加一些通用词汇，避免误判，但要保持在专业范围内
    const generalKeywords = ['你好', 'hello', 'hi', '是谁', '介绍', 'who', 'what'];
    
    const allKeywords = [...keywords, ...generalKeywords];
    
    const lowerText = text.toLowerCase();
    return allKeywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      isLoading: true,
      error: null,
    }));

    // 前端话题验证
    if (!validateTopic(text)) {
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              id: (Date.now() + 1).toString(),
              text: "抱歉，作为林悦然的AI助手，我专注于回答关于她的作品、经历及戏剧影视专业相关的问题。我们可以聊聊她的《回声之间》或《镜面剧场》等作品。",
              sender: 'ai',
              timestamp: new Date(),
            }
          ],
          isLoading: false,
        }));
      }, 600);
      return;
    }

    try {
      // 模拟API调用 - 实际项目中这里会调用Cloudflare Function
      // const response = await fetch('/api/chat', { ... });
      
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 简单的模拟回复逻辑
      let mockResponse = "";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('作品') || lowerText.includes('work')) {
        mockResponse = "林悦然的主要作品包括实验短片《回声之间》（2023）和沉浸式戏剧《镜面剧场》（2022）。她最近还在进行《城市折叠》跨媒介艺术项目。你想了解哪一个的具体信息？";
      } else if (lowerText.includes('经历') || lowerText.includes('experience')) {
        mockResponse = "林悦然拥有中央戏剧学院戏剧与影视学硕士学位，并曾在《剧场前沿》杂志担任特约撰稿人。她目前正在筹备独立电影项目《午夜回响》。";
      } else if (lowerText.includes('理念') || lowerText.includes('philosophy')) {
        mockResponse = `"${values.creativePhilosophy}" 这是她的核心创作理念。`;
      } else if (lowerText.includes('联系') || lowerText.includes('contact')) {
        mockResponse = `你可以通过邮件联系她：${personalInfo.email}。`;
      } else {
        mockResponse = `这是一个关于"${text}"的模拟回复。在实际部署后，我将通过DeepSeek API为您提供更智能、更具体的解答。`;
      }

      setState(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            id: (Date.now() + 1).toString(),
            text: mockResponse,
            sender: 'ai',
            timestamp: new Date(),
          }
        ],
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: '抱歉，发送消息时出现了错误，请稍后重试。',
        isLoading: false,
      }));
    }
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sendMessage,
  };
};
