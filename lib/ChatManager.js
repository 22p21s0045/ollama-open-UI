
export class ChatManager {
   

  constructor() {
    this.url = import.meta.env.VITE_API_URL || 'http://localhost:11434/api'
    this.historys = [];
    
  }
  async sentChat(message){
    const messageTemplate = {
      request:{
        role:"user",
        content: ''
      },
      response:{
        role:'assistant',
        content:''
      }
    }
    
    try {
      messageTemplate.request.content = message

      
      this.historys.push(messageTemplate)
      const response = await fetch(`${this.url}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "llama2",
          messages: [
            {
              role: "user",
              content: message
            }
          ],
          stream: false
        })
      });

      const data = await response.json();
      console.log(data)
       this.historys[this.historys.length-1].response.content = data.message.content
       this.historys[this.historys.length-1].response.role = data.message.role
      return data;

  }
  catch(error){
    console.log(error);
  }
}

}