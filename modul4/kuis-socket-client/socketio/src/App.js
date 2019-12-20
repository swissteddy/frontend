import React, { Component } from "react";
import socketIOClient from "socket.io-client";
// import alert from 'sweetalert2-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001", //alamat socket server yang ada di server.js
      color: 'white',

      //untuk data murid
      nama: '',
      email: '',
      phone: '',
      listmurid: [],

      //untuk kalkulator
      angka1: '',
      angka2: '',
      operator: '',
      hasil: '',
      hasilhitung: [],

      //untuk message
      sender: '',
      message: '',
      messages: [],

      //send to
      to: '',
      from: '',
      chat: '',
      allchat: []
    };
    this.socket = socketIOClient(this.state.endpoint);

    //untuk message
    this.socket.on('RECEIVE_MESSAGE', function (data) {
      addMessage(data);
    });
    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };
  }

  send = () => {
    alert(this.state.color);
    // const socket = socketIOClient(this.state.endpoint);
    this.socket.emit('change color', this.state.color) //mengirim data ke server
  }
  setColor = (color) => {
    this.setState({ color })
  }

  sendData = (event) => {
    event.preventDefault()
    this.socket.emit('data murid', {
      nama: this.state.nama,
      email: this.state.email,
      phone: this.state.phone, //mengirim data murid ke server
    })
  }
  setData = (data) => {
    this.setState({ [data.target.name]: data.target.value })
  }

  // setHasil = (hasil) => {
  //   this.setState({ [hasil.target.name]: hasil.target.value })
  // }

  //untuk message
  sendMessage = (event) => {
    event.preventDefault()
    this.socket.emit('SEND_MESSAGE', {
      sender: this.state.sender,
      message: this.state.message
    })
    this.setState({ message: '' });
  }
  //untuk sendbroadcast
  sendBroadcast = (event) => {
    event.preventDefault()
    const { chat, from, to } = this.state;
    this.socket.emit("chat message", { from, chat, to });
    this.setState({
      chat: ""
    });
  }

  //untuk sendBroadcast
  componentDidMount() {
    this.socket.on("chat message", ({ from, chat, to }) => {
      //this.state.allchat untuk mengambil data dari allchat, fromchatto untuk penambahan data dan kedalam allchat
      this.setState({
        allchat: [...this.state.allchat, { from, chat, to }]
      });
    });
  }


  //mengirim data kalkulator ke server
  sendKalkulator = () => {
    let operator = this.state.operator
    let angka1 = parseInt(this.state.angka1)
    let angka2 = parseInt(this.state.angka2)
    let hasil = 0

    if (operator === "+") {
      hasil = angka1 + angka2
    }
    else if (operator === "-") {
      hasil = angka1 - angka2
    }
    else if (operator === "*") {
      hasil = angka1 * angka2
    }
    else if (operator === "/") {
      hasil = angka1 / angka2

    }

    this.setState({
      hasil,
    },
      () => {
        this.socket.emit('data kalkulator', {
          angka1: this.state.angka1,
          angka2: this.state.angka2,
          operator: this.state.operator,
          hasil: this.state.hasil
        })
      });

  }

  render() {
    // const socket = socketIOClient(this.state.endpoint);
    //untuk message
    const { sender, message, from, chat, allchat } = this.state

    this.socket.on('change color', (col) => {
      document.body.style.backgroundColor = col //mengubah warna body
    })
    this.socket.on('data murid', (data) => {
      socketIOClient(this.state.endpoint)
      this.setState({ listmurid: data })
    })

    this.socket.on('data kalkulator', (datakalkulator) => {
      this.setState({
        hasilhitung: datakalkulator
      })
    })

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Ganti Background</h1>
        <button onClick={() => this.send()} > Change Color</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>

        <div>
          <h1>Isi BIODATA</h1>
          <br />
          <input placeholder="Masukan nama" name="nama" onChange={this.setData} />
          <br />
          <input placeholder="Masukan email" name="email" onChange={this.setData} />
          <br />
          <input placeholder="Masukan phone" name="phone" onChange={this.setData} />
          <br />
          <button onClick={this.sendData}>Submit</button>

          <div>
            nama : {this.state.listmurid.nama} <br />
            email : {this.state.listmurid.email} <br />
            phone : {this.state.listmurid.phone} <br />

            <div>
              <h1>Kalkulator</h1>
              <br />
              <input placeholder="Angka1" name="angka1" onChange={this.setData} />
              <br />
              <input placeholder="Angka2" name="angka2" onChange={this.setData} />
              <br />
              <select name="operator" onChange={this.setData}>
                <option>=Pilih Operator=</option>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
              </select>
              <br /><br />
              <button onClick={this.sendKalkulator} >Submit</button>

              <div>
                Angka1 : {this.state.hasilhitung.angka1} <br />
                Angka2 : {this.state.hasilhitung.angka2} <br />
                Operator : {this.state.hasilhitung.operator} <br />
                Hasil : {this.state.hasilhitung.hasil} <br />

                {/* untuk message */}

                <h1>Global Chat</h1>
                <div>
                  {this.state.messages.map(messages => (
                    <div style={{ color: (this.state.sender == messages.sender) ? 'green' : 'red' }}>
                      {messages.sender} : {messages.message}</div>
                  ))}
                  {/* {this.state.messages.map(messages => {
                    return (
                      <div>
                        {messages.sender}: {messages.message}
                      </div>
                    )
                  })} */}
                </div>
                <form onSubmit={this.sendMessage}>
                  <h1>Send Chat</h1>
                  <input type="text" name="sender" value={sender} onChange={this.setData} /><br />
                  <input type="text" name="message" value={message} onChange={this.setData} /><br />
                  <button type="submit">Submit</button>
                </form>

                <h1>Send Broadcast</h1>
                <form onSubmit={this.sendBroadcast}>
                  <input type="radio" name="to" value="Admin" onChange={this.setData} /> Admin <br />
                  <input type="radio" name="to" value="Swiss" onChange={this.setData} /> Swiss <br />
                  <input type="radio" name="to" value="Romadhon" onChange={this.setData} />Romadhon<br />
                  <input type="text" name="from" value={from} onChange={this.setData} /><br />
                  <input type="text" name="chat" value={chat} onChange={this.setData} /><br />
                  <button type="submit">Submit</button>
                </form>
                {allchat.map(({ from, chat, to }, i) => (
                  <div key={i}>
                    {(this.state.to == from && this.state.from == to) &&
                      <div>
                        <span style={{ color: "red" }}>{from}:</span>
                        <span style={{ color: "red" }}>{chat}</span>
                      </div>
                    }
                    {(this.state.to == to && this.state.from == from) &&
                      <div>
                        <span style={{ color: "green" }}>{from}:</span>
                        <span style={{ color: "green" }}>{chat}</span>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;


