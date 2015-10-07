var encoder = {
  setMessage: function() {
    var message = document.getElementById("message").value;
    return message;

  },
  getPassword: function() {
    var password = "password"

  },
  setUrl: function() {
    var url = "http://localhost3000:"
  },
  replaceMessageWithUrl: function () {

  },
  encrypt: function() {
    cypher = CryptoJS.AES.encrypt(this.message, this.password)
    console.log("Verified: " +
      CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
    return cypher
  },
  protect: function() {
    this.setMessage()
    this.getPassword()
    this.setUrl()
    this.replaceMessageWithUrl()
  }
}
