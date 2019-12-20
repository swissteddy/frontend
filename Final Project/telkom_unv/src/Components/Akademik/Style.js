import Images from '../image/banner1.jpg'
export const styleAkademik = theme => ({
//akademik
wraper: {
  minHeight:"84vh",
},
bannerRoot:{
  marginTop:'3%',
  width: 'auto',
  height: 400,
},
  cardMLeft: {
    marginTop:'5%',
    marginLeft:'5%',
    width: 250,
    height:250,
  },
  cardMRight: {
    marginTop:'5%',
    marginLeft:'10%',
    width: 250,
    height:250,
  },
  containerslide: {
    width: 'auto',
    minHeight:500,
    marginTop: '3%',
    borderRadius: 10,
    backgroundImage:`url(${Images})`,
    backgroundSize:'cover'
  },
  slickSlideImg : {
    height: '100%',
    width: '100%',
    border: '2.5 solidwhite',
    boxSizing: 'borderbox',
    borderRadius: 10,
  },
  teksKampus :{
    color:"white",
    fontSize:24,
  },
  imgkampus :{
    borderRadius: 10,
  }
//end of akademik
});