
export class ChatManager {
   

  constructor() {
    this.url = import.meta.env.VITE_API_URL || 'http://localhost:11434/api'
    this.historys = [];
  }
  async sentChat(message){
    try {
        this.historys.push({
          role:"user",
          message: message
        })
      const response = await fetch(`${this.url}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [
            {
             role:"user",
             message: message

            }
            
          ]
        })
      });

      const data = await response.json();
      this.historys.push(data);
      return data;

  }
  catch(error){
    console.log(error);
  }
}

}