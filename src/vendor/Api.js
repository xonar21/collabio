class Api {
    constructor(baseUrl,headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    _handleResponse(res) {
        if (res.ok) return res.json();
        return Promise.reject(res.status);
    }
    
    getCardsFromServer(jwt) {
      return fetch(`${this._baseUrl.baseUrl}movies`, {  
        method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(res => this._handleResponse(res))
    }
    
    postCard({text}) {
      return fetch(`${this._baseUrl.baseUrl}movies`, {
        method: 'POST',
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: text,
          })
      })
      .then(res => res.json());  
    }


    register ({name, email, password, type})  {
      return fetch(`${this._baseUrl.baseUrl}signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password, type })
      })
      .then(res => res.json()); 
    }

    login ({email, password})  {
      
      return fetch(`${this._baseUrl.baseUrl}signin`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  email, password })
      })
      .then(res => res.json()); 
    }


    
}
const api = new Api({
  baseUrl: 'http://localhost:4000/',
});
export default api;