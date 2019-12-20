import React, { Component } from 'react';
import {
    Container,
    Grid,
    withStyles,
    Card,
    CardContent,
} from '@material-ui/core';

// import Switch from '@material-ui/core/Switch';

import { Promo } from './Style';

import TextField from '@material-ui/core/TextField';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class AdminUtama extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // upload image
            file: '',
            imagePreviewUrl: '',
        };
    }


    // upload Image
    changeImage = (event) => {
        event.preventDefault()
        console.log(this.uploadInput)

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    handleUploadImage = (event) => {
        event.preventDefault();

        const data = new FormData();

        data.append('file', this.uploadInput.files[0]);
        data.append('namaPromo', this.namaPromo.value);
        data.append('deskripsiPromo', this.deskripsiPromo.value);
        data.append('statusPromo', this.statusPromo.value);
        // data.append('filename', this.fileName.value);
        console.log(this.namaPromo.value)
        console.log(this.fileName.value)
        console.log(this.state.imagePreviewUrl)
        fetch('http://kampustelkom.herokuapp.com/api/slider', {
            method: 'POST',
            body: {
                namaPromo: this.fileName.value,
                gambarPromo: this.state.imagePreviewUrl,
                deskripsiPromo: this.deskripsiPromo.value,
                statusPromo: this.statusPromo.value,

                // statusSlider: true,
                // namaSlider: this.fileName.value,
                // gambarSlider: this.state.imagePreviewUrl,
            }
        }).then((response) => {
            console.log(response.json)
        });
    }


    


    render() {
        const { classes } = this.props;

        // const [state, setState] = React.useState({
        //     checkedA: true,
        //     checkedB: true,
        //   });
        
        //   const handleChange = name => event => {
        //     setState({ ...state, [name]: event.target.checked });
        //   };

        // upload image
        // let {imagePreviewUrl} = this.state;
        return (
            <div className={classes.wraper}>

                {/* upload image */}
                <CardContent style={{ marginTop: 20 }}>
                    <Container>
                        {/* end gamber slider preview */}
                        < Grid container justify="left" spacing={4} >
                            <Grid item md={4}>
                                <Card>
                                    <CardContent>
                                        <form onSubmit={this.handleUploadImage}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="title"
                                                label="Tambah Judul"
                                                name="namaPromo"
                                                autoComplete="namaPromo"
                                                autoFocus
                                                // onChange={this.changeHandler}
                                                // value={this.state.namaPromo}
                                                ref={(ref) => { this.namaPromo = ref; }}
                                            />
                                            {/* <div>
                                                <input ref={(ref) => { this.namaPromo = ref; }} type="text" placeholder=" Masukan Judul" />
                                            </div> */}
                                            <div>
                                                <input ref={(ref) => { this.uploadInput = ref; }} onChange={this.changeImage}
                                                    type='file' />
                                            </div>

                                            <CKEditor
                                                editor={ClassicEditor}
                                                data="Masukkan Deskripsi"
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    this.setState({ deskripsi: data })
                                                }}
                                            />



                                            {/* <div>
                                                <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="masukan nama file" />
                                            </div> */}
                                            <br />
                                            <div>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="title"
                                                label="Tambah Judul"
                                                name="namaPromo"
                                                autoComplete="namaPromo"
                                                autoFocus
                                                // onChange={this.changeHandler}
                                                // value={this.state.namaPromo}
                                                ref={(ref) => { this.namaPromo = ref; }}
                                            />
                                            </div>
                                            <div>
                                                <button type="button" onClick={this.handleUploadImage}>upload</button>
                                            </div>
                                            {/* <img src={imagePreviewUrl} alt="img" /> */}
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={4}>
                                <Card>
                                    <CardContent>
                                        <img alt="image previwe" src={this.state.imagePreviewUrl} />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </CardContent>
                {/* end of upload image */}
            </div>
        );
    }
}

export default withStyles(Promo)(AdminUtama);