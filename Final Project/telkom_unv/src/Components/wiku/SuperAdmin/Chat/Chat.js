import React, { Component } from 'react';
import { Paper, Container, Grid, Typography, withStyles, Card, 
   CardContent,  Button } from '@material-ui/core';
import { Chat } from './Style';
import { Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';

//socket io
import socketIOClient from 'socket.io-client';


class KelolaChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint : "http://localhost:4001",

      rooms: [],
      name: "",
      sender: "admin",
      message: "",

      to:'',
      from: '',
      chat: '',
      allChats: [],
    };
    this.socket = socketIOClient(this.state.endpoint);
  }
 

  componentDidMount() {
    this.socket.on("chatting room", ({ from, chat, to }) => {
      this.setState({
        // ngambil semua data dari all chat dan ditambahin from chat to
        allChats: [...this.state.allChats, {from, chat, to}]
      });
    });
  }
  
  sendBroadcast = (event) => {
    event.preventDefault();
    const { from, chat, to} = this.state;
    console.log(this.state)
    this.socket.emit("chatting room", { from, chat, to});
    // ketika telah di proses data dikirim kita set Chatnya jadi kosong
    this.setState({
      chat: ""
    });
  };

  componentDidMount() {
    fetch("http://beli.herokuapp.com/all-chats")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            rooms: result.data
          } ,console.log(this.state.result));
        }, 
        (error) => {
          console.log(error)
        }
      )
    }

  // fetch"beli.herokuapp.com/all-chats"

  render() {
    const { classes } = this.props;
    const { from, chat, allChats } = this.state;
    const { rooms } = this.state;
    return (
      <div className={classes.wraper}>

        <Grid container>
          <Grid item md={3}>
          <form>
            <Grid container>
              <Grid item md={12}>
                <Paper className={classes.reciverList}>
                  <CardContent>
                    <Typography>
                      Pilih Penerima Pesan
                </Typography><br /><hr />
                    <Container>
                      <div>
                        <input type="radio" name="to" value="Admin" onChange={this.update} /> Admin<br />
                      </div>
                      <div>
                        <input type="radio" name="to" value="Wahid" onChange={this.update} /> Wahid<br />
                      </div>
                      <div>
                        <input type="radio" name="to" value="Udin" onChange={this.update} /> Udin<br />
                      </div>
                    </Container>
                  </CardContent>
                </Paper>
              </Grid>

              <Grid item md={12}>
                <Card>
                  <CardContent>
                    <Paper className={classes.messageForm}>
                      
                        <Grid container alignItems="center" justify="center" spacing={3}>
                          <Grid item md={11}>
                            <div className={classes.textCol}>
                              <textarea className={classes.textBox} type="text" placeholder="Ketikkan pesan"></textarea>
                            </div>
                          </Grid>
                          <Grid item md={1}>
                            <Button><SendIcon /></Button>
                          </Grid>
                        </Grid>
                    </Paper>
                  </CardContent>
                </Card>
              </Grid>
            </Grid> 
          </form> 
          </Grid>
         
          <Grid item md={9}>
            <Grid container>
              <Grid item md={12}>
                <Container>
                  <Card>
                    <CardContent>
                      <Paper className={classes.messageBody}>
                        {/* tampilan chating */}
                        {/* <div className={classes.reciverStyle}>
                          <Grid container justify="flex-start">
                            <Grid item md={7}>
                              <Card>
                                <CardContent className={classes.reciver}>
                                  <Typography component="p" variant="p">
                                    ini adalah pesan dari si penerima pesan
                                </Typography>
                                  <Typography align="right">
                                    12.23
                                </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                        </div><br /><br />
                        <div className={classes.senderStyle}>
                          <Grid container justify="flex-end">
                            <Grid item md={7}>
                              <Card>
                                <CardContent className={classes.sender}>
                                  <Typography component="p" variant="p">
                                    ini adalah pesan dari si pengirim pesan untuk kami si reciver
                                </Typography>
                                  <Typography align="right">
                                    12.25
                                </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid> */}

                        {/* {allChats.map(({ from, chat, to }, i) => (
                          <div key={i}>
                            {(this.state.to === from && this.state.from === to) &&
                              <div>
                                <span style={{ color: "red" }}>{from} :</span>
                                <span style={{ color: "red" }}>{chat}</span>
                              </div>
                            }
                            {(this.state.to === to && this.state.from === from) &&
                              <div>
                                <span style={{ color: "green" }}>{from} :</span>
                                <span style={{ color: "green" }}>{chat}</span>
                              </div>
                            }
                          </div>
                        ))} */}

                        {/* </div> */}
                      {/* end of tampilan chating */}

                      {/* chatting */}
                      {/* {rooms.map((chats, i) => (
                        <div key={chats._id}> */}
                            <Typography>
                            {rooms.name}
                            </Typography>
                        {/* </div>
                      ))} */}
                      {/* chatting */}
                      </Paper>
                    </CardContent>
                  </Card>
                </Container>
            </Grid>


          </Grid>
        </Grid>
        </Grid>
      </div >
    );
  }
}

export default withStyles(Chat)(KelolaChat);