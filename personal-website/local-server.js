import http from 'http';
import https from 'https';

const API_KEY = 'sk-099932e7ca994c63b7af01f25be77df5'; // In production, use process.env
const PORT = 3000;

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const { message } = JSON.parse(body);
        
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

        const apiReq = https.request('https://api.deepseek.com/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          }
        }, (apiRes) => {
          let data = '';
          apiRes.on('data', chunk => data += chunk);
          apiRes.on('end', () => {
            if (apiRes.statusCode !== 200) {
              console.error('API Error:', data);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'API Error' }));
              return;
            }
            
            try {
              const json = JSON.parse(data);
              const reply = json.choices[0].message.content;
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ reply }));
            } catch (e) {
              res.writeHead(500);
              res.end(JSON.stringify({ error: 'Parse Error' }));
            }
          });
        });

        apiReq.on('error', (e) => {
          console.error(e);
          res.writeHead(500);
          res.end(JSON.stringify({ error: 'Network Error' }));
        });

        apiReq.write(JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message }
          ],
          temperature: 0.7,
        }));
        apiReq.end();

      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Invalid Request' }));
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Local backend running at http://localhost:${PORT}`);
});
