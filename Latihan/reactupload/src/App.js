import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file:'',
      imagePreviewUrl:'',
    };
  }

  changeImage = (event) => {
    event.preventDefault()
    console.log(this.uploadInput)

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState ({
        file : file,
        imagePreviewUrl : reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  handleUploadImage = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:8000/upload', {
      method:'POST',
      body: data,
    }).then((response) => {
      console.log(response.json)
    });
  }

  render() {
    let {imagePreviewUrl} = this.state;

    return (
      <center>
        <form onSubmit= {this.handleUploadImage}>
          <div>
            <input ref={(ref) => {this.uploadInput = ref;}} onChange= {this.changeImage}
            type='file'/>
          </div>
          <div>
            <input ref={(ref) => {this.fileName = ref;}} type="text" placeholder="masukan nama file" />
          </div>
          <br />
          <div>
            <button type="button" onClick={this.handleUploadImage}>upload</button>
          </div>
          <img src ={imagePreviewUrl} alt="img" />
        </form>
      </center>
    );
  }
}
export default App;