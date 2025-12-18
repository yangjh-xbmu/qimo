interface Env {
  DEEPSEEK_API_KEY: string;
}

interface DeepSeekResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body = await request.json() as { message: string };
    
    if (!body.message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `
      你是林悦然的个人网站AI助手。
      林悦然是一位戏剧与影视学专业硕士，电影导演和编剧。
      她的作品包括《回声之间》（实验短片）、《镜面剧场》（沉浸式戏剧）等。
      
      你的职责是：
      1. 热情、专业地回答访客关于林悦然作品、经历、艺术理念的问题。
      2. 拒绝回答与林悦然或戏剧影视专业无关的政治、娱乐八卦或其他敏感话题。
      3. 回答要简洁明了，语气亲切。
      
      如果用户问的问题与上述内容无关，请礼貌地拒绝。
    `;

    // DeepSeek API call
    // Note: You need to set DEEPSEEK_API_KEY in your Cloudflare Pages project settings
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: body.message }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
        // Fallback or error handling
        console.error('DeepSeek API Error:', await response.text());
        throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json() as DeepSeekResponse;
    const aiMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply: aiMessage }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error handling chat request:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
